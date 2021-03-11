import axios from "axios";

export default {

  // get books from api by searching with query
  getBook: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/?q=" + query);
  },

  // deletes a book using the id from database
  deleteBook: function (id) {
    // console.log(id) comes back undefined
    return axios.delete("api/books/" + id);
  },

  // saves book into database
  saveBook: function (bookData) {
    return axios.post("/books", bookData);
  },

  // get books from database
  getBooksData: function () {
    return axios.get("api/books/");
  },
};
