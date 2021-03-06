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

###重定向路由
在用户访问一个特定的地址时，将其重定向到另一个指定的地址
eg：
```javascript
www.aaa.com    =>    www.aaa.com/products
www.aaa.com/a    =>    www.aaa.com/y
```
###子路由
```javascript
{path: 'home',component:HomeComponent}

{path: 'home',component:HomeComponent,
    children:[
        {
            path:'',component:XxxComponent
        },
        {
            path:'/yyy',component:YyyComponent
        }
    ]
}
```
###辅助路由
```html
<router-outlet></router-outlet>
<router-outlet name="aux"></router-outlet>
```
```javascript
{path: 'xxx', component: XxxComponent, outlet: 'aux'}
{path: 'yyy', component: YyyComponent, outlet: 'aux'}
```
```html
<a [routerLink]="[{outlets: {aux: 'xxx'}}]">Xxx</a>
<a [routerLink]="[{outlets: {aux: 'yyy'}}]">Yyy</a>
```
###路由守卫
+ 只有当用户已经登录并拥有某些权限时才能进入某些路由
+ 一个由多个表单组件组成的向导，例如注册流程，用户只有在当前路由的组件中填写了满足要求的信息才可以导航到下一个路由
+ 当用户未执行保存操作而试图离开当前导航时提醒用户

1. CanActivate：处理导航到某路由的情况
2. CanDeactivate：处理从当前路由离开的情况
3. Resolve: 在路由激活之前获取路由数据
