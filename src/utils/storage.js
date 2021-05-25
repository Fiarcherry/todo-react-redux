const STORAGE = localStorage

export default class Storage {
  static getToken() {
    return Storage.get('access_token')
  }

  static setToken(value) {
    Storage.set('access_token', value)
  }

  static set(name, value) {
    STORAGE.setItem(name, value)
  }

  static get(name) {
    return STORAGE.getItem(name) || ''
  }

  static remove(name) {
    STORAGE.removeItem(name)
  }

  static clear() {
    STORAGE.clear()
  }
}
