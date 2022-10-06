import React from "react";

export const ActionBar = () => {
    return (
        <div className="actionbar">
            <ul className="actionbar__list">
                <li>
                    <a className="btn btn-action" href="/">
                        <span className="fa fa-arrow-circle-o-left"></span>
                        &nbsp;&nbsp;&nbsp;Back
                    </a>
                </li>
                <li>
                    <a className="bbtn btn-action" href="/">
                        Preview&nbsp;&nbsp;&nbsp;
                        <span className="fa fa-arrow-circle-o-right"></span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

