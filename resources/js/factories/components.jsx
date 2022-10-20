import AzulindaHalf from "../menus/AzulindaHalf";
import AzulindaFull from "../menus/AzulindaFull";
import AzulindaMobile from "../menus/AzulindaMobile";

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

export const getComponent = (template, menu) => {
    switch (template) {
        case "azulindaHalf":
            return <AzulindaHalf menu={menu} />;
        case "azulindaFull":
            return <AzulindaFull menu={menu} />;
        case "azulindaMobile":
            return <AzulindaMobile menu={menu} />;
        default:
            return <div></div>;
    }
};
