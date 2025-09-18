import { For } from "solid-js";
import { mizoreVersions, gaiaVersions } from "../../data/versions";
import Accordion from "./Accordion";
import ChangelogAccordionItem from "./ChangelogAccordionItem";

export default function ChangelogAccordion() {
	return (
		<Accordion
			class="changelog-accordion"
			activeKey={gaiaVersions?.find((version) => version.published)?.name}
		>
			<For each={[...gaiaVersions, ...mizoreVersions]}>
				{(version, versionIndex) => {
					const isLatestVersion = versionIndex() === 0;

					return (
						<ChangelogAccordionItem
							version={version}
							isLatestVersion={isLatestVersion}
						/>
					);
				}}
			</For>
		</Accordion>
	);
}
