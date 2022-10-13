import  React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const addImagePath = (name) => {
    return "/storage/images/choose/" + name + ".png";
};

export const BranchList = () => {
    const branches = useSelector((state) => state.branches.branches);

    return (
        <div className="branch-logos">
            {branches &&
                branches.map((branch) => (
                    <Link to={`/api/start/${branch.slug}`} key={branch.id}>
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
