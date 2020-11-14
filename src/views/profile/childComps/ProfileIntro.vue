<!--  -->
<template>
  <div class="introduce">
    <flod>
      <h2 slot="title">教育经历</h2>
      <div slot="content">
      <section>
        <h3>2015年9月-2019年6月 燕山大学 本科</h3>
        <p>该阶段在燕山大学就读自动化专业。</p>
        <p>主修课程：直流拖动控制系统、电气控制及PLC、过程控制系统、嵌入式单片机原理及应用、自动控制元件及线路、电力电子技术、反馈控制理论、现代控制理论、计算机控制技术等。</p>
      </section>
      <section>
      <h3>2019年7月-2020年9月 格力电器 IE专员</h3>
        <p>该阶段于格力电器（石家庄）有限公司从事增效工作，岗位为IE专员，负责注塑板块自动化项目的推进以及提案改善工作。</p>
        <p>参与设计了安装盒缺料自动检测项目、出风面板自动打螺钉项目，均通过总部自动化减员验收</p>
        <p>提案改善工作在公司评比中长期获得第二、第三名的成绩</p>
      </section>
      <section>
        <h3>2020年10月-至今 前端学习</h3>
        <p>该阶段学习了互联网前端开发相关的知识，包括基础部分HTML、CSS以及JavaScript相关内容。</p>
        <p>进而又针对性的学习了Vue框架的使用，对Vue知识进行入门，并使用Vue框架开发了本项目。</p>
      </section>
    </div>
    </flod>
    <flod>
      <h2 slot="title">个人技能</h2>
      <div slot="content">
      <section>
        <h3 >1.HTML</h3>
        <p>清楚HTML网页的结构，熟悉常用的HTML标签的使用，能够熟练使用常用标签进行网页页面骨架以及内容的设计。</p>
        <p>了解HTML5新加入的语义化、媒体以及表单标签的使用</p>
      </section>
      <section>
        <h3>2.CSS</h3>
        <p>能够使用CSS对HTML网页进行美化修饰、排版。熟悉CSS中元素选择器、类、ID选择器等主要选择器，了解CSS中选择器优先级权重问题。</p>
        <p>熟悉CSS盒子模型，熟悉页面布局中的标准流、浮动以及定位的使用方式。</p>
        <p>熟悉移动端的flex布局的使用，对响应式布局有所了解，对Bootstrap框架的栅格系统的使用有所了解</p>
      </section>
      <section>
        <h3>3.JavaScript</h3>
        <p>熟悉JavaScript语言的基本使用，能够使用其对网页DOM中元素进行操作，会使用ES6中的let、const以及箭头函数。</p>
      </section>
      <section>
        <h3>4.VUE</h3>
        <p>熟悉Vue的基本内容的使用，了解模块化编程。</p>
        <p>熟悉组件在模块化编程中的使用，熟练使用Vue父子组件的通信和访问，熟悉组件中插槽的使用。</p>
        <p>熟悉Vue Router的基本使用，会使用路由的懒加载、路由的嵌套，能使用其进行组件间参数的传递，了解导航守卫的使用。</p>
        <p>熟悉VueX的基本使用，会使用mutation对VueX中的数据进行操作。</p>
      </section>
      </div>
    </flod>



  </div>
</template>

<script>
import Flod from "components/common/flod/Flod"
export default {
  name: "ProfileIntro",
  components: {Flod},
  data: function () {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
  },
};
</script>

<style scoped>
.introduce{
  width: 100%;
}
h2{
  margin: 10px;
  height: 25px;
  line-height: 25px;
  font-size: 20px;
}
h3{
  font-size: 17px;
}
p{
  text-indent: 2em;
  font-size: 14px;
  line-height: 25px;
}
section{
  background-color: #fff;
  padding: 10px;
  border-radius: 15px;
  margin: 10px;
}
.show{
  transition: height 0.3s;
}
.hide{
  height: 0;
  transition: height 0.3s;
  overflow: hidden;
}
</style>
