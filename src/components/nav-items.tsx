import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-primary-bg text-slate-300 font-secondary font-semibold hover:bg-zinc-900 hover:text-primary-text"
          >
            <a href="/docs">Pricing</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary-bg text-slate-300 font-secondary font-semibold hover:bg-zinc-900 hover:text-primary-text data-[state=open]:hover:bg-zinc-900 data-[state=open]:text-primary-text data-[state=open]:focus:bg-zinc-900 data-[state=open]:bg-zinc/50 focus:bg-zinc-900 focus:text-primary-text">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:border-dark-green ">
            <ul className="grid w-[200px] p-2 bg-black">
              <li>
                <NavigationMenuLink
                  asChild
                  className="bg-primary-bg text-slate-300 font-secondary font-semibold hover:bg-zinc-900 hover:text-primary-text"
                >
                  <a href="/blog">Blog</a>
                </NavigationMenuLink>
                <NavigationMenuLink
                  asChild
                  className="bg-primary-bg text-slate-300 font-secondary font-semibold hover:bg-zinc-900 hover:text-primary-text mt-2"
                >
                  <a href="/docs">Documentation</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-primary-bg text-slate-300 font-secondary font-semibold hover:bg-zinc-900 hover:text-primary-text data-[state=open]:hover:bg-zinc-900 data-[state=open]:text-primary-text data-[state=open]:focus:bg-zinc-900 data-[state=open]:bg-zinc/50 focus:bg-zinc-900 focus:text-primary-text">
            Free Tools
          </NavigationMenuTrigger>
          <NavigationMenuContent className="group-data-[viewport=false]/navigation-menu:border-dark-green ">
            <ul className="grid w-[200px] p-2 bg-black">
              <li>
                <NavigationMenuLink
                  asChild
                  className="bg-primary-bg text-slate-300 font-secondary font-semibold hover:bg-zinc-900 hover:text-primary-text"
                >
                  <a href="#">Shopify Theme Detector</a>
                </NavigationMenuLink>
                <NavigationMenuLink
                  asChild
                  className="bg-primary-bg text-slate-300 font-secondary font-semibold hover:bg-zinc-900 hover:text-primary-text"
                >
                  <a href="#">SEO score checker</a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            asChild
            className="bg-primary-bg text-slate-300 font-secondary font-semibold hover:bg-zinc-900 hover:text-primary-text"
          >
            <a href="/docs">About us</a>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
