import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import "@testing-library/jest-dom";

const SimpleComponent = () => <div>Hello, World!</div>;

describe('Simple Component', () => {
  test('renders without crashing', () => {
    render(<SimpleComponent />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
