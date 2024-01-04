<template>
    <div class="button-container">
        <div class="button" :style="{width: width}">
            {{ name }}
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ButtonComponent',
    props: {
      name: String,
      width: String,
    }
  }
  </script>
  <style >
  .button-container{
    display: flex;
    flex-direction: column;
    width: 80px;
  }

  .button{
    display: flex;
    background: #2F80ED;
    border-radius: 4px;
    justify-content: center;
    padding: 0.5rem;
  }

  .button:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }

  .button-name{
    display: flex;
    justify-content: center;
    font-size: 10px;
    color: #e0e0e0;
  }
  </style>
  