import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from './Todo';
import '@testing-library/jest-dom';
describe('Todo component', () => {
  it('renders the component with light mode by default', () => {
    render(<Todo />);
    
    // Ensure that the component is rendered with light mode by checking for a specific element or class
    const todoComponent = screen.getByTestId('todo-component');
    expect(todoComponent).toHaveClass('todo');
  });

  it('toggles between light and dark modes', () => {
    render(<Todo />);
    
    // Find the lightbulb toggle switch
    const toggleSwitch = screen.getByTestId('toggle-switch');

    // Click the toggle switch to change the mode
    fireEvent.click(toggleSwitch);

    // Ensure that the component is rendered with dark mode
    const todoComponent = screen.getByTestId('todo-component');
    expect(todoComponent).toHaveClass('darkmode');

    // Click the toggle switch again to revert to light mode
    fireEvent.click(toggleSwitch);

    // Ensure that the component is rendered with light mode again
    expect(todoComponent).toHaveClass('todo');
  });
});
