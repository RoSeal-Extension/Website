import { detect } from "detect-browser";
import { createSignal, createEffect, Show } from "solid-js";
import {
	CHROME_LISTING_LINK,
	EDGE_LISTING_LINK,
	FIREFOX_LISTING_LINK,
	ORION_BROWSER_LINK,
} from "../../constants";
import ChromeIcon from "./icons/Chrome.svg?raw";
import FirefoxIcon from "./icons/Firefox.svg?raw";
import EdgeIcon from "./icons/Edge.svg?raw";
import type { JSX } from "solid-js";

export default function InstallButton() {
	const [data, setData] = createSignal<{
		type: "chrome" | "firefox" | "edge" | "safari";
		label: string;
		href?: string;
		icon?: JSX.Element;
		installSupported: boolean;
	}>({
		type: "chrome",
		label: "Chrome",
		href: CHROME_LISTING_LINK,
		icon: <span class="browser-icon" innerHTML={ChromeIcon} />,
		installSupported: true,
	});

	const isInstallingExtensionsSupported =
		"chrome" in globalThis &&
		// @ts-expect-error: Fine
		typeof globalThis.chrome === "object" &&
		// @ts-expect-error: Fine
		globalThis.chrome !== null &&
		// @ts-expect-error: Fine
		"runtime" in globalThis.chrome;

	createEffect(() => {
		const data = detect();

		switch (true) {
			case data?.name === "safari" && !isInstallingExtensionsSupported: {
				setData({
					type: "safari",
					label: "Safari",
					installSupported: false,
				});
				break;
			}
			case data?.name === "firefox": {
				setData({
					type: "firefox",
					label: "Firefox",
					href: FIREFOX_LISTING_LINK,
					icon: <span class="browser-icon" innerHTML={FirefoxIcon} />,
					installSupported: true,
				});
				break;
			}
			case data?.name === "edge-chromium": {
				setData({
					type: "edge",
					label: "Edge",
					href: EDGE_LISTING_LINK,
					icon: <span class="browser-icon" innerHTML={EdgeIcon} />,
					installSupported: true,
				});

				break;
			}
		}
	});

	return (
		<div class="install-button-container">
			<Show
				when={data().installSupported}
				fallback={
					<div class="browser-not-supported-text">
						RoSeal is not available on {data().label}. Please use
						another browser to install RoSeal. More information:{" "}
						<a href="/support#Does%20RoSeal%20work%20on%20mobile?">
							Link
						</a>
					</div>
				}
			>
				<a class="btn-primary install-button" href={data().href}>
					Install for {data().icon} <span>{data().label}</span>
				</a>
			</Show>
			<div class="other-install-links-container">
				<p>Or install for:</p>
				<ul class="other-install-links">
					<li>
						<a href={CHROME_LISTING_LINK}>Chrome</a>
					</li>
					<li>
						<a href={FIREFOX_LISTING_LINK}>Firefox</a>
					</li>
					<li>
						<a href={EDGE_LISTING_LINK}>Edge</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
