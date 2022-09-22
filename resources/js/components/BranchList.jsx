import { React, useEffect } from "react";
import { useSelector } from "react-redux";

export const BranchList = () => {

    const branches = useSelector((state) => state.branches.branches);

    const branchImageUrl = (name) => {
        return "storage/images/choose/" + name + ".png";
    };

    return (
        <div className="branch-logos">
            {branches && branches.map((branch) => ( <figure>
                    <img src={branchImageUrl(branch.slug)} alt={branch.slug} />
                    <figcaption>
                        <h3 classname="text-center">{branch.title}</h3>
                    </figcaption>
                </figure>))}
        </div>
    );
};
