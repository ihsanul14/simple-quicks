<template>
    <div class="photo-container" v-show="isGroupChat">
      <div class="photo-shadow" >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.5 6C10.5 5.175 9.825 4.5 9 4.5C8.175 4.5 7.5 5.175 7.5 6C7.5 6.825 8.175 7.5 9 7.5C9.825 7.5 10.5 6.825 10.5 6ZM13.5 13.5C13.35 12.9675 11.025 12 9 12C6.9825 12 4.6725 12.96 4.5 13.5H13.5ZM3 13.5C3 11.505 6.9975 10.5 9 10.5C11.0025 10.5 15 11.505 15 13.5V15H3V13.5Z" fill="black" fill-opacity="0.54"/>
        </svg>
      </div>
      <div class="photo-active">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.5 6C10.5 5.175 9.825 4.5 9 4.5C8.175 4.5 7.5 5.175 7.5 6C7.5 6.825 8.175 7.5 9 7.5C9.825 7.5 10.5 6.825 10.5 6ZM13.5 13.5C13.35 12.9675 11.025 12 9 12C6.9825 12 4.6725 12.96 4.5 13.5H13.5ZM3 13.5C3 11.505 6.9975 10.5 9 10.5C11.0025 10.5 15 11.505 15 13.5V15H3V13.5Z" fill="white"/>
        </svg>
      </div>
    </div>
    <div class="photo-container" v-show="!isGroupChat">
      <div class="photo-active-initial" style="margin-left:8px">
        <div style="font-size:14px">{{name[0]}}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PhotoComponent',
    props:{
      isGroupChat: Boolean,
      name: String,
    },
  }
  </script>
  <style >
  .photo-container{
    display:flex;
    flex-direction:row;
  }

  .photo-shadow{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 34px;
    width: 34px;
    border-radius: 50%;
    background: #E0E0E0;
  }

  .photo-active{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    margin-left: -1.5rem;
    background: #2F80ED;
  }

  .photo-active-initial{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #2F80ED;
    color:white;
  }
  </style>
  