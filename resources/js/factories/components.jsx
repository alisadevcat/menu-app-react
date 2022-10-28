import AzulindaHalf from "../menus/AzulindaHalf";
import AzulindaFull from "../menus/AzulindaFull";
import AzulindaMobile from "../menus/AzulindaMobile";
import React from "react";

export const getComponent = (template) => {
    switch (template) {
        case "azulindaHalf":
            return (<AzulindaHalf />);
        case "azulindaFull":
            return (<AzulindaFull />);
        case "azulindaMobile":
            return (<AzulindaMobile />);
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
