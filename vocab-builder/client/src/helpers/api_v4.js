import axios from 'axios'

const backendURL = 'http://localhost:3000/vocabs'

const handleRequest = async (url, method, data = null) => {
   try {
      const response = await axios({
         url, method, data
      })
      return response.data
   } catch (err) {
      console.error(err)
   }
}

export const api = {
   ViewAllWords: () => handleRequest(`${ backendURL }`, 'GET'),
   ViewWord: (id) => handleRequest(`${backendURL}/${id}`, 'GET'),
   DeleteAllWords: () => handleRequest(`${backendURL}`, 'DELETE'),
   DeleteWord: (id) => handleRequest(`${backendURL}/${id}`, 'DELETE'),
   AddNewWord: (word) => handleRequest(`${backendURL}`, 'POST', word),
   EditWord: (id, word) => handleRequest(`${backendURL}/${id}`, 'PUT', word)
}
