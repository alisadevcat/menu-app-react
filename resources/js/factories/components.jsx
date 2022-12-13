import AzulindaHalf from "../menus/AzulindaHalf";
import AzulindaFull from "../menus/AzulindaFull";
import AzulindaMobile from "../menus/AzulindaMobile";
import LaLuceDinner from "../menus/LaluceDinner";
import React from "react";

export const getComponent = (template) => {
    switch (template) {
        case "azulindaHalf":
            return <AzulindaHalf />;
        case "azulindaFull":
            return <AzulindaFull />;
        case "azulindaMobile":
            return <AzulindaMobile />;
        case "laluceDinner":
            return <LaLuceDinner />;
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
