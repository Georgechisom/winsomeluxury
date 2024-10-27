import { HiBookOpen, HiBookmarkSquare, HiMiniQueueList, HiRss, } from "react-icons/hi2";
import { LuChevronRight } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import Container from "../ui/Container";

const links = [
  {
    name: "Product",
    href: "/product",
    description: "You will find all available products",
    icon: HiMiniQueueList
  },
  {
    name: "Shop",
    href: "/shop",
    description: "Maximum collection of shopping product",
    icon: HiRss
  },
  {
    name: "My Account",
    href: "/account",
    description: "View and edit your information here",
    icon: HiBookmarkSquare
  },
  {
    name: "Blog",
    href: "/blog",
    description: "Read our lastest articles and news on Products and more",
    icon: HiBookOpen
  }
]

const NotFound = () => {
  const { pathname } = useLocation();
  const path = pathname.split("/").filter(Boolean).pop();

  return (
    <Container>
      <div className="bg-white">
        <main className="px-6 pb-16 pt-10 sm:pb-24 lg:px-8">
        <div className="text-center">
          <p className="text-4xl font-bold leading text-skyText"></p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">
              <span className="text-redText underline px-4 capitalize">{path}</span>
              {""}
              page does not exist
            </h1>
            <p className="mt-2 text-base leading-7 text-skyText italic text-lg">
              Sorry ! we couldn't find the {path} pages you are looking for
            </p>
        </div>
        <div className="mx-auto mt-6 flow-root max-w-lg">
          <ul role="list" className="divide-y divide-sky-900/5 border border-skyText py-4 px-4">
            <h2 className="text-center capitalize text-skyText text-xl font-bold py-2">popular pages</h2>
            {
              links.map((link, linkId) => (
                <li key={linkId} className="relative flex gap-x-6 py-4">
                  <div className="flex h-10 w-10 flex-none">
                    <link.icon className="h-6 w-6 text-skyText" aria-hidden="true"/>
                  </div>
                  <div className="flex-auto">
                    <h3 className="text-sm font-semibold leading-7 text-skyText">
                      <a href={link.href}>
                        <span className="absolute inset-0 "></span>
                          {link.name}
                      </a>
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-skyText italic">{link.description}</p>
                  </div>
                  <div className="flex-none self-center">
                    <LuChevronRight className="h-6 w-6 text-skyText" aria-hidden="true"/>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        </main>
      </div>
    </Container>
  )
}

export default NotFound