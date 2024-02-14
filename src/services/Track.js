import { APP_CONFIG } from "../utils/Constants";
import APIKit from "./API";

const BASE_PATH = `${APP_CONFIG.BASE_URL}/api/track`;
export default class TrackService {
  static async createTrack(reqObj) {
    const { data } = await APIKit.post(BASE_PATH, reqObj);
    if (!data?.success) {
      throw data.data;
    }
    return data.data;
  }

  static async getTracks() {
    const { data } = await APIKit.get(BASE_PATH);
    if (!data?.success) {
      throw data.data;
    }
    return data.data;
  }

  static async updateTrack(reqObj) {
    const { data } = await APIKit.put(BASE_PATH, reqObj);
    if (!data?.success) {
      throw data.data;
    }
    return data.data;
  }

  static async deleteTrack(id) {
    const { data } = await APIKit.delete(BASE_PATH, { data: { id } });
    if (!data?.success) {
      throw data.data;
    }
    return data.data;
  }
}
