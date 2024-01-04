<template>
    <div class="loading-chat-container">
      <div class='loading-chat-content'>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoadingComponent',
    props:{
      name: String
    }
  }
  </script>
  <style >

  .loading-chat-container{
    display:'flex';
    justify-content:'center';
    align-items:'center';
    flex-direction: column;
  }
  .loading-chat-content {
    border: 4px solid white;
    border-top: 4px solid #2F80ED;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    animation: spin 1s linear infinite;
    margin: auto;
    margin-bottom: 0.5rem;
  }

  .loading-chat-content-text{
    color: #828282;
    text-align: center;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  