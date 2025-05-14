import { NavLink } from "react-router";

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "text-primary font-bold" : "font-bold"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;