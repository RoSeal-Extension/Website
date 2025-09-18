import type { JSX } from "solid-js";

export type Question = {
	question: string;
	answer: JSX.Element;
};

export const supportQuestions: Question[] = [
	{
		question: "Can I disable certain features?",
		answer: (
			<>
				Yes, everything (up to RoSeal settings) can be disabled in
				RoSeal settings. If you have RoSeal installed, you can see it{" "}
				<a href="https://www.roblox.com/my/account?roseal">here</a>.
			</>
		),
	},
	{
		question: "Does it have paywalled features?",
		answer: "Not at the moment. Paywalled features are planned for features that require monetization to maintain.",
	},
	{
		question: "What browsers are supported?",
		answer: "Supported browsers at the moment are Chrome, Firefox, and Edge. There are no plans to directly support Safari or Opera in the future. If you wish to install on Opera or other chromium-based browsers then you can install RoSeal from the Chrome Web Store.",
	},
	{
		question:
			"When can I expect a new RoSeal update to be approved after it's submitted?",
		answer: (
			<>
				Chrome: 1-3 days
				<br />
				Firefox: 1-4 weeks
				<br />
				Edge: Up to 24 hours
			</>
		),
	},
	{
		question: "Does RoSeal work on mobile?",
		answer: (
			<>
				For Chromium-based browsers, you can install alternatives that
				have support for Chrome extensions. Please note that RoSeal has
				not been thoroughly tested on them and some features may not
				function correctly.
				<br />
				<br />
				Android:{" "}
				<a
					href="https://www.microsoft.com/edge/"
					target="_blank"
					rel="noreferrer"
				>
					Microsoft Edge
				</a>{" "}
				<a href="https://play.google.com/store/apps/details?id=com.microsoft.emmx">
					Download link
				</a>
				<br />
				iOS:{" "}
				<a
					href="https://browser.kagi.com/"
					target="_blank"
					rel="noreferrer"
				>
					Orion Browser
				</a>{" "}
				<a
					href="https://apps.apple.com/us/app/orion-browser-by-kagi/id1484498200"
					target="_blank"
					rel="noreferrer"
				>
					Download link
				</a>
				<br />
				<br />
				If you use Firefox for Android, you can install RoSeal from the
				Firefox Addon Store:{" "}
				<a
					href="https://addons.mozilla.org/en-US/firefox/addon/roseal/"
					target="_blank"
					rel="noreferrer"
				>
					Download link
				</a>
			</>
		),
	},
	{
		question: "Where can I report bugs?",
		answer: (
			<>
				You can report bugs in the <b>#roseal-bug-reports</b> forum
				channel in our{" "}
				<a href="https://discord.gg/YemzCFaQPC">Discord server</a>.
			</>
		),
	},
	{
		question: "Where can I suggest features?",
		answer: (
			<>
				You can suggest features in the <b>#roseal-suggestions</b> forum
				channel in our{" "}
				<a href="https://discord.gg/YemzCFaQPC">Discord server</a>.
			</>
		),
	},
	{
		question: "Can I use RoSeal with other extensions?",
		answer: "Yes, but compatibility is not guaranteed. If a RoSeal feature does not work correctly with another extension, try tinkering with the other extension or disable the RoSeal feature.",
	},
	{
		question: "Why do I see 🦭?",
		answer: "If it shows a seal, great! You have an updated emoji font. If not and it shows a box, you'll need to install/update your system font. If you're using Windows 10, then you'll need to find and install the Windows 11 font.",
	},
	{
		question:
			"What does ratelimiting mean and why am I getting it when trying to buy limiteds with RoSeal?",
		answer: (
			<>
				Ratelimiting is something that <b>Roblox</b> does if you are
				refreshing a page or trying to buy an item too much. This is
				something intentional that Roblox does; if you were fast enough
				you could get it without RoSeal as well (though you wouldn't see
				an error, it still happens).
				<br />
				To avoid getting ratelimited, don't spam refresh or buy buttons.
				<br />
				<i>
					This is NOT a RoSeal issue or something RoSeal can prevent.
					Please do not submit inquiries or bug reports for it.
				</i>
			</>
		),
	},
	{
		question:
			'Why does the extension need to "read and change all my data on roblox.com"?',
		answer: (
			<>
				This is the default message you'll get from the browser when an
				extension needs to be able to see what's on your webpage at all,
				which, since RoSeal changes your Roblox web pages, it obviously
				needs to do.
				<br />
				If you are curious about some of RoSeal's permissions around
				cookies, please read the{" "}
				<a href="/privacy-policy" target="_blank" rel="noreferrer">
					Privacy Policy
				</a>{" "}
				for more details.
			</>
		),
	},
	{
		question:
			"Am I at risk of warnings/bans/terminations on my Roblox account if I use RoSeal?",
		answer: "NO. There is nothing ToS-violating in RoSeal, nor does it provide any means to do so. There is no reason that Roblox would terminate your account for using RoSeal. You are NOT at risk of termination by using the extension.",
	},
	{
		question: "Does Byfron anticheat (Hyperion) affect RoSeal?",
		answer: "NO. The Byfron anticheat only affects the Roblox game client, not the website. No website extensions will be affected by the Byfron anticheat.",
	},
	{
		question: "How do I get to beta test?",
		answer: (
			<>
				As of May 2023, we no longer have public beta testing or public
				beta builds. There is no current way to get beta builds. We will
				only be using private beta testing for now, which is currently
				not accepting new users.
				<br />
				If you are looking to use RoSeal, you do not need the beta
				builds. You should not use the beta builds normally. Being
				betas, they have many more bugs and are liable to break - they
				are meant for testing. Please use the live releases!
			</>
		),
	},
	{
		question:
			'Why am I getting "invalid arguments" errors or why is the buy button disappearing when trying to buy limiteds with RoSeal?',
		answer: (
			<>
				These are various issues on Roblox's end that RoSeal cannot fix.
				You can encounter these issues even without RoSeal.
				<br />
				This is NOT a RoSeal issue. Please do not report it as a bug or
				make support posts about it.
			</>
		),
	},
];
