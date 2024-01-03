<template>
    <div class="task-container">
        <DropdownComponent />
        <ButtonComponent name="New Task" />
        <div class="task-content">
            <div v-for="(v,i) in data" :key="i" style="margin-right: 10px;">
                <div style="display: flex;gap:1rem;margin-top: 18px">
                    <div class="task-content-title">
                        {{ v.title }}
                    </div>
                    <div style="flex:1">
                        <div style="display:flex;gap:1rem">
                            <div class="task-content-due-date">{{ v.dueDate }}</div>
                            <div class="task-content-date">{{ v.date }}</div>
                            <div class="task-content-date">^</div>
                            <div class="task-content-date">***</div>
                        </div>
                    </div>
                </div>
                <div class="task-content-datepicker">
                    <div class="task-content-datepicker-item">O</div>
                    <div class="task-content-datepicker-item">DatePicker</div>
                    <div class="task-content-datepicker-item">P</div>
                </div>
               <div class="task-content-sender">{{ v.sender }}</div>
               <div class="task-content-message">{{ v.message ? v.message : 'No Description' }}</div> 
               <DividerComponent v-if="i != data.length -1"/>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import DividerComponent from '../divider/Divider.vue'
    import ButtonComponent from '../button/Button.vue'
    import DropdownComponent from '../dropdown/Dropdown.vue'

  export default {
    name: 'TaskComponent',
    components:{
        DividerComponent,
        ButtonComponent,
        DropdownComponent,
    },
    data(){
        return{
            data: [
                {
                    title: "Test",
                    date: "January 1,2021 19:10",
                    dueDate: "2 Days Left",
                    message: "Please check"
                },
                {
                    title: "Test",
                    date: "2021-06-02T10:45",
                    dueDate: "4 Days Left",
                    message: "Best Regards!"
                },
                {
                    title: "Test",
                    date: "2021-06-02T10:45",
                    dueDate: "10 Days Left",
                    message: ""
                },
                {
                    title: "Test",
                    date: "2021-06-02T10:45",
                    dueDate: "Jane Doe",
                    message: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                },
                {
                    title: "Test",
                    date: "2021-06-02T10:45",
                    dueDate: "Jane Doe",
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
  .task-container{
    background: #e0e0e0;
    width: 60vh;
    height: 60vh;
    border-radius: 0.25rem;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
  }

  .task-content{
    margin-top:22px;
    padding-bottom: 22px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
  }

  .task-content::-webkit-scrollbar{
    width: 10px;
  }

  .task-content::-webkit-scrollbar-track{
    background: #e0e0e0;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .task-content::-webkit-scrollbar-thumb{
    background: #828282;
    border: 2px solid #e0e0e0;
  }
  .task-content-title{
    flex: 1;
    color: #4f4f4f;
    max-width: 70%;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 4px;
  }
  .task-content-date{
    color: #4f4f4f;
  }
  .task-content-due-date{
    color: red;
  }
  
  .task-content-datepicker{
    color: #4f4f4f;
    font-size: 14px;
    border-radius: 4px;
    border: 1px #4f4f4f solid;
    width: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0.25rem;
    gap: 2px;
    margin-bottom: 8px;
  }

  .task-content-datepicker-item{
    flex: 1;
    text-align: center;
  }
  .task-content-message{
    color: #4f4f4f;
    padding-bottom: 32px;
    font-size: 14px;
    width: 70%;
    overflow: hidden;
  }
  </style>
  