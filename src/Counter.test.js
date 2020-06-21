import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Counter from './Counter';

describe('<Counter /> button', () => {
  let wrapper;
  let counterButton;
  let debug;

  beforeEach(() => {
    wrapper = render(<Counter />);
    counterButton = wrapper.getByTestId('counter-button');
    debug = wrapper.getByTestId('counter-button');
  });

  afterEach(cleanup);

  it('should start with a value of zero', () => {
    // assert counter-button is a button
    expect(counterButton.tagName).toBe('BUTTON');
    // assert counter-button starts at 0
    expect(counterButton.textContent).toBe('0');
  });

  it('should increment when clicked', () => {
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2');
  });
});
