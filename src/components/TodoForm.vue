<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const title = ref('');

function addTodo() {
  if (title.value.trim() === '') {
    console.warn('O campo está vazio!');
    return;
  }

  store.dispatch('addTodo', {
    title: title.value,
    completed: false,
  });

  title.value = '';
}
</script>

<template>
  <form
    @submit.prevent="addTodo"
    class="flex items-center px-4 bg-gray-900 h-15 rounded-sm border-l-2 border-green-400 mt-8 mb-5">

    <input
      v-model="title"
      placeholder="Adicione um novo item..."
      type="text"
      class="bg-gray-900 placeholder-gray-500 text-white font-light focus:outline-none block w-full appearance-none leading-normal py-3 pr-3"
    />

    <button
      type="submit"
      class="text-green-400 text-xs font-semibold focus:outline-none">
      ADICIONAR
    </button>
  </form>
</template>
