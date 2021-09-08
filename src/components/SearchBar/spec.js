import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchBar from '.';

let component;

const getSearch = jest.fn();

const mockState = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn().mockImplementation((init) => [init, mockState]),
}));

configure({ adapter: new Adapter() });

describe('<SearchBar />', () => {
  beforeEach(() => {
    component = mount(<SearchBar getSearch={getSearch} />);
  });
  it('shoud be rendered', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('shoud be called handleSubmit on button clicked', () => {
      component.find("#submitSearchButton").simulate('click');
      expect(getSearch).toHaveBeenCalled();
  });

  it('shoud be called setState on input change', () => {
    component.find("#searchInput").simulate('change', {target: {value: 'iagomeijon'}});
    expect(mockState).toHaveBeenCalledWith('iagomeijon');
});
});
