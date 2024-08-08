<template>
  <div>
    <h1>Edit Word</h1>
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
import { ViewWord, EditWord } from "../helpers/api";
export default {
  name: "Edit",
  data() {
    return {
      word: {},
    };
  },
  async mounted() {
    this.word = await ViewWord(this.$route.params.id);
  },
  methods: {
    onSubmit: async function () {
      //save updated word to database
      await EditWord(this.$route.params.id, this.word);
      //display flash message
      this.flash("Edit word succeed !");
      //redirect to word list page
      this.$router.push(`/words`);
    },
  },
};
</script>
