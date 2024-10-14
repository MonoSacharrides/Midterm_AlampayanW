<template>
  <div>
    <form @submit.prevent="addTask">
      <input type="text" v-model="newTask" placeholder="Enter product name" />
      <input type="price" v-model="newTask1" placeholder="Enter a price" />
      <input type="description" v-model="newTask2" placeholder="Enter description" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.$emit("add-task", this.newTask);
        this.newTask = "";
      }
      if (this.newTask1.trim()) {
        this.$emit("add-task", this.newTask1);
        this.newTask1 = "";
      }
      if (this.newTask2.trim()) {
        this.$emit("add-task", this.newTask2);
        this.newTask2 = "";
      }
    },
  },
};


</script>