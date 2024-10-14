<template>
  <div class="app-wrapper">
    <div class="todo-container">
      <h1 class="centered-title">ProductList</h1>
      <ProductForm @add-task="addTask" />
      <ProductList 
        :tasks="tasks" 
        @delete-task="deleteTask" 
        @edit-task="editTask" 
      />
    </div>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    ProductForm,
    ProductList,
  },
  data() {
    return {
      tasks: [], 
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask({ index, task }) {
      this.$set(this.tasks, index, task); 
    },
  },
};

</script>