/*import { Line } from 'vue-chartjs';
import transactionData from '../static/transaction.json';


export default ({
    extends: Line,
    methods(){
      console.log(transactionData);
    },
    mounted () {
        this.renderChart( {
             labels: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
             datasets: [
               {
                 label: 'Account Balance',
                 backgroundColor: '#018786',
                 data: [40000, 2000,30009,4500,11000,700,29034,43456,54577,1000,12213,2000]
               }
             ]
           }, {responsive: true, maintainAspectRatio: false})
       }
})*/


import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options)
  }
}