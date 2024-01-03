<template>
    <div class="circle-container">
        <div class="circle-name">{{name}}</div>
        <div class="circle-button-container" @click="handleClick">
          <div v-show="isClicked">
            <img class="circle" src="../../assets/inbox-button-inactive.png" alt="menu"/>
          </div>
          <img class="circle" src="../../assets/menu.png" alt="menu" />
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuComponent',
    data(){
      return {
        isClicked: false,
      }
    },
    methods:{
      handleClick(){
        this.isClicked = !this.isClicked
      }
    },
    props: {
      name: String
    }
  }
  </script>
  <style >
  .circle-container{
    display: flex;
    flex-direction: column;
  }
  .circle{
    display: flex;
    align-items: center;
    height: 48px;
    flex: 1;
    transition: opacity 0.5s ease;
  }

  .circle-name{
    display: flex;
    justify-content: center;
    font-size: 10px;
    color: #e0e0e0;
  }

  .circle-button-container{
    margin-right: 0;
    display: flex;
    flex-direction: row;
    width: 3rem;
  }
  </style>
  