import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BranchList = () => {
    const branches = useSelector((state) => state.branches.branches);

    const addImagePath = (name) => {
        return "/storage/images/choose/" + name + ".png";
    };

    return (
        <div className="branch-logos">
            {branches &&
                branches.map((branch) => (
                    <Link to={`/start/${branch.slug}`}>
                        <figure className="text-center">
                            <img
                                src={addImagePath(branch.slug)}
                                alt={branch.slug}
                            />
                            <figcaption>
                                <h3>{branch.title}</h3>
                            </figcaption>
                        </figure>
                    </Link>
                ))}
        </div>
    );
};
