// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".header {\n    position: relative;\n    width: 100%;\n    height: 100vh;\n}\n.header::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(48, 194, 186, 0.9);\n}\n.header__profile {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    color: #ffffff;\n    transform: translate(-50%, -50%);\n    text-align: center;\n}\n.header__profileImage {\n    display: inline-block;\n    border-radius: 50%;\n    overflow: hidden;\n}\n.header__profileName {\n    font-size: 4.8rem;\n    font-weight: bold;\n    margin-top: 10px;\n}\n.header__profileJobType {\n    font-size: 1.8rem;\n    font-weight: bold;\n    margin-top: 10px;\n}\n.header__profileSnsList {\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    margin-top: 10px;\n}\n.header__profileSnsList > * {\n    padding: 0 10px;\n}\n.header__profileSns {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    color: #333333;\n    font-size: 2.0rem;\n    width: 40px;\n    height: 40px;\n    background-color: #ffffff;\n    border-radius: 50%;\n    transition: all 0.2s;\n}\n.header__profileSns:hover {\n    color: #ffffff;\n    background-color: #333333;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}