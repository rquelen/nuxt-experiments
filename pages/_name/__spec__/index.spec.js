import {shallow} from '@vue/test-utils';
import Name from '../index.vue';

describe('/_name', () => {
  let $route = {
    params: {},
  };

  it('should match snapshot', () => {
    // when
    const wrapper = shallow(Name, { mocks: { $route } });

    // then
    expect(wrapper.element).toBeDefined();
    expect(wrapper.element).toMatchSnapshot();
  });

  describe('title', () => {
    it('should contain default message', () => {
      // when
      const wrapper = shallow(Name, { mocks: { $route } });

      // then
      const title = wrapper.find('.title');
      expect(title.text()).toContain('Welcome');
    });

    it('should update when msg data is changed', () => {
      // given
      const wrapper = shallow(Name, { mocks: { $route } });

      // when
      wrapper.setData({msg: 'test'});

      // then
      const title = wrapper.find('.title');
      expect(title.text()).toContain('test');
    });

    it('should contain name in url params', () => {
      // given
      $route = {
        params: {
          name: 'nuxt',
        },
      };

      // when
      const wrapper = shallow(Name, { mocks: { $route } });

      // then
      const title = wrapper.find('.title');
      expect(title.text()).toContain('nuxt');
    });
  });
});
