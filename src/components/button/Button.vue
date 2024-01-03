<template>
    <div class="button-container">
        <div class="button">
            {{ name }}
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ButtonComponent',
    props: {
      name: String
    }
  }
  </script>
  <style >
  .button-container{
    display: flex;
    flex-direction: column;
    width: 3rem;
  }
  .button{
    display: flex;
    background: blue;
    border-radius: 4px;
    justify-content: center;
    width: 80px;
    padding: 0.5rem;
  }

  .button-name{
    display: flex;
    justify-content: center;
    font-size: 10px;
    color: #e0e0e0;
  }
  </style>
  