<template>
  <div>
    <h1>Word List</h1>
    <table border="1">
        <tr>
          <th>English</th>
          <th>German</th>
        </tr>
        <tr v-for="(word, i) in words" :key="i">
          <td>{{ word.english }}</td>
          <td>{{ word.german }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import { api } from "../api"

export default {
  name: 'Words',
  data() {
    return {
      words: []
    }
  },
  async mounted() {
    this.words = await api.getAllWords()
  }
}
</script>
