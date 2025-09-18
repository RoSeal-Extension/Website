export const relativeTimeFormat = new Intl.RelativeTimeFormat(undefined, {
	style: "long",
});

export function getTime(date: Date | string): string {
	return (date instanceof Date ? date : new Date(date)).toLocaleDateString(
		undefined,
		{
			year: "numeric",
			month: "short",
			day: "numeric",
		},
	);
}

const units: [Intl.RelativeTimeFormatUnit, number][] = [
	["year", 31536000000],
	["month", 2628000000],
	["day", 86400000],
	["hour", 3600000],
	["minute", 60000],
	["second", 1000],
];

export function getRelativeTime(date: Date | string): string | undefined {
	const elapsed =
		(date instanceof Date ? date : new Date(date)).getTime() - Date.now();

	const unit = units.find(
		([unit, amount]) => Math.abs(elapsed) >= amount || unit === "second",
	);
	if (!unit) return;

	return relativeTimeFormat.format(Math.trunc(elapsed / unit[1]), unit[0]);
}

export function getAbsoluteTime(date: Date | string): string {
	return (date instanceof Date ? date : new Date(date)).toLocaleDateString(
		undefined,
		{
			year: "numeric",
			month: "short",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
		},
	);
}
