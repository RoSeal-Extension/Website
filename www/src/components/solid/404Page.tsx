import { createEffect, createSignal } from "solid-js";
import NumberFlow from "solid-number-flow";

export default function NotFoundPage() {
	const [value, setValue] = createSignal(0);
	createEffect(() => {
		setTimeout(() => {
			setValue(404);
		});
	});

	return (
		<div class="page-not-found-container">
			<div class="page-not-found-header">
				<h1>
					<NumberFlow value={value()} />
				</h1>
			</div>
			<div class="page-not-found-description">
				<p>
					Our team of seals could not find the page you were looking
					for.
				</p>
				<a href="/">Go back home</a>
			</div>
		</div>
	);
}
