import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Counter } from './Counter';

describe('<Counter />', () => {
	test('App mounts properly', () => {
		const wrapper = render(<Counter />);
		expect(wrapper).toBeTruthy();

		const defaultCounterValue = wrapper.container.querySelector(
			'[data-testid="counter-value"]'
		);
		if (defaultCounterValue?.textContent) {
			expect(parseInt(defaultCounterValue.textContent, 10)).toBe(0);
		} else {
			expect(true).toBe(false);
		}
	});
});
