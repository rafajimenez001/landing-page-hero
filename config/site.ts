export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Elite Medical",
  description: "Empresa lider en el ambito medico por mas de 15 años",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos",
      href: "/products",
    },
    {
      label: "Quienes somos",
      href: "/about",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos",
      href: "/products",
    },
    {
      label: "Quienes somos",
      href: "/about",
    },
    {
      label: "Contacto",
      href: "/contact",
    },
  ],
  links: {
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
