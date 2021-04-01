<template>
  <div class="home">
    {{name}}-{{id}}-{{age}}
    <button @click="change">click</button>
  </div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'
import { reactive, toRefs} from 'vue'

export default {
  name: 'Home',
  setup(props,{root}){
    const state = reactive({
      name: 'JinZai',
      age: 3,
      id: 1
    })
    const change = () => {
      console.log(state.age)
      state.age += 1
    }
    return {
      ...toRefs(state),
      change
    }
  }
}
</script>
