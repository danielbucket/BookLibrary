import    React     from 'react';
import  { shallow } from 'enzyme';
import    Main      from './Main';


describe('', () => {
  const wrapper = shallow(<Main />)

  it('should be wrapped in a <Switch> function', () => {

    expect(typeof wrapper.find('.search-results-container').node.props.children.type)
                         .toEqual('function')
  })

  it('should render one component', () => {
    expect(wrapper.find('.search-results-container').nodes.length).toEqual(1)
  })

})
