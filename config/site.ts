export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Project Marketplace",
	description: "Offer the world the unimaginable.",
	links: {
		github: "https://github.com/bygimenez/project-marketplace",
		twitter: "https://twitter.com/bygimenezz"
	},
	navItems: [
		{
		  label: "About",
		  href: "/about",
		},
	  ],
	  navMenuItems: [
		{
		  label: "Home",
		  href: "/",
		},
		{
		  label: "About",
		  href: "/about",
		},
	  ]
};
