<template>
    <div class="Article_Container">
        <div class="Category">
            <el-tree :data="data" :expand-on-click-node="false" default-expand-all
             :props="defaultProps" @node-click="handleNodeClick" >
                <template #default="{ node, data }">
                    <div class="custom-tree-node">
                        <span>{{ node.label }}</span>
                        <span >
                            <a @click="append(node,data)"> add </a>
                            <a v-if="data.id > 3" style="margin-left: 8px" @click="remove(node, data)"> delete </a>
                        </span>
                    </div>
                </template>
            </el-tree>
        </div>
        <el-dialog v-model="dialogFormVisible" title="Shipping address">
            <el-form :model="currentNode">
                <el-form-item label="父节点" >
                    <el-input v-model="currentNode.parentLabel" disabled autocomplete="off" />
                </el-form-item>
                <el-form-item label="子节点">
                    <el-input v-model="currentNode.label" required autocomplete="off" />
                </el-form-item>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="createNewNode">
                Confirm
                </el-button>
            </span>
            </template>
        </el-dialog>
        <div class="tableDiv">
            <div class="pannel">
            </div>
            <el-table :data="tableList" stripe style="width: 100%">
                <el-table-column prop="title" label="标题" width="300" />
                <el-table-column prop="isCollection" label="是否收藏文章" width="300" />
                <el-table-column prop="status" label="操作" >
                    <template #default="scope">
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
import { ref,reactive } from 'vue';
// 分类管理左侧，分类展示
const handleNodeClick = (data) => {
//   console.log(data)
}

const defaultProps = {
  children: 'children',
  label: 'label',
}

const data = [
    {
        id: 1,
        label: '前端',
        children: [
            {
                id: 4,
                label: '前端基础'
            }
        ]
    },
    {
        id: 2,
        label: '后端'
    },
    {
        id: 3,
        label: '其他'
    }
]

const dialogFormVisible = ref(false)
const currentNode = reactive({
    parentLabel: '',
    label: '',
    parentNode: {}
})
function append(node,data) {
    console.log(node,'node')

    currentNode.parentLabel = node.data.label
    currentNode.parentNode = node
    dialogFormVisible.value = true
}
let id = 5;
function createNewNode() {
    if(!currentNode.parentNode.data.children){
        currentNode.parentNode.data.children = []
    }
    console.log(currentNode.parentNode)
    const NewNode = {
        id: id,
        label: currentNode.label
    }
    currentNode.parentNode.data.children.push(NewNode)
    id++
    dialogFormVisible.value = false
}
function remove(node,data){
    console.log(node.parent.data)
    const index = node.parent.data.children.findIndex((item)=>item.id==data.id)
    console.log(index)
    node.parent.data.children.splice(index,1)
}

// 分类管理右侧，分类对应文章列表展示
const tableList = [
        {
            id: '1',
            title: '测试文章',
            category: '前端',
            status: '未发布',
            isCollection: '是',
            tags: ['vue','js']
        },
        {
            id: '2',
            title: '测试文章',
            category: '前端',
            status: '未发布',
            isCollection: '否',
            tags: ['react','js']
        },
]
</script>

<style lang="less" scoped>

.Article_Container {
    min-height: 100%;
    display: flex;
    flex-direction: row;
    background-color: #ffffff;
    border-top: 3px solid blue;
    border-radius: 2px 2px 0 0;
    box-sizing: border-box;
    padding: 30px;

    .Category {
        // background-color: aliceblue;
        min-height: 100%;
        flex-basis: 200px;
        flex-grow: 0;
        flex-shrink: 0;
        border-radius: 10px;
        padding: 5px;
        border: 2px solid blue;
        box-shadow: 5px 2px 5px 5px rgb(199, 199, 199);
    }
    .tableDiv {
        flex: 1;
        min-height: 100%;
        margin-left: 10px;
        border-radius: 10px;
        padding: 5px;
        border: 2px solid blue;
        box-shadow: 5px 2px 5px 5px rgb(199, 199, 199);
    }
    
}
:deep(.el-tree-node__label) {
    flex: 1;
}
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    a {
        color: rgb(105, 184, 230);
    }
    a:hover {
        color: blue;
    }
}
</style>