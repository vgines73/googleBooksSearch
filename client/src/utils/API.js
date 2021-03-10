import axios from "axios";

export default {
  getBooks: function () {
    return axios.get("https://www.googleapis.com/books/v1/volumes/?q=?");
  },

  // get book by id
  getBook: function (id) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/?q=?" + id);
  },

  // deletes a book
  deleteBook: function (id) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/?q=?" + id);
  },

  saveBook: function (bookData) {
    return axios.post("/books", bookData);
  },
};
