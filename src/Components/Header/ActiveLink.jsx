import React from "react";
import { NavLink } from "react-router";

const ActiveLink = ({ children, className, to }) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-secondary font-semibold text-base hover:text-primary"
            : `${className}  text-base hover:text-primary `
        }
      >
        {children}
      </NavLink>
    </li>
  );
};

export default ActiveLink;
