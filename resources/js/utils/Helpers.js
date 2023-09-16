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

export const getItemsById = (arr, id) => {
    return arr.reduce((acc, item) => {
        if (item[0].section_id === id) {
            acc = [...acc, ...item];
        }
        return acc;
    }, []);
};

export const updateSectionIdsinItems = (sections, items) => {
    let result = [];
    sections.forEach((s, i, arr1) => {
        result = items.map((j, index, arr) =>
            arr[i].map((item) => ({ ...item, section_id: arr1[i].id }))
        );
    });

    return result;
};

export const getStyles = (styles) => {
    return styles.split(",");
};