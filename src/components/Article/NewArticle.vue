<template>
  <div class="Article_Container">
    <div class="panel">
      <el-select v-model="value" class="select" placeholder="类别" size="large">
        <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="value" class="select" placeholder="标签" size="large">
        <el-option v-for="item in TagsOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-input v-model="titleInput" placeholder="请输入标题" />
    </div>
    <div id="vditor" />
    <div class="buttonDiv">
      <el-button type="primary">发布</el-button>
      <el-button type="info">保存</el-button>
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';

const vditor = ref(null);
const titleInput = ref()
const CategoryOptions = ref([{
  value: '01',
  label: '前端'
},{
  value: '02',
  label: '后端'
},{
  value: '03',
  label: '其他'
}])
const TagsOptions = ref([{
  value: '01',
  label: 'Vue'
},{
  value: '02',
  label: 'React'
},{
  value: '03',
  label: 'ElementUI'
}])

onMounted(() => {
  vditor.value = new Vditor('vditor', {
    placeholder: '开启书写你的文章吧~~~~',
  });
});
</script>

<style lang="less" scoped>
.Article_Container {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-top: 3px solid blue;
  border-radius: 5px 5px 0 0;
  box-sizing: border-box;
  padding-bottom: 10px;
  >div {
    margin-top: 20px;
  }
  #vditor {
    width: 100%;
    box-shadow: 3px 3px 10px 10px rgb(236, 236, 236);
    max-width: 1000px;
  }

  .panel {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1000px;

    .el-input {
      flex: 1
    }
    .el-select {
      flex-basis: 100px;
      flex-grow: 0;
      flex-shrink: 1;
      margin-right: 10px;
    }
  }

  .buttonDiv {
    width: 100%;
    max-width: 1000px;
    .el-button {
      float: right;
    }
  }
}
</style>
