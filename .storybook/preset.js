module.exports = [
  {
    name: "storypug/preset",
    options: {
      babel: true, //use babel-loader
      loaderOptions: {
        root: "../stories", // use src components as the pug root inclusion path
      },
    },
  },
];
