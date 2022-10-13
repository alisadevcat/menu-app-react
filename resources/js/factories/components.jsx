import Azulindahalf from "../menus/Azulindahalf";


export const getComponent = (template, menu) => {
    switch (template) {
        case "azulindaHalf":
            return <Azulindahalf menu={menu} />;
        default:
            return <div></div>;
    }
};
