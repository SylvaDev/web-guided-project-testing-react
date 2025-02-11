import { render } from "@testing-library/react"
import React from "react";
import MissionForm from "./MissionForm"

test('MissionForm renders correctly', () => {
    render(<MissionForm />);
})