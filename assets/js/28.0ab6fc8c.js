(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{193:function(s,n,t){"use strict";t.r(n);var e=t(0),a=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"高效操作-dom-元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高效操作-dom-元素"}},[s._v("#")]),s._v(" 高效操作 DOM 元素")]),s._v(" "),t("h2",{attrs:{id:"_1-什么是-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是-dom"}},[s._v("#")]),s._v(" 1. 什么是 DOM")]),s._v(" "),t("p",[s._v("DOM（Document Object Model，文档对象模型）是 JavaScript 操作 HTML 的接口（这里只讨论属于前端范畴的 HTML DOM），属于前端的入门知识，同样也是核心内容，因为大部分前端功能都需要借助 DOM 来实现，比如：")]),s._v(" "),t("ul",[t("li",[s._v("动态渲染列表、表格表单数据；")]),s._v(" "),t("li",[s._v("监听点击、提交事件；")]),s._v(" "),t("li",[s._v("懒加载一些脚本或样式文件；")]),s._v(" "),t("li",[s._v("实现动态展开树组件，表单组件级联等这类复杂的操作。")])]),s._v(" "),t("p",[s._v("如果你查看过 DOM V3 标准，会发现包含多个内容，但归纳起来常用的主要由 3 个部分组成：")]),s._v(" "),t("ul",[t("li",[s._v("DOM 节点")]),s._v(" "),t("li",[s._v("DOM 事件")]),s._v(" "),t("li",[s._v("选择区域")])]),s._v(" "),t("p",[t("strong",[s._v("选择区域")]),s._v("的使用场景有限，一般用于富文本编辑类业务，我们不做深入讨论；"),t("strong",[s._v("DOM 事件")]),s._v("有一定的关联性，将下篇文章中详细讨论；对于"),t("strong",[s._v("DOM节点")]),s._v("，需与另外两个概念标签和元素进行区分：")]),s._v(" "),t("ul",[t("li",[s._v("标签是 HTML 的基本单位，比如 p、div、input；")]),s._v(" "),t("li",[s._v("节点是 DOM 树的基本单位，有多种类型，比如注释节点、文本节点；")]),s._v(" "),t("li",[s._v("元素是节点中的一种，与 HTML 标签相对应，比如 p 标签会对应 p 元素。")])]),s._v(" "),t("p",[s._v("举例说明，在下面的代码中，“p” 是标签， 生成 DOM 树的时候会产生两个节点，一个是元素节点 p，另一个是字符串为“亚里士朱德”的文本节点。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<p>亚里士朱德</p>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_2-会框架更要会-dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-会框架更要会-dom"}},[s._v("#")]),s._v(" 2. 会框架更要会 DOM")]),s._v(" "),t("p",[s._v("有的前端工程师因为平常使用 Vue、React 这些框架比较多，觉得直接操作 DOM 的情况比较少，认为熟悉框架就行，不需要详细了解 DOM。这个观点对于初级工程师而言确实如此，能用框架写页面就算合格。")]),s._v(" "),t("p",[s._v("但对于屏幕前想成为高级/资深前端工程师的你而言，只会使用某个框架或者能答出 DOM 相关面试题，这些肯定是不够的。恰恰相反，作为高级/资深前端工程师，不仅应该对 DOM 有深入的理解，还应该能够借此开发框架插件、修改框架甚至能写出自己的框架。")]),s._v(" "),t("h2",{attrs:{id:"_3-为什么说-dom-操作耗时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么说-dom-操作耗时"}},[s._v("#")]),s._v(" 3. 为什么说 DOM 操作耗时")]),s._v(" "),t("p",[s._v("要解释 DOM 操作带来的性能问题，我们不得不提一下"),t("strong",[s._v("浏览器的工作机制")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_3-1-线程切换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-线程切换"}},[s._v("#")]),s._v(" 3.1 线程切换")]),s._v(" "),t("p",[s._v("如果你对浏览器结构有一定了解，就会知道浏览器包含渲染引擎（也称浏览器内核）和 JavaScript 引擎，它们都是单线程运行。单线程的优势是开发方便，避免多线程下的死锁、竞争等问题，劣势是失去了并发能力。")]),s._v(" "),t("p",[s._v("浏览器为了避免两个引擎同时修改页面而造成渲染结果不一致的情况，增加了另外一个机制，这两个引擎具有互斥性，也就是说在某个时刻只有一个引擎在运行，另一个引擎会被阻塞。操作系统在进行线程切换的时候需要保存上一个线程执行时的状态信息并读取下一个线程的状态信息，俗称上下文切换。而这个操作相对而言是比较耗时的。")]),s._v(" "),t("p",[s._v("每次 DOM 操作就会引发线程的上下文切换——从 JavaScript 引擎切换到渲染引擎执行对应操作，然后再切换回 JavaScript 引擎继续执行，这就带来了性能损耗。单次切换消耗的时间是非常少的，但是如果频繁的大量切换，那么就会产生性能问题。")]),s._v(" "),t("p",[s._v("比如下面的测试代码，循环读取一百万次 DOM 中的 body 元素的耗时是读取 JSON 对象耗时的 10 倍。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 测试次数：一百万次\nconst times = 1000000\n// 缓存body元素\nconsole.time('object')\nlet body = document.body\n// 循环赋值对象作为对照参考\nfor(let i=0;i<times;i++) {\n  let tmp = body\n}\nconsole.timeEnd('object')// object: 1.77197265625ms\n\nconsole.time('dom')\n// 循环读取body元素引发线程切换\nfor(let i=0;i<times;i++) {\n  let tmp = document.body\n}\nconsole.timeEnd('dom')// dom: 18.302001953125ms\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("虽然这个例子比较极端，循环次数有些夸张，但如果在循环中包含一些复杂的逻辑或者说涉及到多个元素时，就会造成不可忽视的性能损耗。")]),s._v(" "),t("h3",{attrs:{id:"_3-2-重新渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-重新渲染"}},[s._v("#")]),s._v(" 3.2 重新渲染")]),s._v(" "),t("p",[s._v("另一个更加耗时的因素是元素及样式变化引起的再次渲染，在渲染过程中最耗时的两个步骤为"),t("strong",[s._v("重排（Reflow）"),t("strong",[s._v("与")]),s._v("重绘（Repaint）")]),s._v("。")]),s._v(" "),t("p",[s._v("浏览器在渲染页面时会将 HTML 和 CSS 分别解析成 DOM 树和 CSSOM 树，然后合并进行排布，再绘制成我们可见的页面。如果在操作 DOM 时涉及到元素、样式的修改，就会引起渲染引擎重新计算样式生成 CSSOM 树，同时还有可能触发对元素的重新排布（简称“重排”）和重新绘制（简称“重绘”）。")]),s._v(" "),t("p",[s._v("可能会影响到其他元素排布的操作就会引起重排，继而引发重绘，比如：")]),s._v(" "),t("ul",[t("li",[s._v("修改元素边距、大小")]),s._v(" "),t("li",[s._v("添加、删除元素")]),s._v(" "),t("li",[s._v("改变窗口大小")])]),s._v(" "),t("p",[s._v("与之相反的操作则只会引起重绘，比如：")]),s._v(" "),t("ul",[t("li",[s._v("设置背景图片")]),s._v(" "),t("li",[s._v("修改字体颜色")]),s._v(" "),t("li",[s._v("改变 visibility 属性值")])]),s._v(" "),t("p",[s._v("如果想了解更多关于重绘和重排的样式属性，可以参看这个网址：https://csstriggers.com/。")]),s._v(" "),t("p",[s._v("下面是两段验证代码，我们通过 Chrome 提供的性能分析工具来对渲染耗时进行分析。")]),s._v(" "),t("p",[s._v("第一段代码，通过修改 div 元素的边距来触发重排，渲染耗时（粗略地认为渲染耗时为紫色 Rendering 事件和绿色 Painting 事件耗时之和）3045 毫秒。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const times = 100000\nlet html = ''\nfor(let i=0;i<times;i++) {\n  html+= `<div>${i}</div>`\n}\ndocument.body.innerHTML += html\nconst divs = document.querySelectorAll('div')\nArray.prototype.forEach.call(divs, (div, i) => {\n  div.style.margin = i % 2 ? '10px' : 0;\n})\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/09/03/CgqCHl67pcyAWvv3AAApkJ2_V24631.png",alt:"Image text"}})]),s._v(" "),t("p",[s._v("第二段代码，修改 div 元素字体颜色来触发重绘，得到渲染耗时 2359 ms。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const times = 100000\nlet html = ''\nfor(let i=0;i<times;i++) {\n  html+= `<div>${i}</div>`\n}\ndocument.body.innerHTML += html\nconst divs = document.querySelectorAll('div')\nArray.prototype.forEach.call(divs, (div, i) => {\n  div.style.color = i % 2 ? 'red' : 'green';\n})\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/09/04/Ciqc1F67pdqAS3FFAAAmGZWHWDs688.png",alt:"Image text"}})]),s._v(" "),t("p",[s._v("从两段测试代码中可以看出，重排渲染耗时明显高于重绘，同时两者的 Painting 事件耗时接近，也应证了重排会导致重绘。")]),s._v(" "),t("h2",{attrs:{id:"_4-如何高效操作dom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-如何高效操作dom"}},[s._v("#")]),s._v(" 4. 如何高效操作DOM")]),s._v(" "),t("p",[s._v("明白了 DOM 操作耗时之处后，要提升性能就变得很简单了，反其道而行之，减少这些操作即可。")]),s._v(" "),t("h3",{attrs:{id:"_4-1-在循环外操作元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-在循环外操作元素"}},[s._v("#")]),s._v(" 4.1 在循环外操作元素")]),s._v(" "),t("p",[s._v("比如下面两段测试代码对比了读取 1000 次 JSON 对象以及访问 1000 次 body 元素的耗时差异，相差一个数量级。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const times = 10000;\nconsole.time('switch')\nfor (let i = 0; i < times; i++) {\n  document.body === 1 ? console.log(1) : void 0;\n}\nconsole.timeEnd('switch') // 1.873046875ms\nvar body = JSON.stringify(document.body)\nconsole.time('batch')\nfor (let i = 0; i < times; i++) {\n  body === 1 ? console.log(1) : void 0;\n}\nconsole.timeEnd('batch') // 0.846923828125ms\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("当然即使在循环外也要尽量减少操作元素，因为不知道他人调用你的代码时是否出于循环中。")]),s._v(" "),t("h3",{attrs:{id:"_4-2-批量操作元素"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-批量操作元素"}},[s._v("#")]),s._v(" 4.2 批量操作元素")]),s._v(" "),t("p",[s._v("比如说要创建 1 万个 div 元素，在循环中直接创建再添加到父元素上耗时会非常多。如果采用字符串拼接的形式，先将 1 万个 div 元素的 html 字符串拼接成一个完整字符串，然后赋值给 body 元素的 innerHTML 属性就可以明显减少耗时。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const times = 10000;\nconsole.time('createElement')\nfor (let i = 0; i < times; i++) {\n  const div = document.createElement('div')\n  document.body.appendChild(div)\n}\nconsole.timeEnd('createElement')// 54.964111328125ms\nconsole.time('innerHTML')\nlet html=''\nfor (let i = 0; i < times; i++) {\n  html+='<div></div>'\n}\ndocument.body.innerHTML += html // 31.919921875ms\nconsole.timeEnd('innerHTML')\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("虽然通过修改 innerHTML 来实现批量操作的方式效率很高，但它并不是万能的。比如要在此基础上实现事件监听就会略微麻烦，只能通过事件代理或者重新选取元素再进行单独绑定。批量操作除了用在创建元素外也可以用于修改元素属性样式，比如下面的例子。")]),s._v(" "),t("p",[s._v("创建 2 万个 div 元素，以单节点树结构进行排布，每个元素有一个对应的序号作为文本内容。现在通过 style 属性对第 1 个 div 元素进行 2 万次样式调整。下面是直接操作 style 属性的代码：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const times = 20000;\nlet html = ''\nfor (let i = 0; i < times; i++) {\n  html = `<div>${i}${html}</div>`\n}\ndocument.body.innerHTML += html\nconst div = document.querySelector('div')\nfor (let i = 0; i < times; i++) {\n  div.style.fontSize = (i % 12) + 12 + 'px'\n  div.style.color = i % 2 ? 'red' : 'green'\n  div.style.margin = (i % 12) + 12 + 'px'\n}\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/09/04/CgqCHl67pemAQjkLAAAk8lHks5c377.png",alt:"Image text"}})]),s._v(" "),t("p",[s._v("如果将需要修改的样式属性放入 JavaScript 数组，然后对这些修改进行 reduce 操作，得到最终需要的样式之后再设置元素属性，那么性能会提升很多。代码如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const times = 20000;\nlet html = ''\nfor (let i = 0; i < times; i++) {\n  html = `<div>${i}${html}</div>`\n}\ndocument.body.innerHTML += html\n\nlet queue = [] //  创建缓存样式的数组\nlet microTask // 执行修改样式的微任务\nconst st = () => {\n  const div = document.querySelector('div')\n  // 合并样式\n  const style = queue.reduce((acc, cur) => ({...acc, ...cur}), {})\n  for(let prop in style) {\n    div.style[prop] = style[prop]\n  }\n  queue = []\n  microTask = null\n}\nconst setStyle = (style) => {\n  queue.push(style)\n  // 创建微任务\n  if(!microTask) microTask = Promise.resolve().then(st)\n}\nfor (let i = 0; i < times; i++) {\n  const style = {\n    fontSize: (i % 12) + 12 + 'px',\n    color: i % 2 ? 'red' : 'green',\n    margin:  (i % 12) + 12 + 'px'\n  }\n  setStyle(style)\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),t("p",[s._v("从下面的耗时占比图可以看到，紫色 Rendering 事件耗时有所减少。\n"),t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/09/04/Ciqc1F67piqAR40eAAAkNcoz7jY032.png",alt:"Image text"}})]),s._v(" "),t("h3",{attrs:{id:"_4-3-缓存元素集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-缓存元素集合"}},[s._v("#")]),s._v(" 4.3 缓存元素集合")]),s._v(" "),t("p",[s._v("比如将通过选择器函数获取到的 DOM 元素赋值给变量，之后通过变量操作而不是再次使用选择器函数来获取。")]),s._v(" "),t("p",[s._v("下面举例说明，假设我们现在要将上面代码所创建的 1 万个 div 元素的文本内容进行修改。每次重复使用获取选择器函数来获取元素，代码以及时间消耗如下所示。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("for (let i = 0; i < document.querySelectorAll('div').length; i++) {\n  document.querySelectorAll(`div`)[i].innerText = i\n}\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/09/04/Ciqc1F67pjKAIKXfAAAlxYMHz74357.png",alt:"Image text"}})]),s._v(" "),t("p",[s._v("如果能够将元素集合赋值给 JavaScript 变量，每次通过变量去修改元素，那么性能将会得到不小的提升。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const divs = document.querySelectorAll('div')\nfor (let i = 0; i < divs.length; i++) {\n  divs[i].innerText = i\n}\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s0.lgstatic.com/i/image/M00/09/04/Ciqc1F67pjmAKJrEAAAjr0DG628141.png",alt:"Image text"}})]),s._v(" "),t("p",[s._v("对比两者耗时占比图可以看到，两者的渲染时间较为接近。但缓存元素的方式在黄色的 Scripting 耗时上具有明显优势。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("从深入理解 DOM 的必要性说起，然后分析了 DOM 操作耗时的原因，最后再针对这些原因提出了可行的解决方法。")]),s._v(" "),t("p",[s._v("除了这些方法之外，还有一些原则也可能帮助我们提升渲染性能，比如：")]),s._v(" "),t("ul",[t("li",[s._v("尽量不要使用复杂的匹配规则和复杂的样式，从而减少渲染引擎计算样式规则生成 CSSOM 树的时间；")]),s._v(" "),t("li",[s._v("尽量减少重排和重绘影响的区域；")]),s._v(" "),t("li",[s._v("使用 CSS3 特性来实现动画效果。")])]),s._v(" "),t("p",[s._v("首先能理解原因，然后记住这些方法和原则，编写出高性能代码。")])])}],!1,null,null,null);n.default=a.exports}}]);