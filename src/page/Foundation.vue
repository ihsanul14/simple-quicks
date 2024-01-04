<template>
    <body>
        <div class="box">
            <div class="sidebar"></div>
            <div class="sidebar-divider"></div>
            <div class="content">
                <div class="top-search">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7124 10.0629H11.4351L16 14.6369L14.6369 16L10.0629 11.4351V10.7124L9.81589 10.4563C8.77301 11.3528 7.4191 11.8925 5.94625 11.8925C2.66209 11.8925 0 9.23042 0 5.94625C0 2.66209 2.66209 0 5.94625 0C9.23042 0 11.8925 2.66209 11.8925 5.94625C11.8925 7.4191 11.3528 8.77301 10.4563 9.81589L10.7124 10.0629ZM1.82959 5.94554C1.82959 8.22342 3.66835 10.0622 5.94623 10.0622C8.2241 10.0622 10.0629 8.22342 10.0629 5.94554C10.0629 3.66767 8.2241 1.82891 5.94623 1.82891C3.66835 1.82891 1.82959 3.66767 1.82959 5.94554Z" fill="#F2F2F2"/>
                  </svg>
                </div>
                <div class="pop-up"> 
                    <InboxComponent :key="reloadComponent" v-show="isInboxClicked" @open-chat="handleChat"/>
                    <ChatComponent :key="reloadComponent" v-show="isChatClicked" @close-chat="handleInbox" :index="chatIndex" :is-group-chat="isGroupChat"/>
                    <br />
                    <TaskComponent :key="reloadComponent" v-show="isTaskClicked"/>
                </div>
                <div class="menu">
                    <MenuComponent @open-inbox="handleInbox"  @open-task="handleTask" @close-menu="handleClose"/>
                </div>
            </div>
        </div>
      </body>
  </template>
  
  <script>
  import MenuComponent from '../components/button/Menu.vue'
  import InboxComponent from '../components/inbox/Inbox.vue'
  import ChatComponent from '../components/inbox/Chat.vue'
  import TaskComponent from '../components/task/Task.vue'
  

  export default {
    name: 'FoundationPage',
    components: {
        MenuComponent,
        InboxComponent,
        ChatComponent,
        TaskComponent,
    },
    data:function() {
      return {
            isTaskClicked: false,
            isInboxClicked: false,
            isChatClicked: false,
            reloadComponent: 0,
          };
      },
    methods:{
      handleTask(){
        this.isTaskClicked = !this.isTaskClicked
        this.isInboxClicked = false
        this.isChatClicked = false
        this.reloadComponent +=1
      },
      handleInbox(){
        this.isInboxClicked = !this.isInboxClicked
        this.isTaskClicked = false
        this.isChatClicked = false
        this.reloadComponent +=1
      },
      handleChat(i){
        console.log(i)
        this.isChatClicked = true
        this.isInboxClicked = false
        this.chatIndex = i.index
        this.isGroupChat = i.isGroupChat
        this.reloadComponent +=1
      },
      handleClose(){
        this.isInboxClicked = false
        this.isTaskClicked = false
        this.isChatClicked = false
      }
    }
  }
  </script>
  <style scoped>

  body {
    margin:0;
    background: #333;
    height: 100vh;
    width: 100vw;
    font-family: 'Lato';
  }

  .box{
    display:flex;
    height: 100vh;
    width: 100vw;
  }

  .sidebar{
    color: white;
    width: 14vw;
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
    background:#4F4F4F;
    color:#E0E0E0;
    padding:0.5rem;
    padding-left: 1rem;
    display: flex;
    align-items: center;
    height: 58px;
  }

  .pop-up{
    position:absolute;
    bottom:6rem;
    right:0px;
    margin-bottom: 2rem;
  }

  .menu{
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    height: auto;
  }
  </style>
  