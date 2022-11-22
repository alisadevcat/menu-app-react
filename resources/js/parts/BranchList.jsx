import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBranch } from "../store/reducers/branchesSlice";
import { useNavigate } from "react-router-dom";

const addImagePath = (name) => {
    return "/storage/images/choose/" + name + ".png";
};

export const BranchList = () => {
    const branches = useSelector((state) => state.branches.branches);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const dispatchThenRoute = (branch) => {
        dispatch(setBranch(branch));
        navigate(`/start/${branch.slug}`);
    };

    return (
        <div className="branch-logos">
            {branches &&
                branches.map((branch) => (
                    <div
                        key={branch.id}
                        onClick={() =>
                            dispatchThenRoute(
                                branch
                            )
                        }
                    >
                        <figure className="text-center">
                            <img
                                src={addImagePath(branch.slug)}
                                alt={branch.slug}
                            />
                            <figcaption>
                                <h3>{branch.title}</h3>
                            </figcaption>
                        </figure>
                    </div>
                ))}
        </div>
    );
};
