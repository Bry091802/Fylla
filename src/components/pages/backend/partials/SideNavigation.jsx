import { imgPath } from "@/components/helpers/functions-general";
import {
  Clapperboard,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";

const SideNavigation = ({ menu }) => {
  const links = [
    {
      title: "Dashboard",
      slug: "/admin/dashboard",
      icon: <LayoutDashboard size={16} />,
    },
    {
      title: "Blog",
      slug: "/admin/blog",
      icon: <Newspaper size={16} />,
    },
  ];

  return (
    <>
      <aside className="p-4 border-r border-line">
        <img
          src="https://cdn.prod.website-files.com/63661389dd2417f19a0d89d3/636a2cb5715eea61d64a3119_logo.svg"
          alt=""
        />

        <nav>
          <ul className="mt-10">
            {links.map((item, key) => (
              <li
                className={`${
                  menu === item.slug.replaceAll("/admin/", "")
                    ? "border-accent bg-accent text-white  opacity-100"
                    : ""
                } p-2 mb-2 rounded-md border border-transparent opacity-70 hover:opacity-100`}
                key={key}
              >
                <NavLink
                  to={`${item.slug}`}
                  className="flex items-center text-base gap-3"
                >
                  {item.icon} {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideNavigation;
