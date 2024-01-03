<template>
    <main>
        <div class="box">
            <div class="sidebar">Navigation</div>
            <div class="sidebar-divider"></div>
            <div class="content">
                <div class="top-search">
                    Search
                </div>
                <div class="pop-up"> 
                    <InboxComponent />
                    <br />
                    <TaskComponent />
                </div>
                <div class="menu">
                    <MenuComponent />
                </div>
            </div>
        </div>
    </main>
  </template>
  
  <script>
  import MenuComponent from '../components/button/Menu.vue'
  import InboxComponent from '../components/inbox/Inbox.vue'
  import TaskComponent from '../components/task/Task.vue'
  

  export default {
    name: 'FoundationPage',
    props: {
      msg: String
    },
    components: {
        MenuComponent,
        InboxComponent,
        TaskComponent,
    }
  }
  </script>
  <style scoped>

  main {
    top:0px;
    background: #4f4f4f;
    height: 100vh;
    width: 100vw;
  }

  .box{
    display:flex;
    height: 100vh;
    width: 100vw;
  }

  .sidebar{
    color: white;
    width: 10%;
  }

  .sidebar-divider{
    width:1px;
    background:#E0E0E0
  }

  .content{
    color: white;
    flex:1;
  }

  .top-search{
    background:#828282;
    color:#E0E0E0;
    padding-left:1rem
  }

  .pop-up{
    position:absolute;
    bottom:3.5rem;
    right:0px
  }

  .menu{
    position:absolute;
    bottom:0px;
    right:0px
  }
  </style>
  