import React from "react";

export const MenuItem = ({ menuItem, fieldOrder }) => {
    // const orderObject = fieldOrder.split(',').reduce((acc, item, index)=>{ acc[item] = index; return acc; }, {}).sort((a,b)=>{a-b});
    //const orderObject = fieldOrder.split(',');
    // const compare =(item, obj)=>{
    //     let res = {};
    //     for (i in obj){
    //         res[]
    //     }
    // }
   //console.log(menuItem, 'item');

    return (
        <div className="pt-1">
            <div className="menuitem__title"><p>{menuItem.title}</p></div>
            <div className="menuitem__subtitle"><p>{menuItem.subtitle}</p></div>
            <div className="menuitem__price"><p>{menuItem.price}</p></div>
            <div className="menuitem__modifier"><p>{menuItem.modifier}</p></div>
            <div className="menuitem__mod_text"><p>{menuItem.mod_text}</p></div>
            <div className="menuitem__notice"><p>{menuItem.notice}</p></div>
        </div>
    );
};
