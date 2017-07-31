import    React     from 'react';
import  { shallow } from 'enzyme';
import    Header    from './Header';

describe('Header', () => {
  const wantedLibrary = [{},{},{},{}]
  const readLibrary = [{},{}]
  const ownedLibrary = [{},{},{}]

  const wrapper = shallow(<Header wantedLibrary={wantedLibrary}
                                    readLibrary={readLibrary}
                                   ownedLibrary={ownedLibrary} />)


  it('01: should have a div tag that spawns three children', () => {

    expect(wrapper.find('#libraryCounter').node.props.children.length).toEqual(3)
  })

  it('02: should have just so many children as props', () => {

    expect(wrapper.find('#libraryCounter').nodes[0].props.children[0].props.children[0])
                  .toEqual('Wanted Books:')
    expect(wrapper.find('span').nodes[0].props.children)
                  .toEqual(4)
  })

  it('03: should have just so many children as props', () => {

    expect(wrapper.find('#libraryCounter').nodes[0].props.children[1].props.children[0])
                  .toEqual('Read Books:')
    expect(wrapper.find('span').nodes[1].props.children)
                  .toEqual(2)
  })

  it('04: should have just so many children as props', () => {

    expect(wrapper.find('#libraryCounter').nodes[0].props.children[2].props.children[0])
                  .toEqual('Owned Books:')
    expect(wrapper.find('span').nodes[2].props.children)
                  .toEqual(3)
  })

  it('05: wantedBooks should have three props as children', () => {

    expect(wrapper.find('p').nodes[0].props.children[0])
                  .toEqual('Wanted Books:')
    expect(wrapper.find('p').nodes[0].props.children[1].props.children)
                  .toEqual(4)
  })
})
