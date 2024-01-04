<template>
    <div class="inbox-container">
      <div class="loading-inbox" v-show="isLoading">
        <LoadingComponent name="Chats"/>
      </div>
      <div v-show="!isLoading" >
        <div class="search">
            <input type="text" placeholder="Search" style="flex:1;border:none;outline: none;width:100%" @change="handleChange"/>
            <div style="align-items: center;display: flex;" @click="handleSearch">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.21143 7.54717H8.75345L12.1771 10.9777L11.1548 12L7.72429 8.57633V8.03431L7.53905 7.8422C6.75688 8.51458 5.74145 8.91938 4.63682 8.91938C2.17369 8.91938 0.177124 6.92281 0.177124 4.45969C0.177124 1.99657 2.17369 0 4.63682 0C7.09994 0 9.09651 1.99657 9.09651 4.45969C9.09651 5.56432 8.6917 6.57976 8.01932 7.36192L8.21143 7.54717ZM1.54933 4.4597C1.54933 6.16811 2.92841 7.54718 4.63681 7.54718C6.34522 7.54718 7.72429 6.16811 7.72429 4.4597C7.72429 2.7513 6.34522 1.37222 4.63681 1.37222C2.92841 1.37222 1.54933 2.7513 1.54933 4.4597Z" fill="#333333"/>
              </svg>
            </div>
        </div>
        <div class="inbox-box">
        <div class="inbox-content">
            <div class="inbox-content-box" v-for="(v,i) in data" :key="i">
              <div class="inbox-content-data" @click="handleChat(i,v.isGroupChat)">
                <div class="inbox-content-data-photo">
                  <PhotoComponent :isGroupChat="v.isGroupChat" :name="v.title"/>
                </div>
                <div style="flex: 1;">  
                  <div style="display: flex;flex-direction: row;gap:1rem;">
                  <div style="flex:1">
                    <div style="display: flex;gap:1rem;">
                        <div class="inbox-content-title">
                            {{ v.title }}
                        </div>
                        <div class="inbox-content-date">{{ v.isRead ? formatDate(v.date) : formatDateTime(v.date) }}</div>
                    </div>
                    <div class="inbox-content-sender">{{ v.sender }} {{v.sender !== '' ? ':' : ''}}</div>
                    <div class="inbox-content-message">{{ v.message }}</div> 
                  </div>
                  </div>
                </div>
                <div style="color:black;margin-top:40px" v-show="!v.isRead">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5Z" fill="#EB5757"/>
                  </svg>
                </div>
              </div>  
                <DividerComponent v-show="i !== data.length -1"/>
            </div>
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
    import DividerComponent from '../divider/Divider.vue'
    import PhotoComponent from '../photo/Photo.vue'
    import { parseToDatetime, parseToDate } from '@/utils/timestamp/timestamp';
    import LoadingComponent from '../loading/Loading.vue';
    import {data} from '../../utils/data/inbox.js'
    import axios from 'axios'

  export default {
    name: 'InboxComponent',
    components:{
        DividerComponent,
        PhotoComponent,
        LoadingComponent
    },
    computed:{
      formatDateTime(){
        return function(v){
          return parseToDatetime(v)
        }
      },
      formatDate(){
        return function(v){
          return parseToDate(v)
        }
      }
    },
    mounted(){
      this.fetchApi()
    },
    data(){
        return{
            isLoading: true,
            searchValue : null,
            data: data
        }
    },
    methods:{
      handleChat(i,isGroupChat){
        this.$emit('open-chat', {
          index: i,
          isGroupChat: isGroupChat
        })
      },
      handleSearch(){
        if (this.searchValue === '' ||this.searchValue === null){
          this.data = data
        }
        this.data = this.data.filter(x =>
          x.title.toLowerCase().includes(this.searchValue)
      )
      },
      handleChange(){
        this.searchValue = event.target.value
      },
      async fetchApi() {
      try {
        await axios.get('https://jsonplaceholder.typicode.com/todos');
        setTimeout(()=>{
          this.isLoading = false
        },400)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    }
  }
  </script>
  <style >
  .inbox-container{
    background: #fff;
    width: 76vw;
    height: 75vh;
    max-width: 708px;
    max-height: 726px;
    border-radius: 0.25rem;
    padding: 24px 32px;
    margin-right: 2rem;
  }

  .loading-inbox{
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
  }

  .search{
    display: flex;
    flex-direction: row;
    border: 1px solid #4f4f4f;
    border-radius: 6px;
    padding: 0.25rem 3rem 0.25rem 3rem;
    color: #4f4f4f;
    font-size: 12px;
  }

  .inbox-box{
    margin-top:22px;
    height:62vh;
    max-height: 600px;
    overflow-y: auto;
  }

  .inbox-content{
    padding-bottom: 22px;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
  }

  .inbox-box::-webkit-scrollbar{
    width: 10px;
  }

  .inbox-box::-webkit-scrollbar-track{
    background: #e0e0e0;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .inbox-box::-webkit-scrollbar-thumb{
    background: #828282;
    border: 2px solid #e0e0e0;
  }

  .inbox-content-box{
    display: flex;
    flex-direction: column;
    gap:1rem;
    overflow-y: auto;
    overflow-x: hidden;
    max-height: 50%;
  }

  .inbox-content-box:hover{
    background: lightgrey;
  }
  .inbox-content-data{
    display: flex;
    flex-direction: row;
    margin-top: 22px;
    gap: 1rem;
  }

  .inbox-content-data-photo{
    margin-top: 0.5rem;
  }

  .inbox-content-title{
    color: #2F80ED;
    width: 60%;
    font-size: 13px;
    font-weight: 600;
    padding-bottom: 4px;
    word-wrap: break-word;
  }
  .inbox-content-date{
    color: #4f4f4f;
    font-size: 12.544px;
  }
  .inbox-content-sender{
    display: flex;
    color: #4f4f4f;
    font-weight: 600;
    font-size: 12.747px;
    padding-bottom: 4px;
    max-width: 70%;
  }
  .inbox-content-message{
    color: #4f4f4f;
    padding-bottom: 32px;
    font-size: 10.423px;
    max-width: 70%;
    word-wrap: break-word;
  }
  </style>
  