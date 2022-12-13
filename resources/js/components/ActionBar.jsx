import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export const ActionBar = () => {
const branch = useSelector((state)=> state.branches.branch.slug);
const menu_type_shortname = useSelector((state)=>state.menutypes.menutype.shortname);
const menu_id = useSelector((state)=>state.menus.menu.id);
const navigate = useNavigate();

    const review_url = `/menus/${branch}/${menu_type_shortname}/${menu_id}/preview`;

    return (
        <div className="actionbar">
            <ul className="actionbar__list">
                <li>
                    <div className="btn btn-action" onClick={() => navigate(-1)}>
                        <span className="fa fa-arrow-circle-o-left"></span>
                        &nbsp;&nbsp;&nbsp;Back
                    </div>
                </li>
                <li>
                    <Link to={review_url} className="btn btn-action" >Preview&nbsp;&nbsp;&nbsp;<span className="fa fa-arrow-circle-o-right"></span></Link>
                </li>
            </ul>
        </div>
    );
};

