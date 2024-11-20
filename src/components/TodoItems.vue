<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import TodoItem from './TodoItem.vue';

const store = useStore();
const todos = computed(() => store.state.todos);

function deleteTodo(id) {
  store.dispatch('deleteTodo', id);
}
</script>

<template>
  <div class="space-y-2">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @delete-todo="deleteTodo"
    />
  </div>
</template>
