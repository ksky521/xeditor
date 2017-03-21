export default [
  {
    path: '/',
    name: 'index',
    component: require('components/Index')
  },
  {
    path: '*',
    redirect: '/'
  }
]
