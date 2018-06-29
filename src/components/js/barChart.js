import { Bar } from 'vue-chartjs'


export default ({
    extends: Bar,
    mounted () {
        this.renderChart( {
             type: 'bar', // was "line"
                    labels: ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'],
                    defaultFontColor:'#fff',
                    options: {
                      legend: {
                          labels: {
                              // This more specific font property overrides the global property
                              defaultFontColor: 'black'
                          }
                      }
                  },
                    datasets: [
                      {
                        label: 'Account Balance',
                        type: 'bar', // Add this
                        data: [50000,12000,34000,12345,23423],
                        backgroundColor: '#007E63',
                        borderWidth :0,
                        defaultFontColor:'#fff'
                      },
                      {
                        label: 'Total Investments',
                        type: 'bar', // Add this
                        data: [2000,2355,2244,4543,7654],
                        backgroundColor: '#7BE5C4',
                        borderWidth :0
                      },
                      {
                        label: 'Total Loans',
                        type: 'bar', // Add this
                        data: [1000,6543,5653],
                        backgroundColor: '#D774A2',
                        borderWidth :0
                      }
                    ]
              
           }, {responsive: true, maintainAspectRatio: false})
       }
})