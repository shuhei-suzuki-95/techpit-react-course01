import React from "react";
import Circle from "react-circle";
import {requestStates} from "../constants.js";
import {useSkills} from "../customHooks/useSkills.js";
import "./Skills.css";
const Skills = () => {
  const [sortedLanguageList, fetchRequestState, converseCountToPercentage] = useSkills();
  return /* @__PURE__ */ React.createElement("div", {
    className: "skills"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "skills__title"
  }, "Skills"), fetchRequestState === requestStates.loading && /* @__PURE__ */ React.createElement("p", {
    className: "taCenter"
  }, "Fetching..."), fetchRequestState === requestStates.success && /* @__PURE__ */ React.createElement("ul", {
    className: "skills__circleList"
  }, sortedLanguageList().map((item) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: item.language
    }, /* @__PURE__ */ React.createElement("div", {
      className: "skills__circle"
    }, /* @__PURE__ */ React.createElement("p", null, item.language), /* @__PURE__ */ React.createElement(Circle, {
      animate: true,
      progress: converseCountToPercentage(item.count)
    })));
  })), fetchRequestState === requestStates.error && /* @__PURE__ */ React.createElement("p", {
    className: "taCenter"
  }, "Error"));
};
export default Skills;
