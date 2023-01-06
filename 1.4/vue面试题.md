# 1. 生命周期函数

### 1.1 什么是声明周期函数
我理解的生命周期函数就是vue实例从创建到销毁的过程中就是生命周期函数,生命周期函数又叫钩子函数,到了某一个特定的时间节点会自动触发的钩子函数
常用的钩子函数一共又8个

beforeCreate 创建前 实例还未创建 会开始进行数据初始化,这个过程会定义data数据方法以及事件，

created 创建后 是数据已经初始化完成之后 这个第一个能拿到data和methods来用的钩子函数

baforeMount 挂载前 挂载的是dom节点

mounted 挂载后

以上四个是创建阶段的钩子函数 这些钩子函数只会执行1次

beforeUpdate 更新前 数据变了视图未更新

updated 更新后 数据变了视图更新

只要数据变了 就会执行更新的钩子函数
更新阶段的钩子函数会执行0次或者无数次

beforeDestory 销毁之前 最后一个能使用data和methods的钩子函数

destoryed 销毁之后

销毁阶段的钩子函数 执行1次

除了这八个还有三个
actived 激活缓存组件
deactived 停用缓存组件
errorCaptured(咦而康死错的) 子组件出错的时候触发

### 1.2 这些钩子函数如可触发？
⻚⾯⼀开始加载的时候就会触发创建前后和挂载前后的钩⼦函数, ⽽更新的钩⼦函数需要当我们改变data的时候才能触发,⽐如点击按钮,执⾏⼀个⽅法,在这个⽅式⾥⾯给data⾥⾯属性重新复制操作,这个时候就会执行更新的钩⼦函数, 销毁的钩⼦函数是组件进⾏切换的时候就会进⾏销毁.

### 1.3 在项目开发过程中哪些钩子函数用的比较多
在写代码的过程中,我用的比较多的钩子函数有created和mounted
created和mounted的区别就是created比 mounted执行的时间更早所以会更多的在created中请求
在created中我经常调用axios请求数据或者获取本地存储里的数据
在mounted中我们经常获取dom节点
有时候也存在获取不到dom元素的情况,这个时候我们⼀般⽤$nextTick⽅法来解决

### 1.4. ⻚⾯第⼀次加载时⽗⼦组件⽣命周期执⾏的顺序是什么?
页面一.beforeCreate

页面一.created

页面一.beforeMount

组件一.beforeCreate

组件一.created

组件一.beforeMount

组件一.mounted

页面一.mounted

# 2. $nextTick⽅法有什么作⽤?
在 dom 更新之后执行的延迟回调
在vue的dom更新是异步的,我理解的nextTick是吧本身同步的代码变成异步执行,所以当dom还未更新的时候我们无法拿到最新的dom来,所以放在nextTick里的代码就会在dom更新之后执行就能拿到最新的dom来用了

# 3. vuex
### 3.1 什么是vuex
vuex 是 vue 的状态管理工具 管理项目中的公共数据 能够在所有的组件中使用
```js
imort store from '../store/index.js' 
// 如果不在组件里面用vuex的话，想要使用就要先引入state
```

### 3.2 五大核心以及怎么调用
state 存放数据的地方 通过this.$store.state调用

mutations 修改state的地方 通过this.$store.commit调用

getters 计算state的地方 通过this.$store.getters调用

actions(爱可神死) 发送异步请求的地方 通过this.$store.dispatch调用

modules 模块化 把数据分模块管理

### 3.3 vuex的辅助函数
vuex的辅助函数其实就是一个语法糖

mapState
mapMutations

mapActions
mapGetters

都是先引入 然后展开使用

mapState和mapGetters在计算属性下展开

mapActions和mapMutations在methods下展示

展开的时候用扩展运算符...展开

### 3.4 vuex的执行机制
在项目中如果要改变state的状态,我们一般是在组件里面调用this.$store.dispatch方法来触发actions里面的方法,
在actions里面通过commit来调用mutations里面定义的方法来改变state,同时这也是vuex的执行机制

### 3.5 vuex的弊端
vuex也有一些弊端,比如浏览器刷新的时候,vuex的数据会丢失,我们一般结合本地存储来解决,当我们在mutations里面改变state的时候,通过localStorage或者sessionStorage存储到本地,然后在state的状态的属性值那块写一个三元表达式,如果本地存在数据的话则读取本地存储的数据,否则就赋值为null
实现如下：

