<template>
    <div class="circle-main">
    <div class="circle-main-container" v-show="isMenuClicked">
      <div class="circle-main-text w3-animate-right">Tasks</div>
      <div class="circle-main-text w3-animate-right" style="margin-right: 0.5rem;">Inbox</div>
      <div class="circle-main-text"></div>
    </div>
    <div class="circle-container">
        <div class="circle-button-container">
          <div v-show="isClicked" style="display: flex;">
            <div class="circle-menu w3-animate-right"> 
                <div class="circle-secondary" @click="handleClickMenu('task')" v-show="!isTaskClicked">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.11114 0.666748H23.1111C24.3334 0.666748 25.3334 1.66675 25.3334 2.88897V17.3334C25.3334 18.5556 24.3334 19.5556 23.1111 19.5556H3.11114C1.88892 19.5556 0.888916 18.5556 0.888916 17.3334V2.88897C0.888916 1.66675 1.88892 0.666748 3.11114 0.666748ZM3.11114 2.88897V17.3334H12V2.88897H3.11114ZM23.1111 17.3334H14.2222V2.88897H23.1111V17.3334ZM22 6.77786H15.3334V8.44453H22V6.77786ZM15.3334 9.55564H22V11.2223H15.3334V9.55564ZM22 12.3334H15.3334V14.0001H22V12.3334Z" fill="#F8B76B"/>
                  </svg>
                </div>
                <div class="circle-secondary" @click="handleClickMenu('inbox')" v-show="!isInboxClicked">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 23" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4443 0.110718H1.9999C1.38879 0.110718 0.888794 0.610718 0.888794 1.22183V16.7774L5.33324 12.3329H16.4443C17.0555 12.3329 17.5555 11.8329 17.5555 11.2218V1.22183C17.5555 0.610718 17.0555 0.110718 16.4443 0.110718ZM15.3332 2.33286V10.1106H4.41103L3.75547 10.7662L3.11103 11.4106V2.33286H15.3332ZM19.7777 4.55518H21.9999C22.611 4.55518 23.111 5.05518 23.111 5.66629V22.333L18.6666 17.8885H6.44435C5.83324 17.8885 5.33324 17.3885 5.33324 16.7774V14.5552H19.7777V4.55518Z" fill="#8885FF"/>
                  </svg>
                </div>
            </div>
          </div>
          <div>
            <div class="circle" @click="handleClick" v-show="!isInboxClicked && !isTaskClicked">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4427 12.3359C32.3618 12.9486 32.6101 14.1903 31.9974 15.1094L24.737 26H35C35.7376 26 36.4153 26.4059 36.7634 27.0563C37.1114 27.7066 37.0732 28.4957 36.6641 29.1094L27.3308 43.1094C26.7181 44.0284 25.4763 44.2768 24.5573 43.6641C23.6382 43.0514 23.3899 41.8096 24.0026 40.8906L31.263 30H21C20.2624 30 19.5847 29.594 19.2367 28.9437C18.8886 28.2934 18.9268 27.5043 19.3359 26.8906L28.6692 12.8906C29.2819 11.9715 30.5237 11.7232 31.4427 12.3359Z" fill="white"/>
              </svg>
            </div>
            <div class="circle-menu-clicked" v-show="isInboxClicked">
              <div class="circle-menu-clicked-shadow" @click="handleCloseMenu"></div>
              <div class="circle-menu-clicked-active"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0371 2.92615H4.66673C3.97414 2.92615 3.40747 3.49281 3.40747 4.18541V21.815L8.44451 16.778H21.0371C21.7297 16.778 22.2964 16.2113 22.2964 15.5187V4.18541C22.2964 3.49281 21.7297 2.92615 21.0371 2.92615ZM19.7779 5.44458V14.2594H7.39933L6.65637 15.0024L5.926 15.7327V5.44458H19.7779ZM24.8149 7.96321H27.3334C28.026 7.96321 28.5927 8.52987 28.5927 9.22247V28.1114L23.5556 23.0743H9.70376C9.01117 23.0743 8.4445 22.5077 8.4445 21.8151V19.2965H24.8149V7.96321Z" fill="white"/>
                </svg>
              </div>
            </div>
            <div class="circle-menu-clicked" v-show="isTaskClicked">
              <div class="circle-menu-clicked-shadow" @click="handleCloseMenu"></div>
              <div class="circle-menu-clicked-active" style="background:#F8B76B"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.11114 4.66626H24.1111C25.3334 4.66626 26.3334 5.66626 26.3334 6.88848V21.3329C26.3334 22.5551 25.3334 23.5551 24.1111 23.5551H4.11114C2.88892 23.5551 1.88892 22.5551 1.88892 21.3329V6.88848C1.88892 5.66626 2.88892 4.66626 4.11114 4.66626ZM4.11114 6.88848V21.3329H13V6.88848H4.11114ZM24.1111 21.3329H15.2222V6.88848H24.1111V21.3329ZM23 10.7774H16.3334V12.444H23V10.7774ZM16.3334 13.5551H23V15.2218H16.3334V13.5551ZM23 16.3329H16.3334V17.9996H23V16.3329Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuComponent',
    data(){
      return {
        isClicked: false,
        isMenuClicked : false,
        isInboxClicked : false,
        isTaskClicked : false,
      }
    },
    methods:{
      handleClick(){
        this.isClicked = !this.isClicked
        this.isMenuClicked = !this.isMenuClicked
        this.$emit('close-menu')
      },
      handleClickMenu(v){
        if (v === 'inbox'){
          this.isInboxClicked = true
          this.isTaskClicked = false
          this.$emit('open-inbox')
        }else{
          this.isTaskClicked = true
          this.isInboxClicked = false
          this.$emit('open-task')
        }
        this.isMenuClicked = false
      },
      handleCloseMenu(){
        this.isInboxClicked = false
        this.isTaskClicked = false
        this.isClicked = false
        this.isMenuClicked = false
        this.$emit('close-menu')
      },
    },
    props:{
      handleInboxClicked : Function,
      handleTaskClicked : Function,
    }
  }
  </script>
  <style >
  .circle-main{
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .circle-main-container{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .circle-main-text{
    display: flex;
    flex: 1;
    justify-content: center
  }
  .circle-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
  }

  .circle-menu{
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .circle-menu-detail{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .circle{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: #2F80ED;
  }

  .circle:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }

  .circle-secondary{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: #f2f2f2;
  }

  .circle-secondary:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }

  .circle-name{
    display: flex;
    justify-content: center;
    font-size: 12px;
    color: #e0e0e0;
    margin-bottom: 4px;
  }

  .circle-button-container{
    margin-right: 0;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .circle-menu-clicked{
    display: flex;
    flex-direction: row;
  }

  .circle-menu-clicked-shadow{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: #4f4f4f;
  }

  .circle-menu-clicked-shadow:hover{
    cursor: url('@/assets/cursor.svg'), auto;
  }

  .circle-menu-clicked-active{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 68px;
    height: 68px;
    border-radius: 50%;
    position: relative;
    z-index: 1;
    margin-left: -3.5rem;
    background: #8785FF;
  }

  .circle-menu-clicked-active{
    cursor: url('@/assets/cursor.svg'), auto;
  }
  </style>
  