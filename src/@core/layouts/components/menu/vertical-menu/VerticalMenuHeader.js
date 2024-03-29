// ** React Imports
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// ** Icons Imports
import { Disc, X, Circle } from "react-feather";

// ** Config
import themeConfig from "@configs/themeConfig";
import logDark from "../../../../../../src/assets/images/logo/clatter-logo-text-white.png";
// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from "@utils";
import { useSkin } from "@hooks/useSkin";
const VerticalMenuHeader = (props) => {
  // ** Props
  const { skin } = useSkin();
  const {
    menuCollapsed,
    setMenuCollapsed,
    setMenuVisibility,
    setGroupOpen,
    menuHover,
  } = props;

  // ** Vars
  const user = getUserData();

  // ** Reset open group
  useEffect(() => {
    if (!menuHover && menuCollapsed) setGroupOpen([]);
  }, [menuHover, menuCollapsed]);

  // ** Menu toggler component
  const Toggler = () => {
    if (!menuCollapsed) {
      return (
        <Disc
          size={20}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(true)}
        />
      );
    } else {
      return (
        <Circle
          size={20}
          data-tour="toggle-icon"
          className="text-primary toggle-icon d-none d-xl-block"
          onClick={() => setMenuCollapsed(false)}
        />
      );
    }
  };

  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row" style={{marginLeft:"20px"}}>
        <li className="nav-item me-auto">
          <NavLink
            to={user ? getHomeRouteForLoggedInUser(user.role) : "/"}
            className="navbar-brand"
          >
            <span className="brand-logo">
              <img src={themeConfig.app.appLogoImage} alt="logo" />
            </span>
            <h2 className="brand-text archivoblack primary-dark-black mb-0 pl-0">
              {/* <img src={themeConfig.app.appLogoImage} alt="logo" /> */}
              <img
                style={{ color: "white"}}
                src={skin == "dark" ? logDark : themeConfig.app.appLogoName}
                alt="logo"
              />
            </h2>
          </NavLink>
        </li>
        {/* <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle cursor-pointer">
            <Toggler />
            <X
              onClick={() => setMenuVisibility(false)}
              className="toggle-icon icon-x d-block d-xl-none"
              size={20}
            />
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default VerticalMenuHeader;
