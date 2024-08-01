import axios from 'axios'

const backendURL = 'http://localhost:3000/vocabs/'

const handleError = fn => (...params) =>
   fn(...params).catch(error => {
      console.log(error)
   })

export const api = {
   ViewAllWords: handleError(async () => {
      const response = await axios.get(backendURL)
      return response.data
   }),
   ViewWord: handleError(async (id) => {
      const response = await axios.get(backendURL + id)
      return response.data
   }),
   DeleteAllWords: handleError(async () => {
      const response = await axios.delete(backendURL)
      return response.data
   }),
   DeleteWord: handleError(async (id) => {
      const response = await axios.delete(backendURL + id)
      return response.data
   }),
   AddNewWord: handleError(async (word) => {
      const response = await axios.post(backendURL, word)
      return response.data
   }),
   EditWord: handleError(async (id, word) => {
      const response = await axios.put(backendURL + id, word)
      return response.data
   })
}
