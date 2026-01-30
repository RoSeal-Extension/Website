import type { JSX } from "solid-js";
export type Platform = "Chrome" | "Firefox" | "Edge";

export const platforms: Platform[] = ["Chrome", "Firefox", "Edge"];

export type VersionSection = {
	title: string;
	list?: (JSX.Element | VersionSection)[];
};

export type Version = {
	published?: Date;
	majorVersionName: string;
	name: string;
	placementIncrement: number;
	platforms: Platform[];

	content: {
		summary: JSX.Element;
		sections?: VersionSection[];
		footer?: JSX.Element;
	};
};

export const gaiaVersions: Version[] = [
	{
		majorVersionName: "Gaia",
		name: "2.1.31",
		platforms: ["Chrome", "Edge"],
		published: new Date(1768356009000),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug fixes",
					list: [
						"Fixed a bug where setting Hex body colors or wearing an outfit caused the Avatar page to crash",
						"Fixed Avatars not appearing in user favorites with more inventory tabs feature",
						"Fixed thumbnail updated time not working on Looks",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.30",
		platforms: ["Chrome", "Edge"],
		published: new Date(1767816007000),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug fixes",
					list: [
						"Fixed a bug where the steps on thumbnail customization zoom were very high",
						"Fixed removing item from experience playlists not working in home sorts custmizations modal",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.29",
		platforms: ["Chrome", "Edge"],
		published: new Date(1766649177566),
		content: {
			summary:
				"This release contains a bug fix for Customize Sorts Layout not applying changes on page load",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.28",
		platforms: ["Chrome", "Edge"],
		published: new Date(1766392860000),
		content: {
			summary:
				"This release contains a new feature, a QoL fix, and bug fixes.",
			sections: [
				{
					title: "New features",
					list: ["In experience verified badge visibility toggle"],
				},
				{
					title: "QoL fixes",
					list: [
						"Continued improvement of home page performance with Customize Sorts Layout enabled",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed RoSeal's Connections carousel on the home page showing the place icon instead of the main experience icon",
						"Fixed Count button in user inventory stopping once it reaches two or more instances of an item",
						"Fixed inventory obtained date not showing on hover when sort direction is set to Ascending",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.26",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1765094520000),
		content: {
			summary:
				"This release contains new features, QoL fixes, and bug fixes.",
			sections: [
				{
					title: "New features",
					list: [
						"Show which experience an item may have been created in",
						"Show when the item thumbnail was last updated",
					],
				},
				{
					title: "Features",
					list: [
						"Idle animation assets can now be chosen in the Advanced Avatar Editor modal",
					],
				},
				{
					title: "QoL fixes",
					list: [
						'Experiences that use custom avatar types will now display "Custom" in the avatar type field instead of the inaccurate avatar type',
						"RoSeal settings now shows when roseal.live permission is not granted, and when other critical parts of the settings fails",
						"Improved performance of the home page with Customize Sorts Layout enabled",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed RoSeal's 404 page linking to a deleted image",
						"Fixed community announcement thumbnails showing incorrectly with custom thumbnail sizing",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.25",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1763108223000),
		content: {
			summary: "This release contains new features and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Added a toggle for RoSeal's sorting for user Roblox badges",
						"Added a toggle for unused asset types toggle in include more inventory types",
						"Added a dropdown for RoSeal's improved server debug info stats",
						"Sync browser theme feature has been removed because Roblox now has their own toggle",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Search avatar items no longer appears in the Characters section of the Avatar Editor",
						"Fixed blocked creators not working on the Avatar Marketplace",
						"Fixed RoSeal disabling the 3-dot context menu on user pages",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.24",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1761790870288),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug fixes",
					list: [
						"Fixed connection types not being exportable from RoSeal's data management",
						"Fixed closest server join button not being able to be enabled due to incorrect permission check",
						"Fixed user locale text, experience supported devices, community joined dates, deleted user profile picture, not working due to an unexpected deprecation",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.23",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1761790870288),
		content: {
			summary: "This release contains bug fixes, and QoL fixes.",
			sections: [
				{
					title: "QoL fixes",
					list: [
						"Preview text filter now shows way further left on www.roblox.com",
						"Experience name and icon no longer show in improved server join modal if it comes directly from the experience page",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed preview user description filtering not working",
						"Fixed silly text variables in improved join modal ",
						"Fixed quantity remaining text support on Avatar Marketplace with a new experiment",
						'Fixed remove button not working correctly on "View as user" in experience store',
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.22",
		platforms: ["Chrome", "Edge"],
		published: new Date(1761790870288),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug fixes",
					list: [
						"Fixed a list of prices showing on Avatar item sometimes",
						"Fixed support for the new profile header",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.21",
		platforms: ["Chrome", "Edge"],
		published: new Date(1761790870288),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug fixes",
					list: [
						"Fixed RoSeal's Avatar Editor lists sometimes not showing",
						"Fixed improved server join modal's deeplinks not working",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.20",
		platforms: ["Chrome", "Edge"],
		published: new Date(1761790870288),
		content: {
			summary: "This release contains a feature update, and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						"Artist name is now shown in Top Songs on experiences",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed RoSeal support for the new charts URL format",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.19",
		platforms: ["Chrome", "Edge"],
		published: new Date(1761790870288),
		content: {
			summary:
				"This release contains a new feature, QoL fix, and a bug fix.",
			sections: [
				{
					title: "New features",
					list: ["Silly text for the improved server join modal"],
				},
				{
					title: "QoL fixes",
					list: ["Description is no longer required to post Avatars"],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed archived bundles not working in the Avatar Editor",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.18",
		platforms: ["Chrome", "Edge"],
		published: new Date(1761790870288),
		content: {
			summary:
				"This release contains a new feature, a feature update, and bug fixes.",
			sections: [
				{
					title: "New features",
					list: [
						"Automatically update the order of connections in the home connections carousel",
					],
				},
				{
					title: "Features",
					list: ["Blocked items keywords now support RegEx patterns"],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed aspect ratio of Avatars on user profiles",
						"Fixed deleted outfits causing avatar item lists to error",
						"Fixed some experiences check pages infinitely loading",
						"Fixed connection request filtering not correctly working after a Roblox update",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.17",
		platforms: ["Chrome", "Edge"],
		published: new Date(1759937775645),
		content: {
			summary:
				"This release contains new features, QoL fixes, and bug fixes.",
			sections: [
				{
					title: "New features",
					list: [
						"Force all user profile full body thumbnails to use a certain avatar type",
					],
				},
				{
					title: "Features",
					list: [
						"In improved user profile currently wearing, Emotes and Animations can now be excluded from the total value",
					],
				},
				{
					title: "QoL fixes",
					list: [
						"Recommended users in connection requests are now hidden while connections requests are loading",
						"Filters design for badges, passes, and developer products have been redesigned",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed Avatar Editor currently wearing not showing if Advanced Avatar Editor Customization is disabled",
						"Fixed RoSeal causing the Avatar Editor to not load",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.16",
		platforms: ["Chrome", "Edge"],
		published: new Date(1759850885335),
		content: {
			summary:
				"This release contains new feature toggles, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Show associated bundle at the bottom right of user profile currently wearing items",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed some RoSeal list elements not properly updating",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.15",
		platforms: [],
		published: new Date(1759572310849),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug fixes",
					list: [
						"Fixed Add to Editor List showing on Currently Wearing Items in the Avatar Editor",
						"Fixed posting avatars not saving the current body colors",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.14",
		platforms: [],
		published: new Date(1759572310849),
		content: {
			summary: "This release contains new features, and a bug fix.",
			sections: [
				{
					title: "New features",
					list: [
						"View a user's published Avatars if you have access to post Avatars",
						"View the private servers that a user has shared with you in their inventory",
						"Currently wearing items on the left side of the Avatar Editor",
						"Allow joining non-starter places from their respective detail pages if it is allowed",
					],
				},
				{
					title: "Features",
					list: [
						"Creator name filter has been added to the Avatar Editor search",
						"Custom emojis have been re-enabled after a grace period",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed some private servers links in the Private Server Links section not being able to be joined",
						"View user locale has been re-enabled after a bug fix",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.13",
		platforms: ["Chrome", "Edge"],
		published: new Date(1759572310849),
		content: {
			summary:
				"This release contains new features, bug fixes, and QoL fixes.",
			sections: [
				{
					title: "New features",
					list: [
						{
							title: "Improved user currently wearing section",
							list: [
								"Separate Animation assets into their own tab",
								"Show the total value of the user's outfit and emotes next to the Currently Wearing header",
							],
						},
						"Post your Avatars from the Avatar Editor",
					],
				},
				{
					title: "QoL fixes",
					list: [
						"Collectible items in the user RAP modal is now sorted by total RAP",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed Avatar Editor search bar causing Outfits unable to be created",
						"Fixed support for Blocked items in the an upcoming Roblox marketplace update",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.12",
		platforms: ["Chrome", "Edge"],
		published: new Date(1759572310849),
		content: {
			summary: "This release contains bug fixes, and QoL fixes.",
			sections: [
				{
					title: "QoL fixes",
					list: [
						"Added missing icons to improved server join modal and made server type title smaller",
						"RoSeal now shows when storage is unexpectedly unavailable in settings",
						"Added system feeback to updating join privacy/online status privacy in the navigation bar",
						"Closest server search button can now be clicked to cancel the search",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed home sort customization reverting previous sort changes",
						"A fix has been attempted for automatic discovery and updating accounts in RoSeal's accounts manager feature",
						"Fixed private server joins with Improved Server Join modal opening the client twice",
						"Private server links in the improved servers list no longer shows if private servers are disabled",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.11",
		platforms: ["Chrome", "Edge"],
		published: new Date(1759572310849),
		content: {
			summary: "This release contains a QoL fix and a bug fix.",
			sections: [
				{
					title: "QoL fixes",
					list: [
						"RoSeal's Charts filters now match Roblox's foundation colors",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed experience servers always loading in the background",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.10",
		platforms: ["Chrome", "Edge"],
		published: new Date(1758783679283),
		content: {
			summary:
				"This release new features ported from the Roblox+ browser extension and all-new features.",
			sections: [
				{
					title: "Features from the Roblox+ browser extension",
					list: [
						"View a user's RAP and a list of their Roblox-created Limiteds",
						"View a Rolimon's link to an item reseller, Trade button, and when they obtained it",
						"Wear/unwear items on you avatar from an item page",
						"View the estimated RAP an item will be after a reseller sale",
						"Search avatar editor items by name",
						"Top navigation links customization",
						"Custom Robux precision to show 0-3 numbers after decimal or when to abbreviate",
						"Show DevExable Robux in a currency of your choosing under your Robux in navigation",
						"Robux history chart in Transactions",
						"Startup notifications",
						"Trade request and trade update notifications",
						"Connection presence update notifications",
						"Community shout notifications",
						"View avatar asset owners",
					],
				},
				{
					title: "New features",
					list: [
						"Button next to the play button on experience details to join the closest server",
						"View which of your Connections own avatar item",
						"Remove Marketplace advertisements in Notifications",
						"Show DevEx rate conversion in Transactions developer exchange requests",
					],
				},
				{
					title: "Feature updates",
					list: [
						"In experience live stats chart, Votes and Upvotes have been combined into a single tab",
						"Outfits are now supported in RoSeal's item lists",
						'"Connect" button has been re-added in RoSeal\'s Home connections carousel',
						"Experiences in playlists can be re-arranged and removed in Customize Home Layout modal",
					],
				},
				{
					title: "Bug fixes",
					list: [
						"Fixed Connection requests sometimes never loading if someone sent a request from an experience you can not access",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.9",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1758783679283),
		content: {
			summary:
				"This release contains a bug fix for all items not being shown on the Avatar page with RoSeal archived items enabled.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.8",
		platforms: ["Chrome", "Edge"],
		published: new Date(1758783679283),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug fixes",
					list: [
						"Fixed fast free purchase not working on Free limiteds",
						"Fixed RoSeal Avatar page features not working",
						"Fixed the join button being disabled when it is indicated to be a full server with 1000+ queue",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.7",
		platforms: ["Chrome", "Edge"],
		published: new Date(1758783679283),
		content: {
			summary:
				"This release contains an attempted bug fix for recent items not loading on the Avatar page with Archived items enabled.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.6",
		platforms: ["Chrome", "Edge", "Firefox"],
		published: new Date(1758191420558),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug fixes",
					list: [
						"Reverted RoSeal fix for server lists as Roblox has fixed their bug",
						"Fixed Creator Store off sale assets not showing",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.5",
		platforms: ["Chrome", "Edge"],
		published: new Date(1758191420558),
		content: {
			summary: "This release contains some new features and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Added Created Year, Player Avatar Type, and Max Players filters to Charts filters",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Temporarily fixed server list not appearing temporarily",
						"Fixed Experience badges sorting by awarded date not working",
						"Fixed collapsing sort and other sort customizations not working together on the home page",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.4",
		platforms: ["Chrome", "Edge", "Firefox"],
		published: new Date(1757615981318),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						"Fixed thumbnails on past events/experience events in navigation bar showing a random experience icon",
						"Fixed RoSeal styles around the site to be more consistent",
						"Fixed Connections carousel not loading properly if a layout hasn't been defined yet",
						"Fixed Download 3D avatar not working on Firefox",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.3",
		platforms: ["Chrome"],
		published: new Date(1757615981318),
		content: {
			summary:
				"This release contains a new improved Connections carousel and bug fixes.",
			sections: [
				{
					title: "New Features",
					list: [
						{
							title: "Improved conection carousel",
							list: [
								"RoSeal overrides Roblox's connections carousel with one that is more performant and can have more features.",
								"Hides blocked experiences that your connections are playing.",
								"Show username under display name on connection tiles",
								"Disabled by default currently until we figure out how to properly detect BTR users with second row enabled",
							],
						},
						"Remove white background from Connection carousels on dark theme",
					],
				},
				{
					title: "Features",
					list: [
						"Connection types can now be sorted by dragging-and-dropping in the Add Connection to type dropdown",
						"Removed 14 days/28 days options from playtime options as Roblox no longer provides them",
						"Private server owner profile pictures are now much larger if the server is empty with private server rows enabled",
						"Online connections in connections list are now sorted by connection type",
					],
				},
				{
					title: "Roblox Bug Fixes",
					list: [
						"Fix Roblox's internal notification system listening to other tabs with a different authenticated user",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed performance issue with styling causing painting to take ~50ms",
						"Fixed home sorts layout editing not working properly",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.2",
		platforms: ["Chrome", "Firefox"],
		published: new Date(1757347818440),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Live experience stats chart has been re-enabled after being disabled for being enabled by default",
						"Removed Creator Items from times feature as Roblox's Libray page has been retired",
						"Changed the default display of Connection creation times to be short relative time",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Attempted to fix sales of some items not showing properly",
						"Fixed RoSeal's error page formatting after Roblox's error page update",
						'Fixed RoSeal creating duplicate "Report Abuse" button on user profiles',
						"Fixed item list categories showing as a default message key on the older Angular-based Avatar Editor",
						"Fixed Looks try-on being broken again",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.1.0",
		platforms: ["Chrome"],
		published: new Date(1757098800000),
		content: {
			summary:
				"This release contains a ton of new features, fixes, and QoL improvements.",
			sections: [
				{
					title: "New Features",
					list: [
						{
							title: "Better Roblox Private Server Subscriptions list",
							list: [
								"A better view for your private server subscriptions to quickly view and disable them",
								"You can also access your Free private servers in another tab",
							],
						},
						{
							title: "Account Tracking Prevention",
							list: [
								"Update your avatar very slightly to where player snipers can not detect you in servers",
								"Spoof your online status to either be online all the time or in a specific place in Studio",
							],
						},
						{
							title: "Experiences",
							list: [
								{
									title: "Improved Servers Tab",
									list: [
										"Exclude full servers by default",
										"Show server locations",
										"Region filters",
										"Show the total distance between the server and you",
										"Show an label with estimate of how far (Farthest, Far, Close, and Closest) a server is",
										"Show server place version",
										"Calculate server distance by either API or geolocation prompt",
										"Toggle showing the connections in a server",
										"Show whether a server is likely botted",
										"Show server update delay",
										"Show server performance as percentage (server physics frame rate)",
										"Show Copy Link/Generate Link on private servers",
										"Show expiring/renewing data on all private servers",
										"Show share link button on public servers",
										"Customize the pagination type (Load More, Pagination) and per-page size",
										"Show Private Servers in a row list instead of a column list",
										"Option to subscribe to a private server for only one month upon private server creation",
										"If you attempt to create a new free private server while having the maximum amount of private servers, RoSeal will prompt you to disable some in a list",
									],
								},
								{
									title: "Experience Playlists",
									list: [
										"Create playlists on your home page and add experiences to them to customize the home page how you want",
										"You can drag-and-drop them however you want in the Customize Sorts button",
									],
								},
								{
									title: "BETA Improved Server Join Modal",
									list: [
										"Shows server information",
										"Improved server join and authentication logic, falls back to Roblox deep link protocol",
										"Delay joining by up to 3 seconds",
									],
								},
								"View top songs played in an experience",
								"Show past experience events",
								"Live experience statistics updating",
								"Show a banner when the experience is shadow banned from search on Roblox",
								"Precreate experience private servers prior to experience release",
								"Vertical view for experience statistics",
								"Real-time updating statistics chart for experiences",
								"Recent upvote ratio for an experience",
								"View latest Saved and Published version of a place",
							],
						},
						{
							title: "Users",
							list: [
								{
									title: "Improved User Connections Page",
									list: [
										"Show mutual connections with other users",
										"Advanced connection request filtering",
										"Sort connections by current presence status",
										{
											title: "Connections types",
											list: [
												"Add connections to one of 7 categories, or create your own",
												"Sort your connections by type",
											],
										},
										"Override how many items are shown per page",
										"Attempt to get the accurate connection creation date",
										"Show the date of when connection requests were sent",
										"Show the origination of connection requests",
										"Sort connection requests, followers, and followers by ascending or descending",
									],
								},
								"Show a confirmation modal before removing a connection",
								"Show administrator badge next to Roblox Administrator names on user profiles",
								"View any user's set language",
								"View a user's currently equipped emotes on their profile page",
								"Toggle between portrait and full-body avatar photos on user profile page",
								"View some information of deleted users on a minimal profile page",
								"Last seen date for your connections",
								"Live presence update on profiles for people who are not your connection",
								"Download Avatar button to download Avatar textures and obj model on user profiles",
								"Show display names and user names of deleted users",
								"Show offline status icon for users if they are currently offline",
								"Preview in-experience chat username color on signup and change username pages",
								"Show when a user obtained Roblox Badges and Experience Badges on their profile page when hovering over their badges",
								"Override page request limits on user search page",
								<>
									<b>EXPERIMENTAL</b> Profile background
									customization
								</>,
							],
						},
						{
							title: "Inventory and Favorites",
							list: [
								{
									title: "Inventory and Favorites Sort Filters",
									list: [
										"Sort directions on supported categories",
										"Bulk unfavorite, archive, delete, or unarchive items",
										"Count the total amount of items in each category",
									],
								},
								{
									title: "Archived Items",
									list: [
										"Archive items in your inventory in bulk or from their respective pages",
										"Archived items will only appear in a new Archived category and not appear in other categories in your Inventory or the Avatar Editor",
									],
								},
							],
						},
						{
							title: "Marketplace",
							list: [
								"Parity with the Roblox App's Marketplace landing",
								"Search Look Avatars in the Marketplace",
								"Show whether an item bundle is recolorable",
								"Show how long each Limited item instance you own has been in holding period for",
								"Fix try-on not working for Look Avatars",
								"Hide topics bar in Marketplace",
								"View the time of when an item went offsale and what it was priced at",
								"View which experiences some items can be sold in",
								"Creator type filter in Marketplace",
								"Owned items filter in Marketplace",
								"Quantity remaining text for items in Marketplace",
							],
						},
						{
							title: "Navigation",
							list: [
								"Fast user search in the universal search bar",
								"Voice Chat opt-in switcher in top navigation",
								"Avatar Chat opt-in switcher in top navigation",
								"Join experience privacy switcher in top navigation",
								"Online status privacy switcher in top navigation",
								"Experience Events tab in the left navigation for upcoming events of experiences you follow",
								"View the status of your Premium subscription in the top navigation",
								'"Open Desktop App" item to the left navigation to open the current page in the Roblox app',
								"Disable search landing in the universal search bar",
							],
						},
						{
							title: "Avatar",
							list: [
								"Improved avatar body section with reordering and new categories",
								{
									title: "Avatar Editor item lists",
									list: [
										"Create lists and add items to them in your Avatar Editor page to quickly access the items you want",
										"Note: Only assets are supported at this time",
									],
								},
							],
						},
						{
							title: "Communities",
							list: [
								"View when you or other users joined a Community",
								"Page size on community sale revenue page",
								"Move community social links back onto the community header",
							],
						},
						{
							title: "Roblox Bug Fixes",
							list: [
								"Fix Roblox bug causing home page friends to not load if you have more than 150 online +50 offline connections",
								'Fix "Remove from Profile" not showing on limited items that you have on your profile',
								"Fix 3D try-on for 2D clothing",
							],
						},
						{
							title: "Other",
							list: [
								"Allowed Items and Allowed Creators in Blocked Items",
								"View favorited dates on your favorited items",

								"Use custom Emojis to show Twemoji or Fluent Emojis instead of your system or browser emoji set",
								"Preview the filtering status of text you want to input in a widget",
								'Hide "Connect" button on friends list on home page',
								"Trending Searches page located at /trending-searches",
							],
						},
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Avatar accessory limits are now shown in RoSeal's advanced avatar editor modal",
						"Precisely edit the values of coordinates of items in RoSeal's advanced avatar editor modal",
						"More advanced filtering options for experience Developer Products",
						"The version number of each place is now shown in the experience places tab if enabled",
						"Owned item list is now supported on hidden item pages",
						"Support for Roblox's fast page navigation",
					],
				},
				{
					title: "Other",
					list: [
						"Removed puffiness from advanced avatar customization as its not longer used",
						"Removed all limits for Blocked Items",
						"Recount badges button in Experience badges tab",
						'Added "In Internal Server","In Singleplayer", "Full Server" to the user join checks',
						"Added past 7 days of playtime on experience details page",
						"Added bundle support for viewing when you obtained an item",
						"Removed legacy Library support",
						"Added 18+ age support to charts filters",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Favorites button should now be properly aligned",
						"Fixed community creation date not being shown sometimes due to harsh ratelimits",
						"Fixed password/username autocompletes being shown on RoSeal inputs",
						"RoSeal now disables an experiment on the home page that causes some sorts to be unable to be customized",
						"Fixed Accounts Manager showing no items while loading",
					],
				},
			],
		},
		placementIncrement: 2,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.33",
		platforms: ["Chrome", "Edge"],
		published: new Date(1756855648883),
		content: {
			summary:
				"This release adds more clarification for when the Archive Item in Inventory feature will be released.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.32",
		platforms: ["Chrome", "Edge"],
		published: new Date(1756197890025),
		content: {
			summary:
				"This release adds clarification for when the Archive Item in Inventory feature will be released.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.31",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1752847590618),
		content: {
			summary:
				"This release fixes body color updating with RoSeal features enabled on the updated Avatar Editor page",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.30",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1752847590618),
		content: {
			summary:
				"This release fixes RoSeal features not working on the updated Avatar Editor page.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.29",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1751674048544),
		content: {
			summary: "This release contains misc fixes and a feature removal.",
			sections: [
				{
					title: "Fixes",
					list: [
						"RoSeal now uses the new endpoints for developer products",
						"A fix to support an upcoming Roblox update",
					],
				},
				{
					title: "Features",
					list: ['Removed "View experience shop ID"'],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.28",
		platforms: ["Chrome", "Edge"],
		published: new Date(1751674048544),
		content: {
			summary:
				"This release fixes RoSeal context menu items not working on Badge and Pass items.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.27",
		platforms: ["Chrome", "Edge"],
		published: new Date(1749842145950),
		content: {
			summary: "This release includes some bug fixes.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.25",
		platforms: ["Chrome", "Edge"],
		published: new Date(1749329370942),
		content: {
			summary:
				"This release fixes RoSeal crashing the Creator Hub pages with BTRoblox installed.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.24",
		platforms: ["Chrome", "Edge"],
		published: new Date(1748172410911),
		content: {
			summary:
				"This release fixes the context menu (... menu) not appearing on blocked users pages.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.23",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1746382372664),
		content: {
			summary:
				"This release fixes RoSeal causing the Roblox home page to blank out in some cases.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.21",
		platforms: ["Chrome", "Edge"],
		published: new Date(1745254893757),
		content: {
			summary:
				"This release fixes RoSeal features being broken by a recent Roblox update.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.20",
		platforms: ["Chrome", "Edge"],
		published: new Date(1745254893757),
		content: {
			summary:
				"This release fixes RoSeal not correctly re-fetching playability statuses in experience countdowns.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.19",
		platforms: ["Chrome", "Edge"],
		published: new Date(1745254893757),
		content: {
			summary:
				"This release fixes RoSeal not fetching experience countdowns correctly.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.18",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1745254893757),
		content: {
			summary:
				"This release fixes 3D avatar thumbnail in RoSeal's Advanced Customization modal on the Avatar Customization page, and RoSeal making multiple context menus appear on user profile pages.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.17",
		platforms: ["Chrome", "Edge"],
		published: new Date(1745254893757),
		content: {
			summary:
				"This release fixes RoSeal breaking the Creator Dashboard in some cases.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.16",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1745254893757),
		content: {
			summary:
				"This release fixes RoSeal features not working when navigating between pages due to a recent Roblox update.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.15",
		platforms: ["Chrome", "Edge"],
		published: new Date(1741342031119),
		content: {
			summary:
				"This release contains a change for Accounts Manager and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						"Accounts Manager no longer stores cookies in an encrypted format. This is because the cryptography key pairs could not be stored in a way where browsers wouldn't delete them and render the cookies unaccessible.",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed time formats not working on user profile pages due to a recent Roblox update",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.14",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1741342031119),
		content: {
			summary:
				"This release contains bug fixes for RoSeal context menu items not appearing on Passes and Badges pages, and RoSeal breaking the user friends list.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.13",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1740277118531),
		content: {
			summary:
				"This release contains bug fixes for pass purchase prompts prompting for the wrong pass if multiple passes have the same icon asset id.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.12",
		platforms: ["Chrome", "Edge"],
		published: new Date(1740277118531),
		content: {
			summary:
				"This release contains bug fixes for Avatar Item, Marketplace, and User Profile features that were broken from recent Roblox updates.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.11",
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1738084635357),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						"Fixed inventory badges no longer showing on private inventories due to a recent Roblox update",
						"Fixed outfits showing the list a few times on the Avatar Customization page",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.10",
		platforms: ["Edge"],
		published: new Date(1738084635357),
		content: {
			summary: "This release reverts changes in 2.0.9",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.9",
		platforms: ["Edge"],
		published: new Date(1738084635357),
		content: {
			summary:
				"This release contains a bug fix for RoSeal features not workig on the pages of avatar items due to a Roblox update.",
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.8",
		platforms: ["Chrome", "Edge"],
		published: new Date(1737056954919),
		content: {
			summary: "This release contains bbug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						"Fixed Eyelashes and Eyebrows limits counting towards Layered limits with RoSeal features",
						"Fixed related assets showing up in Asset Dependencies, this is a rollback of a fix from 2.0.7",
						"Fixed Heads section not being automatically directed to with hash navigation for Avatar Editor enabled",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.7",
		platforms: ["Chrome", "Edge"],
		published: new Date(1736439565477),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						'Fixed mobile "Cancel" button not working correctly on the user profile page',
						"Fixed Community icon change always failing with RoSeal enabled",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.6",
		platforms: ["Chrome", "Edge"],
		published: new Date(1736128422166),
		content: {
			summary:
				"This release contains a new feature, a QoL fix, bug fixes, and new translations.",
			sections: [
				{
					title: "Features",
					list: [
						'"Show user badge progress" is now a toggleable feature',
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"You can now unfavorite or favorite hidden moderated Roblox items",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed experience playtime not showing if you haven't played in the last 14 days",
						"Fixed appearance of Private Notes on experience pages with BTRoblox enabled",
						"Fixed Price Chart on item pages not updating the quantity sold axis when changing the time selection",
						"Fixed a bug where not all dependencies were sometimes not shown on the item page",
					],
				},
				{
					title: "Translations",
					list: [
						<>
							Added translations for French, thanks to
							contributions through our{" "}
							<a href="https://crowdin.com/project/roseal">
								Crowdin
							</a>
							.
						</>,
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.5",
		platforms: ["Chrome", "Edge"],
		published: new Date(1735346965659),
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						"Fixed the inventory Badges notice covering the whole page in some cases",
						"Fixed removing Private Server Links replacing all links with the link that was supposed to be removed",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.4",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		published: new Date(1734743202436),
		content: {
			summary:
				'This release contains a bug fix for "Remove Follower" not working on user profile pages.',
		},
	},
	{
		majorVersionName: "Gaia",
		name: "2.0.3",
		placementIncrement: 1,
		platforms: ["Chrome", "Edge"],
		published: new Date(1734638076968),
		content: {
			summary:
				"This release contains a new feature, bug fixes, and performance improvements.",
			sections: [
				{
					title: "Features",
					list: [
						"Show more price chart data on avatar items",
						"Community wikis can now be marked as Official in community wiki links",
						"Added created/updated dates on experience events, and looks pages",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed a bug where the Favorites button on item pages would constantly move down when fields were added",
						"Fixed previous usernames modal list going off-screen",
						"Fixed Asset Dependencies thumbnails not loading if there is at least one MeshHiddenSurfaceRemoval",
						"Fixed Asset Dependencies not loading on Firefox",
						"Fixed experience badges list trunucating the badge descriptions to one line if there was a comparison",
						'Fixed "View Localized Metadata" button not working on some experiences with Chinese localization',
						'Fixed a crash when "Replace all text with text from a certain animal" and "Override the resolution of all images" are enabled',
						"Fixed the Favorites sort on the home page not loading in some cases with Full favorited experience list enabled in Sorts Layout CUstomization",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Item statuses, item tags, and the blocked item screen has now been added to hidden avatar items",
						'Experience badges list now shows the username of who was awarded the badge instead of showing "You"',
						"All Join Server buttons on experiences that you have been banned from now are hidden",
						"Hidden items that you no longer own can now be removed from your collection",
						"Optimized parts of the extension, this should not be noticeable to most users",
						"Online friends in the experience places tab now update in real-time",
					],
				},
			],
		},
	},
	{
		published: new Date(1733738129534),
		majorVersionName: "Gaia",
		name: "2.0.2",
		platforms: ["Chrome", "Firefox", "Edge"],
		placementIncrement: 1,
		content: {
			summary:
				"This release contains a bug fix for the Customize Sorts Layout button not being clickable with RoPro enabled.",
		},
	},
	{
		published: new Date(1733737501800),
		majorVersionName: "Gaia",
		name: "2.0.1",
		platforms: ["Chrome"],
		placementIncrement: 1,
		content: {
			summary: "This release contains new features and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Focus the search bar when pressing the slash key",
						"Hide the Customize Sorts Layout button on the home page",
						"Clickable button to view past usernames modal",
						"Increase width of the accounts switcher popover",
						'"In Restricted Server" no longer disables the "Join" button',
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Added a search query to link keyword feature searches in RoSeal settings",
						'"Search Creator in Marketplace" now only shows if the creator has updated an item in the past year',
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed the Roblox settings popover being moved too much to the right in some cases",
						"Fixed tab overflow on community pages",
						"Fixed RoSeal features not working in BTRoblox's user inventory frame",
						"Fixed image resolution override causing the experience icon on event pages to be an incorrect size",
						"Fixed experience Private Notes freezing the page when inputting any key",
						"Fixed RoSeal subfeatures divider bad showing when they are no subfeatures with the search keyword",
						"Fixed Chat sorts causing Chat to never load more than 50 users",
						"Fixed overriding expand home content not switching the experience thumbnail sizes",
						"Fixed Show Universe ID/Show Shop ID not working with BTRoblox",
						"Fixed Charts filters not working",
						"Fixed experience concurrent player count initially showing NaN when RoGold is enabled",
						"Fixed option groups background color on RoSeal dropdowns",
						"Fixed Shop Creator in Marketplace causing overflow with RoPro elements on the user profile page",
					],
				},
			],
		},
	},
	{
		published: new Date(1733338800000),
		majorVersionName: "Gaia",
		name: "2.0.0",
		platforms: ["Chrome", "Edge"],
		placementIncrement: 3,
		content: {
			summary:
				"RoSeal 2.0 (Gaia) has released! Mostly everything has been written from the ground up again, and added a ton of new features. The list of changes here is not the full list of changes.",
			sections: [
				{
					title: "New Features",
					list: [
						"Override the maximum amount of Friends rows on your home page",
						"Customize the layout of home sorts",
						"Override whether the home page is using the fill width of the page",
						"Include Verified/Premium badge in refreshed home user header",
						"Customizable greeting text in refreshed home user header",
						"Experience stats tooltips",
						"View countries that an experience is restricted in",
						"View an experience's supported devices",
						"View user's total time spent the last 14 days or 28 days in an experience",
						"Experience restricted screen",
						"Disable autoplay for carousel videos on the experience details page",
						"Use ad-less mirror for Community Wiki fandom wikis (breezewiki.com)",
						"Check experience ban status",
						"Grid layout for improved experience badges tab",
						"View places under an experience",
						"Check if you are unable to join a user from friend lists and profiles",
						"Generate and handle friend links",
						"Force enable viewing user inventory badges",
						"Show the date of when an inventory item was first obtained",
						"Link to a user's Marketplace items on the user's profile",
						"Preview user description filtered text",
						"User viewer/viewee blocked screen",
						"Show user past username count",
						"Search bar for community store items",
						"Show community previous name count",
						"Hide the community events tab if there are no events",
						<>
							<span class="beta-feature-label">BETA</span>{" "}
							Seamless navigation of avatar items
						</>,
						"View the item tags on avatar items",
						"View the price of avatar items that you own",
						"View sale counts of items that you can access",
						"Automatically discover and update accounts in Accounts Manager",
						"Show navigation item as authenticated user pill in Accounts Manager",
						"Update other tabs when the Roblox account is switched or logged out in Accounts Manager",
						"Show age bracket in authenticated user pill in Accounts Manager",
						"Share links for experiences, items, and your profile",
						"Clear Roblox's local cache automatically when storage fills up",
						"Hash navigation in transactions page",
						"Link to the Creator Dashboard instead of the Creator Hub in the navigation bar",
						"Show pending Robux count next to Robux balance",
						"Add user favorites item to the left navigation",
						"Change default inventory tab in the left navigation",
						"Change default messages tab in the left navigation",
						"Hide unread message notifications count",
						"Fix Avatar Marketplace off sale filter",
						"Show the price floor of the avatar item type",
						"Hash navigation in the Avatar Customization page",
						"Unlock accessory and layered clothing wearing limits in the Avatar Customization page",
						"Advanced customization in the Avatar Customization page",
						"Override the resolution of all images",
						"[UNSTABLE] Disable page font resizing",
						"Redirect to main experience details from deeplink page in fix experience deeplinks",
						"View experience's internal shop ID in the experience details page",
						"Show player channel name in experience launcher",
						"View internationalized media in view item's media assets and icon asset",
						"Switch the theme of the website from the navbar",
						"View Roblox session metadata in a modal",
						"Show community agent ID (internal user ID)",
						"RoSeal test pages (/seals, /no-seals)",
						"RoSeal Reference pages (/reference/icons)",
						"Override Roblox experiments",
					],
				},
				{
					title: "Feature Changes",
					list: [
						"You can now drag-and-drop accounts in Accounts Manager",
						"View an experience's developer products in its store now includes an External Sale Status filter for an upcoming Roblox update",
						"Syncing browser theme to the website theme can now be configured in the Roblox settings page under Theme",
						"Better Notfication Preferences now includes Community Notifications",
						"Several new styling fixes in the styling fixes feature",
						"You can now configure displayed time/tooltip text time types individually for Avatar Items, Experiences, Creator Items, Experience items, user profiles, and community profiles",
						'Persist transactions selection after exiting the page is now dependent on "Hash navigation in transactions page" being enabled',
						"View hidden avatar now partially works for hidden bundles",
						"Blocked items now allows to block avatar items, creators, and description keywords",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Added search function to RoSeal features page",
						"Data management and new I18n overrides can now be found in the RoSeal settings page instead of the RoSeal popup",
					],
				},
				{
					title: "Other",
					list: [
						<>
							Web Request API and Declarative Net Request API
							permissions have been added as required permissions.
							For information about why and how they're used,
							please see the{" "}
							<a href="/privacy-policy">RoSeal Privacy Policy</a>.
						</>,
					],
				},
			],
			footer: (
				<>
					Did you know? Gaia is actually the name of a young seal born
					in the Fisheries and Maritime Museum in Denmark who is the
					first recorded Gray Seal and Harbor Seal hybrid. You can
					learn more about her in this page:{" "}
					<a href="https://fibsh-awards.tumblr.com/sealgallery#Gaia%20from%20the%20Denmark%20Maritime%20Museum:~:text=Gaia%20from%20the,the%20aquarium%20window.">
						https://fibsh-awards.tumblr.com/sealgallery
					</a>
					<br />
					Each major version of RoSeal takes on the name of a real
					seal.
				</>
			),
		},
	},
];

export const mizoreVersions: Version[] = [
	{
		published: new Date(1732582444775),
		majorVersionName: "Mizore",
		name: "1.3.50",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a fix for communities features not working on the new /communities/ links.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1731752316662),
		majorVersionName: "Mizore",
		name: "1.3.49",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a bug fix for developer products on experience pages not appearing.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1731566730818),
		majorVersionName: "Mizore",
		name: "1.3.48",
		platforms: ["Chrome", "Edge"],
		content: {
			summary:
				"This release contains a removal for the pin unlock requirement when force unfollowing users.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1729228301658),
		majorVersionName: "Mizore",
		name: "1.3.47",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				'This release contains a change to RoSeal\'s "Delete from Inventory" button and a bug fix for BTRoblox compatibility.',
			sections: [
				{
					title: "Features",
					list: [
						'RoSeal\'s "Delete from Inventory" button now has a 5 second delay instead of requiring arbitrary two-step verification',
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed BTRoblox's friends list not working with RoSeal installed",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1728521113727),
		majorVersionName: "Mizore",
		name: "1.3.46",
		platforms: ["Chrome", "Edge", "Firefox"],
		content: {
			summary:
				"This release contains a fix for RoSeal features not working correctly after the Roblox outage on October 8th, 2024.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1723477185440),
		majorVersionName: "Mizore",
		name: "1.3.45",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						"Fixed RoSeal overriding context menus",
						"Fixed blocking experiences not correctly working with some users",
						"Fixed Chat oldest/newest sort filters not working",
						"Fixed viewing the voice chat restoration date",
						"Fixed Discover filters not working correctly when Roblox's filters exist",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1721777647299),
		majorVersionName: "Mizore",
		name: "1.3.44",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary: "This release contains bug fixes and feature removals.",
			sections: [
				{
					title: "Removed Features",
					list: [
						"Removed the disabled 'Non-curated Continue sort\"",
						'Removed the now redundant "Hide models from the creations tab on your profile"',
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed some RoSeal features not working on the renamed Charts page",
					],
				},
				{
					title: "Other",
					list: [
						"RoSeal now uses the newer user blocking APIs and favorites pagination",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1720756013266),
		majorVersionName: "Mizore",
		name: "1.3.43",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a bug fix for deleting items that use the newer purchasing system.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1716272229266),
		majorVersionName: "Mizore",
		name: "1.3.42",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a new feature and a fix for RoSeal's skin tone color picker..",
			sections: [
				{
					title: "Features",
					list: [
						"Use Creator Store instead of Legacy Library for linking assets",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fix for RoSeal's skin tone color picker not updating in some cases",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1716272229266),
		majorVersionName: "Mizore",
		name: "1.3.41",
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains adjustments and small fixes to RoSeal's skin tone color picker.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1715924835994),
		majorVersionName: "Mizore",
		name: "1.3.40",
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains the ability to set hex body colors.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1714387653887),
		majorVersionName: "Mizore",
		name: "1.3.38",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a major performance improvement and bug fixes for the Experience Events and Move Report Abuse Button features.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1714034933650),
		majorVersionName: "Mizore",
		name: "1.3.37",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains bug fixes for experience details features.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1712892787341),
		majorVersionName: "Mizore",
		name: "1.3.36",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary: "This release contains new features, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Put home friends carousel at top",
						"Avatar thumbnail type setting for home header",
						"Option to disable the light gray background on the home header avatar thumbnail",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed locale variants like en-AU falling back to the second locale despite there being an English localization",
						"Fixed and moved language switcher to RoSeal settings",
						"Fixed some cases where the Roblox website will get ratelimited and error in specific places with RoSeal",
						"Fixed same-width home grid items not showing correctly on 16:9 thumbnail tiles",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1712430736888),
		majorVersionName: "Mizore",
		name: "1.3.35",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains new features, a QoL fix, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						'Move "Continue" home sort to the top',
						"Set home header avatar headshot size",
						"Fix experience deeplinks",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						'RoSeal\'s links will now link to Creator Store instead of the legacy library when "View offsale Store assets" is enabled',
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed hiding phone number verification for voice chat upsell",
						"Fixed better experience notifications list",
						"Fixed @-mentions not working on avatar items",
						'Fixed duplicate guilded banners showing when switching between groups with "Refreshless Group Navigation" enabled',
						"Fixed future cases for home sort modification where the friend carousel may not be at the top",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1711207997105),
		majorVersionName: "Mizore",
		name: "1.3.33",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				'This release contains a fix for non-hidden items appearing as "Hidden" in the Avatar and Inventory pages.',
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1711116377505),
		majorVersionName: "Mizore",
		name: "1.3.32",
		platforms: ["Chrome"],
		content: {
			summary: "This release contains a QoL fix, and bug fixes.",
			sections: [
				{
					title: "QoL Fixes",
					list: [
						'"Hidden Avatar Assets" can now be viewed in the Inventory and avatar customization page',
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed navigating group tabs bugging out with refreshless group navigation",
						"Fixed developer product links not showing properly on small screens in Transactions",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1710758897345),
		majorVersionName: "Mizore",
		name: "1.3.31",
		platforms: ["Chrome", "Edge"],
		content: {
			summary:
				"This release contains a new feature, a QoL fix, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"View avatar asset dependencies",
						"Non-Fandom and other Fandom wikis are now supported for the View Unofficial Community wiki button",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Developer Product purchases in transactions are now clickable",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed product information not appearing on bundles",
						"Fix for an upcoming Roblox update involving all items getting Collectible Item IDs",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1710057166626),
		majorVersionName: "Mizore",
		name: "1.3.30",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary: "This release contains a new feature and bug fixes.",
			sections: [
				{
					title: "Features",
					list: ["Avatar item off sale timers"],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed Discover experience carousel back button going all the way back",
						"Fixed RoSeal user page features not working",
						"Fixed adding old private server links (made before 2019) in Private Server Links section",
						"Fixed group creators showing as users in the created date for avatar assets",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1709558890577),
		majorVersionName: "Mizore",
		name: "1.3.29",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains new features, a QoL fix, a internationalization fix, and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						"Experience release/update/event countdowns with automatically refreshing play button",
						"Suggestion to use exact name searching on the Discover page",
						"Viewing hidden avatar assets is now stable",
					],
				},
				{
					title: "QoL Fixes",
					list: ["More improvements to request caching"],
				},
				{
					title: "Internationalization",
					list: [
						"Fixed Developer Products showing the name instead of the display name",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						'Fixed "Add Pass" button not linking to the correct page',
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1708993612270),
		majorVersionName: "Mizore",
		name: "1.3.28",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains new features, support for upcoming locale in URL change by Roblox, QoL fixes, internationalization fixes, and a bug fixe.",
			sections: [
				{
					title: "Features",
					list: [
						"Better experience notifications list",
						"Add bundles to your profile collection",
						"Replace the error image on error pages with the error image from the legacy Developer Hub",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						'"Private Note" and "Universe ID" are now properly visually separated from the description with BTRoblox installed',
						"When enabling a feature with optional permissions that are not granted, you will now be prompted to optionally grant them",
						"Improved request caching",
					],
				},
				{
					title: "Internationalization",
					list: [
						"Added support for upcoming locale in URL change by Roblox",
						"Robux count on Passes, Developer Products and hidden avatar asset page are now localized",
						"Developer Product page now uses the localized name, description, and icon",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed hidden avatar asset page not working for some deleted items",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1708285242561),
		majorVersionName: "Mizore",
		name: "1.3.27",
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a fix for RoSeal crashing the Creator Store website.",
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1708151920931),
		majorVersionName: "Mizore",
		name: "1.3.26",
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains a new feature, feature removal, BTRoblox compatibility fix, and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						{
							title: "(BETA) View details of hidden avatar assets",
							list: [
								'You can also grant the "Web Request" permission to automatically redirect to the RoSeal page to view details of hidden avatar assets instead of to the Marketplace',
							],
						},
						"Removed followed experiences list as there is now a native feature by Roblox to view your followed experiences",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						'Fixed "Disable Marketplace infinite scrolling" not working',
						"Fixed BTRoblox compatibility issues that have existed since 1.3.16",
					],
				},
			],
		},
		placementIncrement: 1,
	},
	{
		published: new Date(1707859910372),
		majorVersionName: "Mizore",
		name: "1.3.25",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						"Fixed the Chat widget not working correctly on custom RoSeal pages",
						"Fixed Discover Filters not working on the search page",
						'Fixed collapsing "Recommended For You" sortless grid',
						"Fixed a case where if an item went onsale in the past, viewing the bundle(s) that it is associated with would not appear",
					],
				},
			],
		},
	},
	{
		published: new Date(1707542945622),
		majorVersionName: "Mizore",
		name: "1.3.24",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a new feature, Groups Organization search, a QoL fix, and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						"Override the layout styles of home sorts",
						"You can now search your joined groups with Groups Organization enabled",
					],
				},
				{
					title: "Qol Fixes",
					list: [
						"Avatar restricted text on experience details is no longer as instrusive",
					],
				},
				{
					title: "Bug Fixes",
					list: ["Fixed some home sort tile images not appearing"],
				},
			],
		},
	},
	{
		published: new Date(1707105383354),
		majorVersionName: "Mizore",
		name: "1.3.23",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox"],
		content: {
			summary: "This release contains 2 new features, and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						"Force home page grid sorts into a sort carousel",
						"Force home page grid items to be the same size as carousel items",
					],
				},
			],
		},
	},
	{
		published: new Date(1706722891140),
		majorVersionName: "Mizore",
		name: "1.3.22",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a new feature, Groups Organization rewrite, a QoL fix, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Set visibility of your Models & Packages collection on your profile. More details can be found in the extension",
						"Groups Organization drag and drop logic has been rewritten and is getting ready for a stable release",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Developer Product details pages now include the associated universe and creator if linked from the associated universe",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						'Fixed "Recommended For You" sort grid not showing on the home page',
						'Fixed cases where RoSeal would display "60 minutes ago", "24 hours ago", or "60 seconds ago" with relative dates',
						'When bringing the "Favorites" sort on the Home page to below "Continue", if "Continue" doesn\'t exist then it will put the sort at the very top',
					],
				},
			],
		},
	},
	{
		published: new Date(1706199731142),
		majorVersionName: "Mizore",
		name: "1.3.20",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains a fix for viewing certain off sale items in the Creator Store.",
		},
	},
	{
		published: new Date(1706104803582),
		majorVersionName: "Mizore",
		name: "1.3.19",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a new feature, QoL fixes, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: ["View bundle(s) that an item is part of"],
				},
				{
					title: "QoL Fixes",
					list: [
						"Fixed some styling issues and misalignment",
						"Improved passes (with filtering enabled)/developer products paging logic",
						"Groups Organization groups list now includes locked groups",
						"Exporting/importing storage now omits Accounts Manager cookies due to browser session locking",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed viewing off sale items in the Creator Store",
						"Fixed duplicate group wall paginators",
						"Fixed Discover filters not working correctly after a recent Roblox update",
						'Fixed "Followed Experiences" list not showing after a recent Roblox update',
					],
				},
			],
		},
	},
	{
		published: new Date(1705228691881),
		majorVersionName: "Mizore",
		name: "1.3.18",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a bug fix for RoSeal settings for some users.",
		},
	},
	{
		published: new Date(1704888830429),
		majorVersionName: "Mizore",
		name: "1.3.17",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains a bug fix for when there are no followed experiences.",
		},
	},
	{
		published: new Date(1704791067377),
		majorVersionName: "Mizore",
		name: "1.3.16",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains new features, QoL fixes, and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						"View the experiences you're following in the Notifications tab in settings",
						"Show the user who created avatar items if the creator does not match the uploader",
						"Removed forcing home page sorts into a genre explorer",
						'"Hide 0 Robux transactions" now only shows in the Group revenue tab',
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Switching from RoSeal settings to Roblox Settings is now seamless",
						"Performance improvement on Chromium-based browsers",
						"On Off Sale Creator Marketplace pages, the asset type will now always be displayed properly",
					],
				},
			],
		},
	},
	{
		published: new Date(1702891002433),
		majorVersionName: "Mizore",
		name: "1.3.15",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary: "This release contains a new feature.",
			sections: [
				{
					title: "Features",
					list: [
						"View the Creator Marketplace page of Off Sale items",
					],
				},
			],
		},
	},
	{
		published: new Date(1702891002433),
		majorVersionName: "Mizore",
		name: "1.3.14",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary: "This release contains a new feature and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						"View the last user who updated a group-owned avatar asset",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						'Fixed passes pagination with the "Filtering options in experience store tab" feature',
					],
				},
			],
		},
	},
	{
		published: new Date(1700579348816),
		majorVersionName: "Mizore",
		name: "1.3.13",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a new feature, QoL fixes, and a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						"The ability to add group-owned experiences of groups you own to your profile",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						'When using fast free purchase, there is now "loading" feedback when the item is being purchased',
						"Error feedbacks from fast free purchase are now more user friendly",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						'Fixed "Subscriptions" not appearing under "Developer Products" on experience pages',
					],
				},
			],
		},
	},
	{
		published: new Date(1699252426469),
		majorVersionName: "Mizore",
		name: "1.3.12",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a fix for the refresh button placement on avatar items.",
		},
	},
	{
		published: new Date(1698328397565),
		majorVersionName: "Mizore",
		name: "1.3.11",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a compatibility fix for the new Roblox user profile header.",
		},
	},
	{
		published: new Date(1697403268255),
		majorVersionName: "Mizore",
		name: "1.3.9",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox"],
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						"Fixed bugs with the new private server links in the Private Server Links section",
						'Fixed Account Manager\'s "Remove Account" logging out the authenticated user',
					],
				},
			],
		},
	},
	{
		published: new Date(1697330224090),
		majorVersionName: "Mizore",
		name: "1.3.8",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains a new feature, QoL fixes, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						'Support for new Private server links for "Private Server Links" feature',
						"Force wallet amount to only show in the Robux dropdown",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						'Bundle subcategories are now supported in "Search Items by Creator"',
						'Improved changing Created and Updates time with the "Change time type" feature',
					],
				},
				{
					title: "Bug Fixes",
					list: [
						'Fixed some non-deleteable asset types showing "Delete from Inventory"',
						"Fixed CSS styles not being disabled when a feature is disabled",
					],
				},
				{
					title: "mreow mreow",
				},
			],
		},
	},
	{
		published: new Date(1693771686257),
		majorVersionName: "Mizore",
		name: "1.3.7",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary: "This release removes a feature and contains a bug fix.",
			sections: [
				{
					title: "Features",
					list: [
						'Removed "Better Robux Navigation", this fixes a bug with RoSeal hiding the new Robux menu',
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed developer product page loading indefinitely on invalid developer product IDs",
					],
				},
			],
		},
	},
	{
		published: new Date(1692252063999),
		majorVersionName: "Mizore",
		name: "1.3.6",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary: "This release contains minor bug fixes.",
		},
	},
	{
		published: new Date(1691477545730),
		majorVersionName: "Mizore",
		name: "1.3.5",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary: "This release contains a new feature.",
			sections: [
				{
					title: "Features",
					list: [
						"You can now switch RoSeal's language in the extension popup from the extension toolbar",
					],
				},
			],
		},
	},
	{
		published: new Date(1690950368436),
		majorVersionName: "Mizore",
		name: "1.3.4",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary: "This release contains bug fixes.",
			sections: [
				{
					title: "Bug Fixes",
					list: [
						"Fixed challenge HTTP 403 errors still appearing with fast free purchase",
						"Fixed popup/options not appearing correctly",
					],
				},
			],
		},
	},
	{
		published: new Date(1690761832642),
		majorVersionName: "Mizore",
		name: "1.3.2",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains new features, new translations, QoL fixes, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Show the Roblox Machine ID on error pages",
						'Force "unnecessary" home sorts into a Genre explorer',
						"Re-enabled \"Put home 'Favorites' sort at top\" and made it disabled by default.",
						'Added "Device Type" (Firefox only) and "Ages" filters to Discover filters',
					],
				},
				{
					title: "Translations",
					list: [
						<>
							RoSeal has been translated to Russian thanks to{" "}
							<a
								href="https://github.com/Flaryanlxrd"
								target="_blank"
								rel="noreferrer"
							>
								Flaryanlxrd
							</a>
							.
						</>,
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Discover filters section is no longer an eye sore.",
						'Tab name is now updated when switching between groups with "Refreshless Group Navigation" enabled',
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed home header styling affecting RoGold Ultimate's home header.",
						'Fixed "Refreshless Group Navigation" updating incorrectly when navigating through group experiences with BTRoblox',
						'Fixed freezing on the users friends page when "Show username in user\'s friends page title" is enabled',
						{
							title: "Fixed fast free purchase's error handling to handle any type of challenge, Captchas are not bypassed.",
							list: [
								"Most of the time, Captcha challenges requiring user input aren't required until you hit a certain threshold of purchase attempts within a specific amount of time. RoSeal does not control this.",
								'Purchase attempts by Roblox still display an error with "Challenge is required to authorize this request", however, the Captcha should still be handled regardless, even if user input isn\'t required. This will be fixed in the next release, 1.3.4.',
							],
						},
					],
				},
			],
		},
	},
	{
		published: new Date(1687336760561),
		majorVersionName: "Mizore",
		name: "1.3.1",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a fix for a bug with importing private server links.",
		},
	},
	{
		published: new Date(1687297387520),
		majorVersionName: "Mizore",
		name: "1.3.0",
		placementIncrement: 2,
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains new features, new translations, QoL fixes, bug fixes, and other changes.",
			sections: [
				{
					title: "Features",
					list: [
						{
							title: "Private Server Links section",
							list: [
								"You can add, import, export, and join them on the same page",
								<>
									<b>BETA (firefox only)</b>: Try to
									automatically resolve the private server
									link owner
								</>,
							],
						},
						'"Avatar Restricted" text above the Join button can now be disabled with its own feature switch',
						"More badge statistics on badge page",
						"Choose the types of names that appear on the home header",
						'"Refreshless Group Navigation" is now stabilized and enabled by default.',
						"Change the time type of tooltips",
						"Voice Chat suspension details as a modal and showing the full date of suspension in the Roblox privacy settings",
						'"Force Unfollow" is now on user profile pages',
						"Remove phone number upsell",
						'Remove "Friend Activity" label on experiences',
						{
							title: 'Full "Favorites" home sort',
							list: [
								"Usually, the Favorites home sort is limited to up to 50 experiences",
							],
						},
						'"Search More By This Creator" button',
						"Hide messages count in navigation bar",
					],
				},
				{
					title: "Translations",
					list: [
						<>
							RoSeal has been translated to Thai thanks to{"  "}
							<a
								href="https://github.com/RoSeal-Extension/I18n/pull/14"
								target="_blank"
								rel="noreferrer"
							>
								this Github pull request
							</a>
						</>,
					],
				},
				{
					title: "QoL Fixes",
					list: [
						'"Avatar Restricted" label now shows more details on hover.',
						"New options page, it will be opened when required, i.e. missing permissions or requesting permissions.",
						"Added some more website styling fixes",
						'"Avatar Type" in experience statistics will now stay on the same row on medium+ devices.',
						"The amount of inactive badges will now be displayed in the Experience Badges section",
						'Badges, Developer Products, and Experience Private Notes will now "linkify" links, and format @-mentions, user, and group links with Item Mentions enabled',
						"Extension popup themes/sync themes feature will now update the theme in real-time",
						"Chat conversations now show up on custom RoSeal pages",
						"Rewrote RoSeal settings feature switches tabs, they will now show under the parent tab at all times instead of to the right when hovering over the parent tab",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed Groups Organization groups list loading indefinitely",
						"Fixed an issue where if a mentioned user using link mentions does not exist the text will be removed",
						"Fixed alerts and experience wikis not working correctly on Firefox",
						"Fixed RoPro incompatibility with the home header",
						"Fixed RoSeal popovers still clickable after fading out",
						"Fixed user's friends page title not correctly updating",
						"Fixed Group Organization groups list not updating after leaving or joining a group",
						"Fixed accurate continue sort not getting the user's blocked experience information",
					],
				},
				{
					title: "Other",
					list: [
						"Features can now be marked as discontinued if Roblox implements a RoSeal feature natively",
						"New flags system for disabling/enabling certain functionalities, similar to disabled features but not as critical to get.",
					],
				},
			],
		},
	},
	{
		published: new Date(1683033058538),
		majorVersionName: "Mizore",
		name: "1.2.10",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary: "This release contains higher resolution icons.",
		},
	},
	{
		published: new Date(1682997058538),
		majorVersionName: "Mizore",
		name: "1.2.9",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains the return of a feature and a bug fix.",
			sections: [
				{
					title: "Features",
					list: ['Brought back "Accurate non-curated Continue sort"'],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed duplicate Updated/Created/Collectible Item ID/Collectible Item Product ID fields on avatar items",
					],
				},
			],
		},
	},
	{
		published: new Date(1682484941211),
		majorVersionName: "Mizore",
		name: "1.2.8",
		placementIncrement: 1,
		platforms: ["Chrome", "Edge"],
		content: {
			summary:
				"This release contains a feature removal, new translations, and QoL fixes.",
			sections: [
				{
					title: "Features",
					list: [
						'Removed "Accurate non-curated Continue sort" temporarily, this will be brought back in a future release',
					],
				},
				{
					title: "Translations",
					list: [
						<>
							RoSeal has been translated to French and Brazilian
							Portuguese (thanks to these pull requests for{" "}
							<a href="https://github.com/RoSeal-Extension/I18n/pull/6">
								French
							</a>{" "}
							and{" "}
							<a href="https://github.com/RoSeal-Extension/I18n/pull/7">
								Brazilian Portuguese
							</a>
							). RoSeal has an open crowd-sourced
							internationalization Github repository that anyone
							can contribute to:{"  "}
							<a href="https://github.com/RoSeal-Extension/I18n">
								Link
							</a>
						</>,
					],
				},
				{
					title: "QoL fixes",
					list: [
						"Made fast free purchase system feedbacks more clear",
						"It is now possible to revoke the optional Cookies permission",
					],
				},
			],
		},
	},
	{
		published: new Date(1681913090329),
		majorVersionName: "Mizore",
		name: "1.2.7",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a feature removal, new translations, QoL fixes, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: ['Removed "Update account country"'],
				},
				{
					title: "Translations",
					list: [
						<>
							RoSeal has been translated to Spanish (thanks to{" "}
							<a href="https://github.com/RoSeal-Extension/I18n/pull/3">
								Furrycality
							</a>
							). RoSeal has an open crowd-sourced
							internationalization Github repository that anyone
							can contribute to:{"  "}
							<a href="https://github.com/RoSeal-Extension/I18n">
								Link
							</a>
						</>,
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Added system feedback for ratelimiting and purchasing errors to fast free purchase",
						"Made fast free purchase a bit more stable",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed freezing a developer product's page when the name contained 2 or more spaces",
						'Fixed duplicate "Delete from Inventory" on item pages',
						"Fixed chat sort types not working correctly",
						"Fixed BTRoblox incompatibility",
						"Fixed previous group names not updating when switching groups with refreshless group navigation",
					],
				},
			],
		},
	},
	{
		published: new Date(1681740030177),
		majorVersionName: "Mizore",
		name: "1.2.6",
		placementIncrement: 1,
		platforms: ["Firefox", "Edge"],
		content: {
			summary: "This release contains a bug fix for Group Organization.",
			sections: [
				{
					title: "Bug Fixes",
					list: ["Fixed drag and drop in Group Organization"],
				},
			],
		},
	},
	{
		published: new Date(1681553837156),
		majorVersionName: "Mizore",
		name: "1.2.5",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary: "This release contains new features, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Fast Free item purchasing",
						"Refresh avatar item details button",
						"Show additional item product info",
						"EXPERIMENTAL Marketplace color filters",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						'Fixed "Delete from Inventory" appearing on collectible (Limited U) items',
						'Fixed events tab showing "No events available." despite there being events',
						"Fixed cases where presence registration with display as offline on website continues",
						"Fixed created/updated fields not appearing on Roblox-created passes",
					],
				},
			],
		},
	},
	{
		published: new Date(1680507979307),
		majorVersionName: "Mizore",
		name: "1.2.4",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains a new feature, bug fixes, and an other change.",
			sections: [
				{
					title: "Features",
					list: [
						"(Beta) Refreshless drag-and-drop groups and pending groups navigation",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed feature toggles not updating correctly",
						"Fixed unlock PIN prompt showing at incorrect times on profile",
					],
				},
				{
					title: "Other",
					list: [
						<>
							RoSeal alerts system for Privacy policy updates and
							regular alerts from{" "}
							<a href="https://data.roseal.live/v1/alerts.json">
								https://data.roseal.live/v1/alerts.json
							</a>
							. Alerts will not be made unless necessary.
						</>,
					],
				},
			],
		},
	},
	{
		published: new Date(1679916547639),
		majorVersionName: "Mizore",
		name: "1.2.3",
		placementIncrement: 1,
		platforms: ["Edge"],
		content: {
			summary:
				"This release contains new features, feature stability, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Various styling fixes, this was previously forced without a feature switch for it",
						<>
							Experience wikis are now dynamically imported from{" "}
							<a href="https://data.roseal.live/v1/experience_wikis.json">
								https://data.roseal.live/v1/experience_wikis.json
							</a>
						</>,
						'Accurate "Continue" home page sort',
						"Move experience events to it's own tab",
						'"Discover filters" moved from Experimental to Beta',
						'"Item mentions" stabilized',
					],
				},
				{
					title: "Bug Fixes",
					list: ["Fixed Created/Updated fields on marketplace items"],
				},
			],
		},
	},
	{
		published: new Date(1679118925757),
		majorVersionName: "Mizore",
		name: "1.2.1",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains new features, feature stability, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						'Re-enabled "Delete from Inventory" with adjustments',
						'"Better experience badges" and "Block experiences" are now marked as stable',
						"Ability to disable RoSeal settings in settings dropdown",
						"Home header birthday message confetti is now rate limited",
						"Added 11 new home page messages",
						"Reworked RoSeal's popup internally",
						"Group organization folders now persist their open state",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed incompatibility with BTRoblox with private notes on experiences",
						"Fixed incompatibility with RoPro with discover filters",
						"Fixed item mentions user/group tab links",
						"Fixed disabled features behavior",
						"Fixed RoSeal's popover/dropdown menus closing animations",
					],
				},
			],
		},
	},
	{
		published: new Date(1677877740872),
		majorVersionName: "Mizore",
		name: "1.2.0",
		placementIncrement: 2,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains new features, performance improvements, bug fixes, and other changes.",
			sections: [
				{
					title: "Features",
					list: [
						<>
							<b>EXPERIMENTAL</b> experience filtering on discover
							page
						</>,
						"Private experience notes",
						"Request Right-to-Erasure file button, with downloading and marking as read",
						"Warning in account settings to update your set country",
						"Avatar type label in experience details page",
						"Unlock pin modal prompts in some places if it doesn't exist",
						{
							title: "Hide private server transactions",
							list: [
								"Additionally, this new feature and 0 Robux transactions filters are now applied to Group Sales",
							],
						},
						"Rename users friends title to include the target username",
						'Removed rename "Events" to "Sponsored Events"',
					],
				},
				{
					title: "Performance Improvements",
					list: ["Sped up RoSeal settings render"],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed user friends context menu",
						"RoSeal now treats experience deeplink pages (/games/start) as regular experience pages",
					],
				},
				{
					title: "Other",
					list: [
						"Feature switches now list required permissions in a separate list from the description",
						<>
							Features can now be disabled globally from{" "}
							<a href="https://data.roseal.live/disabled_features.json">
								a remote file
							</a>{" "}
							if necessary
						</>,
						<>
							Internationalization (strings) are now open-source,{" "}
							<a href="https://github.com/RoSeal-Extension/I18n">
								click here to see the repository
							</a>
						</>,
					],
				},
			],
		},
	},
	{
		published: new Date(1676194300174),
		majorVersionName: "Mizore",
		name: "1.1.2",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox", "Edge"],
		content: {
			summary:
				"This release contains QoL fixes and bug fixes. If you use Edge or Opera, this release is for you, and you should update immediately.",
			sections: [
				{
					title: "QoL Fixes",
					list: [
						'Fixed "Add Pass" not showing in experience passes section if you\'re the creator of the experience',
						"Fixed contrast of the ALT text, View Thumbnail Asset tooltips on the experience details page on light theme",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed a bug breaking the Avatar Shop/Avatar item pages if Accounts Manager is enabled on Edge and Opera",
						"Fixed Developer product 404 page not being styled correctly",
					],
				},
			],
		},
	},
	{
		published: new Date(1675798585632),
		majorVersionName: "Mizore",
		name: "1.1.1",
		placementIncrement: 1,
		platforms: ["Chrome", "Firefox"],
		content: {
			summary:
				"This release contains new features, QoL fixes, performance improvements, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Experience badges sorts and filters",
						"Better experience media ALT text tooltip",
						"Show user's last online date in the stats box",
						"Hide friend requests count in navigation",
						"Change the default tab that the Friends navigation item navigates to",
						"Seals. Seals. Seals. Replace all images with seals",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						'Direct user lookup in passes and badges "View as" by pressing "Enter" to bypass filtering',
					],
				},
				{
					title: "Performance Improvements",
					list: [
						"Thumbnails from RoSeal features now take a lot less longer to load",
						"Home user header now loads almost instantly",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed experience badges localization",
						"Fixed user header birthday message not working",
					],
				},
			],
		},
	},
	{
		published: new Date(1673302219971),
		majorVersionName: "Mizore",
		name: "1.1.0",
		placementIncrement: 2,
		platforms: ["Chrome", "Firefox"],
		content: {
			summary:
				"This release contains new features, QoL fixes, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Better experience badges list",
						"Group organization customization",
						'"Hello, {displayName} greeting for home header',
						"Viewing developer products in experience store stabilized",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						'Changed "Logout" to "Remove", "Clear Current Cookie" to "Logout" in Accounts Manager',
						'Changed plain user id textbox to username textbox with search dropdown in experience store Passes section "View as user"',
						"Added dark mode support in extension popup",
						"Added import/export settings in extension popup",
						"Reworked pending group join requests UI",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed an issue where the last page in group wall pagination didn't actually prevent the user from going further",
						"Fixed unowned/owned filters not immediately updating in experience store Passes section",
						"Fixed chat sort filter not being applied to conversations when they are updated",
					],
				},
			],
		},
	},
	{
		published: new Date(1672476746043),
		majorVersionName: "Mizore",
		name: "1.0.4",
		placementIncrement: 1,
		platforms: ["Chrome"],
		content: {
			summary:
				"This release contains a new feature, a QoL fix, and bug fixes.",
			sections: [
				{
					title: "Features",
					list: [
						"Abiility to toggle easter eggs for the refreshed home header feature",
					],
				},
				{
					title: "QoL Fixes",
					list: [
						"Made the descriptions and names of some features more clear",
					],
				},
				{
					title: "Bug Fixes",
					list: [
						"Fixed Accounts manager displaying wrong message when the user is logged in with no accounts",
						'Fixed "View Media Asset" showing on video media in carousel with the view icon asset feature',
					],
				},
			],
		},
	},
	{
		published: new Date(1671994800000),
		majorVersionName: "Mizore",
		name: "1.0.0",
		placementIncrement: 3,
		platforms: ["Chrome"],
		content: {
			summary: (
				<>
					<b>It's finally the day</b>, RoSeal's release.
				</>
			),
			footer: (
				<>
					Did you know? Mizore was actually the name of a young seal
					born in the Osaka Aquarium in Japan. You can learn some more
					about him in{" "}
					<a href="https://www.asahi.com/ajw/articles/14421112">
						this article
					</a>
					.<br />
					Each major version of RoSeal takes on the name of a real
					seal.
				</>
			),
		},
	},
];
