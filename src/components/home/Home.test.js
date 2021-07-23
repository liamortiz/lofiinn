import React from 'react';
import HomeComponent from './Home';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/dom'

// Simple component testing
test("Home component contains an h1 element", () => {
    const element = screen.getByTestId("home-wrapper")
    expect(HomeComponent).toContainElement(element);
});