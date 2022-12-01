<script setup>
import { computed } from '@vue/reactivity';
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
                <router-view></router-view>
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
</style>
