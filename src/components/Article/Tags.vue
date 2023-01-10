<template>
    <div class="Article_Container">
        <div class="pannel">
            <el-tag
                v-for="tag in dynamicTags"
                :key="tag"
                class="mx-1"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
                size="large"
            >
                {{ tag }}
            </el-tag>
            <el-input
                v-if="inputVisible"
                ref="InputRef"
                v-model="inputValue"
                class="ml-1 w-20"
                size="small"
                @keyup.enter="handleInputConfirm"
                @blur="handleInputConfirm"
            />
            <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
                + New Tag
            </el-button>
        </div>
    </div>
</template>

<script setup>

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
}
</style>