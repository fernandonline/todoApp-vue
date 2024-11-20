<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import TodoEmpty from './components/TodoEmpty.vue';
import TodoForm from './components/TodoForm.vue';
import TodoItems from './components/TodoItems.vue';
import TodoSpinner from './components/TodoSpinner.vue';
import axios from 'axios';



const store = useStore()
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  try {
    const response = await axios.get('http://localhost:3000/todos')
    store.commit('storeTodos', response.data)
  } catch (error) {
    console.error('Erro ao buscar todos:', error)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">

      <TodoSpinner v-if="loading"/>

      <template v-else>
        <TodoForm/>
        <TodoItems/>
        <TodoEmpty/>
      </template>

    </div>
  </div>
</template>
