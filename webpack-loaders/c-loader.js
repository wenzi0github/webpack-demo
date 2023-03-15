const cLoader = function (source) {
  console.log("source", source);

  // return source;
  return `const script = document.createElement('script');
        script.innerHTML = \`${source}\`
        document.head.appendChild(script);`;
};
module.exports = cLoader;
