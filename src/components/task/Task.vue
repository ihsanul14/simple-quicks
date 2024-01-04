<template>
    <div class="task-container">
      <div class="loading-task" v-show="isLoading">
        <LoadingComponent name="Task List"/>
      </div>
      <div v-show="!isLoading">
        <div class="task-container-menu">
            <div style="flex:1;">
                <DropdownComponent />
            </div>
            <div class="task-container-menu-item" style="justify-content: end;">
                <ButtonComponent name="New Task" width="101px" @click="handleNewTask"/>
            </div>
        </div>
        <div class="task-content">
            <div class="task-content-box" v-for="(v,i) in data" :key="i">
                <div style="display:flex;" @click="handleCheckBox(i)" >
                  <div v-show="!v.isChecked">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54391 0.526306H24.6667C26.3264 0.526306 27.6843 1.8842 27.6843 3.54385V24.6667C27.6843 26.3263 26.3264 27.6842 24.6667 27.6842H3.54391C1.88426 27.6842 0.526367 26.3263 0.526367 24.6667V3.54385C0.526367 1.8842 1.88426 0.526306 3.54391 0.526306ZM24.6667 24.6667V3.54385H3.54391V24.6667H24.6667Z" fill="#BDBDBD"/>
                    </svg>
                  </div>
                  <div v-show="v.isChecked">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5089 0.526306H3.38607C1.72642 0.526306 0.36853 1.8842 0.36853 3.54385V24.6667C0.36853 26.3263 1.72642 27.6842 3.38607 27.6842H24.5089C26.1685 27.6842 27.5264 26.3263 27.5264 24.6667V3.54385C27.5264 1.8842 26.1685 0.526306 24.5089 0.526306ZM24.5089 24.6667H3.38607V3.54385H24.5089V24.6667ZM20.8576 7.43649L22.985 9.57895L10.9148 21.6491L4.87975 15.6291L7.02221 13.5018L10.9148 17.3793L20.8576 7.43649Z" fill="#BDBDBD"/>
                    </svg>
                  </div>
                </div>
                <div style="margin-left: 1rem;flex:1;">
                  <div class="task-content-header">
                    <div class="task-content-title" :style="{textDecoration: v.isChecked ? 'line-through' : 'none',color:v.isChecked ? '#828282' : '#4f4f4f'}">
                        {{ v.title }}
                    </div>
                    <div style="flex:1;">
                        <div style="display:flex;gap:1rem">
                            <div class="task-content-due-date" v-show="!v.isChecked">{{ v.dueDate }}</div>
                            <div class="task-content-date">{{ formatDateString( v.date) }}</div>
                            <div class="task-content-date">
                              <div v-show="!v.isRollup" @click="handleRollUp(i)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M6.175 13.0875L10 9.27086L13.825 13.0875L15 11.9125L10 6.91253L5 11.9125L6.175 13.0875Z" fill="#4F4F4F"/>
                                </svg>
                              </div>
                              <div v-show="v.isRollup" @click="handleRollUp(i)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M8.825 0.912476L5 4.72914L1.175 0.912476L0 2.08748L5 7.08747L10 2.08748L8.825 0.912476Z" fill="#4F4F4F"/>
                                </svg>
                              </div>
                            </div>
                            <div class="task-content-date" @click="handleDropdown(i)">
                              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="6" viewBox="0 0 21 6" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.73685 0.573059C1.35381 0.573059 0.222229 1.70464 0.222229 3.08768C0.222229 4.47072 1.35381 5.6023 2.73685 5.6023C4.11989 5.6023 5.25147 4.47072 5.25147 3.08768C5.25147 1.70464 4.11989 0.573059 2.73685 0.573059ZM17.8246 0.573059C16.4415 0.573059 15.3099 1.70464 15.3099 3.08768C15.3099 4.47072 16.4415 5.6023 17.8246 5.6023C19.2076 5.6023 20.3392 4.47072 20.3392 3.08768C20.3392 1.70464 19.2076 0.573059 17.8246 0.573059ZM7.76609 3.08768C7.76609 1.70464 8.89767 0.573059 10.2807 0.573059C11.6637 0.573059 12.7953 1.70464 12.7953 3.08768C12.7953 4.47072 11.6637 5.6023 10.2807 5.6023C8.89767 5.6023 7.76609 4.47072 7.76609 3.08768Z" fill="#4F4F4F"/>
                              </svg>
                              <div class="task-content-data-option" v-show="v.isOptionClicked" @click="handleDelete(i)">
                                Delete
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="!v.isRollup">
                <div class="task-content-datepicker-box">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99187 1.66663C5.39187 1.66663 1.66687 5.39996 1.66687 9.99996C1.66687 14.6 5.39187 18.3333 9.99187 18.3333C14.6002 18.3333 18.3335 14.6 18.3335 9.99996C18.3335 5.39996 14.6002 1.66663 9.99187 1.66663ZM10.0004 16.6666C6.31703 16.6666 3.3337 13.6833 3.3337 9.99996C3.3337 6.31662 6.31703 3.33329 10.0004 3.33329C13.6837 3.33329 16.667 6.31662 16.667 9.99996C16.667 13.6833 13.6837 16.6666 10.0004 16.6666ZM9.16687 5.83329H10.4169V10.2083L14.1669 12.4333L13.5419 13.4583L9.16687 10.8333V5.83329Z" fill="#2F80ED"/>
                    </svg>
                  </div>
                <input class="task-content-datepicker" type="date" :value="formatInputDate(v.date)"/>
                </div>
                <div style="display: flex;gap: 0.5rem;">
                  <div v-show="v.message !== ''">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z" fill="#2F80ED"/>
                    </svg>
                  </div>
                  <div v-show="v.message === ''">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z" fill="#828282"/>
                    </svg>
                  </div>
                  <div class="task-content-message">
                    {{ v.message ? v.message : 'No Description' }}
                  </div>
                </div>
                <div class="task-content-status">
                  <BadgeComponent :arrData="v.status" />
                </div>
                </div>
                <DividerComponent v-show="i !== data.length -1"/>
              </div> 
            </div>
            <div v-show="isNewTaskClicked">
              <DividerComponent />
            <div class="task-content-box" style="margin-top: 1rem;">
                <div style="display:flex;">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 28 28" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54391 0.526306H24.6667C26.3264 0.526306 27.6843 1.8842 27.6843 3.54385V24.6667C27.6843 26.3263 26.3264 27.6842 24.6667 27.6842H3.54391C1.88426 27.6842 0.526367 26.3263 0.526367 24.6667V3.54385C0.526367 1.8842 1.88426 0.526306 3.54391 0.526306ZM24.6667 24.6667V3.54385H3.54391V24.6667H24.6667Z" fill="#BDBDBD"/>
                    </svg>
                  </div>
                </div>
                <div style="margin-left: 1rem;flex:1;">
                  <div class="task-content-header">
                    <input class="task-content-title-new-task" placeholder="Type Task Title"/>
                </div>
                <div>
                <div class="task-content-datepicker-box">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99199 0.666626C4.39199 0.666626 0.666992 4.39996 0.666992 8.99996C0.666992 13.6 4.39199 17.3333 8.99199 17.3333C13.6003 17.3333 17.3337 13.6 17.3337 8.99996C17.3337 4.39996 13.6003 0.666626 8.99199 0.666626ZM9.00049 15.6666C5.31715 15.6666 2.33382 12.6833 2.33382 8.99996C2.33382 5.31662 5.31715 2.33329 9.00049 2.33329C12.6838 2.33329 15.6672 5.31662 15.6672 8.99996C15.6672 12.6833 12.6838 15.6666 9.00049 15.6666ZM8.16699 4.83329H9.41699V9.20829L13.167 11.4333L12.542 12.4583L8.16699 9.83329V4.83329Z" fill="#4F4F4F"/>
                    </svg>
                  </div>
                <input class="task-content-datepicker" type="date" value='Set Date'/>
                </div>
                <div style="display: flex;gap: 0.5rem;">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2165 0C12.0082 0 11.7915 0.0833333 11.6332 0.241667L10.1082 1.76667L13.2332 4.89167L14.7582 3.36667C15.0832 3.04167 15.0832 2.51667 14.7582 2.19167L12.8082 0.241667C12.6415 0.075 12.4332 0 12.2165 0ZM9.21667 5.01667L9.98333 5.78333L2.43333 13.3333H1.66667V12.5667L9.21667 5.01667ZM0 11.875L9.21667 2.65833L12.3417 5.78333L3.125 15H0V11.875Z" fill="#828282"/>
                    </svg>
                  </div>
                  <div class="task-content-message">
                    No Description
                  </div>
                </div>
                <div class="task-content-status">
                  <BadgeComponent :arrData="[]" />
                </div>
                </div>
              </div> 
            </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    import DividerComponent from '../divider/Divider.vue'
    import ButtonComponent from '../button/Button.vue'
    import DropdownComponent from '../dropdown/Dropdown.vue'
    import LoadingComponent from '../loading/Loading.vue'
    import BadgeComponent from '../badge/Badge.vue'
    import axios from 'axios'
    import {parseToDatetime,parseToDate,parseInputDate} from '../../utils/timestamp/timestamp.js'
    import {data} from '../../utils/data/task.js'

  export default {
    name: 'TaskComponent',
    components:{
        DividerComponent,
        ButtonComponent,
        DropdownComponent,
        LoadingComponent,
        BadgeComponent,
    },
    computed:{
      formatDateString(){
        return function(v){
          return parseToDatetime(v)
        }
      },
      formatDate(){
        return function(v){
          return parseToDate(v).slice(0,10)
        }
      },
      formatInputDate(){
        return function(v){
          return parseInputDate(v)
        }
      }
    },
    mounted(){
      this.fetchApi()
    },
    data(){
        return{
            isLoading: true,
            isNewTaskClicked: false,
            data: data
        }
    },
    methods:{
      handleCheckBox(i){
        this.data[i].isChecked = !this.data[i].isChecked
        this.data[i].isRollup = !this.data[i].isRollup
      },
      handleRollUp(i){
        this.data[i].isRollup = !this.data[i].isRollup
      },
      handleDropdown(i){
        this.data[i].isOptionClicked = !this.data[i].isOptionClicked
      },
      handleDelete(i){
        this.data[i+1].isOptionClicked = true
        this.data.splice(i,1)
      },
      handleCalendar(i){
        this.data[i].isCalendarClicked = !this.data[i].isCalendarClicked
      },
      handleNewTask(){
        this.isNewTaskClicked = !this.isNewTaskClicked 
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
    },
  }
  </script>
  <style >
  .task-container{
    background: #fff;
    width: 76vw;
    height: 75vh;
    max-width: 734px;
    max-height: 726px;
    border-radius: 0.25rem;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
  }

  .loading-task{
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
  }


  .task-container-menu{
    display: flex;
    flex-direction: row;
  }
  .task-container-menu-item{
    margin: 6px 3.5rem 0 0;
    display: flex;
    flex: 1;
  }

  .task-content{
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top:22px;
    padding-bottom: 22px;
    height: 58vh;
    max-height: 580px;
    position: relative;
    z-index: 0;
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

  .task-content-box{
    margin-right: 10px;
    display: flex;
    margin-top: 6px;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  .task-content-header{
    display: flex;
    gap: 0.5rem;
  }
  .task-content-title{
    flex: 1;
    color: #4f4f4f;
    max-width: 70%;
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 4px;
  }
  .task-content-date{
    color: #4f4f4f;
    font-size: 10px;
  }

  .task-content-data-option{
    position: absolute;
    display: flex;
    color: red;
    font-size: 14px;
    background: white;
    border:1px #BDBDBD solid;
    border-radius: 4px;
    padding: 0.5rem;
    width: 76px;
    max-width: 126px;
    z-index: 1;
  }
  .task-content-due-date{
    color: red;
    font-size: 12px;
  }

  .task-content-datepicker-box{
    display: flex;
    width: 160px;
    gap:0.5rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
  }
  
  .task-content-datepicker{
    color: #4f4f4f;
    font-size: 12px;
    border-radius: 4px;
    border: 1px #828282 solid;
    width: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 0.25rem;
    gap: 2px;
    flex:1;
  }

  .task-content-datepicker-item{
    flex: 1;
    text-align: center;
    justify-content: center;
  }
  .task-content-message{
    color: #4f4f4f;
    font-size: 14px;
    flex: 1;
    margin-bottom: 1rem;
    word-wrap: break-word;
    max-width: 90%;
  }

  .task-content-status{
    flex: 1;
    display: flex;
    padding-bottom: 32px;
  }

  .task-content-title-new-task{
    flex: 1;
    max-width: 70%;
    font-size: 14px;
    font-weight: 600;
    color:#4f4f4f;
    border: 1px #828282 solid;
    padding: 0.5rem 0rem 0.5rem 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    font-weight: 500;
    outline: none;
  }
  </style>
  