import { createEffect, createSignal, onCleanup, Show } from "solid-js";
import { getInstalledRoSealData, isMobile } from "../../utils/browser";
import DeepLinkParser from "roblox-deeplink-parser";

export type DeepLinkPageProps = {
	type: "friendInvite" | "joinPlace";
	title: string;
	forceProtocol?: boolean;
};

export default function DeepLinkPage(props: DeepLinkPageProps) {
	const [data, setData] = createSignal<{
		type: "desktopApp" | "roseal" | "app";
		link: string;
	}>();
	const [countdown, setCountdown] = createSignal(3);

	createEffect(() => {
		let targetUrl: string | null | undefined;
		let type: "desktopApp" | "roseal" | "app" | undefined;

		const searchParams = new URLSearchParams(location.search);
		let deepLink: ReturnType<DeepLinkParser["createDeepLink"]> | undefined;

		if (props.type === "friendInvite") {
			const code = searchParams.get("code");
			if (code)
				deepLink = new DeepLinkParser().createDeepLink(
					"resolveShareLink",
					{
						type: "FriendInvite",
						code,
					},
				);
		} else {
			deepLink = new DeepLinkParser().createDeepLink(
				"joinPlace",
				// @ts-expect-error: fine
				Object.fromEntries(searchParams.entries()),
			);
		}

		if (!deepLink) {
			location.href = "/";
			return;
		}

		if (getInstalledRoSealData() && !props.forceProtocol) {
			type = "roseal";
			targetUrl = deepLink.toWebsiteUrl();
		} else if (isMobile()) {
			type = "app";
			targetUrl = deepLink.toAppsFlyerUrl();
		} else {
			type = "desktopApp";
			targetUrl = deepLink.toProtocolUrl();
		}

		if (!targetUrl || !type) {
			location.href = "/";
			return;
		}

		setData({
			type,
			link: targetUrl,
		});

		const intervalId = setInterval(() => {
			setCountdown(countdown() - 1);
			if (countdown() <= 0) {
				clearInterval(intervalId);
				location.href = targetUrl;
			}
		}, 1_000);

		onCleanup(() => {
			clearTimeout(intervalId);
		});
	});

	return (
		<div class="roblox-deeplink-container">
			<div class="roblox-deeplink-header">
				<h1>{props.title}</h1>
				<span>
					Redirecting to{" "}
					<span>
						<Show
							when={data()?.type === "roseal"}
							fallback="the Roblox app"
						>
							roblox.com
						</Show>{" "}
					</span>
					<span>
						<Show when={countdown() > 0} fallback="now">
							in {countdown()} seconds
						</Show>
					</span>
					...
				</span>
				<Show when={data()?.type === "desktopApp"}>
					{" "}
					<span>
						<Show
							when={!props.forceProtocol}
							fallback="You must have the"
						>
							You must have either the
						</Show>{" "}
						<a
							href="https://www.roblox.com/download"
							target="_blank"
							rel="noreferrer"
						>
							Roblox app
						</a>
						<Show
							when={!props.forceProtocol}
							fallback=" installed."
						>
							, or the <a href="/">RoSeal extension</a> installed.
						</Show>
					</span>
				</Show>
			</div>
			<div class="roblox-deeplink-help-section">
				<p>
					If you are not automatically redirected, click{" "}
					<a href={data()?.link}>here</a>.
				</p>
			</div>
		</div>
	);
}
