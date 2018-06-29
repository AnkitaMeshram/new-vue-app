<template src="../views/Account.html">

</template>


<script>
import lineChart from './js/lineChart.js';
import axios from 'axios';


export default {
    name: 'About',
    data() {
        return {
            fromUrl: this.$route.params.userId ? this.$route.params.userId : "5201686573",
            transactionData: null,
            datacollection: null,
            transactionDataLength: false

        }
    },
    mounted() {


    },
    created() {
        this.getData();

    },
    methods: {
        showGraph() {
            this.datacollection = {
                labels: this.getMonth().reverse(),

                datasets: [{
                    label: 'Account Balance',
                    borderColor: '#37A7B8',
                    borderWidth:2,
                    data: this.getAmount().reverse()
                }]
            }, {
                responsive: true,
                maintainAspectRatio: false
            }
        },
        getAmount() {
            var totalAmount = [];
            for (var i = 0; i < this.transactionData.activePayments.length; i++) {
                if (this.transactionData.activePayments[i].id === this.fromUrl) {
                    for (var j = 0; j < this.transactionData.activePayments[i].paymentMonth.length; j++) {
                        totalAmount.push(this.transactionData.activePayments[i].paymentMonth[j].totalAmount);

                    }
                }
            }
            return totalAmount;
        },
        getMonth() {
            var monthName = [];
            for (var i = 0; i < this.transactionData.activePayments.length; i++) {
                if (this.transactionData.activePayments[i].id === this.fromUrl) {
                    for (var j = 0; j < this.transactionData.activePayments[i].paymentMonth.length; j++) {
                        monthName.push(this.transactionData.activePayments[i].paymentMonth[j].month);

                    }
                }
            }
            return monthName;
        },
        getData() {
            axios.get('https://api.myjson.com/bins/1doc66').
            then(response => {
                this.transactionData = response.data;
                this.showGraph();
                if (response.data) {
                    this.transactionDataLength = true;
                }


            }).catch(error => {
                console.log(error);
            })
        }
    },
    components: {
        'line-chart': lineChart

    }
}
</script>

<style>
.paymentMonth {
	background: #261F38;
	padding: 10px;
}

.paymentMonthList {
	display: flex;
	justify-content: space-between;
    color:#26243E;
}

.paymentMonthList div:nth-child(2) {
	width: 40%;
}

.paymentMonthList div:first-child,
.paymentMonthList div:last-child,
.paymentMonthList div:nth-child(3) {
	width: 20%
}

.paymentMonthList div {
	padding: 10px;
}

.small {
	max-width: 600px;
	margin: 100px auto;
    text-align: center;
}

.creditedAmount {
	color: #00C896;
}

.paymentMonthList div{
    word-break: break-all;
}

.accountView h3{
    color:#261F38;
}
</style>