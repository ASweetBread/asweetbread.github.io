<template>
    <div class="Article_Container">
        <div class="panel">
            <el-select v-model="data.condition.category" class="select" placeholder="类别">
                <el-option v-for="item in data.category" :key="item" :label="item" :value="item" />
            </el-select>
            <el-select v-model="data.condition.tag" class="select" placeholder="标签">
                <el-option v-for="item in data.tags" :key="item" :label="item" :value="item" />
            </el-select>
            <el-select v-model="data.condition.IsPublish" class="select" placeholder="状态">
                <el-option label="已发布" :value="1" />
                <el-option label="未发布" :value="0" />
            </el-select>
            <el-autocomplete
                v-model="data.titleInput"
                :fetch-suggestions="querySearch"
                clearable
                placeholder="请输入标题"
                :trigger-on-focus="false"
            >
                <template #default="{ item }">
                    <div v-if="!item.NoData" class="value" style="color: grey">{{ item.value }}</div>
                    <div v-else style="font-style: italic;font-size: 25px;color: rgb(197, 196, 196);text-align: center;">No Data</div>
                </template>
            </el-autocomplete>
            <el-button type="primary" @click="getArticleList">查询</el-button>
            <el-button type="primary" @click="resetCondition">重置</el-button>
        </div>
        <div class="tableDiv">
            <el-table :data="data.tableList" stripe style="width: 100%">
                <el-table-column label="序号" width="180" >
                    <template #default="scope">
                        {{scope.$index}}
                    </template>
                </el-table-column>
                <el-table-column prop="title" label="标题" width="300" />
                <el-table-column prop="category" label="分类" width="80" />
                <el-table-column prop="tags" label="标签" width="240">
                    <template #default="scope">
                        <el-tag v-for="(item,index) in scope.row.tags" closable @close="handleClose(scope.row.tags,index)">{{item}}</el-tag>&nbsp;

                        <el-select
                            v-if="inputVisible"
                            ref="InputRef"
                            v-model="inputValue"
                            class="ml-1 w-20"
                            size="small"
                            @change="handleInputConfirm(scope.row.tags)"
                        >
                            <el-option v-for="item in data.tags" :key="item" :label="item" :value="item" />
                        </el-select>
                        <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
                            + 添加
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column prop="status" label="状态" width="80"/>
                <el-table-column prop="status" label="操作" >
                    <template #default="scope">
                        <el-button
                            link
                            type="primary"
                            size="small"
                            @click.prevent="editorAritcle(scope.row.id)"
                            >
                            Edit
                        </el-button>
                        <el-button
                            link
                            type="primary"
                            size="small"
                            @click.prevent="deleteArticle(scope.row.id)"
                            >
                            Remove
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup>
import { reactive,ref } from 'vue';
import { useRouter } from 'vue-router'
// 文章列表
const data = reactive({
    tableList: [
        {
            id: '1',
            title: '测试文章',
            category: '前端',
            status: '未发布',
            tags: ['vue','js']
        },
        {
            id: '2',
            title: '测试文章',
            category: '前端',
            status: '未发布',
            tags: ['react','js']
        },
        
    ],
    
    condition: {
        tag: '',
        category: '',
        title: '',
        IsPublish: '',
        pageNum: 1,
        pageCount: 10
    }
})

function getArticleList() {
    // 请求当前页面，文章列表

}
// 文章分类
data.category = []
function getCategory(){
    // 分类请求，赋值给data.category
    data.category = ['前端','后端','其他']
}
getCategory()
// 文章标签
data.tags = []
function getTags(){
    // 标签请求列表，赋值给data.tags
    data.tags = ['VUE','REACT','JS','CSS','HTML','SCSS','LESS']
}
getTags()
// 文章标题列表
data.titles = []
function getTitles(){
    // 文章列表标题请求，赋值给data.titles
    data.titles = [{ value: '测试文章1' },{ value: '测试文章2' },{ value: '文章1' },{ value: '文章2' }]
}
getTitles()
// 标题过滤
const querySearch = (queryString, cb) => {
    const results = data.titles.filter(item=>item.value.includes(queryString))
    if(results.length==0) {
        results.push({ NoData: true })
    }
    // call callback function to return suggestions
    cb(results)
}
// 文章标签添加与删除
const inputVisible = ref(false)
const inputValue = ref('')
function showInput(){
    inputVisible.value = true
}
function handleInputConfirm(tags){
    // tags新增请求，回调执行Notification通知

    // 页面新增
    tags.push(inputValue.value)
    inputVisible.value = false
}
function handleClose(tags,index){
    // tags删除请求，回调执行Notification通知

    // 页面删除，不再重新请求tags数据
    tags.splice(index,1)
}
// 文章的删除与重新编辑
const router = useRouter()
function editorAritcle(id) {
    router.push({
        path: '/new-article',
        query: { id }
    })
}
function deleteArticle(id){
    // 删除请求
    const index = data.tableList.findIndex((item)=>item.id===id)
    console.log(index)
    data.tableList.splice(index,1)
    // 回调再次请求数据
    getArticleList()
}

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
        :deep(.el-autocomplete) {
            margin-right: 20px;
            flex-basis: 300px;
            flex-grow: 0;
            flex-shrink: 1;
        }
    }
    .tableDiv {
        width: 100%;
        max-width: 1080px;
    }
}
</style>