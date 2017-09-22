module.exports = {
  plugins: [
    require("postcss-import")(),
    require("postcss-global-import")(),
    require("precss")(),
    require("autoprefixer")()
  ]
};
