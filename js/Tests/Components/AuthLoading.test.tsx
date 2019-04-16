import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import AuthLoading from '../../App/Components/AuthLoading'

test("Renders Correctly", () => {
const tree = renderer.create(<AuthLoading />).toJSON();
expect(tree).toMatchSnapshot();
});
