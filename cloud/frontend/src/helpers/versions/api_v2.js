import axios from 'axios'

const backendURL = 'http://localhost:3000/vocabs/'

export const api = {
   ViewAllWords: async () => {
      try {
         const response = await axios.get(backendURL)
         return response.data
      } catch (err) {
         console.error(err)
      }
   },
   ViewWord: async (id) => {
      try {
         const response = await axios.get(backendURL + id)
         return response.data
      } catch (err) {
         console.error(err)
      }
   },
   DeleteAllWords: async () => {
      try {
         const response = await axios.delete(backendURL)
         return response.data
      } catch (err) {
         console.error(err)
      }
   },
   DeleteWord: async (id) => {
      try {
         const response = await axios.delete(backendURL + id)
         return response.data
      } catch (err) {
         console.error(err)
      }
   },
   AddNewWord: async (word) => {
      try {
         const response = await axios.post(backendURL, word)
         return response.data
      } catch (err) {
         console.error(err)
      }
   },
   EditWord: async (id, word) => {
      try {
         const response = await axios.put(backendURL + id, word)
         return response.data
      } catch (err) {
         console.error(err)
      }
   }
}
