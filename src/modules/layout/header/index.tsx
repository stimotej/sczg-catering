import Image from "next/image";
import NavigationLink from "./nav-link";
import { mainNavigationLinks, pocetnaPostId } from "@/lib/utils/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/modules/common/components/sheet";
import MenuIcon from "@/modules/common/icons/menu";
import Link from "next/link";
import NavBackground from "./background";
import { getPostById } from "@/lib/data/posts";
import { notFound } from "next/navigation";
import clearHtmlFromString from "@/lib/utils/clear-html-from-string";

export default async function Header() {
  const post = await getPostById(pocetnaPostId);

  if (!post) notFound();

  return (
    <>
      <NavBackground
        title={clearHtmlFromString(post.title.rendered)}
        subtitle={clearHtmlFromString(post.excerpt.rendered)}
        imageUrl={post.image_url}
      />
      <header className="absolute top-0 left-0 right-0 py-6 z-50 gap-4 max-w-7xl mx-auto px-4 md:px-6 lg:px-10 w-full flex items-center justify-between">
        <Link
          href="/"
          aria-label="Idi na početnu"
          className="flex items-center gap-4"
        >
          <Image
            src="/logo.webp"
            className="w-14 sm:w-20 h-auto"
            alt="Studentski Centar Zagreb logo"
            width={64}
            height={44.5}
          />
          <span className="text-xl sm:text-3xl font-medium font-display text-white">
            U&C
          </span>
        </Link>

        {/* MOBILE NAVIGATION */}
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Otvori navigaciju" className="lg:hidden">
              <MenuIcon className="size-8 text-(--background)" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-5/6 sm:max-w-3/4 md:w-1/2 lg:max-w-sm">
            <SheetHeader>
              <SheetTitle className="sr-only">Glavna navigacija</SheetTitle>
              <SheetDescription className="sr-only">
                Izbornik glavne navigacije stranice. Koristite tipkovnicu ili
                miš za odabir željene stranice.
              </SheetDescription>
            </SheetHeader>

            <nav aria-label="Glavna navigacija" dir="ltr">
              <ul className="flex flex-col items-center justify-center p-4">
                {mainNavigationLinks.map((link) => (
                  <li key={link.href} className="w-full first:[&>a]:border-t">
                    <SheetClose asChild>
                      <NavigationLink
                        href={link.href}
                        className="flex text-sm py-6 w-full font-medium border-b border-black/20 text-(--foreground)/60 data-[active=true]:text-(--primary)"
                      >
                        {link.title}
                      </NavigationLink>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:block" aria-label="Glavna navigacija">
          <ul className="flex items-center gap-2">
            {mainNavigationLinks.map((link) => (
              <li key={link.href}>
                <NavigationLink href={link.href}>{link.title}</NavigationLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
