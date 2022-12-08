<script setup>
import { computed, onUnmounted } from 'vue';
import { getStore } from '../store';
import NavBar from '../components/Home/NavBar.vue'
import AsideBar from '@/components/Home/AsideBar.vue'

const state = getStore()
const asideWidth = computed(()=> state.isHide ? '84px': '200px')


</script>

<template>
    <el-container>
        <el-aside :width="asideWidth" class="aside-el">
            <AsideBar></AsideBar>
        </el-aside>
        <el-container class="main-container">
            <el-header>
                <nav-bar></nav-bar>
            </el-header>
            <el-main>
                <transition name="fade-transform" mode="out-in">
                    <router-view></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped>
.main-container {
  min-height: 100vh;
}
.aside-el {
    transition: width 0.45s;
}
.el-main {
    background-color: #d1d5da;
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s ease 0s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.fade-transform-box {
  position: relative;
  top: 0px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
}
</style>
