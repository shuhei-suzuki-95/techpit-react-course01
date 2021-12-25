// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".contact {\n    color: #ffffff;\n    padding: 100px 0;\n    background-color: #30BFBA;\n}\n.contact__title {\n    font-size: 3.2rem;\n    font-weight: bold;\n    margin-bottom: 1em;\n    text-align: center;\n}\n.contact__text {\n    text-align: center;\n}\n.contact__buttonContainer {\n    margin-top: 20px;\n    text-align: center;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}