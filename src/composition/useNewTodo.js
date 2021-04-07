import { ref,watchEffect } from 'vue';

export default function useNewTodo(todoRef) {
  const newTodoRef = ref("");
  const addTodo = () =>{

      const addVal = newTodoRef.value && newTodoRef.value.trim();
      if(!addVal) return
      const todoItem = {
           title:addVal,
           completed:false,
           id: Math.ceil(Math.random()*1000)
      };
      todoRef.value.push(todoItem)
      newTodoRef.value = ''
  }
  return {
      newTodoRef,
      addTodo
  }
}
