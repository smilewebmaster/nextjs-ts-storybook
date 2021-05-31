module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "storypug",
      options: {
        babel: true, //use babel-loader
        loaderOptions: {
          root: "../stories", // use src components as the pug root inclusion path
        },
      },
    },
    "@whitespace/storybook-addon-html",
  ],
};
