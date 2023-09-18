<script setup>
import { useUserStore } from "../stores/user";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  push,
  update,
} from "firebase/database";
import { getAuth } from "firebase/auth";
const auth = getAuth();
const user = auth.currentUser;
const db = getDatabase();
const dbRef = ref(db);
get(child(dbRef, `users/${user.uid}/nombre`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error(error);
  });
function writeUserData(userId, name, apellido) {
  set(ref(db, "users/" + userId), {
    nombre: name,
    apellido: apellido,
  });
  console.log("escribiendo");
}

const userStore = useUserStore();

const logout = () => {
  userStore.logout();
};
</script>

<template>
  <div class="container">
    <h1 class="title">Dashboard</h1>
    <h2>Hi,</h2>
    <button class="buttons__btn buttons__btn--logout" @click.prevent="logout">
      Logout
    </button>
    <button
      class="buttons__btn buttons__btn--logout"
      @click.prevent="writeUserData(user.uid, 'katherine', '')"
    >
      escribir
    </button>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
}

.title {
  font-size: 3.5rem;
  margin-bottom: 50px;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

.buttons__btn {
  text-decoration: none;
  padding: 1.3em 3em;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  background-color: #282828;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.buttons__btn--logout:hover {
  background-color: #f53131;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn:active {
  transform: translateY(-1px);
}
</style>
