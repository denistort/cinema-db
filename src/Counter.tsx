import { FC, useState } from 'react';

export const Counter: FC = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<div data-testid="counter-value">{counter}</div>
			<div>
				<button
					data-testid="counter-inc"
					onClick={() => setCounter(counter + 1)}
				>
					Increment
				</button>
				<button
					data-testid="counter-dec"
					onClick={() => setCounter(counter - 1)}
				>
					Decrement
				</button>
			</div>
		</div>
	);
};
