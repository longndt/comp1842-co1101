<template>
  <div>
    <h1>New Word</h1>
    <form action="" @submit.prevent="onSubmit">
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="united kingdom flag"></i> English</div>
        <input type="text" required v-model="word.english" />
      </div>
      <br />
      <div class="ui labeled input fluid">
        <div class="ui label"><i class="germany flag"></i> German</div>
        <input type="text" required v-model="word.german" />
      </div>
      <br />
      <button class="ui primary button">Submit</button>
    </form>
  </div>
</template>

<script>
import { AddNewWord } from "../helpers/api";
export default {
  name: "New",
  data() {
    return {
      word: {},
    };
  },
  methods: {
     onSubmit: async function () {
      //add word to database
      await AddNewWord(this.word);
      //display flash message
        this.flash('Add new word succeed !')
      //redirect to word list page
      this.$router.push(`/words`);
    },
  },
};
</script>
