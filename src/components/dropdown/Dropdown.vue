<template>
    <div class="dropdown">
      <div class="dropdown-button" @click="handleClick">
        <div style="flex: 1;">My Tasks</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
          <path d="M14.5979 6.91248L10.7729 10.7291L6.94795 6.91248L5.77295 8.08748L10.7729 13.0875L15.7729 8.08748L14.5979 6.91248Z" fill="#4F4F4F"/>
        </svg>
      </div>
      <div class="dropdown-option" v-show="isClicked">
        <div class="dropdown-option-caption">Personal Errands</div>
        <DividerComponent />
        <div class="dropdown-option-caption">Urgent To-Do</div>
      </div>
    </div>
  </template>
  
  <script>
  import DividerComponent from '../divider/Divider.vue'

  export default {
    name: 'DropdownComponent',
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
    components:{
      DividerComponent
    }
  }
  </script>
  <style >
  .dropdown{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    color: #4f4f4f;
    font-weight: 600;
    background: white;
    flex-direction: column;
    width: 200px;
  }

  .dropdown-button{
    display: flex;
    flex: 1;
    margin-bottom: 1rem;
    text-align: center;
    border: 1px #828282 solid;
    width: 120px;
    border-radius: 4px;
    padding: 0.5rem;
    flex-direction: row;
  }

  .dropdown-button:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }

  .dropdown-option{
    position: absolute;
    display: flex;
    flex-direction: column;
    border: 1px #828282 solid;
    width: 280px;
    border-radius: 4px;
    margin-top: 120px;
    margin-left: 4rem;
    background: white;
    z-index: 1;
  }

  .dropdown-option-caption{
    flex: 1;
    padding: 0.5rem;
  }

  .dropdown-option-caption:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }

  </style>
  