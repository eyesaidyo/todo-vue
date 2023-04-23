<template>
  <NavBar/>
<div>
  <form @submit='handleSubmit' >
  <va-input
    class="mx-6"
    v-model='store.todo'
    type="textarea"
    placeholder="type in note..."
    v-if='!store.editing'/>
    
  <va-input 
    class="mb-6"
    v-focus 
    v-else
    v-model='store.editText'
    type="textarea"/>
  <va-button class='mx-5 py-4' v-if='!store.editing'  @click='store.addTask'>Add task</va-button>
  <va-button v-else  @click='store.confirmNote'>confirm</va-button>
  </form>
    </div>
  <div v-for="(item, index) in store.todos" :key='index' :id='index' >
   <va-card class='mt-5'>
         <va-card-content @click='store.checkOff'  v-bind:class="[item.checked?'line':'']">{{item.note}}.</va-card-content>
   </va-card>
    
    <va-button class='mt-5 mx-3' @click='store.deleteNote'>delete</va-button>
    <va-button class='mt-5 mx-3' @click='store.editNote'>edit</va-button>
  
    <p>
<!--       <span @click='store.checkOff'  v-bind:class="[item.checked?'line':'']">{{ item.note }}</span>   -->
      
    </p>
    
  </div>
</template>
<script>
  import NavBar from './NavBar.vue'
  import {ref,computed} from 'vue'
  import {defineStore} from 'pinia'
  export const useTaskStore = defineStore('tasks',()=>{
    const welcome='';
   const todo= ref('');
   const todos= ref([]);
   const editing= ref(false);
   const editId=ref(0);
   const editText=ref('')
   const bigWelcome= computed(()=>welcome.toUpperCase())
   function addTask(e){
      todos.value.push({
        
        note:todo.value,
        checked:false
      })
     console.log(todos.value)
      todo.value=''
      e.preventDefault()
    }

   function checkOff(e){
        todos.value[e.target.parentElement.parentElement.id].checked==false?
        todos.value[e.target.parentElement.parentElement.id].checked=true:
          todos.value[e.target.parentElement.parentElement.id].checked=false
  }
function editNote(e){
  editing.value=true
console.log(e.target.parentElement.parentElement.firstElementChild)  
  editText.value=e.target.parentElement.parentElement.firstElementChild.innerText
  editId.value=e.target.parentElement.parentElement.id
      }
function confirmNote(e){
        todos.value.forEach((note, index)=>{
          if(index==editId.value){
            todos.value[index].note=editText.value;
          }
        })
        editText.value='';
        editing.value=false;
        e.preventDefault()
      }
function deleteNote(e){
        
       todos.value=todos.value.filter((item,index)=>{
 console.log(`it is ${item.id}`)        
         return e.target.parentElement.parentElement.id!=index
    })                            
      }
      return{
        todo,
        todos,
        editing,
        editId,
        editText,
        bigWelcome,
        //functions
        addTask,
        checkOff,
        editNote,
        confirmNote,
        deleteNote
      }
  })
  export default{
    setup(){
      const store= useTaskStore()
      return {
        store
      }
    },
    components:{
      NavBar
    },
    directives: {
      focus: {
        mounted: function(el){
          el.focus();
        },
      },
    },
    computed:{
         uppercase(){
            return (v)=>{
              return v.toUpperCase()
              }
           }
     } 
  }
</script>
<style scoped>
  
.line{
  text-decoration:line-through;
}


</style>
