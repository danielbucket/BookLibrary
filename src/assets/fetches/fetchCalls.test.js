import { shallow, mount } from 'enzyme';
import fetchMock          from 'fetch-mock';
import fetchCalls         from './fetchCalls';
import {  createUser,
          logInUser,
          userLibrary,
          googleAPI   }   from './fetchLocations'


describe('fetchBooks', () => {
  const resolveAfter2Seconds = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should get books when fetchBooks is called', async () => {
    const fetchAThing = new fetchCalls()
    const mockData = {items:[
      {id: "9", title: "A book"}, { id:'12', title: "Another Book"}
    ]}
    let result;

    fetchMock.get(`${googleAPI}${'gatsby'}`, {
      status:200, body: JSON.stringify(mockData)
    })
    fetchAThing.fetchBooks('gatsby')
                .then(data => result = data)
    await resolveAfter2Seconds()

    expect(fetchMock.called()).toBe(true)
    expect(result[0].title).toEqual('A book')
    expect(fetchMock.lastUrl()).toEqual(`${googleAPI}${'gatsby'}`)
  })
})

describe('fetchRegisteredUser', () => {
  const resolveAfter2Seconds = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should', async () => {
    const postAThing = new fetchCalls()
    const mockData = {username: 'billson', password: 'shindig'}
    let result;

    fetchMock.post(logInUser, {
      method: "POST",
      status: 200,
      body: JSON.stringify(mockData)
    })

    postAThing.fetchRegisteredUser(mockData)
              .then(data => result = data)

    await resolveAfter2Seconds()

    expect(fetchMock.called()).toBe(true)
    expect(result).toEqual(mockData)
    expect(fetchMock.lastUrl()).toEqual('http://localhost:4400/bucketLibrary/v1/getuser')
    expect(fetchMock.lastOptions()).toEqual({
      method: "POST",
      body: JSON.stringify(mockData),
      headers: {"Content-Type":"application/json"}
    })
  })

  describe('fetchUserLibrary', () => {
    const resolveAfter2Seconds = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
    afterEach(() => {
      expect(fetchMock.calls().unmatched).toEqual([]);
      fetchMock.restore();
    });

    it('should', async () => {
      const postAThing = new fetchCalls()
      const mockData = {user_id: 15, email: 'email@addy'}
      let result;

      fetchMock.post('http://localhost:4400/bucketLibrary/v1/user/library', {
        method: "POST",
        status: 200,
        body: JSON.stringify(mockData)
      })

      postAThing.fetchUserLibrary(mockData)
                .then(data => result = data)

      await resolveAfter2Seconds()

      expect(fetchMock.called()).toBe(true)
      expect(result).toEqual(mockData)
      expect(fetchMock.lastUrl()).toEqual(userLibrary)
      expect(fetchMock.lastOptions()).toEqual({
        method: "POST",
        body: JSON.stringify(mockData),
        headers: {"Content-Type":"application/json"}
      })
    })
  })


  describe('createNewUser', () => {
    const resolveAfter2Seconds = () => new Promise(resolve => setTimeout(() => resolve(), 2000));
    afterEach(() => {
      expect(fetchMock.calls().unmatched).toEqual([]);
      fetchMock.restore();
    });

    it('should', async () => {
      const postAThing = new fetchCalls()
      const mockData = {email: 'mack@daddy.bro', username:'mackDaddy', password:'legsDay'}
      let result;

      fetchMock.post(createUser, {
        method: "POST",
        status: 200,
        body: JSON.stringify(mockData)
      })

      postAThing.createNewUser(mockData)
                .then(data => result = data)

      await resolveAfter2Seconds()

      expect(fetchMock.called()).toBe(true)
      expect(result).toEqual(mockData)
      expect(fetchMock.lastUrl()).toBe(createUser)
      expect(fetchMock.lastOptions()).toEqual({
        method: "POST",
        body: JSON.stringify(mockData),
        headers: {"Content-Type": "application/json"}
      })
    })
  })
})
