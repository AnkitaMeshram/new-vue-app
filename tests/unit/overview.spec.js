import { expect } from 'chai'
import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import Overview from '@/components/Overview.vue'

describe('Overview.vue', () => {
  it('the label of the page is account overview', () => {
    const wrapper = shallowMount(Overview)
    expect(wrapper.name()).to.equal('Overview')
  })

  /*it('the overview data has loaded', () =>{
    const wrapper = shallowMount(Overview)
    wrapper.setData({ overviewStatus: false })
    expect(wrapper.findAll('#userAccountBlock').length).to.equal(0)
    
    wrapper.setData({ overviewStatus: true })
    expect(wrapper.findAll('#userAccountBlock').length).to.equal(1);
  })*/

  it('returns the api call', (done) => {
    //const vm = Vue.extend(Overview)
    //const Overview = new vm()
    const VM = new Vue(Overview)
    VM.getData().then(() => {
      expect(Overview.findAll('#userAccountBlock').length).to.equal(1)
    }).then(done, done)
  })
})

