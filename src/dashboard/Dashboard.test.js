import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Dashboard from "./Dashboard";

// snapshot test of whole app (which is Dashboard component)
describe('<Dashboard />', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    });
});

// unit test to assert that Display element is being rendered
describe('<Dashboard />', () => {
    it('shows Display', () => {
        const { queryByText } = render(<Dashboard />);
        const displayEl = queryByText(/unlocked/i);
        expect(displayEl).not.toBeNull();
    });
});

// unit test to assert that Controls element is being rendered
describe('<Dashboard />', () => {
    it('shows Controls', () => {
        const { queryAllByText } = render(<Dashboard />);
        const controlsEl = queryAllByText(/gate/i);
        expect(controlsEl).not.toBeNull(); 
    });
});