import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders Calculator correctly', () => {
  const { asFragment } = render(<Calculator />);
  expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="calculator-container"
  >
    <h2
      class="clalculator-title"
    >
      Let's do some math!
    </h2>
    <div
      class="calculator-grid"
    >
      <div
        class="output"
      >
        <div
          class="current-operand"
          data-testid="current-operand"
        >
          0
        </div>
      </div>
      <button
        type="button"
      >
        AC
      </button>
      <button
        type="button"
      >
        +/-
      </button>
      <button
        type="button"
      >
        %
      </button>
      <button
        class="orange"
        type="button"
      >
        ÷
      </button>
      <button
        type="button"
      >
        7
      </button>
      <button
        type="button"
      >
        8
      </button>
      <button
        type="button"
      >
        9
      </button>
      <button
        class="orange"
        type="button"
      >
        x
      </button>
      <button
        type="button"
      >
        4
      </button>
      <button
        type="button"
      >
        5
      </button>
      <button
        type="button"
      >
        6
      </button>
      <button
        class="orange"
        type="button"
      >
        -
      </button>
      <button
        type="button"
      >
        1
      </button>
      <button
        type="button"
      >
        2
      </button>
      <button
        type="button"
      >
        3
      </button>
      <button
        class="orange"
        type="button"
      >
        +
      </button>
      <button
        class="span-two"
        type="button"
      >
        0
      </button>
      <button
        type="button"
      >
        .
      </button>
      <button
        class="orange"
        type="button"
      >
        =
      </button>
    </div>
  </div>
</DocumentFragment>
`);
});

test('adds numbers correctly', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  const display = getByTestId('current-operand');

  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  expect(display.textContent).toBe('3');
});

test('performs division correctly', () => {
  const { getByText, getByTestId } = render(<Calculator />);
  const display = getByTestId('current-operand');

  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('÷'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('='));

  expect(display.textContent).toBe('4');
});
