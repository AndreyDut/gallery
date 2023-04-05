import React from "react";
import { WrapAppFooter } from "./appFooter.style";
import { galleryIcon } from "../../assets/svg_icons";

const AppFooter = () => {
  return (
    <WrapAppFooter>
      {galleryIcon}
      <h2>Галерея</h2>
      <p className="address">ООО «Галерея», 123456, г.Минск, ул. Центральная 1, офис 1</p>
      <p className="phone">Тел: 80291111111</p>
    </WrapAppFooter>
  );
};

export default AppFooter;
