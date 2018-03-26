<template>
  <div class="hello">
   <div class="alert alert-primary" role="alert">
    <h2>Welcome</h2>
   </div>

  <div class="container">
   <table>
    <tr>
      <td>
    <img src="../assets/bcg1.jpg" width="300" alt="">
       </td>
       <td>  
      <div class="page-header">
        <h3>UPDATE THE ANALYSIS SYSTEM</h3>
      </div>
    </td>
  </tr>
</table>


       <div class="panel panel-default">
          <div class="panel-heading">
          <br>
          <h4 class="panel-title">ADD NEW QUESTION</h4>
          <br>
          </div>

          <div class="panel-body">
            <form id="form" class="form-inline" v-on:submit.prevent="addQues">
            <div class="form-group">
            <label for="quesNo">Q no:</label>
            <input type="text" id="quesnum" class="form-control" size="5" v-model="newQues.qno">
            <p> &nbsp; &nbsp; &nbsp;</p>
            </div>
            
            
            <div class="form-group">
            <label for="type">Type:</label>
            <select v-model="newQues.type" id="type" class="form-control"  >
            <option value = "metro officials" >metro officails </option>
            <option  value = "passengers" selected>passengers </option>
            </select>
            <p> &nbsp; &nbsp; &nbsp;</p>
            </div>
            

            <div class="form-group">
            <label for="question">Question:</label>
            <input type="text" id="question" class="form-control" size="35" v-model="newQues.ques">
            </div>
            <p> &nbsp; &nbsp; &nbsp;</p>
 
            <input type="submit" class="btn btn-primary" value="Add Question">
            </form>
          </div>
      </div>



      <div class="panel panel-default">
           <div class="panel-heading">
           <br>
          <br>
          <br>
           <h3 class="panel-title">Question List</h3>
           </div>
           <div class="panel-body">
           <table class="table table-striped">
           <thead>
             <tr>
               <th>No:</th>
               <th>Type:</th>
               <th>Question:</th>
               <th>Delete:</th>
               </tr>
           </thead>
           <tbody>
               <tr v-for="q in questions">
               <td><a v-bind:href="q.url">{{q.qno}}</a></td>
               <td>{{q.type}}</td>
               <td>{{q.ques}}</td>
               <td> <button class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeQues(q)" ></button>
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
          ques: '',
          type: ''
      }
    }
  },
  
   methods: {
      addQues: function () {
        quesRef.push(this.newQues);
        this.newQues.qno = '';
        this.newQues.ques = '';
        this.newQues.type = '';
      },
      
      


      removeQues: function (q) {
        quesRef.child(q['.key']).remove()
        toastr.success('Question removed successfully')
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
