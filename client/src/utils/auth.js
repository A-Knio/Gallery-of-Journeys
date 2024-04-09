
import { jwtDecode, InvalidTokenError } from "jwt-decode";

class AuthService{

  getToken() {
    return localStorage.getItem('id_token');
  }

getProfile() {
  const token = this.getToken()
    if (typeof token !== 'string' || token === '') {
      throw new InvalidTokenError('Token is missing or invalid');
    }
    return jwtDecode(token);

  }
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }


  hasUser() {
    const decoded = jwtDecode(this.getToken());  
    return decoded && decoded.data?.userId;
  }

  hasPhoto() {
    const decoded = jwtDecode(this.getToken());
    return decoded && decoded.data?.photoId;
  }


  isTokenExpired(token) {
    try {
      const decoded = jwtDecode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }


  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
