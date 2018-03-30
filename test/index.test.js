import React from "react";

test("render a label", () => {
  const wrapper = shallow(<label>Hello Jest!</label>);
  expect(wrapper).toMatchSnapshot();
});
