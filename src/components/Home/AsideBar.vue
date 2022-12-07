<script setup>
import { ref,reactive } from 'vue';
import { getMenuStore,getStore } from '../../store/index'

const Menu = getMenuStore()
const data = reactive({})

Menu.getList().then((res)=>{
    data.menulist = res
})

const state = getStore()
const isHide = state.isHide

</script>

<template>

    <el-menu
        router
        :collapse="isHide"
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
    >
        <el-menu-item index="/">
            <el-icon><House /></el-icon>
            <span>首页</span>
        </el-menu-item>
        <template v-for="(item,index) in data.menulist" >
            <template  v-if="item.children==null">
                <el-menu-item :index="item.path" :key="index">
                    <component :is="item.icon"></component>
                    <span>{{item.menuname}}</span>
                </el-menu-item>
            </template>
            <template  v-else>
                <el-sub-menu :index="item.name" :key="item.name">
                    <template #title>
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <span>{{item.menuname}}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="(el,i) in item.children" :index="el.path" :key="i">
                            <el-icon>
                                <component :is="el.icon"></component>
                            </el-icon>
                            <span>{{el.menuname}}</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
            </template>
            
        </template>
        
      </el-menu>
</template>

<style scoped>
.el-menu-vertical-demo {
    min-height: 100%;
    overflow: auto;
}
</style>
