import React from 'react'; 
import { render, fireEvent, act } from "@testing-library/react";

import Display from "./Display";

describe('<Display />', () => {
    it('defaults gate status to unlocked', () => {
        const { getByText, queryByText } = render(<Display />);
        expect(queryByText(/unlocked/i)).toBeTruthy();
    });

    it('defaults gate status to open', () => {
        const { getByText, queryByText } = render(<Display />);
        expect(queryByText(/open/i)).toBeTruthy();
    });

    it("displays 'Closed' if the closed prop is true", () => {
        const { getByText } = render(<Display closed={true} />);
        expect(getByText(/closed/i)).toBeTruthy();
    }); 

    it("displays 'Open' if the closed prop is not true", () => {
        const { getByText } = render(<Display closed={false} />);
        expect(getByText(/open/i)).toBeTruthy();
    }); 

    it("displays 'Locked' if the locked prop is true", () => {
        const { getByText } = render(<Display locked={true} />);
        expect(getByText(/locked/i)).toBeTruthy();
    }); 

    it('uses the red-led class when locked', () => {
        const { container } = render(<Display locked={true} />);
        let redLed = container.querySelector(".red-led");
        expect(redLed).toBeTruthy();

    });

    it('uses the red-led class when closed', () => {
        const { container } = render(<Display closed={true} />);
        let redLed = container.querySelector(".red-led");
        expect(redLed).toBeTruthy();

    });

    it('uses the green-led class when unlocked', () => {
        const { container } = render(<Display locked={false} />);
        let greenLed = container.querySelector(".green-led");
        expect(greenLed).toBeTruthy();
    });

    it('uses the green-led class when open', () => {
        const { container } = render(<Display closed={false} />);
        let greenLed = container.querySelector(".green-led");
        expect(greenLed).toBeTruthy();
    });

});

