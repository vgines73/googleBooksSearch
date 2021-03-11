import axios from "axios";

export default {
  // get all books from api
  getBooks: function () {
    return axios.get("https://www.googleapis.com/books/v1/volumes/?q=?");
  },

  // get one book by id from api
  getBook: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/?q=" + query);
  },

  // deletes a book using the id from database
  deleteBook: function (id) {
    // console.log(id) comes back undefined
    return axios.get("api/books/" + id);
  },

  // saves book into database
  saveBook: function (bookData) {
    return axios.post("/books", bookData);
  },
};
