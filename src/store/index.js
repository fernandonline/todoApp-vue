import axios from 'axios';
import { createStore } from 'vuex';

const API_URL = 'http://localhost:3000/todos';

export default createStore({
  state: {
    todos: [],
  },

  mutations: {
    storeTodos(state, payload) {
      state.todos = payload;
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },

  actions: {
    async getTodos({ commit }) {
      try {
        const response = await axios.get(API_URL);
        commit('storeTodos', response.data);
      } catch (error) {
        console.error('Erro ao buscar todos:', error);
      }
    },

    async addTodo({ commit }, todo) {
      try {
        const response = await axios.post(API_URL, todo);
        commit('addTodo', response.data);
      } catch (error) {
        console.error('Erro ao adicionar todo:', error);
      }
    },

    async deleteTodo({ commit }, id) {
      try {
        await axios.delete(`${API_URL}/${id}`);
        commit('deleteTodo', id);
      } catch (error) {
        console.error('Erro ao deletar todo:', error);
      }
    },
  },
});
