import React from 'react';
import Episodes from './Episodes';
import * as rtl from '@testing-library/react';

// jest.mock('axios', () => {
//   // the callback retuns something
//   // we return the "new", artificial axios module
//   // { get: Function returns promise, post: Funcion... }
//   return {
//     get: (url) => {
//       return Promise.resolve({ data: [] })
//     }
//   }
// })

describe('Episode', () => {
  let wrapper;
  afterEach(rtl.cleanup);

  beforeEach(() => {
    const episode = Array.prototype;
    wrapper = rtl.render(<Episodes episodes={episode} />);
    console.log(wrapper)
  });

  it('it displays without crashing', async () => {
    const episodesDiv = await wrapper.findByText('Chapter Two: The Mall Rats');
    console.log(episodesDiv)
    // expect(episodesDiv).toBeInTheDocument();
    expect(episodesDiv).toBeVisible();
  });
});
