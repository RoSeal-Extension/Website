import { createEffect, createSignal, For, Match, Switch } from "solid-js";
import ThemeSwitch from "./ThemeSwitch";
import RoSealIcon from "./icons/icon.svg?raw";
import MdOutlineMenu from "@material-symbols/svg-400/outlined/menu-fill.svg?raw";
import MdOutlineMenuOpen from "@material-symbols/svg-400/outlined/menu_open-fill.svg?raw";
import {
	BLUESKY_PROFILE_LINK,
	CHROME_LISTING_LINK,
	DISCORD_INVITE_LINK,
	EDGE_LISTING_LINK,
	FIREFOX_LISTING_LINK,
	MASTODON_PROFILE_LINK,
	ROBLOX_COMMUNITY_LINK,
	ROSEAL_SOURCE_CODE_LINK,
	X_PROFILE_LINK,
} from "../../constants";
import clickOutside from "./directives/onClickOutside";

export type GlobalTopNavigationProps = {
	pathname: string;
};

const navItems = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "Support",
		path: "/support",
	},
	{
		name: "Changelogs",
		path: "/changelogs",
	},
	{
		name: "Install",
		paths: [
			{
				name: "Google Chrome",
				path: CHROME_LISTING_LINK,
			},
			{
				name: "Mozilla Firefox",
				path: FIREFOX_LISTING_LINK,
			},
			{
				name: "Microsoft Edge",
				path: EDGE_LISTING_LINK,
			},
		],
	},
	{
		name: "Community",
		paths: [
			{
				name: "Discord Server",
				path: DISCORD_INVITE_LINK,
			},
			{
				name: "Bluesky",
				path: BLUESKY_PROFILE_LINK,
			},
			{
				name: "X (Twitter)",
				path: X_PROFILE_LINK,
			},
			{
				name: "Mastodon",
				path: MASTODON_PROFILE_LINK,
			},
			{
				name: "Roblox Community",
				path: ROBLOX_COMMUNITY_LINK,
			},
		],
	},
	{
		name: "Source Code",
		path: ROSEAL_SOURCE_CODE_LINK,
	},
];

export default function GlobalTopNavigationContainer(
	props: GlobalTopNavigationProps,
) {
	const [theme, setTheme] = createSignal<"sync" | "light" | "dark">("sync");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = createSignal(false);

	createEffect(() => {
		const localStorageTheme = localStorage.getItem("theme");
		if (localStorageTheme) {
			setTheme(localStorageTheme as "sync" | "light" | "dark");
		}
	});

	return (
		<nav class="global-top-navigation-container">
			<div class="navigation-container">
				<a class="nav-logo" href="/">
					<span class="nav-icon" innerHTML={RoSealIcon} />
					<span class="nav-logo-text">
						<span class="ro-text">Ro</span>
						<span>Seal</span>
					</span>
				</a>
				<button
					type="button"
					class="nav-mobile-menu-btn"
					aria-label="Open menu"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen())}
				>
					<span
						innerHTML={
							isMobileMenuOpen()
								? MdOutlineMenuOpen
								: MdOutlineMenu
						}
					/>
				</button>
				<div
					class="nav-items-container"
					classList={{
						show: isMobileMenuOpen(),
					}}
				>
					<ul
						class="nav-items"
						classList={{
							show: isMobileMenuOpen(),
						}}
					>
						<For each={navItems}>
							{(item) => {
								const [
									isDropdownMenuOpen,
									setIsDropdownMenuOpen,
								] = createSignal(false);

								return (
									<Switch>
										<Match when={"paths" in item}>
											<li
												class="nav-item"
												use:clickOutside={() => {
													setIsDropdownMenuOpen(
														false,
													);
												}}
											>
												<button
													type="button"
													class="nav-link dropdown-toggle"
													classList={{
														active: item.paths?.some(
															(item) =>
																item.path ===
																props.pathname,
														),
														"is-open":
															isDropdownMenuOpen(),
													}}
													onClick={() =>
														setIsDropdownMenuOpen(
															!isDropdownMenuOpen(),
														)
													}
												>
													{item.name}
												</button>
												<ul
													class="dropdown-menu nav-items"
													classList={{
														"is-open":
															isDropdownMenuOpen(),
													}}
												>
													<For each={item.paths}>
														{(item) => (
															<li class="dropdown-item nav-item">
																<a
																	class="dropdown-link nav-link"
																	href={
																		item.path
																	}
																	classList={{
																		active:
																			item.path ===
																			props.pathname,
																	}}
																>
																	{item.name}
																</a>
															</li>
														)}
													</For>
												</ul>
											</li>
										</Match>
										<Match when={"path" in item}>
											<li class="nav-item">
												<a
													class="nav-link"
													href={item.path}
													classList={{
														active:
															props.pathname ===
															item.path,
													}}
												>
													{item.name}
												</a>
											</li>
										</Match>
									</Switch>
								);
							}}
						</For>
						<li class="nav-item theme-switch-btn-container">
							<ThemeSwitch theme={theme()} setTheme={setTheme} />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
