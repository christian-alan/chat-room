<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex flex-row">
      <div class="flex-row flex items-center px-4 py-4">
        <div class="w-10 h-10 rounded-full bg-gray-900"></div>
        <h4 class="ml-3 font-bold">Bapa</h4>
      </div>
    </div>
    <hr />
    <div class="flex flex-col w-full h-full overflow-y-scroll ">
      <div class="p-4">
      <!-- Messages here -->
        <recievers-template/>
        <senders-template/>
      </div>
    </div>
    <hr />
    <div class="flex-row flex items-center px-4 py-4">
      <img
        class="mr-2"
        src="src\assets\icons\sentiment_satisfied_alt-24px.svg"
      />
      <img class="mr-3" src="src\assets\icons\attach_file-24px.svg" />
      <input
        class="w-full h-10 border-gray-500 border-solid border-2 px-3 rounded-sm"
        placeholder="Type Message"
        type="text"
      />
      <div class="ml-3 flex bg-gray-700 rounded-circle p-3 justify-center items-center">
          <img src="src\assets\icons\send-24px.svg"/>
      </div>
    </div>
  </div>
</template>


<script>
import RecieversTemplate from './recievers-template.vue';
import sendersTemplate from './senders-template.vue';
export default {
  components: { sendersTemplate, RecieversTemplate, },

  name: "chatArea",
};
</script>