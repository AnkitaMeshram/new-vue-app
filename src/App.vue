<template>

  <div id="app">
  <div class="navBar">
      <nav class="isDesktop">
        <router-link to="/" title="Overview">Overview</router-link>
        <router-link to="/account" title="Account">Account</router-link>
        <router-link to="/investment" title="Investment">Investment</router-link>
        <router-link to="/loan" title="Loan">Loan</router-link>
        <router-link to="/info" title="Info">Info</router-link>
      </nav>
      <nav class="isMobile">
        <router-link to="/" title="Overview"><font-awesome-icon class="fal" icon="chart-bar" /></router-link>
        <router-link to="/account" title="Account"><font-awesome-icon class="fal" icon="piggy-bank" /></router-link>
        <router-link to="/investment" title="Investment"><font-awesome-icon class="fal" icon="exchange-alt" /></router-link>
        <router-link to="/loan" title="Loan"><font-awesome-icon icon="credit-card" /></router-link>
        <router-link to="/info" title="Info"><font-awesome-icon icon="info" /></router-link>
      </nav>
      <div class="userDetails">
        <p>Ankita Meshram</p>
        <p>23108925802</p>
        
      </div>
   </div>   
    <router-view/>
 
   
  </div>
</template>

<script>


export default {
  name: 'app'
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat");
body {
	font-family: 'Montserrat', sans-serif;
	/*background: #26243E;*/
	background: #fff;
}

#app {
	width: 90%;
	margin: 0 auto;
	color: #fff;
}

h3 {
	color: #fff;
	padding: 5px;
	margin: 5px;
}

p {
	color: #fff;
}

nav {
	width: 50%;
	display: flex;
	justify-content: space-between;
	padding: 10px;
	font-weight: bold;
}

nav a {
	text-decoration: none;
	color: #fff;
}

nav a:hover {
	color: #42b983;
}

.navBar {
	width: 100%;
	background: #261F38;
	margin: 0;
	padding: 5px;
	display: flex;
	justify-content: space-between;
}

.userDetails {
	margin-right: 14px;
}

.userDetails p {
	margin: 0;
	padding: 0;
}

.isDesktop {
	display: flex;
}

.isMobile {
	display: none;
}

@media (max-width: 700px) {
	.isDesktop {
		display: none;
	}
	.isMobile {
		display: flex;
	}
}

h2{
	color:#261F38;
}


</style>
