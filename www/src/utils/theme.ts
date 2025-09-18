export function handleTheme(isDark: boolean) {
	if (isDark) {
		document.documentElement.classList.add("theme-dark");
	} else {
		document.documentElement.classList.remove("theme-dark");
	}

	document
		.querySelector('[name="color-scheme"]')
		?.setAttribute("content", isDark ? "dark" : "light");
}
