<template>
  <div class="Article_Container">
    <div class="panel">
      <el-select v-model="data.category" class="select" placeholder="类别" size="large">
        <el-option v-for="item in CategoryOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="data.tag" class="select" placeholder="标签" size="large">
        <el-option v-for="item in TagsOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-button type="primary" @click="$refs.UploadfileValue.click()">上传</el-button>
      <input type="file" v-show="false" accept=".md" ref="UploadfileValue" @change="getFile">
      <el-input v-model="data.titleInput" placeholder="请输入标题" />
    </div>
    <div id="vditor" />
    <div class="buttonDiv">
      <el-button type="primary" @click="PulishArticle">发布</el-button>
      <el-button type="success" @click="OutputArticle">导出</el-button>
      <el-button type="info" @click="SaveAsLocal">保存</el-button>
      
    </div>
  </div>

</template>

<script setup>
import { ref, onMounted, reactive, onUnmounted } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import { useRoute } from 'vue-router'

import { tagsOptions } from '@/interface/modules/article.js'

tagsOptions().then(res=>{
  console.log(res)
})

// 新文章编写
const data = reactive({
  category: '',
  tag: '',
  content: '',
  titleInput: ''
})
const vditor = ref(null);
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
},{
  value: '04',
  label: 'Vditor'
}])

const route = useRoute()
const storage = JSON.parse(localStorage.getItem('Article'))
onMounted(() => {
  // 如果路由中有文章id，则编辑该文章
  if(route.query.id) {
    alert(route.query.id)
  }
  else if(storage){
    // 如果localStorage中存在编辑缓存，则读取继续编辑
    data.category = storage.category
    data.content = storage.content
    data.tag = storage.tag
    data.titleInput = storage.titleInput
  }
  vditor.value = new Vditor('vditor', {
    width: '100%',
    after: ()=>{
      vditor.value.setValue(data.content, true)
    },
    placeholder: '开启书写你的文章吧~~~~',
  });
});
onUnmounted(()=>{
  vditor.value.destroy()
})

// 加载md文件功能
const UploadfileValue = ref()
function getFile(e){
  if(UploadfileValue.value.files.length!=0) {
    let file = UploadfileValue.value.files[0];
    let reader = new FileReader();
    reader.onload = function(){
    // 文件数据流，变成相应格式数据了。（ 文本文件，就输出文本内的文本数据 ）
      vditor.value.setValue(this.result, true)
      let filename = UploadfileValue.value.files[0].name.split('.')
      filename.pop()
      data.titleInput = filename.join('.')
      ElNotification({
            title: 'Info',
            message: '导入完成',
            type: 'success',
            duration: 1000
        })
    };
    reader.readAsText(file);
  }
}

// 存储到localStorage
document.onkeydown = function SaveAsStorage(e){
	var currKey=0, e=e||window.event;
	currKey = e.keyCode||e.which||e.charCode;
	if(currKey == 83 && (e.ctrlKey||e.metaKey)){
    e.preventDefault();
    data.content = vditor.value.getValue()
    localStorage.setItem('Article',JSON.stringify(data))
		return false;
	}
}

// 保存草稿箱
function SaveAsLocal(){
  data.content = vditor.value.getValue()

  // 保存后清除 localStorage
  localStorage.removeItem('Article')
}

// 发布到各个平台
function PulishArticle(){

}

// 导出到本地
function OutputArticle(){
  if(!data.titleInput){
    ElNotification({
            title: 'Warning',
            message: '请输入标题',
            type: 'warning',
            duration: 1000
        })
    return false
  }
  let url = window.URL.createObjectURL(new Blob([vditor.value.getValue()]))
  const download = document.createElement('a')
  download.href = url
  download.download = data.titleInput + '.md'
  download.click()
  localStorage.removeItem('Article')
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
  >div {
    margin-top: 20px;
  }
  #vditor {
    box-shadow: 3px 3px 10px 10px rgb(199, 199, 199);
    max-width: 1000px;
    flex: 1;
  }

  .panel {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1000px;
    .el-button {
      height: 40px;
      margin-right: 10px;
    }
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
