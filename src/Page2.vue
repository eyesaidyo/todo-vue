<template>
  <h1>Welcome to page 2</h1>
  <router-link to='/'>go back home</router-link>
  <router-link to='/about/next'>go deeper</router-link>
  <div v-for ='(item, indx) in store.todos' :key='indx' >
    <p>{{item.note}}</p>
  </div>
  <router-view></router-view>
</template>
<script>
  import {useTaskStore} from './Home.vue'
  export default {
    name:'page-2',
  setup(){
    const store = useTaskStore()
    return{
      store
    }
  }
}
</script>