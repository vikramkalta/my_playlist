import ApiService from './API';

export default class BaseService {
  static async query(params) {
    const result = await ApiService.query(this.url, params);
    return result;
  }

  static async get(id) {
    const result = await ApiService.get(this.url, id);
    return result;
  }

  static async update(id, params) {
    const result = await ApiService.update(this.url, id, params);
    return result;
  }

  static async post(body) {
    const result = await ApiService.post(this.url, body);
    return result;
  }

  static async delete(body) {
    const result = await ApiService.delete(this.url, body);
    return result;
  }
}