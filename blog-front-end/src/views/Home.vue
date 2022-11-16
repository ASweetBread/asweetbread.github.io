<script setup>
import { computed } from '@vue/reactivity';

const asideWidth = computed(()=> true ? '200px': '84px')

</script>

<template>
    <el-container>
        <el-aside :width="asideWidth" class="aside-el">Aside</el-aside>
        <el-container class="main-container">
            <el-header>Header</el-header>
            <el-main>Main</el-main>
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
