import { mount } from '@vue/test-utils'
import Index from '~/pages/index.vue'

describe('pages/index', (): void => {
  test('is a Vue instance', (): void => {
    const wrapper = mount(Index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
