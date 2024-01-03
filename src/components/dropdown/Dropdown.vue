<template>
    <div class="dropdown">
      <div class="dropdown-button">My Tasks ^</div>
      <div class="dropdown-option">
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
    background: #e0e0e0;
    flex-direction: column;
    width: 200px;
  }

  .dropdown-button{
    flex: 1;
    margin-bottom: 1rem;
    text-align: center;
    border: 1px #4f4f4f solid;
    width: 80px;
    border-radius: 4px;
    padding: 0.5rem;
  }

  .dropdown-button:hover{
    background: grey;
  }

  .dropdown-option{
    display: flex;
    flex-direction: column;
    border: 1px #4f4f4f solid;
    width: 200px;
    border-radius: 4px;
  }

  .dropdown-option-caption{
    flex: 1;
    padding: 0.5rem;
  }

  .dropdown-option-caption:hover{
    background: grey;
  }

  </style>
  