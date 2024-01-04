<template>
<div class="chat-container w3-animate-right">
  <div class="chat-header">
    <div class="chat-close-button" @click="handleBackChat">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 21 21" fill="none">
        <path d="M20.9883 8.83041H5.68683L12.7152 1.80204L10.9298 0.0292358L0.871338 10.0877L10.9298 20.1462L12.7026 18.3734L5.68683 11.345H20.9883V8.83041Z" fill="#333"/>
      </svg>
    </div>
    <div class="chat-header-detail">
      <div class="chat-header-detail-name">{{propsIsGroupChat ? 'I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]': 'FastVisa Support'}}</div>
      <div class="chat-header-detail-status" v-show="propsIsGroupChat">3 Participants</div>
    </div>
    <div class="chat-close-button" @click="handleBackChat">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 21 21" fill="none">
        <path d="M21 2.115L18.885 0L10.5 8.385L2.115 0L0 2.115L8.385 10.5L0 18.885L2.115 21L10.5 12.615L18.885 21L21 18.885L12.615 10.5L21 2.115Z" fill="#333"/>
      </svg>
    </div>
  </div>
  <DividerComponent />
  <div class="chat-content">
    <div v-for="(v,i) in data" :key="i" style="margin-bottom: 4px;">
      <DividerChatComponent :timestamp="formatDateChat(v.date)" color="#4F4F4F" v-show="checkDate(i)"/>
      <DividerChatComponent timestamp="New Message" color="red" v-show="i === data.length-1 && v.sender !== 'You'"/>
      <div class="chat-balloon">
        <div v-show="v.sender === 'You'" style="display: flex;margin-left: 20%;justify-content: flex-end;">
          <div style="display: flex;flex-direction: column;">
            <div class="chat-balloon-detail-content" style="justify-content: flex-end;">
              {{v.sender}}
            </div>
            <div style="display: flex;flex-direction: row;" v-show="v.repliedMessage !== null">
              <div class="chat-balloon-option"></div>
              <div class="chat-balloon-detail-dialog-receiver" style="background: #f2f2f2;margin-bottom: 0.5rem;" v-show="v.repliedMessage !== null">
                <div class="chat-balloon-detail-content-message">{{v.repliedMessage}}</div>
              </div>
            </div>
            <div style="display: flex;flex-direction: row;">
              <div class="chat-balloon-option" style="justify-content: flex-end" @childButtonClick="handleOption(i)">
                <DropdownChatComponent :is-receiver=true @edit-chat="handleEdit(i)" @delete-chat="handleDelete(i)"/>
              </div>
              <div class="chat-balloon-detail">
                <div class="chat-balloon-detail-dialog-receiver">
                  <div class="chat-balloon-detail-content-message">{{v.message}}</div>
                  <div class="chat-balloon-detail-content-time">{{v.date.slice(11,16)}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-show="v.sender !== 'You'" style="display: flex;margin-right: 20%;">
          <div style="display: flex;flex-direction: column;">
            <div class="chat-balloon-detail-content" :style="{color: i === data.length -1 ? '#43B78D' : '#E5A443'}">
              {{v.sender}}
            </div>
            <div style="display: flex;flex-direction: row;">
              <div class="chat-balloon-detail">
                <div class="chat-balloon-detail-dialog-sender" :style="{background: i === data.length -1 && '#D2F2EA'}">
                  <div class="chat-balloon-detail-content-message">{{v.message}}</div>
                  <div class="chat-balloon-detail-content-time">{{v.date.slice(11,16)}}</div>
                </div>
              </div>
              <div class="chat-balloon-option" style="justify-content: flex-end" @childButtonClick="handleOption(i)">
                <DropdownChatComponent :is-sender=true @reply-chat="handleReply(i)"/>
              </div>
            </div>
          </div>  
        </div>  
      </div>
    </div>
  </div>
  <div style="position: absolute;bottom: 0;display: flex;flex-direction: column;">
    <div class="reply-container" v-show="isLoadingChat">
    <div class="reply-container-content" style="background:#E9F3FF;margin-bottom: 0.5rem;" >
      <div style="display: flex;flex-direction: row;">
        <div style="margin-right: 1rem;align-items: center;display: flex;" @click="handleCancelReply">
          <LoadingChatComponent /> 
        </div>
        <div class="reply-content-title" style="margin-top: 8px;">Please wait while we connect you with one of our team...</div>
      </div>
      <div class="reply-content-message">{{repliedMessage.message}}</div>
    </div> 
  </div>
  <div class="reply-container" v-show="isReply">
    <div class="reply-container-content">
      <div style="display: flex;flex-direction: row;" >
        <div class="reply-content-title">Replying to {{repliedMessage.name}}</div>
        <div style="margin-right: 1rem;" @click="handleCancelReply">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M12 1.20857L10.7914 0L6 4.79143L1.20857 0L0 1.20857L4.79143 6L0 10.7914L1.20857 12L6 7.20857L10.7914 12L12 10.7914L7.20857 6L12 1.20857Z" fill="#4F4F4F"/>
          </svg>  
        </div>
      </div>
      <div class="reply-content-message">{{repliedMessage.message}}</div>
    </div> 
    <div style="width: 88px;"></div>
  </div>
  <div class="dialog-container">
    <input class="dialog-container-text" placeholder="Type a new message" :value="message" @change="handleChange"/>
    <div class="dialog-container-button" @click="handleSend">
      <ButtonComponent name="Send" width="76px" style="height: auto;"/>
    </div>
  </div>
  </div>
</div>
</template>
  
  <script>
    import DividerComponent from '../divider/Divider.vue'
    import DividerChatComponent from '../divider/DividerChat.vue'
    import DropdownChatComponent from '../dropdown/DropdownChat.vue';
    import ButtonComponent from '../button/Button.vue';
    import LoadingChatComponent from '../loading/LoadingChat.vue'
    import { parseToDatetime, getChatDate,getCurrentDateTime } from '@/utils/timestamp/timestamp';
    import {chatData} from '@/utils/data/inbox.js'

  export default {
    name: 'ChatComponent',
    components:{
        DividerComponent,
        DividerChatComponent,
        DropdownChatComponent,
        ButtonComponent,
        LoadingChatComponent,
    },
    computed:{
      formatDateString(){
        return function(v){
          return parseToDatetime(v)
        }
      },
      formatDateChat(){
        return function(v){
          return getChatDate(v)
        }
      }
    },
    data(){
        return{
            message: null,
            isReply: false,
            isLoadingChat: this.isGroupChat ? false: true,
            repliedMessage : {
              name: null,
              message: null
            },
            propsIsGroupChat: this.isGroupChat,
            data: chatData[this.index]
        }
    },
    mounted(){
      setTimeout(()=>{
          this.isLoadingChat= false
        },1000)
    },
    methods:{
      checkDate(i){
        return(
          this.data[i-1] &&
          this.data[i] &&
          this.data[i-1].date.slice(0,10) !== this.data[i].date.slice(0,10)
        )
      },
      handleOption(i){
      this.data[i].isOptionClicked = !this.data[i].isOptionClicked
      },
      handleEdit(i){
        this.message = this.data[i].message
      },
      handleDelete(i){
        this.data.splice(i,1)
      },
      handleBackChat(){
        this.$emit('close-chat')
      },
      handleSend(){
        if (this.message !== null){
          this.data.push(
          {
            date: getCurrentDateTime(),
            sender: "You",
            message: this.message,
            isOptionClicked: false,
            repliedMessage : this.repliedMessage.message
          },
        )
        }
        this.message = null
        this.repliedMessage = {
              name: null,
              message: null
        }
        this.isReply = false
      },
      handleChange(){
        this.message = event.target.value
      },
      handleReply(i){
        this.isReply = true
        this.repliedMessage.message = this.data[i].message
        this.repliedMessage.name = this.data[i].sender
      },
      handleCancelReply(){
        this.repliedMessage = {}
        this.isReply = false
      },
    }, 
    props: {
      index: Number,
      isGroupChat: Boolean
    }
  }
  </script>
  <style >
  .chat-container{
    background: #fff;
    width: 76vh;
    height: 75vh;
    max-width: 708px;
    max-height: 726px;
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }

  .chat-header{
    position: sticky;
    color: #4f4f4f;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap:1rem;
    padding: 1rem;
  }

  .chat-header-detail{
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: 16px;
    gap: 0.25rem;
  }

  .chat-header-detail-name{
    color: #2F80ED ;
    font-family: 'Lato';
    font-weight: 600;
  }

  .chat-header-detail-status{
    font-size: 12px; 
    font-family: 'Lato';
  }

  .chat-content{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    color: #4f4f4f;
    padding-bottom: 22px;
    padding-right: 1rem;
    margin: 1rem 0.5rem 42px 1rem;
    position: relative;
    z-index: 0;
  }

  .chat-content::-webkit-scrollbar{
    width: 10px;
  }

  .chat-content::-webkit-scrollbar-track{
    background: #e0e0e0;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .chat-content::-webkit-scrollbar-thumb{
    background: #828282;
    border: 2px solid #e0e0e0;
  }

  .chat-balloon{
    display:flex;
    flex-direction:column;
  }

  .chat-balloon-option{
    display: flex;
    margin: 2px 10px;
  }

  .chat-balloon-option-dropdown{
    border: 1px #4f4f4f solid;
    display: flex;
    margin-top: 1rem;
    background: white;
    flex-direction: column;
    width: 100px;
    gap: 0.25rem;
    border-radius: 8px;
  }

  .chat-balloon-option-dropdown-text{
    padding: 0.25rem 0.5rem
  }

  .chat-balloon-detail{
    display:flex;
    flex: 1;
    flex-direction:column;
    font-family: 'Lato';
  }

  .chat-balloon-detail-dialog-sender{
    padding: 0.5rem;
    background: #FCEED3;
    border-radius: 5px;
    font-family: 'Lato';
  }

  .chat-balloon-detail-dialog-receiver{
    padding: 0.5rem;
    background: #EEDCFF;
    border-radius: 5px;
    font-family: 'Lato';
  }
  
  .chat-balloon-detail-content{
    display: flex;
    flex: 1;
    color: #9B51E0;
  }

  .chat-balloon-detail-content-message{
    word-wrap: break-word;
  }

  .chat-balloon-detail-content-time{
    margin-top: 4px;
    font-size: 12px;
  }

  .dialog-container{
    bottom: 0px;
    color: #4f4f4f;
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
    padding: 0rem 0rem 1rem 1rem;
    background: white;
    padding-right: 1rem;
    font-family: 'Lato';
    align-items: center;
    width: 74vw;
    max-width: 708px;
  }

  .dialog-container-text{
    flex: 1;
    padding: 0 0.5rem;
    align-items: center;
    align-content: center;
    border: 1px #BDBDBD solid;
    border-radius: 4px;
    height: 40px;
    outline: none;
  }

  .dialog-container-button{
    color: white;
  }

  .reply-container{
    flex:1;
    display: flex;
    flex-direction: row;
    padding:1rem;
    padding-bottom: 0;
    border-start-start-radius: 8px;
  }
  .reply-container-content{
    display: flex;
    background: #f2f2f2;
    flex-direction: column;
    flex: 1;
    padding: 1rem 0rem 1rem 1rem;
  }
  .reply-content-title{
    flex: 1;
    color: #4f4f4f;
    font-weight: 600;
  }

  .reply-content-message{
    flex: 1;
    color: #4f4f4f;
  }

  .chat-close-button{
    padding: 1rem 0.25rem;
  }

  .chat-close-button:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }
  </style>
  