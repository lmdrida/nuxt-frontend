<template>
  <div class="container mx-auto p-4">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2" @click="create()">Create Activity</button>
    <div class="bg-white rounded-lg shadow-md p-4 mb-2" v-for="(row, i) in aktivitasList" :key="i">
      <div class="row">
        <div>
          <h5 class="text-gray-900 text-lg font-bold mb-2">{{ row.subject }}</h5>
          <p class="text-gray-700 text-base mb-4">{{ row.desc }}</p>
          <p class="text-gray-700 text-base mb-4">{{ getStatus(row.status) }}</p>
          <span><button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" @click="updateStatus(row)">Update Status</button></span>
        </div>

        <div class="flex justify-end">
          <div class="row">
            <div class="flex space-x-2">
              <button class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" @click="edit(row)">Edit</button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="onDelete(row)">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <dialogCreate v-if="createDialogOpen" @close="createDialogOpen = false"></dialogCreate>

    <dialogDelete v-if="deleteDialogOpen" @close="deleteDialogOpen = false" :data="dataDetail"></dialogDelete>

    <dialogEdit v-if="editDialogOpen" @close="editDialogOpen = false" :data="dataDetail"></dialogEdit>

    <dialogUpdateStatus v-if="updateDialogOpen" @close="updateDialogOpen = false" :data="dataDetail"></dialogUpdateStatus>
  </div>
</template>

<script setup>
import { ref } from "vue";
import dialogCreate from "~/components/dialogCreate.vue";
import dialogDelete from "~/components/dialogDelete.vue";
import dialogEdit from "~/components/dialogEdit.vue";
import dialogUpdateStatus from "~/components/dialogUpdateStatus.vue";

const createDialogOpen = ref(false);
const deleteDialogOpen = ref(false);
const editDialogOpen = ref(false);
const updateDialogOpen = ref(false);
const dataDetail = ref("");
const aktivitasList = ref([
  { id: 1, subject: "Aktivitas 1", desc: "This is the description of Aktivitas 1", status: "selesai" },
  { id: 2, subject: "Aktivitas 2", desc: "This is the description of Aktivitas 2", status: "dibatalkan" },
  { id: 2, subject: "Aktivitas 3", desc: "This is the description of Aktivitas 3", status: "ditandai" },
]);

const listStatus = ref([
  { value: "selesai", text: "Selesai" },
  { value: "dibatalkan", text: "Dibatalkan" },
  { value: "ditandai", text: "Tidak Ditandai" },
]);
const onDelete = (item) => {
  dataDetail.value = item;
  deleteDialogOpen.value = true;
};
const create = () => {
  createDialogOpen.value = true;
};
const edit = (item) => {
  dataDetail.value = item;
  editDialogOpen.value = true;
};
const updateStatus = (item) => {
  dataDetail.value = item;
  updateDialogOpen.value = true;
};

const getStatus = (item) => {
  const data = listStatus.value.find((ele) => ele.value == item);
  return data?.text;
};
</script>

<style scoped></style>
