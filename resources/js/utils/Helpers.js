export const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
};

export const divideSections = (arr, side) => {
    // return arr.reduce((acc, item) => {
    //     if (item.side === side) {
    //         acc.push(item);
    //     }
    //     return acc;
    // }, []);
    return arr.filter((item) => {
        item.side === side;
    });
};

export function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement("div");
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
}
export const isNotEmptyObj = (obj) => Object.keys(obj).length > 0;
