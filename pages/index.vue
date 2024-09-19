<template>
  <container class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div id="app" class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl font-medium text-center mb-6">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <input type="email" v-model="user" placeholder="User" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div class="mb-4">
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button type="submit" class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">LOGIN</button>
      </form>
      <p class="text-center mt-6">Don't have an account? <a href="#" class="text-blue-500" @click="signup"> Sign up </a></p>
    </div>
  </container>
</template>

<script setup>
const router = useRouter();
const user = ref("");
const password = ref("");

const login = () => {
  router.push({ path: "/home" });
};
const signup = () => {
  console.log("masukk");
  router.push({ path: "/signup" });
};
</script>

<style scoped></style>
