<template>
  <div class="container">
    <h1 class="first">My Todos</h1>
      <input v-model="inputTask" class="input-task" />
      <button @click="addTask" class="btn" type="submit">Save</button>
    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="list">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)" class="deleteTask">Delete</button>
        <button @click="editTask(index)" class="editTask">Edit</button>
      </li>


    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const inputTask = ref('');
const tasks = ref([]);

const addTask = () => {
  if (inputTask.value.trim() !== "") {
    // Add the new task in the beginning of the array
    tasks.value.unshift(inputTask.value);
    inputTask.value = "";
  } else {
    alert("Please enter a task!");
  }
};

const deleteTask = (index) => {
  // Remove the task at the specified index
  tasks.value.splice(index, 1);
};
</script>

<style scoped>
.container {
  display: flex;
  overflow-y: auto;
  justify-content: center;
  border: 1px solid white;
  padding: 20px;
  box-shadow: 0 0 10px 0;
  position: relative;
  background-color: antiquewhite;
  border-radius: 10px;
  margin-left: 70%;
  margin-right: auto;
  height: 50%;
  width: 600px;
  max-width: 100%;
}



.card {
  display: flex;
  /* align-items: center;
  justify-content: center; */
}

.first {
  color: gray;
  position: absolute;
  margin-bottom: 10%;
}

.input-task {
  position: absolute;
  margin-top: 7%;
  width: 50%;
  border-radius: 8px;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.input-task:hover{
  border: 2px solid aquamarine;
}

.task-list {
  position: absolute;
  margin-top: 8%;
  width: 50%;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column; /* Adjusted to stack tasks vertically */
  list-style-type: none;

}

.list {
  border: 1px solid gray;
  border-radius: 8px;
  margin-top: 31px; /* Added margin between tasks */
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: black;
}

.btn{
  position: absolute;
  left: 77%;
  top: 62px;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  transition: 250ms ease-out;
  border: none;
}
.deleteTask{
  position: absolute;
  left: 100%;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  transition: 250ms ease-out;
  border: none;
}
.editTask{
  position: absolute;
  left: 125%;
  border-radius: 8px;
  padding: 10px;
  font-size: 16px;
  color: black;
  cursor: pointer;
  transition: 250ms ease-out;
  border: none;
}

.btn:hover,
.deleteTask:hover,
.editTask:hover {
  color: yellow;
  background-color: green;
}
</style>
