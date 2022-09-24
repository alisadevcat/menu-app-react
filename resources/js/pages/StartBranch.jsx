import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById } from "../store/reducers/menutypesSlice";
import { Link, useParams } from "react-router-dom";

export const StartBranch = () => {
    const dispatch = useDispatch();
    const menutypes = useSelector((state) => state.menutypes.menutypes);
    const status = useSelector((state) => state.menutypes.isLoaded);
    const { branch } = useParams();

    useEffect(() => {
        dispatch(fetchMenutypesById(branch));
    }, [dispatch]);

    console.log(branch);
    console.log(status);

    if (!status) {
        return <div className="loading">loading</div>;
    } else {
        return (
            <div className="container center">
                <h1 className="m-2">CREATE NEW MENU</h1>
                <section>
                    <label className="control-label">Select Meal Period</label>
                        <select id="menu_type" name="menu_type" class="form-control mt-2">
                        <option disabled value="">Select Template</option>
                            {menutypes &&
                                menutypes.map((menutype) => (
                                    <option value={menutype.template}>
                                        {menutype.name}
                                    </option>
                                ))}
                        </select>
                </section>
            </div>
        );
    }
};
