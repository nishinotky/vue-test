import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import LoginUsers from './data/user'

export default {
  bootstrap () {
    let mock = new MockAdapter(axios)

    mock.onGet('/success').reply(200, {
      msg: 'success'
    })

    mock.onGet('/error').reply(500, {
      msg: 'failure'
    })

    mock.onPost('/login').reply(config => {
      let { username, password } = JSON.parse(config.data)
      return new Promise((resolve, reject) => {
        let user = null
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u))
              user.password = undefined
              return true
            }
          })

          if (hasUser) {
            resolve([
              200,
              {
                code: 200,
                msg: 'Request successful',
                user
              }
            ])
          } else {
            resolve([
              200,
              {
                code: 500,
                msg: 'Incorrect username or password'
              }
            ])
          }
        }, 1000)
      })
    })
  }
}
