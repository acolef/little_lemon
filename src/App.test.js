import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Booking, { initializeTimes, updateTimes } from './components/booking/Booking';
import BookingForm from './components/booking/BookingForm';

describe('Booking and BookingForm tests', () => {
  test('Renders the Booking heading', () => {
    render(<Booking />);

    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();
  });

  test('Renders labels for form input elements in BookingForm', () => {
    // Must first supply the times so everything renders correctly
    const mockAvailableTimes = { times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] };

    render(<BookingForm availableTimes={mockAvailableTimes.times} dispatch={jest.fn()} />);

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

  test('Validates behavior of initializeTimes() and updateTimes() reducer function', () => {
    // Checks value returned by initializeTimes()
    expect(initializeTimes()).toEqual({ times: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] });

    // Checks that updateTimes() reducer function returns correct value
    expect(updateTimes()).toEqual({ times: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] })
  });
});