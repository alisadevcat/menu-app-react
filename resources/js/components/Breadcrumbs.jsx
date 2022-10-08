import React, { useEffect, useState } from "react";

const initialbreadCrumbs = [
    { className: "start", title: "Select Menu", isActive: false },
    { className: "editor", title: "Edit Menu", isActive: false },
    { className: "preview", title: "Review", isActive: false },
    { className: "print", title: "Print File", isActive: false },
];

export const Breadcrumbs = ({ activeBreadcrumb }) => {
    const breadCrumbs = initialbreadCrumbs.map((item) => ({
        ...item,
        isActive: item.className === activeBreadcrumb ? true : false,
    }));

    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                {breadCrumbs &&
                    breadCrumbs.map((item, index) => (
                        <li
                            className={
                                item.isActive
                                    ? `${item.className} active`
                                    : item.className
                            }
                        >
                            <span className="pr-1">{index + 1}</span>
                            {item.title}
                        </li>
                    ))}
            </ul>
        </div>
    );
};
