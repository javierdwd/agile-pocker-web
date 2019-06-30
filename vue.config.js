module.exports = {
  // Temporary fix https://github.com/webpack/webpack/issues/5931
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/_vars.scss";
          @import "@/assets/styles/_mixins.scss";
        `
      }
    }
  }
};
