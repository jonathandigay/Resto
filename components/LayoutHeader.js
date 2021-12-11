import React, { useState, useEffect, useContext } from "react";

import resto from "../public/assets/resto.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/AuthProvider";

const LayoutHeader = ({}) => {
  const Router = useRouter();
  const [ulMobile, setUlMobile] = useState(false);
  const [headBg, setHeadBg] = useState(false);

  const { showsigninmodal, showsignupmodal, currentUser, showsignoutmodal } =
    useAuthContext();

  const Active = (e) => {
    const { innerText } = e.target;
    Router.push(
      `/${innerText.toLowerCase() === "home" ? "" : innerText.toLowerCase()}`
    );
    setUlMobile(!ulMobile);
  };

  const onSetUlmobile = () => {
    setUlMobile(!ulMobile);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setHeadBg(true);
      } else {
        setHeadBg(false);
      }
    });
  }, []);

  return (
    <div className={`header ${headBg && "headBg"}`}>
      <div className="header_content">
        <div className="resto_logo">
          <Image src={resto} alt="resto" />
        </div>
        <h3>esto</h3>
        <div className="header_nav">
          <div className={`bar ${ulMobile && "barX"}`} onClick={onSetUlmobile}>
            <div className="line"></div>
          </div>
          <ul className={`${ulMobile && "ul-mobile"}`}>
            <li
              onClick={Active}
              className={`${Router.asPath === "/" && "li-active"}`}
            >
              HOME
            </li>

            <li
              onClick={Active}
              className={`${Router.asPath === "/menus" && "li-active"}`}
            >
              MENUS
            </li>
            <li
              onClick={Active}
              className={`${Router.asPath === "/help" && "li-active"}`}
            >
              HELP
            </li>
            <li
              onClick={Active}
              className={`${Router.asPath === "/resto" && "li-active"}`}
            >
              RESTO
            </li>
          </ul>
        </div>
        {currentUser && currentUser.email && (
          <div className="orders">
            <i className="fas fa-concierge-bell"></i>
          </div>
        )}

        <div
          className="cart"
          onClick={() => {
            if (!currentUser) {
              return showsignupmodal();
            }
            Router.replace(`/cart/pending/${currentUser && currentUser.uid}`);
          }}
        >
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="user">
          <i className="fas fa-user"></i>

          <ul className="user-nav">
            {!currentUser && (
              <>
                <li onClick={() => showsigninmodal()}>sign in</li>
                <li onClick={() => showsignupmodal()}>Create Account</li>
              </>
            )}
            {currentUser && (
              <>
                <li>{currentUser.displayName}</li>
                <li onClick={() => showsignoutmodal()}>Sign out</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
