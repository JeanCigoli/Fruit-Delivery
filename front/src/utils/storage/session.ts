export class SessionStorage {
  static setItem(key: string, json: any) {
    sessionStorage.setItem(key, JSON.stringify(json));
  }

  static getItem(key: string): {} | null {
    const json = sessionStorage.getItem(key);

    if (!json) {
      return null;
    }

    return JSON.parse(json);
  }

  static removeItem(key: string) {
    sessionStorage.removeItem(key);
  }
}
