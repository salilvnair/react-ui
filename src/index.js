import React from 'react';
import { render } from "react-dom";
import { ButtonDemo, IconDemo, CheckboxDemo, SliderDemo, LoadingDemo, InputDemo, ExpansionPanelDemo} from './demo';
const App = () => (
  <div className="demo-app">
      <ExpansionPanelDemo />
      <ButtonDemo />
      <IconDemo />
      <CheckboxDemo />
      <SliderDemo />
      <LoadingDemo />
      <InputDemo />
  </div>
);

render(<App />, document.getElementById("root"));
