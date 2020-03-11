import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";
storiesOf("Input", module)
  .add("Input Name", () => <Input label="Name" type="small" />)
  .add("Input Caption", () => <Input label="Caption" type="small" />)
  .add("Input Image", () => <Input label="Image URL" type="small" />);
