import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBranches } from "../store/reducers/branchesSlice";
import { BranchList } from "../components/BranchList";

export const ChoosePage = () => {
    const dispatch = useDispatch();
    const branches = useSelector((state) => state.branches.branches);
    const status = useSelector((state) => state.branches.isLoaded);

    useEffect(() => {
        dispatch(fetchBranches());
    }, [dispatch]);

    console.log("status", status);
    console.log("branches", branches);

    if (!status) {
        return <div className="loading">loading</div>;
    } else {
        return (
            <section className="container">
                <h2 className="text-center text-uppercase">
                    Choose Restaurant
                </h2>
                <BranchList />
            </section>
        );
    }
};
