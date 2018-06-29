<template src="../views/Overview.html"></template>

<script>
import lineChart from './js/lineChart.js';
import pieChart from './js/barChart.js';
import axios from 'axios';

export default {
    name: 'Overview',
    data() {
        return {
            skillNew: ' ',
            skills: [{
                    'skill': 'js'
                },
                {
                    'skill': 'css'
                }
            ],
            alertObj: {
                alert: true,
            },
            bgcolor: 'red',
            bgwidht: '100%',
            bgheight: '30px',
            overviewDataJson: [],
            datacollection: null,
            overviewStatus: null,
            error: null

        }

    },
    components: {
        'line-chart': lineChart,
        'pie-chart': pieChart

    },
    methods: {
        openAccount($event) {
            this.$router.push({
                name: 'account',
                params: {
                    userId: $event
                }
            });
        },
        getData() {
            axios.get('https://api.myjson.com/bins/fq132').
            then(response => {
                this.overviewDataJson = response.data;
                 this.overviewStatus = this.overviewDataJson.length ?true:false;
            }).catch(error => {
                this.error = error;
            });
        }

    },
    created() {
        this.getData();

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

.alert {
	background-color: yellow;
	width: 100%;
	height: 20px;
}

.myAccount {
	display: flex;
	justify-content: space-around;
}

.accountDetails h3 {
	text-align: center;
    color: #261F38;
}

.descriptionBlock {
	border-radius: 10px;
	background: #261F38;
	width: 40%;
	margin: 0 5px;
	padding: 5px;
}

.myAccount p {
	cursor: pointer;
}

.myAccount p:hover {
	color: #42b983;
	font-weight: bold;
}

.detailContainer {
	display: flex;
	justify-content: space-between;
	margin-top: 40px;
}

.investmentBlock {
	display: flex;
	justify-content: space-between;
	padding: 0 9px;
}

.investmentInnerBlock {
	padding-top: 16px;
}

.investmentInnerBlock p {
	padding: 0;
	margin: 0;
}

.investmentInnerBlock span {
	padding-left: 5px;
	color: rgba(93, 87, 110, 0.842);
}

.accountBlock:hover {
	background: #26243E;
	cursor: pointer;
}

@media (max-width: 700px) {
	.detailContainer {
		display: block;
		margin-top: 25px;
		width: 100%;
	}
	.descriptionBlock {
		border-radius: 10px;
		background: #261F38;
		width: auto;
		margin: 5px;
	}
}
</style>
