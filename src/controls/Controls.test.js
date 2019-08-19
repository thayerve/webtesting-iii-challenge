import React from 'react';
import { render, fireEvent, act } from "@testing-library/react";

import Controls from "./Controls";

describe('<Controls />', () => {
    // it('defaults gate status to unlocked', () => {
    //     const { getByText, queryByText } = render(<Controls />);
    //     expect(queryByText(/unlocked/i)).toBeTruthy();
    // });


it('renders two buttons', () =>{
    const { container } = render(<Controls />);
    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toEqual(2);
}); 


// it('changes buttons' text to reflect the state the door will be in if clicked', () => {

// });


// it('disables the closed toggle button if the gate is locked', () => {

// });


// it('disables the locked toggle button if the gate is open', () => {

// });

});