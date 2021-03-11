import axios from "axios";

export default {
  // get all books
  getBooks: function () {
    return axios.get("https://www.googleapis.com/books/v1/volumes/?q=?");
  },

  // get book by id
  getBook: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/?q=" + query);
  },

  // deletes a book
  deleteBook: function (id) {
    return axios.get("/books/" + id);
  },

  saveBook: function (bookData) {
    return axios.post("/books", bookData);
  },
};
