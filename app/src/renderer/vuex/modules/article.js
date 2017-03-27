const STATUS = ['default', 'dropped']
const state = {
  id: 0,
  title: 'untitled',
  tags: [],
  flag: '',
  content: '',
  createTime: '',
  updateTime: '',
  book: '',
  status: ''
}

const mutations = {
  updateStatus: (state, status) => {
    if (~STATUS.indexOf(status)) {
      state.status = status
      return true
    }
    return false
  }
}

export default {
  state,
  mutations
}
