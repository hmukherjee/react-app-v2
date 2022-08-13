const path = require("path");

//entry and output path for playground application
const entryPath = path.join(
  __dirname,
  "src/01-Start.jsx"
);
const outPath = path.join(__dirname, "/public");

module.exports = (env) => {
  return {
    mode: env.production ? "production" : "development",
    entry: entryPath,
    output: {
      path: outPath,
      filename: "app.js",
    },
    module: {
      rules: [
        {
          use: "babel-loader",
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
        }
      ],
    },
    devtool: "eval-cheap-module-source-map",
    resolve: {
      extensions: ["", ".js", ".jsx"],
    },
  };
};
