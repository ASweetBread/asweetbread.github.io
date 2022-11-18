<script setup>
import { reactive } from 'vue';
import { getloginStore } from '../store/index'
import axios from 'axios'

const userinfo = reactive({
    username: "admin",
    password: "admin" 
})
const state = getloginStore()
function loginEvent(){
    console.log(1)
    state.getlogin(userinfo).then(res=>{
        console.log("Login.vue返回的res")
        console.log(res)
    })
}

</script>

<template>
    
    <el-card class="box-card">
        <h3>用户登录</h3>
        <el-input v-model="userinfo.username" placeholder="Please input username" />
        <el-input v-model="userinfo.password" placeholder="Please input password" />
        <div class="buttondiv">
            <el-button type="primary" @click="loginEvent">登录</el-button>
        </div>
    </el-card>
</template>

<style scoped>
</style>
