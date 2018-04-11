<template>
 <div class="hello">
   <div class="alert alert-primary" role="alert">
    <h2>Welcome</h2>
   </div>
  <button type="button" class="btn btn-primary" v-on:click="login">SIGN IN WITH GOOGLE </button>
 </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data: function () {
      return {

      }
  },
  methods: {
      login: function () {
           var provider = new firebase.auth.GoogleAuthProvider()
          firebase.auth().signInWithPopup(provider).then(result => {
              var user = result.user
              console.log(user)
              this.$router.replace('/s')
          })
      }
  }
}
</script>