```js
在state中
list: localStorage.getItem("list")? JSON.parse(localStorage.getItem("list")): [];
```

### 3.6 vuex持久化插件
持久化原理：做到数据状态持久化，使页面刷新后数据不会初始化为默认状态。
安装插件 npm i vuex-persistedstate
结着引用 注册

```js
import states from 'vuex-persistedstate';
Vue.use(Vuex);
export default new Vuex.store({
    plugins:[states] // 注意引入名字是随便起的名字
```

### 3.7 怎么开启严格模式
strict(死最可特): true, 跟 state 同级的地方设置这个属性
开启完严格模式后 如果不是通过 mutation 修改的 state 就会报错
strict 严格模式只适合开启在开发环境下

### 3.8 modules模块化
当在vuex中存储的数据很多的时候,需要用modules来分模块管理

每个模块里又有四个核心

 state mutations getters actions

然后引入仓库 

并且在modules下注册模块

在定义的modules里开启一个命名

namespaced:true

# 4. vue路由有⼏种模式?有什么区别?原理是什么?
vue的路由模式⼀共有两种,分别是哈希和history. 他们的区别是hash模式不会包含在http请求当中,
并且hash不会重新加载⻚⾯,⽽使⽤history模式的话,如果前端的url和后端发起请求的url不⼀致的话,会 报404错误,所以使⽤history模块的话我们需要和后端进⾏配合.
history的原理就是利⽤html5新增的两个特性⽅法,分别是psuhState和replaceState来完成的. 

# 5. vue中ref是什么？
首先ref的引用是相当于一个DOM节点，而且是一个string类型的值。而在vue3中就是一个简单数据类型
相当于原生js用document.getElementById("#id")
但是只是类似，他们的不同点是Vue是操控虚拟DOM ，也就是说在渲染初期并没有这个ref的属性，这个属性是在创建Vue实例以后才被加到虚拟DOM中的。开发不能将ref的结果在模版中进行数据绑定。
通俗的将就是搜集所有的ref的一个对象。通过this.$refs 可以访问到此vue实例中的所有设置了ref属性的DOM元素，并对其进行操作。

# 6. 什么是路由的懒加载
当路由被访问时才加载对应的路由文件，就是路由懒加载
整个网页默认是刚打开就去加载所有页面，路由懒加载就是只加载你当前点击的那个模块。
按需去加载路由对应的资源，提高首屏加载速度（tip:首页不用设置懒加载，而且一个页面加载过后再次访问不会重复加载）。
实现原理：将路由相关的组件，不再直接导入了，而是改写成异步组件的写法，只有当函数被调用的时候，才去加载对应的组件内容。

# 7. vue的路由守卫？
vue路由守卫就是当我们进行页面跳转的时候会触发的钩子函数,

vue一共有三种路由守卫

第一种是全局路由守卫

beforeEach路由进入之前

beforeResolve 路由解析之前

afterEach 路由离开之前

第二种是组件集守卫

beforeRouteEnter路由进入之前

beforeRouteUpdate路由更新之前

beforeRouteLeave路由离开之前

第三种独享守卫

beforeEnter路由进入之前

这几个钩子函数里面都有一个回调函数,分别是to,from,next to代表到哪儿去 from代表从哪儿来 next代表执行下一步

### 7.1 导航守卫的使用场景
再写代码的过程中我一般用导航守卫进行页面的鉴权处理,再用户登录成功的时候,我们会吧token和用户信息存到vuex或者本地存储中,
代表了用户的登录状态,在访问某个页面的时候判断是否存有token,就能正常访问这个页面,如果没有token,那么就用next跳转到登录页面

### 7.2 导航守卫的执行顺序
全局前置

单个路由规则的

组件前置守卫

全局解析守卫

后置守卫

### 7.3 beforeEach和beforeResolve的区别
这两个都是全局守卫 都是在路由跳转之前就会执行的守卫
beforeEach比beforeResolve执行的时间要更早

