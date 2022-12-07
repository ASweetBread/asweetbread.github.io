<script setup>
import { getStore } from '../../store';
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route)

const state = getStore()
function changeIsHide(){
    state.changeHide()
}

const imgsrc = "/src/assets/vue.svg"

</script>

<template>
<div class="navbar">
    <div class="collapse" @click="changeIsHide">
        <el-icon v-if="state.isHide"><Expand /></el-icon> 
        <el-icon v-if="!state.isHide"><Fold /></el-icon>
    </div>
    <div>
        <el-breadcrumb separator="/">
            <el-breadcrumb-item  :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item  :to="{ path: item.path }" v-for="item in this.$route.matched.slice(1)">{{item.meta.menuname}}</el-breadcrumb-item>

            
        </el-breadcrumb>
    </div>
    <div class="rightmenu">
        <div class="imgdiv">
            <el-dropdown placement="bottom">
                <img :src="imgsrc" alt="">
                <template #dropdown>
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                </template>
            </el-dropdown>
            
        </div>
        
    </div>
</div>
</template>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    height: 50px;
}
.collapse {
    margin-right: 24px;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.rightmenu {
    margin-left: auto;
    display: flex;
    align-items: center;
}
.imgdiv {
    width: 40px;
    height: 40px;
    line-height: 40px; 
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(247, 247, 247);
    img {
        height: 100%;
        object-fit: cover;
    }
}



</style>
