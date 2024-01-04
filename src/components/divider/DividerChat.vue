<template>
    <div class="divider-chat">
      <div class="divider-chat-line" :style="{background:color}"></div>
      <div :style="{color : timestamp === 'New Message' ? 'red' : '#4F4F4F'}">{{timestamp}}</div>
      <div class="divider-chat-line" :style="{background:color}"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DividerChatComponent',
    props:{
      timestamp: String,
      color: String
    }
  }
  </script>
  <style >
  .divider-chat {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;
    font-family: 'Lato';
    font-size: 14px;
  }
  .divider-chat-line{
    flex: 1;
    padding: 1px 0 0 0;
    background: #828282;
  }
  </style>
  