import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NewMovie from './NewMovie';

describe('<NewMovie /> button', () => {
  let wrapper;
  let debug;

  beforeEach(() => {
    wrapper = render(<NewMovie />);
    debug = wrapper.debug;
  });

  afterEach(cleanup);

  it('should contain <MovieForm />', () => {
    const pageTitle = wrapper.getByTestId('page-title').textContent;
    const altPageTitle = wrapper.container.querySelector('h1').textContent;
    expect(pageTitle).toBe('New Movie');
    expect(altPageTitle).toBe('New Movie');
  });

  it('should contain a form', () => {
    const pageTitle = wrapper.getByTestId('page-title').textContent;
    expect(wrapper.queryByTestId('movie-form')).toBeTruthy();
  });
});
