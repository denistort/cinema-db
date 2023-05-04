import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
	test('App mounts properly', async () => {
		const wrapper = render(<App />);
		expect(wrapper).toBeTruthy();

		// Get by h1
		const h1 = wrapper.container.querySelector('[data-testid="title"]');
		expect(h1?.textContent).toBe('Hello World');

		// Get by text using the React testing library
		const text = await screen.findByTestId('title');

		expect(text.textContent).toBeTruthy();
	});
});
