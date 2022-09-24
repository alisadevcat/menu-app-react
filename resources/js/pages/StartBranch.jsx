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
            <div className="container">
                <h1>CREATE NEW Menu</h1>
                <section>
                    <div className="">
                        <h3>Select Meal Period</h3>
                        <select name="menu_types">
                            {menutypes &&
                                menutypes.map((menutype) => (
                                    <option value={menutype.template}>
                                        {menutype.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </section>
            </div>
        );
    }
};
