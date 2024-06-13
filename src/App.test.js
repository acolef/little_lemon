import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Booking, { initializeTimes, updateTimes } from './components/booking/Booking';
import BookingForm from './components/booking/BookingForm';
import { fetchAPI, submitAPI } from './api';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Booking and BookingForm tests', () => {
  test('Renders the Booking heading', () => {
    // Makes useNavigate() into a mock function
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => jest.fn(),
    }));

    // Must wrap Booking component in Router component since it includes useNavigate()
    render(
      <Router>
        <Booking />
      </Router>
    );

    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders labels for form input elements in BookingForm', () => {
    // Must first supply times so everything renders correctly
    const availableTimes = initializeTimes();

    render(<BookingForm availableTimes={availableTimes} />);

    // No need to include asterisks
    const firstNameLabel = screen.getByText("First name");
    expect(firstNameLabel).toBeInTheDocument();

    const lastNameLabel = screen.getByText("Last name");
    expect(lastNameLabel).toBeInTheDocument();

    const dateLabel = screen.getByText("Date");
    expect(dateLabel).toBeInTheDocument();

    const timeLabel = screen.getByText("Time");
    expect(timeLabel).toBeInTheDocument();

    // Uses regular expression literal syntax /regular expression/
    const guestsLabel = screen.getByText(/Number of guests \(\d+\)/);
    expect(guestsLabel).toBeInTheDocument();

    const occasionLabel = screen.getByText("Occasion");
    expect(occasionLabel).toBeInTheDocument();
  });

  test('initializeTimes function calls fetchAPI function which returns non-empty array', () => {
    const initialization = initializeTimes();

    // Ensure fetchAPI gets called
    expect(fetchAPI).toHaveBeenCalled;
    // Ensure initializeTimes() returns an array
    expect(initialization).toBeInstanceOf(Array);
    // Ensure the returned array is non-empty
    expect(initialization.length > 0);
  });

  test('updateTimes reducer function updates availableTimes based on input date', () => {
    // Initializes todayTimes with mock values (so updatedAvailableTimes will always be different)
    const mockAvailableTimes = ["17:00", "17:30", "17:45"];
    // Simulates updating availableTimes by inputting new date
    const updatedAvailableTimes = updateTimes(undefined, { payload: { date: "2024-08-20" } });

    // Ensure fetchAPI gets called
    expect(fetchAPI).toHaveBeenCalled;
    // Ensure updated times are different from mock times
    expect(updatedAvailableTimes).not.toEqual(mockAvailableTimes);
  });

  test('Ensures correct validation attributes are applied to booking form elements', () => {
    const availableTimes = initializeTimes();
    render(<BookingForm availableTimes={availableTimes} />);

    // Get form input elements
    const fNameInput = screen.getByLabelText("First name*");
    const lNameInput = screen.getByLabelText("Last name*");
    const dateInput = screen.getByLabelText("Date*");
    const timeInput = screen.getByLabelText("Time*");
    const guestInput = screen.getByLabelText(/Number of guests\* \(\d+\)/);
    const occasionInput = screen.getByLabelText("Occasion*");

    expect(fNameInput).toHaveAttribute("required");
    expect(lNameInput).toHaveAttribute("required");
    // min=formatDate(currentDate) only sees YYYY-MM-DD
    expect(dateInput).toHaveAttribute("min", new Date().toISOString().split("T")[0]);
    expect(timeInput).toHaveAttribute("required");
    expect(guestInput).toHaveAttribute("min", "1");
    expect(occasionInput).toHaveAttribute("required");
  });

  test('Ensures submission is prevented if any required fields are missing', () => {
    const availableTimes = initializeTimes();
    render(<BookingForm availableTimes={availableTimes} />);

    // Date, time, and number of guests are always filled out by default
    const fNameInput = screen.getByLabelText("First name*");
    const lNameInput = screen.getByLabelText("Last name*");
    const occasionInput = screen.getByLabelText("Occasion*");
    const submitBtn = screen.getByText("Make your reservation");

    // Test input combination permutations
    const testCases = [
      { fName: "Test", lName: "", occasion: "Select an occasion", expectedDisabled: true },
      { fName: "", lName: "Test", occasion: "Select an occasion", expectedDisabled: true },
      { fName: "", lName: "", occasion: "Birthday", expectedDisabled: true },
      { fName: "Test", lName: "Test", occasion: "Select an occasion", expectedDisabled: true },
      { fName: "Test", lName: "", occasion: "Birthday", expectedDisabled: true },
      { fName: "", lName: "Test", occasion: "Birthday", expectedDisabled: true },
      { fName: "Test", lName: "Test", occasion: "Birthday", expectedDisabled: false },
    ];

    testCases.forEach(({ fName, lName, occasion, expectedDisabled }) => {
      fireEvent.change(fNameInput, { target: { value: fName } });
      fireEvent.change(lNameInput, { target: { value: lName } });
      fireEvent.change(occasionInput, { target: { value: occasion } });

      if (expectedDisabled)
        expect(submitBtn).toHaveAttribute("disabled");
      else
        expect(submitBtn).not.toHaveAttribute("disabled");
    });
  });
});