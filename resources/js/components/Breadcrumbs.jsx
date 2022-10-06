import React from "react";

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <ul>
                <li class="start">
                    <span class="badge">1</span> Select Menu
                </li>
                <li class="editor">
                    <span class="badge">2</span> Edit Menu
                </li>
                <li class="preview">
                    <span class="badge">3</span> Review
                </li>
                <li class="print">
                    <span class="badge">4</span> Print File
                </li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;
