import { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import {createWrapperAndAppendToBody} from "../utils/Helpers";

//wrapperId property, which is the ID attribute of a DOM element and acts as the container for the portal.

//useLayoutEffect вызывается синхронно, после всех изменений в DOM.
//Перерендеривание компонента происходит не последовательно, а одномоментно, тем самым исключая появление мигания.

function ReactPortal({ children, wrapperId = "react-portal-modal-container" }) {
  const [wrapperElement, setWrapperElement] = useState(null);

  useLayoutEffect(() => {
  let element = document.getElementById(wrapperId);
  if (!element) {
    element = createWrapperAndAppendToBody(wrapperId);
  }  setWrapperElement(element);
}, [wrapperId]);

    if (wrapperElement === null) return null;
  return createPortal(children, wrapperElement);
}
export default ReactPortal;