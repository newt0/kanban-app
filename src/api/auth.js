import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('/auth/login', authInfo)
        .then(res => resolve({ token: res.data.token, userId: res.data.userId}))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}

// clientを用いて/auth/loginに認証情報混みでPOSTリクエストを行っている
// 通信は非同期で行われるので、Promiseを用いて成功時と失敗時の動作を書いている