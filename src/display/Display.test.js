import React from 'react';
import renderer from 'react-test-renderer';  
import { render, fireEvent } from "@testing-library/react";

import Display from "./Display";

describe('<Display />', () => {
    it('defaults gate status to unlocked', () => {
        const { getByText, queryByText } = render(<Display />);
        expect(queryByText(/unlocked/i)).toBeTruthy();
    });
});

describe('<Display />', () => {
    it('defaults gate status to open', () => {
        const { getByText, queryByText } = render(<Display />);
        expect(queryByText(/open/i)).toBeTruthy();
    });
});