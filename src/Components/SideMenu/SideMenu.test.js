
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SideMenu from "./SideMenu.component";

configure({adapter: new Adapter()})

describe("<SideMenu/>", () => {
  it("This component should return a div with menu items", () => {
    const wrapper = shallow(<SideMenu />);
    expect(wrapper.find("div")).toHaveLength(1)
  })
});