import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBranches } from "../store/reducers/branchesSlice";
import { BranchList } from "../parts/BranchList";

export const ChoosePage = () => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.branches.isLoaded);

    useEffect(() => {
        dispatch(fetchBranches());
    }, [dispatch]);

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
