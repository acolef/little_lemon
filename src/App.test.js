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

    // Jest normalizes away trailing spaces in text by default
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

  /* --- The following tests were used for an older implementation! ---

  test('Validates behavior of initializeTimes() and updateTimes() reducer function', () => {
    // Default state value for times property
    const timesStateValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

    // Checks value returned by initializeTimes()
    expect(initializeTimes()).toEqual({ times: timesStateValue });

    // Checks that updateTimes() reducer function returns correct value
    expect(updateTimes()).toEqual({ times: ["16:00", ...timesStateValue] });
  });

  test('Tests valid form submission', () => {
    const availableTimes = initializeTimes();

    render(<BookingForm availableTimes={availableTimes} dispatch={jest.fn()} />);

    // Fill out form
    const fnameInput = screen.getByLabelText("First name");
    fireEvent.change(fnameInput, { target: { value: "Tester" } });

    const lnameInput = screen.getByLabelText("Last name");
    fireEvent.change(lnameInput, { target: { value: "Tester" } });

    const dateInput = screen.getByLabelText("Date");
    fireEvent.change(dateInput, { target: { value: "2025-05-24" } }); // HTML understands YYYY-MM-DD

    const timeInput = screen.getByLabelText("Time");
    fireEvent.change(timeInput, { target: { value: availableTimes[1] } }); // "18:00"

    const guestsInput = screen.getByLabelText(/Number of guests \(\d+\)/);
    fireEvent.change(guestsInput, { target: { value: 8 } });

    const occasionInput = screen.getByLabelText("Occasion");
    fireEvent.change(occasionInput, { target: { value: "Other" } });

    // Submit and clear form
    const submitBtn = screen.getByText("Make your reservation");
    fireEvent.click(submitBtn);

    // Check that form was cleared
    const reservationForm = screen.getByTestId("res-form");
    expect(reservationForm).toHaveFormValues({
      fname: "",
      lname: "",
      date: "2024-06-07", // Use today's date
      time: availableTimes[0], // "17:00"
      guests: "4",
      occasion: "Birthday",
    });
  });

  * ---
  */

});