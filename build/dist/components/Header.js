import React from "../../_snowpack/pkg/react.js";
import {FaTwitter, FaGithub} from "../../_snowpack/pkg/react-icons/fa.js";
import "./Header.css.proxy.js";
import CoverImage from "../assets/images/cover-image.jpg.proxy.js";
import ProfileImage from "../assets/images/profile-image.png.proxy.js";
const Header = () => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "header",
    style: {backgroundImage: `url(${CoverImage})`}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header__profile"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "header__profileImage"
  }, /* @__PURE__ */ React.createElement("img", {
    src: ProfileImage,
    alt: ""
  })), /* @__PURE__ */ React.createElement("div", {
    className: "header__profileName"
  }, "Shuhei Suzuki"), /* @__PURE__ */ React.createElement("div", {
    className: "header__profileJobType"
  }, "Front-end engineer"), /* @__PURE__ */ React.createElement("ul", {
    className: "header__profileSnsList"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "header__profileSns",
    href: "#DUMMY"
  }, /* @__PURE__ */ React.createElement(FaTwitter, null))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", {
    className: "header__profileSns",
    href: "#DUMMY"
  }, /* @__PURE__ */ React.createElement(FaGithub, null))))));
};
export default Header;
