class HeaderPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap(
      "HeaderWebpackPlugin",
      (compilation, callback) => {
        compilation.hooks.buildModule.tap("HeaderWebpackPlugin", (data, cb) => {
          console.log(data.resource);
        });
      }
    );
  }
}
module.exports = HeaderPlugin;
