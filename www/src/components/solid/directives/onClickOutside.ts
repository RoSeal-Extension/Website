import { onCleanup } from "solid-js";

declare module "solid-js" {
	namespace JSX {
		interface Directives {
			clickOutside?: () => void;
		}
	}
}

export default function clickOutside(
	el: HTMLElement,
	accessor: () => (() => void) | undefined,
) {
	const onClick = (e: MouseEvent) =>
		e.target && !el.contains(e.target as HTMLElement) && accessor()?.();
	document.body.addEventListener("click", onClick);

	onCleanup(() => document.body.removeEventListener("click", onClick));
}