# 8. v-if与v-show的区别？
他们的区别就是首先v-if和v-show都是控制元素的显示与隐藏,不过v-if控制元素的显示和隐藏的时候会删除对应的dom元素,当每一个显示的时候,都会重新创建dom和渲染,而v-show则通过css的display:none和display:block来控制元素的显示与隐藏,
v-if比较耗费性能,所以我们涉及到频繁的显示隐藏操作我们建议使用v-show,如果不是频繁操作的话,我们可以v-if
在项目中我会经常使用v-if和v-show,比如我们在搜索功能的时候,他有一个历史记录,这个时候我们根据是否有搜索的结果来判断历史记录的显示与隐藏,这块我就可以使用v-if,当然用v-show也可以,以上就是我对v-if和v-show的理解

# 9. v-for与v-if的优先级那个高,如果同时使用v-for和v-if怎么解决？
v-for的优先级高,因为v-for的时候我们才开始渲染dom元素,这个v-if还无法进行判断
v-for和v-if不能同时使用,我们可以通过标签,比如div或者template标签来进行包裹,把v-if写在包裹的标签上面(写在v-for外面)还有就是用计算属性算出来想要的数据再去循环
在vue3中v-if的优先级高 

# 10. methods computed watch的区别
methods 是方法 各种事件放在这里 没有缓存功能

computed 是计算属性 需要return计算的结果 并且有缓存功能 只有跟他有关的值发生变化才会重新计算 否则就从缓存里拿 通常用来计算总数和总价 比如购物车功能就会用到计算属性

watch 监听属性 有三个参数 handler(韩哥乐)(执行函数) deep(深度监听) immediate(音没低特)(立即监听)

如果不需要depp和immediate的时候就会简写成一个函数

watch可以监听data数据还有监听路由的变化

watch里可以执行异步操作 但是计算属性不行

watch的使用场景 存本地存储的时候 只要数据变了就要重新存一次 那么就可以用watch实现

# 11. vue常用的指令有哪些?
v-if 通过创建或者销毁元素的方式实现元素的显示隐藏

v-show 通过控制元素，display值方式实现显示隐藏

v-html 插入一段html片段 相当于innerHTML；

v-text 是渲染字符串，会覆盖原先的字符串

v-on 事件绑定

v-bind 将html中属性与vue中变量，进行数据单项绑定，实现数据通信

v-model 实现数据双向绑定

v-for 循环 重复多次渲染绑定的元素。

# 12. vue常用的修饰符有哪些?
.trim(锤木) 去除首尾多余的空格

.stop 阻止事件冒泡

.once(玩死) 只渲染一次

.self(射儿父)事件只作用在元素本身

.number 将值转化为number类型

.capter 组件之间捕获

.prevent 阻止元素的默认行为

.native(奶替无) 事件穿透,让我们可以在自定义组件上定义事件和方法

# 13. vue组件通信?
1.⽗传⼦

在⼦组件的标签上定义属性 ⼦组件通过props来进⾏接收,可以通过数组或者对象的⽅式接收,如果⽗组件没有传递属性,⼦组件可以default来设置默认值

父传子的使用场景 封装列表的时候 把数据传到子组件渲染

2.⼦传⽗ 

⼦组件通过this.$emit("⾃定义的事件的名字",要传给⽗组件的数据), ⽗组件通过⼦组件的标签监听⾃定义的时间,最后在父组件接收使用就可以了

子传父的使用场景：在子组件中有删除等方法的时候要在子组件把下标传到父组件操作数据

3.兄弟组件

通信
通过中央事件总线,我们也称之为eventBus,

在main.js定义一个空的vue实例并且挂载在原型上,通过$emit传数据,在要接收的子组件的created钩子函数下通过$on接收

4.vuex把公共数据存在vuex里这样就能实现组件通信

5.本地存储
把要传递的数据存在本地存储里,再要接收的组件接收,也能实现组件通信

6.v-model
v-model是一个语法糖 是:value和@input的合写 所以说能实现组件通信

7.$attr和$listener

主要是祖孙之间传值 父组件下面有子组件a 子组件a下面又有 子组件b 在父组件里还是用自定义属性和自定义事件传 在子组件a下面绑定v-bind="$attrs" v-on="$listeners" 在子组件b下面通过$attrs 拿数据 通过 $emit 调用方法

