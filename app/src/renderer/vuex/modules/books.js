
const state = {
  all: [{
    name: '我的笔记',
    createTime: Date.now(),
    articleCount: 0,
    id: 0
  }]
}

const getters = {
  allBooks: state => state.all,
  isInBook: (state, book) => {
    return book && state.all.indexOf(book) !== -1
  },
  addBook: (state, book) => {
    if (book && state.all.indexOf(book) !== -1) {
      return false
    }
    return state.all.push(book)
  },
  delBook: (state, book) => {
    var i = state.all.indexOf(book)
    if (book && i !== -1) {
      state.all.splice(i)
    }
  }
}

export default {
  state,
  getters
}
