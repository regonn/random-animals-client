import axios from "axios";

class Client {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get() {
    try {
      const res = await axios.get(this.baseUrl);
      return res.data.file;
    } catch (error) {
      throw error.response.status;
    }
  }
}

export default Client;
