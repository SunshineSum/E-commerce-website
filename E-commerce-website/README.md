##day01
###1、完成一级路由
###2、mock数据，并进行vuex管理
###3、完成首页头部模块布局
###4、完成首页轮播图模块布局
###5、完成首页服务策略模块布局
###6、完成首页商品导航模块布局
###7、完成首页购物导航榜单模块布局

##day02
###1、完成首页私人订制模块布局
###2、完成首页新品首发模块布局
###3、完成首页人气推荐模块布局
###4、完成首页类目热销榜模块布局
###5、完成个人中心页面布局
###6、完成购物车页面布局
###7、修复了几个bage
	（1）出现以下报错：Cannot read property 'counterPrice' of undefined"
		原因：没有获取到数组数据就遍历，并且取其中每一项的属性
		解决方案：判断是都数组中有数据，再进行获取其中的数据
	（2）出现以下报错;Unknown custom element: <FlashSalnpmeModule> - did you register the component correctly? For recursive components, make sure to provide the "name" option.
		原因：注册组件时组件名抒写错误
		解决方案：修改组件名