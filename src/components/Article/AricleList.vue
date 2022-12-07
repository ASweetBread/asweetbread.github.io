<template>
    <div>
        <h1>文章列表</h1>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
    tableList: [
        {
            title: '',
            category: '',
            status: '',
            tags: []
        }
    ]
})



</script>

<style lang="less" scoped>

</style>