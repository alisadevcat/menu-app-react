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
    return arr.filter((item)=>{item.side === side})
};
