import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Hello from '@/components/Hello.vue'

// describe('Hello.vue', () => {
//   const wrapper = shallowMount(Hello)

//   it('show error when len < 7', () => {
//     wrapper.setData({ username: ' '.repeat(7)})
//     expect(wrapper.find('.error').exists()).to.equal(true)
//   })

//   it('not show error when len >= 7', () => {
//     wrapper.setData({ username: 'Lachlan' })
//     expect(wrapper.find('.error').exists()).to.equal(false)
//   })
// })

const factory = (values = {}) => {
  return shallowMount(Hello, {
    data() {
      return { ...values }
    }
  })
}

describe('Hello.vue', () => {
  it('renders a welcome message', () => {
    const wrapper = factory()
    expect(wrapper.find('.message').text()).to.equal(
      'Welcome to the Vue.js cookbook'
    )
  })

  it('renders an error when username is less than 7 characters', () => {
    const wrapper = factory({ username: '' })
    expect(wrapper.find('.error').exists()).to.equal(true)
  })

  it('renders an error when username is whitespace', () => {
    const wrapper = factory({ username: ' '.repeat(7) })
    expect(wrapper.find('.error').exists()).to.equal(true)
  })

  it('does not render an error when username is 7 characters or more', () => {
    // 工厂函数中的data不是函数时，这里返回true，官网示例估计是旧的vue版本
    const wrapper = factory({ username: 'Lachlan' })
    expect(wrapper.find('.error').exists()).to.equal(false)
  })
})
