import Home from '../components/Home'

export default function (router) {
  router.map({
    '/': {
      name: 'home',
      component: Home
    },
    '/rich': {
      name: 'rich',
      component: function (resolve) {
        require(['../components/Rich'], resolve)
      }
    },
    '/dream': {
      name: 'dream',
      component: function (resolve) {
        require(['../components/Dream'], resolve)
      }
    }
  })
}
