import { defineStore } from "pinia";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  // getters: {
  //   isLoggedIn: (state) => !!state.user,
  // },
  actions: {
    async register(email, password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("Unknown error 1");
            break;
        }
        return;
      }
      this.user = auth.currentUser;
      this.$router.push("/dashboard");
      console.log("Se creo el usuario");
    },
    async login(email, password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/invalid-login-credentials":
            alert("User not found");
            break;
          case "auth/wrong-password":
            alert("Wrong password");
            break;
          default:
            alert("Unknown error");
            break;
        }
        return;
      }
      this.user = auth.currentUser;
      this.$router.push("/dashboard");
      console.log("El usuario inicio sesion");
    },
    async logout() {
      await signOut(auth);
      this.user = null;
      this.$router.push("/");
    },
  },
});