8.provide 和 inject
不管嵌套了几层都能拿到数据 把数据定义在 provide 里 在子组件通过 inject 拿到数据 缺点是不响应
9.children 和 parent
在子组件里通过$parent 拿到父组件的数据和方法
在父组件里通过$children 拿到子组件的数据和方法

# 14. 说一下什么是mvvm模式?
vue是一个mvvm模式的框架

m就是模型model在vue中指数据

v就是view视图

vm是view-model控制器在vue中就是vue实例

视图变了数据会变 数据变了视图会变 

这中间就是 vm 在控制
除了 mvvm 模式之外 还有 mvp 和 mvc 模式

# 15. MVVM模式的优点以及与MVC模式的区别?
MVVM模式的优点:

1.低耦合

2.可重用性

3.独立开发

4.可测试

MVVM和MVC的区别:
MVC中Controller演变成MVVM中viewModel

Mvvm通过数据来显示视图层而不是节点操作

mvvm主要解决了:mvc中大量的DOM操作使页面渲染性能降低,加载速度变慢,影响用户体验

# 16. 虚拟 DOM 是什么? 有什么优缺点?
虚拟dom是利用js描述元素与元素的关系用js对象来表示真实的DOM树结构创建一个虚拟DOM对象

在组建渲染的时候会调用render函数,这个函数会生成一个虚拟dom,再根据这个虚拟dom生成真实的dom,然后这个真实的dom会挂载到我们的页面中,

优点:

保证性能下限： ⽐起粗暴的 DOM 操作性能要好很多

⽆需⼿动操作DOM：只需要写好View-Model的代码逻辑,框架会根据虚拟DOM和数据双向绑定，帮我们以可预期的⽅式更新视图

跨平台：虚拟 DOM 本质上是 JavaScript 对象,⽽ DOM 与平台强相关，相⽐之下虚拟 DOM 可以进⾏更⽅便地跨平台操作，

缺点:

⽆法进⾏极致优化： 虽然虚拟 DOM + 合理的优化，⾜以应对绝⼤部分应⽤的性能需求，但在⼀些性能要求极⾼的应⽤中虚拟DOM ⽆法进⾏针对性的极致优化。
⾸次渲染⼤量 DOM 时，由于多了⼀层虚拟 DOM 的计算，会⽐ innerHTML 插⼊慢

# 17.  Vue的diff算法原理是什么？
diff 算法就是把新生成的虚拟 dom 和旧的虚拟 dom 进行对比的过程就是 diff 算法
Vue 的 diff 算法是平级⽐较，不考虑跨级⽐较的情况。内部采⽤深度递归的⽅式+双指针⽅式⽐较
先⽐较两个节点是不是相同节点
相同节点⽐较属性，复⽤⽼节点
先⽐较⼉⼦节点，考虑⽼节点和新节点⼉⼦的情况
优化⽐较：头头、尾尾、头尾、尾头
⽐对查找，进⾏复⽤

# 18. vue双向数据绑定的原理?
vue.js 则是采⽤ 数据劫持 结合 发布者-订阅者 模式的⽅式，
通过 Object.defineProperty() 来劫持各个属性的 setter ， getter ，
在数据变动时发布消息给订阅者，触发相应的监听回调。
这个时候就可以实现数据的双向绑定
Object.defineProperty 是对象的一个方法，当添加或者修改属性的时候会触发，
第一个参数是目标对象，第二个参数是要修改的属性，第三个参数是配置项，可以是 value 和 writeable 等选项，也可以是 get 和 set 函数
get 是获取值的时候触发 需要 return 一个值就是这个属性的值
set 是修改值的时候触发 有一个默认参数就是修改后的值
Object.defineProperty 的缺点 是 对于新添加的属性检测不到解决的方法 this.$set

# 19. vue 如何封装可复⽤的组件?以及请举例说明你封装过的组件?
1.根据项目需求合理规划子组件（是封装一个页面还是一个页面多个子组件 具体情况具体分析）

2.定义 components 文件夹 定义子组件

3.引入 注册 作为标签使用

4.合理使用插槽和组件通信保证子组件的封闭性和开发性（有些东西是固定的，有些东西是动态的就需要插槽或者组件通信设置）

