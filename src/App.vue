<template>
    <div class="app">
         <input type="text" v-model="newTodoRef" @keyup.enter="addTodo">
         <ul>
              <li v-for="item in todoRef" :key="item.id">{{item.title}}</li>
         </ul>
    </div>
</template>

<script>
    import useTodoList from './composition/useTodoList.js'
    import useNewTodo from './composition/useNewTodo'
    export default {

          setup(){

                const { todoRef } = useTodoList();

                return {

                    todoRef,
                    ...useNewTodo(todoRef)
                }
          }
    }
</script>
