// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nhtml {\n    font-size: 62.5%;\n}\n\nbody {\n    color: #333333;\n    font-family: \"メイリオ\", Meiryo, \"ヒラギノ角ゴシック\", \"Hiragino Sans\", sans-serif;\n    font-size: 1.6rem;\n    line-height: 1.2;\n}\n\nh1,h2,h3,h4,h5,h6 {\n    font-size: inherit;\n    font-weight: inherit;\n}\n\nul, ol {\n    list-style: none;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n\nimg {\n    vertical-align: top;\n}\n\n.button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    font-weight: bold;\n    min-width: 200px;\n    min-height: 40px;\n    border-radius: 20px;\n    transition: all 0.2s;\n}\n.button--primary {\n    color: #333333;\n    background-color: #ffffff;\n}\n.button--primary:hover {\n    color: #ffffff;\n    background-color: #333333;\n}\n\n.taCenter { text-align: center; }\n\n.mt10 { margin-top: 10px; }\n.mt20 { margin-top: 20px; }\n.mt30 { margin-top: 30px; }";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}