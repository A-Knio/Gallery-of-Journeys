import { jwtDecode, InvalidTokenError } from 'jwt-decode'; // Make sure to import InvalidTokenError if it's exported

class AuthService {
  getProfile() {
    const token = this.getToken();
    if (typeof token !== 'string' || token === '') {
      throw new InvalidTokenError('Token is missing or invalid');
    }
    return jwtDecode(token);
  }


  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token);
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
    const decoded = jwtDecode(token);
    return decoded.exp < Date.now() / 1000;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/account');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/'); // Redirect to home or login page after logout
  }
}

export default new AuthService();
