import { React, useState } from "react";
import { Link } from "react-router-dom";

const ChooseMenu = (props) => {

  const handleClick = ()=>{
    props.handleShowTemplate(true);
  }
    return (
        <>
            <section id="choose-menu">
                <h1 className="text-center">CHOOSE HOW TO BUILD YOUR MENU</h1>
                <div className="choose-menu__block">
                    <div className="choose-menu__block-item">
                        <label className="control-label text-left">
                            Create From Template
                        </label>
                        <button className="btn btn-default btn-start" onClick={handleClick}>
                            Start
                        </button>
                    </div>
                    <div className="choose-menu__block-item text-left">
                        <label className="control-label">
                            Create From Saved Design
                        </label>
                        <select
                            name="saved-menu-template"
                            id="saved-template"
                            className="form-control mt-2"
                        >
                            <option disabled value="default" selected="selected">
                                Select One
                            </option>
                        </select>
                    </div>
                </div>
            </section>
        </>
    );
};
export default ChooseMenu;