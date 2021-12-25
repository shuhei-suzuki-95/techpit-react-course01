// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".skills {\n    padding: 50px 0;\n}\n.skills__title {\n    font-size: 3.2rem;\n    font-weight: bold;\n    margin-bottom: 1em;\n    text-align: center;\n}\n.skills__circleList {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: flex-start;\n    justify-content: center;\n}\n.skills__circleList > * {\n    padding: 0 20px;\n}\n.skills__circle {\n    text-align: center;\n}\n.skills__circle p {\n    margin-bottom: 10px;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}