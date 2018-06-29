import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faAngleRight, faCreditCard, faExchangeAlt, faPiggyBank, faInfo, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee,faAngleRight,faCreditCard,faExchangeAlt,faPiggyBank,faInfo,faChartBar)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

Vue.filter('formatAmount', function(val){
  if(val){
    val +="";
  var valNew = val.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  if(valNew.indexOf('.') === -1){
    return valNew + ',00';
  }
  valNew = valNew.replace('.',',');
  return valNew;
}
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
