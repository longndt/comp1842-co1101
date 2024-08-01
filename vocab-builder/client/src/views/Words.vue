<template>
  <div>
    <h1>Word List</h1>
    <table class="ui celled compact table">
      <tr>
        <th>English</th>
        <th>German</th>
        <th colspan="3">Menu</th>
      </tr>
      <tr v-for="(word, i) in words" :key="i">
        <td>{{ word.english }}</td>
        <td>{{ word.german }}</td>
        <td>
          <router-link
            class="ui button green"
            :to="{ name: 'Show', params: { id: word._id } }"
            >Show
          </router-link>
        </td>
        <td>
          <router-link
            class="ui button yellow"
            :to="{ name: 'Edit', params: { id: word._id } }"
          >
            Edit
          </router-link>
        </td>
        <td>
          <a
            @click.prevent="onDelete(word._id)"
            href="`/vocabs/${word._id}`"
            class="ui red button"
          >
            Delete
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { ViewAllWords, DeleteWord } from "../helpers/api";

export default {
  name: "Words",
  data() {
    return {
      words: [],
    };
  },
  async mounted() {
    this.words = await ViewAllWords();
  },
  methods: {
    async onDelete(id) {
      const deleteConfirm = window.confirm(
        "Are you sure to delete this word ?"
      );
      //prompt user to delete word or not
      if (deleteConfirm) {
        //delete word from database
        await DeleteWord(id);
        //refresh the word list (clear deleted words from table)
        const updatedWords = this.words.filter((word) => word._id !== id);
        this.words = updatedWords;
        //display flash message
        this.flash("Delete word succeed !");
      }
    },
  },
};
</script>
