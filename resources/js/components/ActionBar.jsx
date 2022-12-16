import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const ActionBar = ({ button }) => {
    const branch = useSelector((state) => state.branches.branch.slug);
    const menuTypeTemplate = useSelector(
        (state) => state.menutypes.menutype.template
    );
    const navigate = useNavigate();

    const review_url = `/menus/${branch}/${menuTypeTemplate}/preview`;
    const print_url = "/";
    //dispatchThenRoute
    return (
        <div className="actionbar mt-2">
            <ul className="actionbar__list">
                <li>
                    <div
                        className="btn btn-action"
                        onClick={() => navigate(-1)}
                    >
                        <span className="fa fa-arrow-circle-o-left"></span>
                        &nbsp;&nbsp;&nbsp;Back
                    </div>
                </li>
                {button == "editor" && (
                    <li>
                        <Link to={review_url} className="btn btn-action">
                            Preview&nbsp;&nbsp;&nbsp;
                            <span className="fa fa-arrow-circle-o-right"></span>
                        </Link>
                    </li>
                )}
                  {button == "preview" && (
                    <li>
                        <Link to={print_url} className="btn btn-action">
                            Save and Print&nbsp;&nbsp;&nbsp;
                            <span className="fa fa-arrow-circle-o-right"></span>
                        </Link>
                    </li>
                )}
                 {button == "start" && (
                    <li>
                        <div className="btn btn-action">
                            Start&nbsp;&nbsp;&nbsp;
                            <span className="fa fa-arrow-circle-o-right"></span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

ActionBar.propTypes = {
    button: PropTypes.string
  };