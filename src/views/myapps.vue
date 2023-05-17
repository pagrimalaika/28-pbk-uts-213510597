<template>
  <div class="kepala">
    <h1>DAFTAR KEGIATAN</h1>
    <div class="badan">
      <form @submit.prevent="addActivity">
        <input type="text" v-model="newActivity" placeholder="Add activity...">
        <button type="submit">Add</button> <!-- add type attribute to button -->
      </form>
    </div>
      <ul>
      <li v-for="(activity, index) in filteredActivities" :key="index" :class="{ done: activity.completed }">
        <input type="checkbox" v-model="activity.completed">
        <span>{{ activity.text }}</span>
        <button type="button" @click="removeActivity(index)">Remove</button> <!-- add type attribute to button -->
      </li>
    </ul>
    <div class="show">
      <label>Show only unfinished activities:</label>
      <input type="checkbox" v-model="showUnfinished">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newActivity: '',
      activities: [
        { text: 'bikin tugas', completed: false },
        { text: 'bersih bersih rumah', completed: false },
        { text: 'bersih bersih kamar', completed: true },
      ],
      showUnfinished: false
    }
  },
  methods: {
    addActivity() {
      if (this.newActivity.trim() !== '') {
        this.activities.push({ text: this.newActivity, completed: false });
        this.newActivity = '';
      }
    },
    removeActivity(index) {
      this.activities.splice(index, 1);
    }
  },
  computed: {
    filteredActivities() {
      if (this.showUnfinished) {
        return this.activities.filter(activity => !activity.completed);
      } else {
        return this.activities;
      }
    }
  }
}
</script>
<style>
  .done {
  text-decoration: line-through;
  }
  h1 {
  color: Gray;
  text-align: center;
  background-color: LightGray;
  }
  body {
  background-color: lightblue;
  }
  .activities{
    text-align: center;
  }
  .show {
    text-align: center;
  }
  .kepala{
    
    margin: 0 auto;
  }
  .badan{
    display: flex;
    justify-content: center;
  }
</style>