import AzulindaHalf from "../menus/AzulindaHalf";
import AzulindaFull from "../menus/AzulindaFull";
import AzulindaMobile from "../menus/AzulindaMobile";
import LaLuceDinner from "../menus/LaluceDinner";
import React from "react";

export const createComponent = (template, showForms) => {
    switch (template) {
        case "azulindaHalf":
            return <AzulindaHalf showForms={showForms}/>;
        case "azulindaFull":
            return <AzulindaFull showForms={showForms}/>;
        case "azulindaMobile":
            return <AzulindaMobile showForms={showForms}/>;
        case "laluceDinner":
            return <LaLuceDinner showForms={showForms}/>;
        default:
            return <div></div>;
    }
};

// azulindaHalf
// azulindaFull
// azulindaMobile
// laluceDinner
// laluceDrinks
// laluceMobile
// sunanFood
// sunanDrinks
// sunanMobile
// aumaFood
// aumaMobile
// maxalBreakfastLunch
// maxalDinner
// maxalDrinks
// maxalMobile
