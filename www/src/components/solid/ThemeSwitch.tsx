import MdOutlineSync from "@material-symbols/svg-400/outlined/sync-fill.svg?raw";
import MdOutlineDarkMode from "@material-symbols/svg-400/outlined/dark_mode-fill.svg?raw";
import MdOutlineLightMode from "@material-symbols/svg-400/outlined/light_mode-fill.svg?raw";

import { Match, Switch } from "solid-js";
import { handleTheme } from "../../utils/theme";

export type ThemeSwitchProps = {
	theme: "sync" | "light" | "dark";
	setTheme: (theme: "sync" | "light" | "dark") => void;
};

export default function ThemeSwitch(props: ThemeSwitchProps) {
	return (
		<button
			type="button"
			class="theme-switch-btn"
			onClick={() => {
				const newTheme =
					props.theme === "sync"
						? "light"
						: props.theme === "light"
							? "dark"
							: "sync";

				const matchesDark = window.matchMedia(
					"(prefers-color-scheme: dark)",
				).matches;
				props.setTheme(newTheme);
				handleTheme(
					newTheme === "sync" ? matchesDark : newTheme === "dark",
				);
				if (newTheme === "sync") {
					localStorage.removeItem("theme");
				} else {
					localStorage.setItem("theme", newTheme);
				}
			}}
			aria-label={`${props.theme} theme`}
		>
			<Switch fallback={<span innerHTML={MdOutlineDarkMode} />}>
				<Match when={props.theme === "sync"}>
					<span innerHTML={MdOutlineSync} />
				</Match>
				<Match when={props.theme === "light"}>
					<span innerHTML={MdOutlineLightMode} />
				</Match>
			</Switch>
		</button>
	);
}
