<template>
  <!-- <container class="bg-gray-100 flex items-center justify-center min-h-screen"> -->
  <div id="app" class="bg-white p-8 rounded-lg shadow-md w-96">
    <h2 class="text-2xl font-medium text-center mb-6">SIGN UP</h2>
    <div class="mb-4">
      <input type="email" v-model="user" placeholder="User / Id" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div class="mb-4">
      <input type="email" v-model="nama" placeholder="Nama" class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <div class="mb-4">
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <button class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700" @click="signup()">SIGN UP</button>
  </div>
  <!-- </container> -->
</template>

<script setup>
const router = useRouter();
const user = ref("");
const nama = ref("");
const password = ref("");

const signup = () => {
  console.log("sign");
};
</script>

<style scoped></style>
