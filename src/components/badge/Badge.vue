<template>
    <div class="badge-container">
      <div class="badge-box" v-show="arrData.length !== 0" @click="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4032 0.833374H7.52334C6.65742 0.833374 5.95681 1.58337 5.95681 2.50004H13.8288C14.6947 2.50004 15.4032 3.25004 15.4032 4.16671V15L16.9776 15.8334V2.50004C16.9776 1.58337 16.2691 0.833374 15.4032 0.833374ZM12.2545 5.83337V16.6417L8.94038 15.1334L8.31849 14.85L7.69661 15.1334L4.38249 16.6417V5.83337H12.2545ZM4.38245 4.16671H12.2545C13.1204 4.16671 13.8289 4.91671 13.8289 5.83337V19.1667L8.31845 16.6667L2.80804 19.1667V5.83337C2.80804 4.91671 3.51653 4.16671 4.38245 4.16671Z" fill="#2F80ED"/>
      </svg>
      </div>
        <div class="badge-box" v-show="arrData.length === 0" @click="handleClick">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20" viewBox="0 0 15 20" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4033 0.833374H5.5234C4.65748 0.833374 3.95687 1.58337 3.95687 2.50004H11.8289C12.6948 2.50004 13.4033 3.25004 13.4033 4.16671V15L14.9777 15.8334V2.50004C14.9777 1.58337 14.2692 0.833374 13.4033 0.833374ZM10.2546 5.83337V16.6417L6.94044 15.1334L6.31855 14.85L5.69667 15.1334L2.38255 16.6417V5.83337H10.2546ZM2.38251 4.16671H10.2545C11.1204 4.16671 11.8289 4.91671 11.8289 5.83337V19.1667L6.31851 16.6667L0.808105 19.1667V5.83337C0.808105 4.91671 1.51659 4.16671 2.38251 4.16671Z" fill="#828282"/>
        </svg>
      </div>
      <div class="badge-text" v-for="(v,i) in arrData" :key="i" :style="{background:handleColor(v)}">
        <div class="badge-text-detail">
          {{ v }}
        </div>
      </div>
      <div class="badge-dropdown" v-show="isClicked">
        <div class="badge-text" v-for="(v,i) in mappingColor" :key="v" :style="{background:handleColor(i)}" @click="handleSelect(i)">
        <div class="badge-text-detail">
          {{ i }}
        </div>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import {mappingColor} from '@/utils/data/task.js'

  export default {
    name: 'BadgeComponent',
    computed:{
     handleColor(){
      return function(v){
        if (v !== '' || v!== undefined){
          return mappingColor[v]
        }
      }
     }
    },
    methods:{
      handleClick(){
        this.isClicked = !this.isClicked
      },
      handleSelect(v){
        this.$emit('selected-status',v)
      }
    },
     data(){
      return{
        isClicked: false,
        mappingColor: mappingColor
      } 
    },
    props: {
      arrData: Array
    }
  }
  </script>
  <style >

  .badge-container{
    display: flex;
    flex-direction: row;
    gap:1rem;
  }

  .badge-box{
    flex:0;
  }
  .badge-text{
    color:#4f4f4f;
    display: flex;
    justify-content: center;
    font-size: 12px;
    flex:1;
    gap:1rem;
    align-items: center;
    border-radius:5px;
    padding: 4px 12px;
    font-weight:600;
  }

  .badge-text-detail{
    flex:1;
    text-wrap: nowrap;
  }

  .badge-dropdown{
    position: absolute;
    display: flex;
    flex-direction:column;
    color:#4f4f4f;
    background:white;
    z-index: 2;
    margin-left: 2rem;
    padding: 1rem;
    gap:8px;
    border: 1px #828282 solid;
    border-radius: 5px;
    width: 277px;
  }
  </style>
  