<template>


<div id="app">
   <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
   </div>
  <div class="container">
      <div class="page-header">
        <h1>Welcome</h1>
        <h2>Update the analysis system</h2>
      </div>


       <div class="panel panel-default">
          <div class="panel-heading">
          <h3 class="panel-title">Add New Question</h3>
          </div>

          <div class="panel-body">
            <form id="form" class="form-inline" v-on:submit.prevent="addQues">
            <div class="form-group">
            <label for="quesNo">No:</label>
            <input type="text" id="quesnum" class="form-control" v-model="newQues.qno">
            </div>

            <div class="form-group">
            <label for="question">Question:</label>
            <input type="text" id="question" class="form-control" v-model="newQues.ques">
            </div>
 
            <input type="submit" class="btn btn-primary" value="Add Question">
            </form>
          </div>
      </div>



      <div class="panel panel-default">
           <div class="panel-heading">
           <h3 class="panel-title">Question List</h3>
           </div>
           <div class="panel-body">
           <table class="table table-striped">
           <thead>
             <tr>
               <th>No:</th>
               <th>Question</th>
               <th></th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="q in questions">
               <td><a v-bind:href="q.url">{{q.qno}}</a></td>
               <td>{{q.ques}}</td>
               <td> <button type="button" class="btn btn-default" aria-label="Right Align" v-on:click="removeQues(q)"><span class="glyphicon glyphicon-trash" aria-hidden="true" ></span> </button>
               </td>
               </tr>
           </tbody>
           </table>
           </div>
     </div>
  </div>

</div>
</template>






<script>

import Firebase from 'firebase'
import toastr from 'toastr'


let config = {
    apiKey: "AIzaSyB49R6mJg3SeqBY4dEfKOmFprZi7Kw0d-g",
    authDomain: "metroanalysis.firebaseapp.com",
    databaseURL: "https://metroanalysis.firebaseio.com",
    projectId: "metroanalysis",
    storageBucket: "metroanalysis.appspot.com",
    messagingSenderId: "648580434228"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let quesRef = db.ref('questions')

export default {
  name: 'app',
  firebase: {
    questions: quesRef
  },
  
  data () {
    return {
      newQues: {
          qno: '',
          ques: ''
      }
    }
  },
  
   methods: {
      addQues: function () {
        quesRef.push(this.newQues);
        this.newQues.qno = '';
        this.newQues.ques = '';
      },

      removeQues: function (q) {
        quesRef.child(q['.key']).remove()
        toastr.success('Question removed successfully')
      }
    }
}
</script>





<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
</style>