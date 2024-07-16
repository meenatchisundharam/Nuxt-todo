<template>
    <div class="flex items-center justify-center w-full min-h-screen bg-blue-400">
      <div class="h-[80vh] w-[50%] bg-white rounded-3xl p-4 overflow-auto">
        <h1 class="text-2xl font-bold text-center ">Todo list</h1>
        <div class="flex items-center w-full gap-3 my-5">
          <input v-model="inputTask" class="w-full h-10 px-2 rounded-lg border border-blue-400 outline-none" type="text" placeholder="Add a new task..."/>
          <button @click="addTask" class="h-10 px-5 w-max bg-blue-400 text-white rounded-xl font-bold">Add</button>
        </div>
        <div class="grid gap-3">
          <div v-for="(task, index) in tasks" :key="index" class="flex items-center justify-between w-full gap-3">
            <p class="cursor-pointer font-medium text-lg"
            :class="{'line-through': task.isDone,}"
            @click="task.isDone=!task.isDone"
            >{{ task.content }}</p>
            <div>
              <i @click="deleteTask(index)" class="fa-solid fa-trash text-red-700 cursor-pointer"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue'

const inputTask = ref("")
const tasks = ref([])
// add task then empty alert msg and line through 
const addTask = () => {
  if (inputTask.value.trim() === '') {
    alert('Task cannot be empty!')
  } else {
    tasks.value.push({
      content: inputTask.value,
      isDone: false,
    })
    inputTask.value = ''
  }
}
// delete task
const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>