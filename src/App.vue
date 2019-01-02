<template>
  <div id="app">
    <div class="navbar">
      <ul class="nav navbar-nav">
        <li>
          <router-link to="/">VueFire</router-link>
        </li>
        <!--<li v-if="!authUser">-->
          <!--<router-link to="/sign-in">SignIn</router-link>-->
        <!--</li>-->
        <!--<li v-if="!authUser">-->
          <!--<router-link to="/sign-up">SignUp</router-link>-->
        <!--</li>-->
        <!--<li>-->
          <!--<a @click="logout"> Logout</a>-->
          <!--<a href="#"></a>-->
        <!--</li>-->
      </ul>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
