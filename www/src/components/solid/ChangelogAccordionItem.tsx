import { createEffect, createSignal, For, Match, Show, Switch } from "solid-js";
import { platforms } from "../../data/versions";
import { Tooltip } from "@kobalte/core/tooltip";
import { AccordionContent, AccordionHeader, AccordionItem } from "./Accordion";
import ChromeIcon from "./icons/Chrome.svg?raw";
import FirefoxIcon from "./icons/Firefox.svg?raw";
import EdgeIcon from "./icons/Edge.svg?raw";
import type { Version, VersionSection } from "../../data/versions";
import {
	getRelativeTime,
	getTime,
	getAbsoluteTime,
} from "../../utils/intlFormats";
import { Dynamic } from "solid-js/web";

export type ChangelogSectionProps = {
	section: VersionSection;
	nest?: number;
};

function ChangelogSection({ section, nest }: ChangelogSectionProps) {
	return (
		<Dynamic component={nest ? "li" : "div"} class="changelog-section">
			<div class="changelog-section-title">{section.title}</div>
			<ul
				class="changelog-section-list"
				classList={{
					[`changelog-section-list-nested-${nest}`]: !!nest,
				}}
			>
				<For each={section.list}>
					{(item) => {
						if (
							typeof item === "object" &&
							item &&
							"title" in item
						) {
							return (
								<ChangelogSection
									section={item}
									nest={(nest ?? 0) + 1}
								/>
							);
						}

						return <li>{item}</li>;
					}}
				</For>
			</ul>
		</Dynamic>
	);
}

export type ChangelogAccordionItemProps = {
	version: Version;
	isLatestVersion: boolean;
};

export default function ChangelogAccordionItem(
	props: ChangelogAccordionItemProps,
) {
	const [displayTime, setDisplayTime] = createSignal<{
		time: string | undefined;
	}>({
		time:
			props.version.published &&
			(new Date(Date.now() - 2_628_000_000) > props.version.published
				? getTime(props.version.published)
				: getRelativeTime(props.version.published)),
	});
	createEffect(() => {
		setDisplayTime({
			time:
				props.version.published &&
				(new Date(Date.now() - 2_628_000_000) > props.version.published
					? getTime(props.version.published)
					: getRelativeTime(props.version.published)),
		});
	});

	return (
		<AccordionItem key={props.version.name}>
			<AccordionHeader>
				<span class="changelog-version-name">
					{props.version.majorVersionName} {props.version.name}
				</span>

				<Tooltip openDelay={100}>
					<Tooltip.Trigger
						class="tooltip-trigger changelog-version-date"
						as="span"
					>
						<span>{displayTime().time || "Not yet available"}</span>
					</Tooltip.Trigger>
					{props.version.published && (
						<Tooltip.Portal>
							<Tooltip.Content class="tooltip-content">
								<Tooltip.Arrow />
								<p>
									{getAbsoluteTime(props.version.published)}
								</p>
							</Tooltip.Content>
						</Tooltip.Portal>
					)}
				</Tooltip>
				<div class="platform-list">
					<For each={platforms}>
						{(platform) => {
							const isSupported =
								props.version.platforms.includes(platform);

							return (
								<Tooltip openDelay={100}>
									<Tooltip.Trigger
										class="tooltip-trigger platform-icon"
										classList={{
											"is-unsupported": !isSupported,
										}}
										as="span"
									>
										<Switch>
											<Match when={platform === "Chrome"}>
												<span innerHTML={ChromeIcon} />
											</Match>
											<Match
												when={platform === "Firefox"}
											>
												<span innerHTML={FirefoxIcon} />
											</Match>
											<Match when={platform === "Edge"}>
												<span innerHTML={EdgeIcon} />
											</Match>
										</Switch>
									</Tooltip.Trigger>
									<Tooltip.Portal>
										<Tooltip.Content class="tooltip-content">
											<Tooltip.Arrow />
											<p>
												<Switch
													fallback={`Not yet available on ${platform}`}
												>
													<Match when={isSupported}>
														Available on {platform}
													</Match>
													<Match
														when={
															!props.isLatestVersion
														}
													>
														Unavailable on{" "}
														{platform}
													</Match>
												</Switch>
											</p>
										</Tooltip.Content>
									</Tooltip.Portal>
								</Tooltip>
							);
						}}
					</For>
				</div>
			</AccordionHeader>
			<AccordionContent>
				<div class="changelog-summary">
					{props.version.content.summary}
				</div>
				<Show when={props.version.content.sections}>
					<div class="changelog-sections">
						<For each={props.version.content.sections}>
							{(section) => (
								<ChangelogSection section={section} />
							)}
						</For>
					</div>
				</Show>
				<Show when={props.version.content.footer}>
					<div class="changelog-footer">
						{props.version.content.footer}
					</div>
				</Show>
				<div class="changelog-placement-increment-seals">
					{"🦭".repeat(props.version.placementIncrement)}
				</div>
			</AccordionContent>
		</AccordionItem>
	);
}
