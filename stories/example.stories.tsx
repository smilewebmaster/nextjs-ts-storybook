// components/example.stories.js

import startCase from "lodash/startCase";
import Example from "./example.pug";
import { renderer } from "storypug";

const { html } = renderer({ startCase });

export default {
  title: "Pug Components",
  component: Basic,
};

export const Basic = () => {
  // setup properties
  const props = { intro: "This is an intro" };
  // this HTML will be rendered inside the mixin's block
  const contents = "<p>Example body</p>";

  console.log(html(Example, props, contents));

  return html(Example, props, contents);
  // return Example({ props, contents, startCase });
};
