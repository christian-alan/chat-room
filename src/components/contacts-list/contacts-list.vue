<template>
  <div class="w-full flex flex-col h-full">
    <div class="bg-white rounded-md p-4 w-full mb-6">
      <div class="flex flex-row items-center flex-wrap justify-between">
        <div class="w-10 h-10 rounded-full bg-primary-900"></div>
        <img src="src\assets\icons\search-24px .svg" />
      </div>
    </div>
    <div class="bg-white flex flex-col rounded-md p-4 w-full h-full">
      <!-- Contacts -->
        <contacts/>   

    </div>
  </div>
</template>

<script>
import contacts from './contacts.vue';
export default {
  components: { contacts },
  name: "contactList",
};
</script>