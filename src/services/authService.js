
class AuthService {
    login({ email, password }) {
        return window.firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logout() {
        return window.firebase.auth().signOut();
    }
}

export default new AuthService();
