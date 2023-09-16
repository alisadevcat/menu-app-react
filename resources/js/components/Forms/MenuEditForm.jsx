import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "../../store/reducers/menusSlice";
import PropTypes from "prop-types";

export const MenuEditForm = ({ item, handleClose }) => {
    const dispatch = useDispatch();
    const [menu, setMenu] = useState(item);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateMenu(menu));
        handleClose();
    };

    const handleNameInput = (event) => {
        setMenu({ ...menu, name: event.target.value.trim() });
    };
    const handleTitleInput = (event) => {
        setMenu({ ...menu, title: event.target.value.trim() });
    };
    const handleTitle2Input = (event) => {
        setMenu({ ...menu, title2: event.target.value.trim() });
    };
    const handleSubtitleInput = (event) => {
        setMenu({ ...menu, subtitle: event.target.value.trim() });
    };
    const handleSubtitle2Input = (event) => {
        setMenu({ ...menu, subtitle2: event.target.value.trim() });
    };
    const handlePriceInput = (event) => {
        setMenu({ ...menu, menu_price: event.target.value.trim() });
    };
    const handleFooterLocalInput = (event) => {
        setMenu({ ...menu, footer_local: event.target.value.trim() });
    };
    const handleFooterNoticeInput = (event) => {
        setMenu({ ...menu, footer_notice: event.target.value.trim() });
    };
    const handleFooterNotice2Input = (event) => {
        setMenu({ ...menu, footer_notice2: event.target.value.trim() });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label" htmlFor="menu-title-id">
                       Name
                    </label>
                    <input
                        className="form-control p-1"
                        type="text"
                        name="title"
                        id="menu-title-id"
                        value={menu.name}
                        onChange={handleNameInput}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label" htmlFor="menu-title-id">
                        Title
                    </label>
                    <input
                        className="form-control p-1"
                        type="text"
                        name="title"
                        id="menu-title-id"
                        value={menu.title}
                        onChange={handleTitleInput}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label" htmlFor="menu-title2-id">
                        Title 2
                    </label>
                    <input
                        className="form-control p-1"
                        type="text"
                        name="title2"
                        id="menu-title2-id"
                        value={menu.title2}
                        onChange={handleTitle2Input}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label" htmlFor="menu-subtitle-id">
                        Subtitle
                    </label>
                    <input
                        className="form-control p-1"
                        type="text"
                        name="subitle"
                        id="menu-subtitle-id"
                        value={menu.subtitle}
                        onChange={handleSubtitleInput}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label
                        className="control-label"
                        htmlFor="menu-subtitle2-id"
                    >
                        Subtitle2
                    </label>
                    <input
                        className="form-control p-1"
                        type="text"
                        name="subitle2"
                        id="menu-subtitle2-id"
                        value={menu.subtitle2}
                        onChange={handleSubtitle2Input}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label" htmlFor="menu-price-id">
                        Menu Price
                    </label>
                    <input
                        className="form-control p-1"
                        type="text"
                        name="menu_price"
                        id="menu-price-id"
                        value={menu.menu_price}
                        onChange={handlePriceInput}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label" htmlFor="footer-local-id">
                        Footer Local
                    </label>
                    <input
                        className="form-control p-1"
                        type="text"
                        name="footer_local"
                        id="footer-local-id"
                        value={menu.footer_local}
                        onChange={handleFooterLocalInput}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label" htmlFor="footer-notice-id">
                        Footer Notice
                    </label>
                    <textarea
                        className="form-control p-1"
                        type="text"
                        name="footer_notice"
                        id="footer-notice-id"
                        value={menu.footer_notice}
                        onChange={handleFooterNoticeInput}
                    />
                </div>
                <div className="form-group mt-1 mb-1">
                    <label className="control-label" htmlFor="">
                        Footer Notice2
                    </label>
                    <textarea
                        className="form-control p-1"
                        type="text"
                        name="footer_notice2"
                        id="footer_notice2"
                        value={menu.footer_notice2}
                        onChange={handleFooterNotice2Input}
                    />
                </div>

                <div className="row justify-center align-center">
                    <button
                        type="submit"
                        className="btn m-2"
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                    <button className="btn btn-primary ml-1">Ok</button>
                </div>
            </form>
        </div>
    );
};


MenuEditForm.propTypes = {
    handleClose: PropTypes.bool,
    item: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        title2: PropTypes.string,
        subtitle: PropTypes.string,
        subtitle2: PropTypes.string,
    }),
};