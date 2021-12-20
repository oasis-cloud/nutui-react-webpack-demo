module.exports = function (source) {
  const regexpNames =
    /(?:import\s+)\{\s*(.*?)\s*\}(?=\s+from\s+[\'\"]@test\/nutui-react[\'\"])/g;
  let match = regexpNames.exec(source);
  let matchedComponents = [];
  let injectScssCode = "";

  do {
    match[1] &&
      match[1].split(",").map((item) => {
        matchedComponents.push(item.trim().toLowerCase());
      });
  } while ((match = regexpNames.exec(source)));

  if (matchedComponents.length) {
    injectScssCode = matchedComponents
      .map(
        (item) => `import '@test/nutui-react/dist/packages/${item}/index.scss';`
      )
      .join("\n");
  }
  return injectScssCode + source;
};
