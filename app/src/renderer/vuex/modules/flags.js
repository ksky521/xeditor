
const state = {
  all: [{
    name: 'default',
    color: '蓝色'
  }, {
    name: 'success',
    color: '绿色'
  }, {
    name: 'warning',
    color: '橙色'
  }, {
    name: 'danger',
    color: '红色'
  }, {
    name: 'purple',
    color: '紫色'
  }]
}

const getters = {
  isInFlags: (state, flag) => {
    return flag && state.all.indexOf(flag) !== -1
  },
  allFlags: state => state.all
}

export default {
  state,
  getters
}
