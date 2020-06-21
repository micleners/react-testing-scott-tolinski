import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';

describe('<MovieForm /> button', () => {
  let wrapper;
  let debug;

  beforeEach(() => {
    wrapper = render(<MovieForm />);
    debug = wrapper.debug;
  });

  afterEach(cleanup);

  it('should start with a value of zero', () => {
    debug;
  });
});
