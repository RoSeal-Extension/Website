import {
	createContext,
	createEffect,
	createSignal,
	untrack,
	useContext,
	type Accessor,
	type JSX,
} from "solid-js";

const ActiveContext = createContext<{
	activeKey: Accessor<string | undefined>;
	setActiveKey: (version: string | undefined) => void;
}>();
const ItemContext = createContext<{
	key: string;
	isTransitioning: Accessor<boolean>;
	setIsTransitioning: (isTransitioning: boolean) => void;
	isShowing: Accessor<boolean>;
	setIsShowing: (isShowing: boolean) => void;
	scrollHeight: Accessor<string | undefined>;
	setScrollHeight: (scrollHeight: string | undefined) => void;
	contentRef: Accessor<HTMLDivElement | undefined>;
	setContentRef: (ref: HTMLDivElement) => void;
}>();

export type AccordionProps = {
	children: JSX.Element;
	activeKey?: string;
	class?: string;
};

export default function Accordion(props: AccordionProps) {
	const [activeKey, setActiveKey] = createSignal<string | undefined>();
	createEffect(() => {
		if (location.hash)
			setActiveKey(decodeURIComponent(location.hash.substring(1)));

		const onHashChange = () => {
			if (location.hash)
				setActiveKey(decodeURIComponent(location.hash.substring(1)));
			else setActiveKey(undefined);
		};

		window.addEventListener("hashchange", onHashChange);
		return () => window.removeEventListener("hashchange", onHashChange);
	});

	let firstEffect = true;
	createEffect(() => {
		const activeKey = props.activeKey;
		if (location.hash && firstEffect) {
			firstEffect = false;
			return;
		}

		if (activeKey) {
			location.hash = activeKey;
		}
	});

	return (
		<ActiveContext.Provider value={{ activeKey, setActiveKey }}>
			<div
				class="accordion"
				classList={{
					[props.class || ""]: !!props.class,
				}}
			>
				{props.children}
			</div>
		</ActiveContext.Provider>
	);
}

export type AccordionItemProps = {
	children: JSX.Element;
	key: string;
	class?: string;
};
export function AccordionItem(props: AccordionItemProps) {
	const activeContext = useContext(ActiveContext);
	const [scrollHeight, setScrollHeight] = createSignal<string | undefined>();
	const [isShowing, setIsShowing] = createSignal(false);
	const [isTransitioning, setIsTransitioning] = createSignal(false);
	const [contentRef, setContentRef] = createSignal<HTMLDivElement>();

	createEffect(() => {
		const shouldShow = activeContext?.activeKey() === props.key;

		const isShowingCurrently = untrack(isShowing);
		if (isShowingCurrently === shouldShow) return;

		setIsTransitioning(true);
		const ref = contentRef();
		if (ref) {
			if (shouldShow) {
				setTimeout(
					() =>
						ref.scrollIntoView({
							behavior: "smooth",
							block: "center",
						}),
					100,
				);
			}
			ref.style.display = "block";
			const newScrollHeight = `${ref.scrollHeight}px`;
			ref.style.removeProperty("display");

			if (shouldShow) {
				requestAnimationFrame(() =>
					requestAnimationFrame(() => {
						setScrollHeight(newScrollHeight);
					}),
				);
			} else {
				setScrollHeight(newScrollHeight);
				requestAnimationFrame(() =>
					requestAnimationFrame(() => setScrollHeight(undefined)),
				);
			}
		}
	});

	return (
		<ItemContext.Provider
			value={{
				key: props.key,
				isTransitioning,
				setIsTransitioning,
				isShowing,
				setIsShowing,
				scrollHeight,
				setScrollHeight,
				contentRef,
				setContentRef,
			}}
		>
			<div
				class="accordion-item"
				classList={{
					[props.class || ""]: !!props.class,
					show: activeContext?.activeKey() === props.key,
				}}
			>
				{props.children}
			</div>
		</ItemContext.Provider>
	);
}

export type AccordionHeaderProps = {
	children: JSX.Element;
};

export function AccordionHeader(props: AccordionHeaderProps) {
	const activeContext = useContext(ActiveContext);
	const itemContext = useContext(ItemContext);

	return (
		<div class="accordion-header">
			<button
				type="button"
				class="accordion-header-button"
				onClick={() => {
					if (!itemContext || !activeContext) {
						return;
					}
					if (activeContext.activeKey() === itemContext.key) {
						activeContext.setActiveKey(undefined);
						history.pushState(null, "", " ");
					} else {
						activeContext.setActiveKey(itemContext?.key);
						location.hash = itemContext?.key;
					}
				}}
			>
				{props.children}
			</button>
		</div>
	);
}

export type AccordionContentProps = {
	children: JSX.Element;
};
export function AccordionContent(props: AccordionContentProps) {
	const itemContext = useContext(ItemContext);
	const activeContext = useContext(ActiveContext);

	return (
		<div
			class="accordion-content-container"
			ref={itemContext?.setContentRef}
			classList={{
				show:
					itemContext?.isShowing() &&
					itemContext?.isTransitioning() === false,
				collapsing: itemContext?.isTransitioning(),
				collapse: itemContext?.isTransitioning() === false,
			}}
			style={{
				height: itemContext?.isTransitioning()
					? itemContext?.scrollHeight()
					: undefined,
			}}
			onTransitionEnd={() => {
				itemContext?.setIsTransitioning(false);
				itemContext?.setIsShowing(
					activeContext?.activeKey() === itemContext?.key,
				);
				itemContext?.setScrollHeight(undefined);
			}}
		>
			<div class="accordion-content">{props.children}</div>
		</div>
	);
}