5.所谓的这个封装就是我们组件内部定义好之后外部无法修改,比如有一个箭头,在任何组件都能够显示这个箭头,无法在外部修改

6.所谓的开放性就是我们需要将动态的内容以及组件通信的⽅式进⾏数据传递,保证组件的可扩展性

5.举例：
封装头部子组件 标题部分用插槽
封装列表子组件 商品数据通过父传子传递
导航子组件 数据通过父传子传 点击事件通过子传父实现

# 20. vue 中 key 的作⽤是什么?
在用for循环的时候用key值，为了避免元素重复渲染，在设置key值的时候一般设置为id等唯一的值
比如说循环1-5在3的后面插入一个a如果没有key值那么从a开始a 4 5 都要重新渲染 如果有 key 值 只会渲染 a 所以有 key 值能提高循环效率

# 21. 说⼀下 vue 和 jquery 的区别?
jquery他是⽤js封装的⼀个类库,主要是为了⽅便操作dom元素,⽽vue他是⼀个框架,并且呢,他会从真实dom构建出⼀个
虚拟的dom树,通过diff算法渲染只发⽣改变的dom元素,其他的相同的dom元素不⽤在重新渲染. ⽽使⽤jquery去改变dom元素
的时候,即使有相同的dom元素也会重新渲染

# 22. vue 中 data 发⽣变化,视图不更新如何解决?
在 vue2 中 vue 实例的 data 数据是响应式 的 就是数据变了 视图也会跟着变，如果给某一个 data 新添加了一个字段 这个新添加的字段因为 js 的限制不响应，需要使用 this.$set 方法代替原本的普通添加方法 就能实现响应，这个方法的三个参数 是给谁添加 添加的字段 初始值 如果不是在组件中 用这个方法 那么就用 Vue.set

在 vue3 中数据响应的原理从 definedproperty 变成了 proxy 所以不会存在数据变了视图不变的问题

# 23. 为什么vue中data必须是⼀个函数?
如果data是⼀个函数的话，这样每复⽤⼀次组件，就会返回⼀份新的data，类似于给每个组件实例创建⼀个私有的数据空间，
让各个组件实例维护各⾃的数据。⽽单纯的写成对象形式，就使得所有组件实例共⽤了⼀份data，就会造成⼀个变了全都会变的结果。
所以说vue组件的data必须是函数

# 24. 说⼀下什么是 vue 过滤器? 有⼏种?项⽬中如何使⽤,请举例说明?
vue 过滤器就是将数据进⾏⼆次处理,得到我们想要的结果数据
vue 的过滤器分为两种,第⼀种是全局过滤器,通过 vue.filter 来进⾏定义,第⼆种是局部过滤器,需要定义在组件内部，用 filters 过滤
项⽬中我们通过过滤器将后台返回的状态 0 和 1 转化为⽀付或者未⽀付 还有对时间格式进行过滤
vue3 中没有过滤器了

# 25. 怎样理解 Vue 的单向数据流?
数据总是从⽗组件传到⼦组件，⼦组件没有权利修改⽗组件传过来的数据，只能请求⽗组件对原始数据进⾏修改。
这样会防⽌从⼦组件意外改变⽗级组件的状态，从⽽导致你的应⽤的数据流向难以理解。
注意：在⼦组件直接⽤ v-model 绑定⽗组件传过来的 prop 这样是不规范的写法 开发环境会报警告
如果实在要改变⽗组件的 prop 值 可以再 data ⾥⾯定义⼀个变量 并⽤ prop 的值初始化它 之后⽤$emit 通知⽗组件去修改
还有一个方法修饰符sync可以在子组件里用emit 修改父组件传来的值 在父组件传值的时候加上这个修饰符就行了
这个修饰符 就是:num @update:num 的简写

