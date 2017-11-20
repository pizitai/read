# Lear Angular 4.2.4
learn from 慕课网
##路由
名称 | 简介 
---- | ------ 
Routes | 路由配置，保存着哪个URL对应展示哪个组件，以及在哪个RouterOutlet中展示组件
RouterOutlet | 在Html中标记路由内容呈现位置的占位符指令
Router | 负责在运行时执行路由的对象，可以通过调用其navigate()和navigateByUrl()方法来导航到一个指定的路由
RouterLink | 在Html中声明路由导航用的指令
ActivatedRoute | 当前激活的路由对象，保存着当前路由的信息，如路由地址，路由参数等 
###在路由时传递数据
1. 在查询参数中传递数据
eg:
```javascript
/product?id=1&name=2   =>  ActivatedRoute.queryParams[id]

```
2. 在路由路径中传递参数
eg:
```javascript
{path:/product/id}   => /product/1  =>  ActivatedRoute.params[id]
```
3. 在路由配置中传递数据
eg:
```javascript
{path:/product,component:ProductComponent, data:[{isProd:true}]}   =>  ActivatedRoute.data[0][isProd]
```