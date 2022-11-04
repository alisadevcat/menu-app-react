import React from "react";

export const Section = ({ section }) => {
    console.log(section);
    return (
        <div>
            <div className="row justify-flex-end">
                <h3>{section.title}</h3>
                <h4>{section.subtitle}</h4>
                <h4>{section.field_order}</h4>

                {/* <span class="flaticon-write">
      <FontAwesomeIcon icon="edit" onClick="showModal(section)"/>
      </span>
      <span class="flaticon-paper" onClick="showModal">
            <FontAwesomeIcon icon="copy" />
    </span>
      <span class="flaticon-download" onClick="showModal">
      <FontAwesomeIcon icon="long-arrow-alt-down" />
        </span>
      <span class="flaticon-rubbish-bin" onClick="showModal">
      <FontAwesomeIcon icon="trash-alt" /></span>
    </div>
    <div class="section-title">
      <h3>{ section.title }</h3>
      <h4>{ section.subtitle }</h4>
      <h4>{section.field_order}</h4>  */}
                {/* <div
        v-for="menu_item in menu_items_array"
        :key="menu_item.id"
        :class="setItemClass(menu_item.style)"
      >
        <app-menu-item
          :menu_item="menu_item"
          :field_order="section.field_order"
        ></app-menu-item>
      </div> */}
            </div>
        </div>
    );
};
