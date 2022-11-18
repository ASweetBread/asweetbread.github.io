<script setup>
import { reactive,ref,onMounted } from 'vue';
import { getloginStore } from '../store/index'

//用户登录
const userinfo = reactive({
    username: "admin",
    password: "admin" 
})
const state = getloginStore()
function loginEvent(){
    state.getlogin(userinfo).then(res=>{
        console.log("Login.vue返回的res")
        console.log(res)
    })
}

//密码显示
const IsShowPassword = ref(false)
function changePasswordStatus(){
    IsShowPassword.value = !IsShowPassword.value
}

//获取图片
const layoutmainimage = ref(null)
const layoutleftimage = ref(null)
const ImgEle = document.createElement('img')
ImgEle.src = 'https://cdn.seovx.com/d/?mom=302'
ImgEle.style.position = 'absolute'
ImgEle.style.height = '100vh'
ImgEle.style.objectFit = 'contain'
ImgEle.style.top = '0'
ImgEle.style.zIndex = '-2'

onMounted(()=>{
    layoutmainimage.value.appendChild(ImgEle)
    const ImgEleClone = ImgEle.cloneNode()
    console.log(layoutleftimage.value.style)
    ImgEleClone.style.zIndex = '-1'
    ImgEleClone.style.filter = 'blur(20px)'
    ImgEleClone.style.objectFit = 'contain'
    ImgEleClone.style.right = '0'
    layoutleftimage.value.appendChild(ImgEleClone)
})
</script>

<template>
    <div class="layoutmain" ref="layoutmainimage">
        <div class="layoutleftimage" ref="layoutleftimage">
            <div class="layoutleft"> 
                <h3>用户登录</h3>
                <el-input class="elinput" v-model="userinfo.username" placeholder="Please input username" >
                    <template #prefix>
                        <el-icon class="el-input__icon"><UserFilled /></el-icon>
                    </template>
                </el-input>
                <el-input show-password class="elinput" v-model="userinfo.password" placeholder="Please input password" >
                    <template #prefix>
                        <el-icon class="el-input__icon"><Lock /></el-icon>
                    </template>
                </el-input>
                <div class="buttondiv">
                    <el-button class="elbutton" type="primary" @click="loginEvent">登录</el-button>
                </div>
            </div>
        </div>
        
    </div>
    
</template>
<!-- http://www.dmoe.cc/random.php -->
<style lang="scss" scoped>
.layoutmain {
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    .layoutleftimage {
        width: 430px;
        background-color: #fff;
        margin-left: auto;
        height: 100%;
        position: relative;
        overflow: hidden;
        z-index: 0;
        box-shadow: 0px 0px 10px black
    }
    .layoutleft {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 30px;
        padding-right: 50px;
        overflow: hidden;
        .elbutton {
            width: 100%
        }
        .buttondiv {
            height: 120px;
        }
        .elinput {
            margin-bottom: 20px;
            height: 40px;
        }
    }
}

</style>
