import { render, screen } from "@testing-library/react"
import React from "react";
import MissionForm from "./MissionForm"

test('MissionForm renders correctly', () => {
    render(<MissionForm />);
});

test('renders the message when isFetchingData is true', () => {
    render(<MissionForm isFetchingData={true} />);
    const value = screen.queryByText(/we are fetching data/i);
    expect(value).not.toBeNull();
});

test('render the button when isFetchingData is false', () => {
    render(<MissionForm isFetchingData={false} />);
    const value = screen.queryByRole('button');
    expect(value).not.toBeNull();
});