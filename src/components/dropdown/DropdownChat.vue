<template>
  <div>
    <div class="dropdown-chat" @click="handleClick">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="6" viewBox="0 0 21 6" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73685 0.573059C1.35381 0.573059 0.222229 1.70464 0.222229 3.08768C0.222229 4.47072 1.35381 5.6023 2.73685 5.6023C4.11989 5.6023 5.25147 4.47072 5.25147 3.08768C5.25147 1.70464 4.11989 0.573059 2.73685 0.573059ZM17.8246 0.573059C16.4415 0.573059 15.3099 1.70464 15.3099 3.08768C15.3099 4.47072 16.4415 5.6023 17.8246 5.6023C19.2076 5.6023 20.3392 4.47072 20.3392 3.08768C20.3392 1.70464 19.2076 0.573059 17.8246 0.573059ZM7.76609 3.08768C7.76609 1.70464 8.89767 0.573059 10.2807 0.573059C11.6637 0.573059 12.7953 1.70464 12.7953 3.08768C12.7953 4.47072 11.6637 5.6023 10.2807 5.6023C8.89767 5.6023 7.76609 4.47072 7.76609 3.08768Z" fill="#4F4F4F"/>
    </svg>
    </div>
    <div class="dropdown-chat-option" v-show="isClicked">
      <div v-show="isReceiver">
        <div class="dropdown-chat-option-text" style="color:#2F80ED" @click="handleEdit">Edit</div>
        <DividerComponent />
        <div class="dropdown-chat-option-text" style="color:#F00" @click="handleDelete">Delete</div>
      </div>
      <div v-show="isSender">
        <div class="dropdown-chat-option-text" style="color:#2F80ED" @click="handleClick">Share</div>
        <DividerComponent />
        <div class="dropdown-chat-option-text" style="color:#2F80ED" @click="handleReply">Reply</div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import DividerComponent from '../divider/Divider.vue'

  export default {
    name: 'DropdownChatComponent',
    data(){
      return {
        isClicked: false,
      }
    },
    methods:{
      handleClick(){
        this.isClicked = !this.isClicked
      },
      handleEdit(){
        this.$emit("edit-chat")
        this.isClicked = !this.isClicked
      },
      handleDelete(){
        this.$emit("delete-chat")
        this.isClicked = !this.isClicked
      },
      handleReply(){
        this.$emit("reply-chat")
        this.isClicked = !this.isClicked
      },
    },
    components:{
      DividerComponent
    },
    props:{
      isSender :Boolean,
      isReceiver: Boolean,
    }
  }
  </script>
  <style >
  .dropdown-chat{
    display: flex;
    flex-direction: column;
    margin-top: 4px;
  }

  .dropdown-chat:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }
  
  .dropdown-chat-option{
    position: absolute;
    border: 1px #BDBDBD solid;
    display: flex;
    background: white;
    flex-direction: column;
    width: 126px;
    gap: 0.25rem;
    border-radius: 8px;
    margin-top: 0.5rem;
    z-index: 1;
  }

  .dropdown-chat-option-text{
    padding: 0.25rem 1rem;
    font-family: 'Lato';
  }

  .dropdown-chat-option-text:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }

  </style>
  