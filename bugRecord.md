ElementUIPlus使用自动导入，Notication会丢失样式
https://blog.csdn.net/Delete_89x/article/details/126430049
ElementUI导入图标，动态图标渲染。使用Vue的component组件
<component :is="item.icon"></component>


Pinia使用记录
defineStore中给每一组Store定义名称应该不同，否则会出现bug

Vue3.0使用记录
如果你想定义一个响应式变量去接受后端返回的值，使用const data = reactive({})定义，然后使用 data.res = res 来接受此时数据为响应式的

vConsole，手机端开发控制台

已经卸载的包依赖报错的问题
删除node_module，重新安装依赖