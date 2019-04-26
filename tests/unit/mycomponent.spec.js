import Vue from 'vue'
import MyComponent from '@/components/MyComponent.vue'
import { expect } from 'chai'

// 挂载元素并返回已渲染的文本的工具函数
function getRenderedText(Component, propsData) {
  const Constructor = Vue.extend(Component)
  const vm = new Constructor({ propsData: propsData }).$mount()
  return vm.$el.textContent
}

describe('MyComponent.vue', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof MyComponent.created).to.equal('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(typeof MyComponent.data).to.equal('function')
    const defaultData = MyComponent.data()
    expect(defaultData.message).to.equal('hello!')
  })

  // 检查mount中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(MyComponent).$mount()
    expect(vm.message).to.equal('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Constructor = Vue.extend(MyComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).to.equal('bye!')
  })

  // 对不同的props进行测试
  it('renders correctly with different props', () => {
    expect(
      getRenderedText(MyComponent, {
        msg: 'Hello'
      })
    ).to.include('Hello')

    expect(
      getRenderedText(MyComponent, {
        msg: 'Bye'
      })
    ).to.include('Bye')
  })

  // 在状态更新后检查生成的HTML
  it('updates the rendered message when vm.message updates', done => {
    const vm = new Vue(MyComponent).$mount()
    vm.message = 'foo'

    // 在状态改变后和断言DOM更新前等待一刻
    Vue.nextTick(() => {
      expect(vm.$el.textContent).to.equal('foo')
      done()
    })
  })
})
