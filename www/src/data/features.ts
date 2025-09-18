export type Feature = {
	id: string;
	title: string;
	description: string;
};

export const features: Feature[] = [];

export type FeatureType = "Regular" | "Beta" | "Experimental";

export type ListedFeatureSectionFeature = {
	type: FeatureType;
	name: string;
	description?: string;
};

export type ListedFeatureSection = {
	id: string;
	name: string;
	features: ListedFeatureSectionFeature[];
};

export const allListedFeatures: ListedFeatureSection[] = [
	{
		id: "sorts",
		name: "Home | Sorts",
		features: [
			{
				type: "Regular",
				name: "Override the maximum amount of Connections rows on your home page",
				description:
					"When enabled, allows you to override the amount of maximum Connections rows that can be displayed on your home page. There is currently a maximum of 50 Connections that can be shown.",
			},
			{
				type: "Regular",
				name: "Customize the layout of home sorts ",
				description:
					"When enabled, allows you to organize the sorts on your home page however you like. You can also modify other data for how each experience is displayed.",
			},
		],
	},
	{
		id: "misc",
		name: "Home | Miscellaneous",
		features: [
			{
				type: "Regular",
				name: 'Hide "Add Connections" button in connections list',
			},
			{
				type: "Regular",
				name: "Override whether the home page is using the fill width of the page",
			},
			{
				type: "Regular",
				name: "Refreshed home user header",
				description:
					"When enabled, brings back the user header to the home page with a few differences with customization.",
			},
			{
				type: "Regular",
				name: "Remove phone number upsell cards",
				description:
					"When enabled, the phone number upsell cards on the home page will be removed",
			},
		],
	},
	{
		id: "discovery",
		name: "Experiences | Charts",
		features: [
			{
				type: "Beta",
				name: "Experience charts filters",
				description:
					"When enabled, adds new filters to the experience charts page to filter by player count, favorites count, visits count, and age recommendations.",
			},
			{
				type: "Regular",
				name: "Suggest to use exact match in experience search",
				description:
					"When enabled, it will suggest using exact match when searching for experiences if the first few results do not include the search query.",
			},
		],
	},
	{
		id: "store",
		name: "Experiences | Store",
		features: [
			{
				type: "Regular",
				name: "View an experience's developer products in its store",
				description:
					"When enabled, adds a dropdown to the Store tab of an experience allowing you to view the developer products for that experience.",
			},
			{
				type: "Regular",
				name: "Experience store filtering",
				description:
					"When enabled, adds filters to the experience store page for Developer Products and Passes.",
			},
		],
	},
	{
		id: "stats",
		name: "Experiences | Statistics",
		features: [
			{
				type: "Regular",
				name: "Show experience recent upvote ratio",
				description:
					"When enabled, adds a recent upvote ratio to the experience details page. This also adds an all-time upvote ratio at the top of the upvote and downvote buttons. This feature uses data from Rolimons.",
			},
			{
				type: "Regular",
				name: "Live experience stats chart",
				description:
					"When enabled, adds a live stats chart to the experience details page above the statistics section. The data is fetched and stored on your machine in the current session , and updates much faster than 3rd-party site alternatives.",
			},
			{
				type: "Regular",
				name: "Experience stats tooltips",
				description:
					"When enabled, adds tooltips to the stats section on the experience details page to view the total numbers.",
			},
			{
				type: "Regular",
				name: "View countries that an experience is restricted in",
				description:
					"When enabled, adds a list under the age recommendation on the experience details page of the countries that the experience is restricted in.\n\nThis will not display if an experience is only supported in one country.",
			},
			{
				type: "Regular",
				name: "View an experience's supported devices",
			},
			{
				type: "Regular",
				name: "View an experience's allowed avatar types",
			},
			{
				type: "Regular",
				name: "View user's total time spent the last 14 days or 28 days in an experience",
				description:
					"When enabled, adds text under the experience title on the experience details page with the user's total time spent the last 14 days or 28 days in the experience. The data is fetched directly from Roblox and does not require having the extension installed previously for the data.",
			},
		],
	},
	{
		id: "events",
		name: "Experiences | Events",
		features: [
			{
				type: "Regular",
				name: "Move experience events to its own tab",
			},
			{
				type: "Regular",
				name: "Show updated and created dates on events pages",
			},
		],
	},
	{
		id: "details",
		name: "Experiences | Details",
		features: [
			{
				type: "Regular",
				name: "Show experience stats in a vertical layout",
			},
			{
				type: "Regular",
				name: "Experience restricted screen",
				description:
					"When enabled, if you can not access an experience it will show that it has been restricted instead of an error page.",
			},
			{
				type: "Regular",
				name: "Experience release/update/event countdowns",
				description:
					"When enabled, adds a countdown to the experience details page for when the experience is released, updated, or an event is happening. If the experience is currently unplayable and there is at least one event, the earliest event will be shown as the countdown. Some popular experiences will have a countdown manually set by the RoSeal developer.",
			},
			{
				type: "Regular",
				name: "Experience private notes",
				description:
					"When enabled, lets you write down private notes (visible to only you) on an experience's page.",
			},
			{
				type: "Regular",
				name: "Disable autoplay for carousel videos on the experience details page",
			},
			{
				type: "Regular",
				name: "Link a community wiki on the experience details page",
				description:
					"When enabled, adds a link that opens a community wiki on the experience details page. Only English wikis are currently supported.",
			},
			{
				type: "Regular",
				name: "Check experience ban status",
				description:
					"When enabled, blocks you from clicking the join button on experiences you are banned from.",
			},
			{
				type: "Regular",
				name: "Hide private servers section in About tab",
			},
			{
				type: "Regular",
				name: "Better experience media alt text button",
				description:
					"When enabled, adds a more visible alt text button to experience thumbnails with a tooltip on hover.",
			},
		],
	},
	{
		id: "badges",
		name: "Experiences | Badges",
		features: [
			{
				type: "Regular",
				name: "Show awarded statistics on the badge details page",
			},
			{
				type: "Regular",
				name: "Improved experience badges tab",
				description:
					'When enabled, adds a "Badges" tab to the experience details page. You can also compare 2 users\' badges and see when you obtained a badge.',
			},
		],
	},
	{
		id: "servers",
		name: "Experiences | Servers",
		features: [
			{
				type: "Regular",
				name: "Improved experience servers tab",
				description:
					"When enabled, replaces the entire Servers tab content with a version made for and optimized by RoSeal. This allows for much more customization options and features. It may conflict with other extensions.",
			},
			{
				type: "Regular",
				name: "Precreate experience private servers prior to experience release",
			},
			{
				type: "Regular",
				name: "Private server links section",
				description:
					'When enabled, adds a "Private Server Links" section to the servers tab. You can add private server links to it and import from/export to a data file.',
			},
		],
	},
	{
		id: "misc",
		name: "Experiences | Miscellaneous",
		features: [
			{
				type: "Regular",
				name: "View top songs played in an experience",
			},
			{
				type: "Beta",
				name: "Improved server join modal",
				description:
					"When enabled, overrides Roblox's join modal, server join, and authentication logic with ones made by RoSeal. This allows RoSeal to show the owner of private server links and the server's region.",
			},
			{
				type: "Regular",
				name: "Show Test Pilot experiment settings next to the Play button",
				description:
					"This feature is intended for Roblox engineers and people in the Roblox Research Panel.",
			},
			{
				type: "Regular",
				name: "View places under an experience",
				description:
					"When enabled, adds a tab to experience pages showing all places attached to the experience.",
			},
			{
				type: "Regular",
				name: "Show a banner when the experience is shadow banned from search on Roblox",
			},
			{
				type: "Regular",
				name: "Add community experiences to your profile",
				description:
					"When enabled, adds a button under the context menu (...) of experiences owned by communities that you are the owner of, which allows you to add the experience to your profile.",
			},
		],
	},
	{
		id: "friends",
		name: "Users | User Connections List",
		features: [
			{
				type: "Regular",
				name: "Improved user connections page",
				description:
					"When enabled, replaces the entire user connections page with a version made for and optimized by RoSeal. This allows for much more customization options and features. It may conflict with other extensions.",
			},
			{
				type: "Regular",
				name: "Last seen date of connections",
				description:
					"When enabled, shows the last time a connection was seen online on their user profile page. The extension records last seen online data locally, and does not record while your browser is closed",
			},
			{
				type: "Regular",
				name: "Check if you are unable to join a user from connection lists and profiles",
				description:
					"When enabled, blocks you from joining a user's server if you are unable to join it.",
			},
			{
				type: "Regular",
				name: "Generate and handle one-time use connection links",
				description:
					"When enabled, allows you to generate one-time connection links for anyone to use to become your connection. This also fixes connection links not correctly adding them as connections on the website.",
			},
			{
				type: "Regular",
				name: "Show more actions in the user's connections list",
				description:
					"When enabled, shows more actions like removing followers, blocking, unfollowing, and unfriending for users in the user's friend list page.",
			},
		],
	},
	{
		id: "inventory",
		name: "Users | User Inventory",
		features: [
			{
				type: "Regular",
				name: "View the date of when an item was favorited",
				description:
					"When enabled, the date that you favorited an item will be shown in the inventory.",
			},
			{
				type: "Regular",
				name: "Show the date of when an inventory item was first obtained",
				description:
					'When enabled, the date that each item and badge was first obtained will be shown in the inventory. This also adds a dropdown menu to every item\'s page under "Item Owned" that allows you to view the date that each instance was first obtained.',
			},
			{
				type: "Regular",
				name: "Obtained sort direction filter in user inventory",
			},
			{
				type: "Regular",
				name: 'Hide Free purchased places in user inventory "Purchased" category',
			},
			{
				type: "Regular",
				name: "View more types of items in the user inventory and favorites pages",
			},
		],
	},
	{
		id: "profile",
		name: "Users | User Profile",
		features: [
			{
				type: "Experimental",
				name: "Profile background customization",
				description:
					"When enabled, allows you to customize the background of your profile to be one of 7 basic colors. This feature also works in Roblox's app.",
			},
			{
				type: "Regular",
				name: "View locale on user profile page",
			},
			{
				type: "Regular",
				name: "Show obtained dates for Roblox badges on user profile on hover",
			},
			{
				type: "Regular",
				name: "Show obtained dates for Experience Badges on user profile on hover",
			},
			{
				type: "Regular",
				name: "Live user profile presence updates for all users",
			},
			{
				type: "Regular",
				name: "Show the Roblox administrator badge on user headers",
			},
			{
				type: "Regular",
				name: "Link to a user's Marketplace items on the user's profile",
				description:
					"Adds a link under a player's username on their profile to go to their marketplace items.  This won't show if they don't have any on-sale items.",
			},
			{
				type: "Regular",
				name: "Cancel outgoing connection requests",
			},
			{
				type: "Regular",
				name: "Show a confirmation modal before removing a connection",
			},
			{
				type: "Regular",
				name: "Remove follower from your followers",
				description:
					"When enabled, adds a dropdown button on the profiles of users that are following you, which will force them to unfollow you if clicked. This is done by blocking and unblocking the user, if your block list is full it will unblock someone random first, and block them again after removing the follower.",
			},
			{
				type: "Regular",
				name: "Preview a deleted user's profile",
				description:
					"When enabled, you can preview a deleted user's profile. This does not show any information other than name, and links to Rolimon's player profile page for more information about the user.",
			},
			{
				type: "Regular",
				name: "User profile button to switch between viewing portrait and full-body thumbnail",
			},
			{
				type: "Regular",
				name: "View the emotes a user has equipped",
			},
			{
				type: "Regular",
				name: "Add padding between sections on the user profile page",
			},
			{
				type: "Regular",
				name: "Preview user description filtered text",
				description:
					'When enabled, checks if text will be filtered when "Save" is clicked when editing the user\'s profile description. If it will be filtered, there will be a warning and partial moderation will show a preview of what the text will look like with moderation.',
			},
			{
				type: "Regular",
				name: "User viewer/viewee blocked screen",
				description:
					"When enabled, a screen will show up if you try to view the profile of a user that you have blocked. This will also show a notice if the user is blocking you.",
			},
			{
				type: "Regular",
				name: "Show user past username count",
			},
			{
				type: "Regular",
				name: "Clickable button to view past usernames modal",
			},
			{
				type: "Regular",
				name: "Easter eggs on some user profiles",
			},
		],
	},
	{
		id: "misc",
		name: "Users | Miscellaneous",
		features: [
			{
				type: "Regular",
				name: "Show display names and user names of deleted users",
			},
			{
				type: "Regular",
				name: "Show Offline presence status icon for offline users",
			},
			{
				type: "Regular",
				name: "Show username in the title of the connections list, inventory, and favorites pages of other users",
				description:
					"When enabled, adds the username of the viewed connections list, inventory, or connections page for other users to the top of the page after their display name. (This won't show when you're viewing your own connections list.)",
			},
			{
				type: "Regular",
				name: "Override the amount of results loaded at once in the users search page",
			},
		],
	},
	{
		id: "nav",
		name: "Communities | Navigation",
		features: [
			{
				type: "Beta",
				name: "Community organization",
				description:
					"When enabled, allows you to organize communities in your communities list around and into folders by dragging and dropping.",
			},
			{
				type: "Regular",
				name: "Seamless navigation of communities",
				description:
					"When enabled, navigating between community pages will not require a full page refresh. Note that if you navigate between groups too quickly, some parts of the group may load incorrectly.",
			},
			{
				type: "Regular",
				name: "View communities that you have pending join requests to",
			},
		],
	},
	{
		id: "general",
		name: "Communities | General",
		features: [
			{
				type: "Regular",
				name: "Move community social links to the profile header",
			},
			{
				type: "Regular",
				name: "Search bar for community store items",
			},
			{
				type: "Regular",
				name: "Disable infinite scrolling on community walls",
				description:
					"When enabled, forces community walls to use numbered pages instead of infinite scrolling.",
			},
			{
				type: "Regular",
				name: "Show community's creation date",
			},
			{
				type: "Regular",
				name: "Hide the community events tab if there are no events",
			},
			{
				type: "Regular",
				name: 'Show "Request to Join" instead of "Join" when the community joins are manually approved',
			},
			{
				type: "Regular",
				name: "Show the date of when you and other users joined a community",
			},
		],
	},
	{
		id: "avatarItems",
		name: "Items | Avatar Items",
		features: [
			{
				type: "Regular",
				name: "Show how long each Limited item instance you own has been in holding period for",
			},
			{
				type: "Regular",
				name: '"Search items by this creator" button by avatar item\'s creator name',
			},
			{
				type: "Regular",
				name: "View the currently hidden sale timer on avatar items",
				description:
					"Some limited-time items have a hidden timer that shows how long they will be available for sale.",
			},
			{
				type: "Regular",
				name: "View the last price and last time an avatar item was on sale",
			},
			{
				type: "Regular",
				name: '"Archive in Inventory" button on avatar items',
				description:
					"When enabled, allows you to hide an avatar item from your inventory from the context menu (...). This will add a new tab in Inventory to view all your archived items.",
			},
			{
				type: "Regular",
				name: "Refresh avatar item details button",
			},
			{
				type: "Regular",
				name: "Bypass purchase confirmation modal when purchasing Free avatar items",
				description:
					"When enabled, avatar items sold for Free will not prompt an additional window confirming that you want to buy the item.",
			},
			{
				type: "Regular",
				name: "Fix 3D Try On being disabled for 2D items",
			},
			{
				type: "Regular",
				name: 'Fix "Remove from Profile" not showing up if the item is shown on your profile but not owned',
			},
			{
				type: "Regular",
				name: "View hidden avatar items",
				description:
					'When enabled, allows you to view the details of moderated and hidden avatar assets through "/hidden-catalog/ITEM_ID/ITEM_NAME", and moderated and hidden bundles through "/hidden-bundles/BUNDLE_ID/BUNDLE_NAME".',
			},
			{
				type: "Regular",
				name: "Show created and updated date on avatar items",
			},
			{
				type: "Regular",
				name: "Show bundles that an avatar item is part of",
			},
			{
				type: "Regular",
				name: "View the item tags on avatar items",
				description:
					"When enabled, shows the search tags of avatar items set by their creators in their item pages. Classic (2D) clothing do not have configurable item tags.",
			},
			{
				type: "Regular",
				name: "Show the experiences that an item can be bought in",
			},
			{
				type: "Regular",
				name: "Show whether avatar bundles are recolorable",
			},
			{
				type: "Regular",
				name: "View the price of avatar items that you own",
				description:
					"By default, Roblox hides the price of avatar items that you own. This feature re-adds the price to items that you own.",
			},
			{
				type: "Regular",
				name: "Show more price chart data on avatar items",
				description:
					"When enabled, the price chart for avatar items can display data up to the maximum range stored by Roblox, including the past 365 days as an option and the full available history.",
			},
		],
	},
	{
		id: "storeItems",
		name: "Items | Creator Items",
		features: [
			{
				type: "Regular",
				name: "View details of Off Sale Creator Store items",
			},
		],
	},
	{
		id: "misc",
		name: "Items | Miscellaneous",
		features: [
			{
				type: "Regular",
				name: "View sales of items that you can access",
				description:
					"When enabled, allows you to view the sales and revenue of developer products, avatar items and passes that you can manage. You cannot view the sales of items you cannot manage.",
			},
		],
	},
	{
		id: "marketplace",
		name: "Avatar | Marketplace",
		features: [
			{
				type: "Regular",
				name: "Fix try-on not working for Look Avatars",
			},
			{
				type: "Regular",
				name: "Search Look Avatars in the Marketplace",
			},
			{
				type: "Regular",
				name: "Parity with the Roblox App's Marketplace landing",
			},
			{
				type: "Regular",
				name: "Hide topics bar in Marketplace",
			},
			{
				type: "Regular",
				name: "Show quantity remaining on limited avatar items in the Marketplace page",
			},
			{
				type: "Regular",
				name: "Fix Avatar Marketplace off sale filter",
				description:
					"When enabled, fixes some off sale Avatar Marketplace items showing when the off sale filter is enabled.",
			},
			{
				type: "Experimental",
				name: "Color filters in the Avatar Marketplace",
			},
			{
				type: "Regular",
				name: "Show the price floor of the avatar item type",
				description:
					'When enabled, shows the price floor of the type of the avatar item. This also enables the Marketplace Item Pricing page at "/marketplace-item-pricing".',
			},
			{
				type: "Regular",
				name: "Creator type filter in the Marketplace page",
			},
			{
				type: "Regular",
				name: "Owned item status filter in the Marketplace page",
			},
		],
	},
	{
		id: "editor",
		name: "Avatar | Editor",
		features: [
			{
				type: "Regular",
				name: "Show a button in the R6 restriction modal to never show it again",
			},
			{
				type: "Regular",
				name: "Avatar item lists",
				description:
					"When enabled, allows you to create Item Lists for Avatar assets, and display and organize them in the Avatar Editor.",
			},
			{
				type: "Regular",
				name: "Hash navigation in the Avatar Editor page",
			},
			{
				type: "Regular",
				name: "Unlock accessory and layered clothing wearing limits in the Avatar Editor page",
			},
			{
				type: "Regular",
				name: "Enable dynamic lighting for 3D thumbnail views",
			},
			{
				type: "Regular",
				name: "Allow setting custom body colors",
			},
			{
				type: "Regular",
				name: "Advanced customization in the Avatar Editor page",
				description:
					"When enabled, adds a button in the Avatar Editor page to open new advanced settings for worn items and thumbnails customization.",
			},
			{
				type: "Regular",
				name: "Improved avatar body section with reordering and new categories",
			},
		],
	},
	{
		id: "topNavigation",
		name: "Navigation | Top Navigation",
		features: [
			{
				type: "Regular",
				name: "Disable search landing in search bar",
			},
			{
				type: "Regular",
				name: "Fast user search results in the search bar",
			},
			{
				type: "Regular",
				name: "Navigation item to change voice opt-in status",
			},
			{
				type: "Regular",
				name: "Navigation item to change avatar chat opt-in status",
			},
			{
				type: "Regular",
				name: "Navigation item to change join privacy",
			},
			{
				type: "Regular",
				name: "Navigation item to change online status privacy",
			},
			{
				type: "Regular",
				name: "Navigation item to view premium status, expiration date, and other options",
			},
			{
				type: "Regular",
				name: "Focus the search bar when pressing the slash key (/)",
			},
			{
				type: "Regular",
				name: "Link to the Creator Dashboard instead of the Creator Hub in the navigation bar",
			},
			{
				type: "Regular",
				name: "Show pending Robux count next to Robux balance",
			},
			{
				type: "Regular",
				name: "Hide wallet balance next to Robux balance",
			},
			{
				type: "Regular",
				name: "Show RoSeal settings in settings dropdown menu",
			},
			{
				type: "Regular",
				name: "Move the age bracket to the left navigation",
			},
		],
	},
	{
		id: "leftNavigation",
		name: "Navigation | Left Navigation",
		features: [
			{
				type: "Regular",
				name: "Add user favorites item to the left navigation",
			},
			{
				type: "Regular",
				name: "Change default inventory tab in the left navigation",
				description:
					"Overrides the tab of your inventory that you will be taken to when going to your Inventory page.",
			},
			{
				type: "Regular",
				name: "Change default connections tab in the left navigation",
				description:
					"Overrides the tab of your connections list that you will be taken to when going to your connections page in the left navigation.",
			},
			{
				type: "Regular",
				name: "Change default messages tab in the left navigation",
				description:
					"Overrides the section of your messages mailbox that you will be taken to when going to the Messages page.",
			},
			{
				type: "Regular",
				name: 'Add "Open Desktop App" item to the left navigation to open the current page in the app',
			},
			{
				type: "Regular",
				name: "Hide pending connection requests count",
			},
			{
				type: "Regular",
				name: "Showcase upcoming and ongoing followed experience events in the left navigation",
			},
			{
				type: "Regular",
				name: "Hide unread message notifications count",
			},
		],
	},
	{
		id: "transactions",
		name: "Account | Transactions",
		features: [
			{
				type: "Regular",
				name: "Better Roblox Private Server subscriptions list",
				description:
					"When enabled, adds a new and improved Private Servers list to the Subscriptions tab in Account Settings.",
			},
			{
				type: "Regular",
				name: "Free items filter in community transactions",
				description:
					"Allow free items to be filtered out of the community's transactions list.",
			},
			{
				type: "Regular",
				name: "Private servers filter in transactions",
				description:
					"Allow private servers to be filtered out of your transactions list.",
			},
			{
				type: "Regular",
				name: "Community transactions sales page size filter",
			},
			{
				type: "Regular",
				name: "Hash navigation in transactions page",
			},
		],
	},
	{
		id: "misc",
		name: "Account | Miscellaneous",
		features: [
			{
				type: "Beta",
				name: "Account tracking prevention",
				description:
					"When enabled, adds a new tab to RoSeal settings that allows you to show as online for as long as the browser is open, and prevent server sniping.",
			},
			{
				type: "Regular",
				name: "Add an option to sync the Roblox website theme with the browser theme",
			},
			{
				type: "Regular",
				name: "Accounts manager",
				description:
					"When enabled, adds a new item to the top navigation that activates a popup for managing your accounts. Your accounts are stored and encrypted on-device. Use at your own risk.",
			},
			{
				type: "Regular",
				name: "Better Roblox notification preferences",
				description:
					"When enabled, adds hyperlinks, last updated date, and notifications turned on since date to experiences and communities in Notifications in Account Settings.",
			},
			{
				type: "Regular",
				name: "Show voice chat suspension modal",
				description:
					"When enabled, a voice chat suspension modal will appear when you are banned from using voice chat. You can also see how long the ban will last in your Roblox Privacy Settings.",
			},
			{
				type: "Regular",
				name: "Show a preview of what the username color will be in experience when changing or creating a username",
			},
		],
	},
	{
		id: "general",
		name: "Miscellaneous | General",
		features: [
			{
				type: "Regular",
				name: "Use custom Emojis",
			},
			{
				type: "Regular",
				name: "Share links for experiences, items, and your profile",
				description:
					"When enabled, adds a button to the context menu (...) to experiences, items, and your profile to copy the share link to the clipboard, which works on Desktop and Mobile devices.",
			},
			{
				type: "Regular",
				name: "Disable Desktop app banner",
			},
			{
				type: "Regular",
				name: "Clear Roblox's local cache automatically when storage fills up",
				description:
					"When enabled, RoSeal will clear Roblox's local cache automatically when storage fills up. This is for when certain pages fail to load due to the cache being full.",
			},
			{
				type: "Regular",
				name: "Trending Searches page looked at `/trending-searches`",
			},
			{
				type: "Regular",
				name: "Formatted user/community mentions in item descriptions",
				description:
					"When enabled, @-mentions and community/user links in item descriptions will be transformed into a link with a community icon or avatar headshot and name.",
			},
			{
				type: "Regular",
				name: "Chat conversation sorting",
				description:
					"Allows for your conversations on the website chat to be sorted.",
			},
			{
				type: "Regular",
				name: "Block items and experiences",
				description:
					"When enabled, allows you to block items and experiences by their ID, creator, and keyword. Items and experiences can be manually blocked in the context menu.",
			},
			{
				type: "Regular",
				name: "Move Report Abuse button to the context menu if applicable",
			},
			{
				type: "Regular",
				name: "Tooltip/shown text time configuration",
			},
			{
				type: "Regular",
				name: 'Make the play button "scared" of the cursor',
			},
		],
	},
	{
		id: "fixes",
		name: "Miscellaneous | Fixes",
		features: [
			{
				type: "Regular",
				name: "Several CSS (styling) fixes around the Roblox website",
				description:
					'List of fixes applied:\n- Pending, blocked, or moderated thumbnails in most places will now always match your website theme\n- The X button on the prompt for push notifications will be properly visible for your website theme\n- Experience tooltips will no longer overrun outside of the tooltip box\n- The layout of the Included Items list in Bundles will stay more consistent\n- Newlines will work in item descriptions\n- The pagination of the "Currently Wearing" section will work consistently on Desktop\n- The border above the Hosted By field on Experience events nhas a visible color on Light theme\n- Favorites button is now always right under the thumbnail on item pages',
			},
			{
				type: "Regular",
				name: "Fix user profiles fetch failing when the user has more than 200 connection online concurrently",
			},
		],
	},
	{
		id: "rendering",
		name: "Miscellaneous | Rendering",
		features: [
			{
				type: "Regular",
				name: "User avatar headshot thumbnails override",
			},
			{
				type: "Regular",
				name: "Override the resolution of all images",
			},
			{
				type: "Regular",
				name: "[UNSTABLE] Disable page font resizing",
			},
		],
	},
	{
		id: "animals",
		name: "Miscellaneous | Animals",
		features: [
			{
				type: "Regular",
				name: "Replace all images with images of a certain animal",
			},
			{
				type: "Regular",
				name: "Replace all text with text from a certain animal",
			},
		],
	},
	{
		id: "experiences",
		name: "Developers | Experiences",
		features: [
			{
				type: "Regular",
				name: "Redirect to start place when visiting `/games/universe-redirect/UNIVERSE_ID`",
			},
			{
				type: "Regular",
				name: "Fix experience deeplinks",
				description:
					"When enabled, fixes experience deeplinks not working without a `launchData` parameter, and allows to set a `gameInstanceId` parameter to join a specific server.",
			},
			{
				type: "Regular",
				name: "View experience's universe ID in the experience details page",
			},
			{
				type: "Regular",
				name: "Disable channel name parameter for private channels to prevent auto-updating to LIVE",
			},
		],
	},
	{
		id: "items",
		name: "Developers | Items",
		features: [
			{
				type: "Regular",
				name: "View all of an avatar asset's dependencies in the item details page",
			},
			{
				type: "Regular",
				name: "View product information of items",
			},
			{
				type: "Regular",
				name: "View item's media assets and icon asset",
			},
		],
	},
	{
		id: "misc",
		name: "Developers | Miscellaneous",
		features: [
			{
				type: "Regular",
				name: "Download Avatar button to download Avatar textures and obj model on user profiles",
			},
			{
				type: "Regular",
				name: "Preview filtered text widget",
				description:
					"When enabled, lets you preview how the text will be moderated in a widget in the bottom right of the screen. This will be shown on all Creator sites and the main Roblox site.",
			},
			{
				type: "Regular",
				name: "Request Right-to-Erasure messages button",
			},
			{
				type: "Regular",
				name: "Switch the theme of the website from the navbar",
			},
			{
				type: "Regular",
				name: "View Roblox session metadata in a modal",
				description:
					"When enabled, adds a question mark (?) icon to the bottom left of the page, and when clicked will show a modal with information about the current session.",
			},
			{
				type: "Regular",
				name: "Show machine ID in the bottom right of the error container",
			},
			{
				type: "Regular",
				name: "Replace the error page image with a different image",
			},
			{
				type: "Regular",
				name: "Show community agent ID (internal user ID)",
			},
			{
				type: "Regular",
				name: "RoSeal test pages (/seals, /no-seals)",
			},
			{
				type: "Regular",
				name: "RoSeal Reference pages (/reference/icons)",
			},
			{
				type: "Regular",
				name: "Override Roblox experiments",
			},
		],
	},
];
