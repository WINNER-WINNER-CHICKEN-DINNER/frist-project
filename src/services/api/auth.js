import HttpSeaver from '../http-seaver'

class AuthService {
  static getLogin = (options) => {
    return HttpSeaver.get('/login', options)
  }
}
export { AuthService }
