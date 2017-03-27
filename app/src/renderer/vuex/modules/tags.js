
const state = {
  all: [{
    name: 'tag',
    createTime: Date.now(),
    id: 0,
    articleCount: 0
  }]
}

const getters = {
  allTags: state => state.all,
  isInTags: (state, tag) => {
    return tag && state.all.indexOf(tag) !== -1
  },
  addTag: (state, tag) => {
    if (tag && state.all.indexOf(tag) !== -1) {
      return false
    }
    return state.all.push(tag)
  },
  delTag: (state, tag) => {
    var i = state.all.indexOf(tag)
    if (tag && i !== -1) {
      state.all.splice(i)
    }
  }
}

export default {
  state,
  getters
}
