<template>
    <div class="inbox-container">
        <div class="search">
            <div style="flex:1">Search</div>
            <div>Lup</div>
        </div>
        <div class="inbox-content">
            <div v-for="(v,i) in data" :key="i">
                <div style="display: flex;gap:1rem;margin-top: 18px;">
                    <div class="inbox-content-title">
                        {{ v.title }}
                    </div>
                    <div class="inbox-content-date">{{ v.date }}</div>
                </div>
               <div class="inbox-content-sender">{{ v.sender }} :</div>
               <div class="inbox-content-message">{{ v.message }}</div> 
               <DividerComponent v-if="i != data.length -1"/>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import DividerComponent from '../divider/Divider.vue'

  export default {
    name: 'InboxComponent',
    components:{
        DividerComponent,
    },
    data(){
        return{
            data: [
                {
                    title: "Testasasasasasasasasaasasasasasasaasasasasasasasaasasasasasasasasasasasasasa",
                    date: "January 1,2021 19:10",
                    sender: "John Doe",
                    message: "Please check"
                },
                {
                    title: "Test",
                    date: "2021-06-02T10:45",
                    sender: "Jane Doe",
                    message: "Best Regards!"
                },
                {
                    title: "Test",
                    date: "2021-06-02T10:45",
                    sender: "Jane Doe",
                    message: "Best Regards!"
                },
                {
                    title: "Test",
                    date: "2021-06-02T10:45",
                    sender: "Jane Doe",
                    message: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                }
            ]
        }
    },
    props: {
      name: String
    }
  }
  </script>
  <style >
  .inbox-container{
    background: #e0e0e0;
    width: 60vh;
    height: 60vh;
    border-radius: 0.25rem;
    padding: 24px 32px;
  }
  .search{
    display: flex;
    flex-direction: row;
    border: 1px solid #4f4f4f;
    border-radius: 6px;
    padding: 0.25rem 3rem 0.25rem 3rem;
    color: #4f4f4f;
  }

  .inbox-content{
    margin-top:22px;
    padding-bottom: 22px;
  }
  .inbox-content-title{
    color: blue;
    max-width: 70%;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 4px;
  }
  .inbox-content-date{
    color: #4f4f4f;
  }
  .inbox-content-sender{
    color: #4f4f4f;
    font-weight: 600;
    font-size: 14px;
    padding-bottom: 4px;
  }
  .inbox-content-message{
    color: #4f4f4f;
    padding-bottom: 32px;
    font-size: 14px;
    width: 70%;
    overflow: hidden;
  }
  </style>
  