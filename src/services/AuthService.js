import axios from "axios";

const API_URL = "http://localhost:4000/users/";

class AuthService {
  async login(email, password) {
    const response = await axios
      .post(API_URL + "login", {
        email,
        password,
      });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, email, password) {
    return axios.post(API_URL, {
      name,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
