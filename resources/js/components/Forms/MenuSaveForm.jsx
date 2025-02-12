import { React, useState } from "react";
import validateMenuName from "../../utils/Validation";
import { useNavigate, useParams } from "react-router-dom";
import { setMenu } from "../../store/reducers/menusSlice";
import { useDispatch, useSelector } from "react-redux";

const MenuSaveForm = () => {
    const branch = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menuName, setMenuName] = useState("");
    const [errors, setErrors] = useState([]);
    const menutype = useSelector((state) => state.menutypes.menutype);
    const menuTypeId = menutype.id;
    const shortnameSlug = menutype.shortname;
    const menuTitle = menutype.name;
 
    const userId = 1;


    const handleInput = (event) => {
        setErrors([]);
        setMenuName(event.target.value.trim());
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let validationErrors = validateMenuName(menuName, 255);

        if (validationErrors.length > 0) {
            setErrors([...errors, ...validationErrors]);
        }

        const menuParams = `typeId=${menuTypeId}&menuName=${menuName}&userId=${userId}`;

        dispatch(setMenu(menuParams));
        

        setTimeout(() => {
            navigate(`/menus/${branch.branch}/${shortnameSlug}`);
        }, 2000);
    };
  return (
    <div className="modal-body">
    <h2 className="mt-1 mb-1">
        Confirm Meal Period And Name
    </h2>
    <label className="control-label">Type</label>
    {menuTitle && (
        <div className="bg-light-gray">{menuTitle}</div>
    )}
    <form onSubmit={handleSubmit}>
        <div className="form-group mt-1 mb-1">
            <label className="control-label">Name</label>
            <input
                type="text"
                name="menu-name"
                className="form-control p-1"
                value={menuName}
                onChange={handleInput}
            />
            <div className="error"></div>
            <button type="submit" className="btn m-2">
                Get Started
            </button>

            {errors &&
                errors.map((error) => (
                    <span key={error}>{error}</span>
                ))}
        </div>
    </form>
</div>
  );
};

export default MenuSaveForm;