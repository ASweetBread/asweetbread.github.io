el-autocomplete
1.querySearch方法中，默认模板下cb函数的参数是 [{ value:'' }]的形式。自定义模板下，回参会在 <template #default="{ item }">中获取
2.trigger-on-focus，使用应该形如 “:trigger-on-focus="true"” 才能给予属性赋值