# 26. 说⼀下你对 keep-alive 的理解?以及在项⽬中如何使⽤?
keep-alive 是 vue 内置的⼀个组件，作⽤就是能够缓存不活动的组件，⼀般情况下，组件进⾏切换的时候，会进⾏销毁，如果让某个组件不进行销毁,⽽是保存之前的状态，⽐如说刚刚填好的表单数据。那么就可以利⽤ keep-alive 来实现
被缓存的组件 切换的时候不会触发创建和销毁的钩子函数 而是会触发跟 keep-alive 相关的 activated（激活） deactivated（停用）这两个钩子函数
keep-alive 黑白名单 有 include 属性和 exclude 属性
include 属性 定义了要缓存谁
exclude 属性 定义了不缓存谁
举例：保持滚动条的距离：
给 router-view 外层套一个 keep-alive
在想要保持滚动条的页面 的 beforeRouteLeave 的时候拿到当前滚动条饿的距离
在 actived 里面 赋值给页面的滚动条
拿滚动条或者赋值滚动条都是 document.documentElement.scrollTop

# 27. 说⼀下你对slot插槽的理解?
插槽就是⼀个占位符,将⾃定义组件的内容展示出来.⾃定义的组件如果写内容的话,⻚⾯是不会显示出来的,如果我们想让内容显示出来,我们就需要使⽤ slot 的插槽.
⽽插槽分别有具名插槽和匿名插槽、以及作⽤域插槽.,具名插槽需要所有 slot 标签上指定name 属性,⽽在对应标签上添加# 属性指定名字.
在项⽬中我们⼀般在进⾏组件封装的时候会使⽤插槽
作用域插槽
是把子组件里的数据传到父组件的插槽里使用
使用场景:比如在封装头部子组件的时候 中间的标题每个页面都不一样 就可以用插槽表示

# 28. 说⼀下如何对axios进⾏⼆次封装?以及api如何封装?
1.先创建 utils 文件夹

2.创建 request.js

3.引入 axios

4.配置 基本路径和超时时间

5.配置请求拦截和响应拦截

6.在请求拦截里可以放 loading 和 token

7.在响应拦截中 可以 清除 loading 还有处理错误编码字典

8.最后把我们封装的 axios 实例 导出

9.再创建一个 api.js 统一管理我们的接口

# 29. 说⼀下axios的拦截器的作⽤?应⽤场景都有哪些?
拦截器有两种 

一个是请求拦截一个是响应拦截

拦截器不需要手动调用而是每次发送 http 请求的时候都会自动触发

我们一般在请求拦截中 放全局的 loading 和 token
在响应拦截中关闭全局的 loading 和对 token 进行过期处理

# 30. vue 本地的跨域 代理跨域 proxy
什么是跨域

跨域是浏览器的跨域 不符合 域名 协议 端口号一样（同源策略） 的请求都会出现跨域的问题

跨域的解决方法

最多的情况是后端处理跨域

前端的跨域

服务器代理

jsonp

vue 中是 proxy 代理实现跨域

本地跨域是通过在 vue.config.js ⽂件⾥⾯的 devServer(第v赛我)属性⾥⾯的 proxy 属性⾥⾯配置,⼀共配置三个属性,分别是代理名称 代理
地址 开启跨域 重写路径

```js
devServer: {
    // proxy: "https://sug.so.360.cn",
    //第一种 直接定义跨域地址 这样所有的请求都会跨域
    proxy: {
      "/api": {
        target: "https://sug.so.360.cn",
        //跨域的目标
        changeOrigin: true,
        //开启跨域
        pathRewrite: {
          "^/api": "",
        },
        //真正请求的时候把 api代替为空
      },
    },
    //第二种设置跨域关键字 只有看到api才会跨域到这个地址 其他没有api关键字的接口就不会跨域
  },
```

# 31. Vue.use 是⼲什么的？
vue.use 是⽤来使⽤插件的。use 可以注册组件库，use 方法会调用 install 方法，install 方法里有一个参数 Vue，所以不需要再引入 Vue，可以理解为 Vue.component 是注册一个组件，但是用 use 方法可以实现一次注册多个组件
除了可以注册组件之外还能注册全局的方法。

# 32. 组件写 name 有啥好处？
增加 name 属性，会在 components 属性中增加组件本身，实现组件的递归调⽤。
可以表示组件的具体名称，⽅便调试和查找对应的组件 比如 keep-alive 缓存组件设置黑白名单的时候 就可以通过 name 设置

# 33. mixin混入
mixin 混入 把公共的选项（生命周期函数，计算属性，watch 等）提到一个 js 文件里，哪个组件用就在哪个组件引入
混入有全局混入和局部混入 局部混入是只在这个组件里能用 全局混入是这个项目的任何组件都能使用
如果混入和组件都有这个选项的时候混入里的先触发

