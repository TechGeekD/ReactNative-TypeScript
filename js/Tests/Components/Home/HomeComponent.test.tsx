import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import HomeComponent from '../../../App/Components/Home/HomeComponent'

test("Renders Correctly", () => {
const tree = renderer.create(<HomeComponent/>).toJSON();
expect(tree).toMatchSnapshot();
});
