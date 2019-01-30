import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul className="list-reset flex mb-4">
        {[
          { name: "Home", path: "/", exact: true },
          { name: "New Question", path: "/add" },
          { name: "Leaderboard", path: "/leaderboard" },
          { name: "Logout", path: "/logout" }
        ].map(link => (
          <li className="flex-1 mr-2" key={link.name}>
            <NavLink
              to={link.path}
              exact={link.exact ? true : false}
              className="text-center block border border-white rounded hover:border-grey-lighter text-teal hover:bg-grey-lighter py-2 px-4"
              activeClassName="bg-grey-lighter"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
