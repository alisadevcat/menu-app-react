import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenutypesById } from "../store/reducers/menutypesSlice";
import { Link, useParams } from "react-router-dom";

export const StartBranch = () => {
    const dispatch = useDispatch();
    const menutypes = useSelector((state) => state.menutypes.menutypes);
    const status = useSelector((state) => state.menutypes.isLoaded);
    const {branch, id} = useParams();


    useEffect(() => {
        fetchMenutypesById();
    }, [dispatch]);

    console.log(menutypes);
    console.log(branch, id);
    console.log(status);

    return <div>StartBranch</div>;
};
