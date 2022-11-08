import React from "react";
import { generateKey } from "../utils/Helpers";

const initialMenuBarItems = [
    { className: "start", title: "Select Menu", isActive: false },
    { className: "editor", title: "Edit Menu", isActive: false },
    { className: "preview", title: "Review", isActive: false },
    { className: "print", title: "Print File", isActive: false },
];

export const MenuBar = ({ activeMenuBarItem }) => {
    const menuBarItems = initialMenuBarItems.map((item) => ({
        ...item,
        isActive: item.className === activeMenuBarItem ? true : false,
    }));

    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                {menuBarItems &&
                    menuBarItems.map((item, index) => (
                        <li
                            className={
                                item.isActive
                                    ? `${item.className} active`
                                    : item.className
                            }
                            key={generateKey(item.title)}
                        >
                            <span className="pr-1">{index + 1}</span>
                            {item.title}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
