<template>
  <div class="todo-list-container">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span v-if="editingIndex !== index">{{ task }}</span>
        <input 
          v-else 
          v-model="editedTask" 
          @keyup.enter="confirmEdit(index)" 
          @blur="confirmEdit(index)" 
        />
        
    
        <button v-if="editingIndex !== index" @click="editTask(index)">Edit</button>
        
      
        <button v-if="editingIndex === index" @click="confirmEdit(index)">Save</button>
        
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      editingIndex: null, 
      editedTask: "",    
    };
  },
  methods: {
    editTask(index) {
      this.editingIndex = index;       
      this.editedTask = this.tasks[index]; 
    },
    confirmEdit(index) {
  if (this.editedTask.trim()) {
    console.log("Emitting edit-task event:", { index, task: this.editedTask }); 
    this.$emit("edit-task", { index, task: this.editedTask });
    this.editingIndex = null;
    this.editedTask = "";
  }
},

    deleteTask(index) {
      this.$emit("delete-task", index);
    },
  },
};
</script>