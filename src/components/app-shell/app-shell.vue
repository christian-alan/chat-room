<template>
        <div class="w-full h-full flex flex-row">

            <div class="w-1/4 bg-gray-800 pt-6 pb-6 px-6">
                <contacts-list class="w-full "></contacts-list>
            </div>
            <div class="w-3/4 bg-gray-600 pt-6 pb-6 px-6"> 
                <div class="bg-white rounded-md w-full h-full">
                    <chat-area class="w-full h-full"></chat-area>
                </div>
            </div>

        </div>
</template>
<script>
import ChatArea from '../chat-area/chat-area.vue'
import ContactsList from '../contacts-list/contacts-list.vue'
export default {
    name:'appShell',
    components:{ChatArea, ContactsList}
}
</script>