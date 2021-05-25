export class LocalStorage {
  static setItem(key: string, json: any) {
    localStorage.setItem(key, JSON.stringify(json));
  }

  static getItem(key: string) {
    return localStorage.getItem(key);
  }
}