# 34.路由跳转方式 路由配置 嵌套和动态区别
1. 路由跳转：
   1.1router-link 标签跳转
   1.2.编程式导航 this.$router.push()
   1.3.this.$router.replace（{path：‘/’ } ） （replace 跟 push 类似，只不过跳转之后不存历史记录）
   
2. 传参是传参 跳转是跳转
   传参就是我们之前背的 query params 动态路由传参
   在路由跳转的时候可以携带参数 可以在这里说我们之前背的路由的三种传参
   
   query 可以通过 name 和 path 都能跳转 接收通过 query 接收 就相当于是 get 传输参数 因为参数会被拼接到 url 上刷新数据不丢失
   
   params 只能通过 name 跳转 接收通过 params 接收 相当于是 post 传参 刷新数据丢失 解决方法：采取动态路由传参 还有存本地存储里用的时候拿
   
   动态路由 通过 params 接收 还可以开启 props 传参 通过 props 接收 注意路由后面要拼上:xx 参数 刷新数据不丢失
   
3. 路由的配置：
   在 router/index.js 中配置路由规则 路由规则中的 path 属性代表路径，name 属性是名字，component 属性代表在这个路径下加载什么组件，还可以用 children 属性配置子路由。还可以用 meta 定义路由的元信息。

4. 动态路由：
   动态路由是指路由器能够自动的建立自己的路由表，并且能够根据实际情况的变化实时地进行调整。用：开头，：后面跟的值是不确定的。这个值是我们要传递的参数

5. 嵌套路由：
   vue 项目中，界面通常由多个嵌套的组件构成，用 children 实现嵌套路由

# 35. 自定义指令和自定义过滤器的使用场景和作用
自定义指令：
使用位置：写在在标签里面 以 v-开头
使用场景:需要对普通 DOM 元素进行操作，这时候就会用到自定义指令
比如 我们可以使用自定义指令让一个元素进入页面就获得焦点，拖拽

```js
// 注册一个全局自定义指令 `v-focus`
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  },
});
```
自定义指令的钩子函数
一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
bind：指令第一次绑定到元素时调用。
inserted：被绑定元素插入父节点时调用
update：所在组件的 虚拟 dom 更新时调用，
componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
unbind：只调用一次，指令与元素解绑时调用。
钩子函数的参数 即 el、binding
el 指令所绑定的元素
binding：一个对象，包含这个自定义指令的一些信息
在很多时候，你可能想在 bind 和 update 时触发相同行为，而不关心其它的钩子就可以简写为一个函数
过滤器：
使用位置:双花括号插值 和 v-bind 表达式
使用场景 ：处理数据格式的
比如说 我们可以用过滤器过滤时间格式

# 36. 多环境变量
项目在运行时会根据启动的指令来运行不同的环境，在不同的环境中，我们配置对应所需的变量来满足我们的开发需求，称为多环境变量。
环境一般分为开发环境，测试环境，生产环境 不同的坏境就会定义不同的baseURL,再把这个文件引入到封装的axios文件中使用

# 37. Vue.extend
使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。
可以理解为创建子组件的 可以用 mount 或者 el 指定这个子组件挂载到哪里

# 38.路由信息对象和实例对象

this.$route 路由信息对象  包含的有参数和路径等信息 路由传参接收的时候 this.$route.query.params
this.$router 路由实例对象 包含了 push 等方法

# 39.vue3 和 vue2 生命周期函数的对比

beforeCreate -> setup() 开始创建组件之前，创建的是 data 和 method
created -> setup()
beforeMount -> onBeforeMount 组件挂载到节点上之前执行的函数。
mounted -> onMounted 组件挂载完成后执行的函数
beforeUpdate -> onBeforeUpdate 组件更新之前执行的函数。
updated -> onUpdated 组件更新完成之后执行的函数。
beforeDestroy -> onBeforeUnmount 组件挂载到节点上之前执行的函数。
destroyed -> onUnmounted 组件卸载之前执行的函数。
activated -> onActivated 组件卸载完成后执行的函数
deactivated -> onDeactivated 组件停用

