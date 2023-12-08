import { GoalIcon, HomeIcon, InboxIcon } from "lucide-react";
import { For } from "million/react";
import React from "react";

const menuItems = [
  {
    name: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    name: "Inbox",
    href: "/inbox",
    icon: <InboxIcon />,
  },
  {
    name: "Docs",
    href: "/docs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M8.5 11.5v-1h7v1h-7Zm0-4v-1h7v1h-7Zm-2.5 7h7.5q.61 0 1.12.264q.509.265.876.744L18 18.758V4.615q0-.269-.173-.442T17.385 4H6.615q-.269 0-.442.173T6 4.615V14.5Zm.615 5.5h11.07l-2.975-3.883q-.227-.296-.536-.456q-.309-.161-.674-.161H6v3.885q0 .269.173.442t.442.173Zm10.77 1H6.615q-.69 0-1.152-.462Q5 20.075 5 19.385V4.615q0-.69.463-1.152Q5.925 3 6.615 3h10.77q.69 0 1.152.463q.463.462.463 1.152v14.77q0 .69-.462 1.152q-.463.463-1.153.463ZM6 20V4v16Zm0-4.5v-1v1Z"
        />
      </svg>
    ),
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32">
        <path
          fill="currentColor"
          d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8H4zm20 1h2v5h-2zm-4-5h2v10h-2zm-4 2h2v8h-2z"
        />
        <path
          fill="currentColor"
          d="M28 2H4a2.002 2.002 0 0 0-2 2v12h2v-3h24.001l.001 15H16v2h12a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2Zm-16 9H4V4h8Zm2 0V4h14v7Z"
        />
      </svg>
    ),
  },
  {
    name: "Goals",
    href: "/goals",
    icon: <GoalIcon />,
  },
];

const AsideNavigateMenus: React.FC = (props) => {
  return (
    <div className="p-4">
      <ul>
        <For each={menuItems}>
          {(item) => (
            <li className="hover:bg-gray-600/50 rounded">
              <Button
                variant="link"
                asChild
                className="justify-start gap-2 w-full py-1.5 hover:no-underline"
              >
                <Link href={item.href}>
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </Button>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export default AsideNavigateMenus;
