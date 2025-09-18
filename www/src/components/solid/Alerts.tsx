import { Show } from "solid-js";
import { gaiaVersions } from "../../data/versions";

export default function Alerts() {
	const latestVersionToDisplay = gaiaVersions.find((version) => {
		if (!version.published) return false;

		const difference = Date.now() - version.published.getTime();
		return (
			difference > 0 &&
			difference / (1000 * 60 * 60 * 24) <= 13 &&
			version.platforms.length > 0
		);
	});

	return (
		<Show when={latestVersionToDisplay}>
			<div class="alerts-container" role="alert">
				<div class="alert alert-primary">
					<a
						class="alert-link text-link"
						href={`/changelogs#${latestVersionToDisplay?.name}`}
					>
						RoSeal {latestVersionToDisplay?.majorVersionName}{" "}
						{latestVersionToDisplay?.name}{" "}
					</a>
					is out!
				</div>
			</div>
		</Show>
	);
}
