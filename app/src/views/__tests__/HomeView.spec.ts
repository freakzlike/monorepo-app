import { describe, it, expect } from 'vitest'
import HomeView from '../HomeView.vue'
import { mount } from '@vue/test-utils'

describe('mount', () => {
  it('should mount', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toBe('Result: 3')
  })
})
