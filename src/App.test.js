import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import mockFetchMissions from './api/fetchMissions'

test('app renders without errors', () => {
    render(<App />)
});

test('fetches and renders mission data', async () => {
    render(<App />);
    mockFetchMissions.mockResolvedValueOnce({
        data: [
            {mission_name: "Mission 1", mission_id: "mission 1"},
            {mission_name: "Mission 2", mission_id: "mission 2"},
        ]
    });
    const button = screen.getByRole('button');
    fireEvent.click(button);

    // eslint-disable-next-line no-undef
    await wait();

    expect(screen.getAllByTestId("mission")).toHaveLength(2);
})