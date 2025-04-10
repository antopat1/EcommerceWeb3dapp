import React from "react";
import { LinkComponent, SocialComponent } from "../../utils/links";
import { VscArrowSmallLeft } from "react-icons/vsc";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../../states/sidebarSlice";
import { RootState } from "../../states/store";
import style from "./SideBar.module.css"; // Importiamo i CSS Modules

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state: RootState) => state.sidebar.showSidebar);

  return (
    <aside className={`${showSidebar ? style.sidebar + " " + style.showSidebar : style.sidebar}`}>
      <div className={style.sidebarContent}>
        <header className={`${style.navHeader} container`}>
          <div className={style.navBrand}>
            <h3>Dapp WEB 3</h3>
          </div>
          <button className={`${style.navToggler} btn icon-btn`} onClick={() => dispatch(toggleSidebar())}>
            <VscArrowSmallLeft className={style.navIcon} />
          </button>
        </header>
        <div className="container">
          <LinkComponent classLink={style.sidebarLinks} />
        </div>
        <SocialComponent classSocial={style.sidebarSocial} />
      </div>
    </aside>
  );
};

export default Sidebar;