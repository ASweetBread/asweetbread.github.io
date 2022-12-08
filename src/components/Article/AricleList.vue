<template>
    <div class="Article_Container">
        <div class="panel">
            <el-select v-model="data.category" class="select" placeholder="类别">
                <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="data.tag" class="select" placeholder="标签">
                <el-option v-for="item in TagsOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-select v-model="data.tag" class="select" placeholder="状态">
                <el-option v-for="item in TagsOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <el-input v-model="data.titleInput" placeholder="请输入标题" />
            <el-button type="primary">查询</el-button>
        </div>
        <div class="tableDiv">
            <el-table :data="data.tableList" stripe style="width: 100%">
                <el-table-column label="序号" width="180" >
                    <template #default="scope">
                        {{scope.$index}}
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="标题" width="180" />
                <el-table-column prop="category" label="分类" width="180" />
                <el-table-column prop="tags" label="标签" width="180">
                    <template #default="scope">
                        <el-tag v-for="item in scope.row.tags">{{item}}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" />
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
const data = reactive({
    tableList: [
        {
            title: '测试文章',
            category: '前端',
            status: '未发布',
            tags: ['vue','js']
        },
        {
            title: '测试文章',
            category: '前端',
            status: '未发布',
            tags: ['react','js']
        },
        
    ]
})



</script>

<style lang="less" scoped>
.Article_Container {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-top: 3px solid blue;
    border-radius: 2px 2px 0 0;
    box-sizing: border-box;
    padding-bottom: 10px;
    .panel {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: start;
        max-width: 1080px;
        margin-top: 10px;
        .el-select {
            flex-basis: 100px;
            flex-grow: 0;
            flex-shrink: 1;
            margin-right: 5px;
        }
        .el-input {
            margin-right: 20px;
            flex-basis: 300px;
            flex-grow: 0;
            flex-shrink: 1;
        }
    }
}
</style>