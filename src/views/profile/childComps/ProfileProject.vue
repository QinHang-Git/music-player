<!--  -->
<template>
  <div id="">
    <section>
    <p>因为是今年开始学习的前端，前端的项目只有学习过程中做的这一个网页APP，所以下面还介绍了一些本科时做的嵌入式的项目，可选择性忽略。虽然方向不一样，但基本的编程逻辑还有一些编程思想是有共性的。
    </p>
    </section>
    <flod :begin="false">
      <h2 slot="title">1. 基于Vue框架的音乐播放器</h2>
      <section slot="content">
        <p>
          该项目是使用Vue框架制作的音乐播放器，数据源采用的是ALAPI（alapi.cn）提供的免费接口。
        </p>
        <p>
          主要功能：主界面歌单的查看、播放功能；根据音乐名、歌手名进行音乐搜索功能；点击播放、添加播放列表功能；播放列表中删除指定曲目功能。项目中还包括了一些必要的动画效果，并且也使用封装的Toast进行一些基本的提示等。
        </p>
        <p>
          <strong>1.Vue的使用：</strong
          >本项目运用到的知识包括但不限于Vue组件间通信、VueX状态管理系统（音频的url地址和播放状态的存储）、VueRouter，
          还包括基本的动态绑定、v-for、v-if/v-else、v-on等知识的运用。
        </p>
        <p>
          <strong>2.JavaScript的使用：</strong
          >操作DOM元素、滚动事件监听（上拉加载更多）、数组对象的操作（音乐播放列表的处理）等。
        </p>
        <p>
          <strong>3.CSS的使用：</strong
          >在项目的样式上，主要使用了流式布局、定位布局；页面层次较为复杂，因此使用了定位布局对Z轴的层级做了细致的处理，保证使用体验无异常其次，还为播放器添加了一些动画处理，主要原理是使用Vue动态绑定样式，通过点击、滑动触发布尔值变量，使组件在两种样式下进行切换。
          并结合CSS3中的过渡，呈现出较为自然的动画样式。另外还使用了字体图标（icomoon）作为网页中的必要元素。
        </p>
        <p>
          <strong>4.HTML5的使用：</strong
          >使用了HTML中新增的audio标签，主要用了对该元素的状态的控制。
        </p>
      </section>
    </flod>
    <flod :begin="false">
      <h2 slot="title">2. 淘宝热门商品分享平台</h2>
      <section slot="content">
        <p>
          该项目是使用Vue框架制作的淘宝热门商品优惠券分享平台，数据源采用的是大淘客（dataoke.com）开放平台提供的接口。
        </p>
        <p>
          主要功能：获取大淘客服务器中“大淘客独家券商品”、“每日爆品推荐”、“活动商品”三个板块的内容，在主体页面中三个Banner位置进行展示，并设计了详情页面，可以查看商品推广文案、店铺名称以及评分、优惠券的领取、淘宝链接的直达等功能，另外还使用“热门活动”作为首页轮播图的数据源进行活动推广。
        </p>
        <p>
          <strong>1.Vue的使用：</strong
          >本项目运用到的知识包括但不限于Vue组件间通信、VueX状态管理系统（音频的url地址和播放状态的存储）、VueRouter，还包括基本的动态绑定、v-for、v-if/v-else、v-on等知识的运用。
        </p>
        <p>
          <strong>2.JavaScript的使用：</strong
          >操作DOM元素、滚动事件监听（上拉加载更多）等。
        </p>
        <p>
          <strong>3.axios的使用：</strong
          >使用axios进行商品数据的请求与获取；针对网站的要求，进行了验签算法的实现，并在在发送GET请求前，使用请求拦截器对请求参数数据处理。
        </p>
      </section>
    </flod>
    <flod :begin="false">
      <h2 slot="title">3. 投币式自助充电系统</h2>
      <section slot="content">
        <p>
          该项目是使用51单片机搭建的投币式手机自助充电系统，获得校内无线电协会DIY达人赛三等奖。
        </p>
        <p>
          主要功能：顾客可通过向投币机中投币一次，实现为手机充电30分钟的功能
        </p>
        <img src="~assets/img/profile/project/diy.jpg" alt="">
        <p>
          <strong>1.运行原理：</strong
          >采用投币器模块,当投币器识别到硬币投入时，投币器识别并鉴别真伪，无问题后向51单片机的数字输入IO口发送信号。51单片机接收到信号时，触发对应中断服务函数，中断服务函数将连接继电器的IO口设置为高电平，继电器线圈通电，主电路充电回路接通，开始充电并打开定时器，30分钟后，执行中断服务函数，断开继电器，结束充电。
        </p>
        <img src="~assets/img/profile/project/diy2.jpg" alt="">
        <p>
          <strong>2.项目负责部分：</strong
          >主要负责硬件的搭建、LCD1602显示模块程序的编写
        </p>
      </section>
    </flod>
    <flod :begin="false">
      <h2 slot="title">4. 智能型餐厅服务机器人</h2>
      <section slot="content">
        <p>
          该项目是使用Arduino单片机、Linux下的ROS操作系统，结合激光雷达传感器和讯飞语音识别模块制作的智能型餐厅服务机器人，该项目获得华北五省机器人大赛二等奖，大学生创新创业省级项目
        </p>
        <p>
          <strong>主要功能：</strong>该机器人可通过激光雷达扫描室内环境，构建室内地图，实现自主规划路线并完成点到点的移动。
        </p>
        <img src="~assets/img/profile/project/waiter.jpg" alt="">

        <p>
          <strong>1.运行原理</strong
          >本项目上位机部分采用的是机器人开源ROS系统，实现路径规划、地图构建功能，下位机部分采用的是Arduino单片机，根据上位机信号执行相应的动作（前进、后退等），并将编码器信号收集处理，反馈给上位机。
        </p>
        <p>
          <strong>2.项目负责部分：</strong
          >下位机部分的实现：包括硬件的搭建、程序的编写，根据上位机的指令信息，完成执行部分的动作、速度等功能，以及电机PID稳定性、快速性调节。
        </p>
        <p>
          <strong>3.负责部分展示：</strong
          >
        </p>
        <video src="~assets/img/profile/project/waiter.mp4" controls></video>
      </section>
    </flod>
    <flod :begin="false">
      <h2 slot="title">5. 无线充电电动小车</h2>
      <section slot="content">
        <p>
          该项目是2018年TI杯河北省电子设计竞赛本科组C题，该题目主要内容为：制作无线充电电动车，电动车使用超级电容储能。充电1分钟后，电动车检测到无线充电发射器停止充电时，立即自行启动，向前水平直线行驶，行驶距离不小于1m。电动车沿倾斜木工板路面直线爬坡行驶，路面长度l不大于1m，使电动车爬升高度h=lsinθ最大
。
        </p>
        <p>
          <strong>主要功能：</strong>使用无线充电模块进行充电，充电部分1分钟后需自动停止充电，小车检测停止充电并立即自动前进，根据行驶情况进行评分。
        </p>

        <p>
          <strong>1.项目负责部分：</strong
          >负责本项目充电部分的硬件搭建以及程序编写，实现充电1分钟自动断电。参与负责小车停止充电模块的设计，电路板的焊接。下图为使用模电原件设计的电路图
        </p>
        <img src="~assets/img/profile/project/car.jpg" alt="">
        <p>四天三夜时间太赶了，忘了拍照片，比赛前夕封箱的照片，获得省一等奖</p>
        <img src="~assets/img/profile/project/car2.jpg" alt="">
      </section>
    </flod>
    <flod :begin="false">
      <h2 slot="title">6. 其他项目</h2>
      <section slot="content">
        <p>
          在校期间还做有很多课程设计做的小项目，例如平衡车、洗衣机等项目，和目前想找的工作相关性不大，不一一介绍了。</p>
         <p> 虽然在知识上不相同，但是许多编程思想是由共性的，除了基本的语言逻辑外，嵌入式中许多思想和前端编程都有共性，比如嵌入式中断服务函数和前端中的事件监听回调函数的思想就是相同的。这些知识在我前端的学习中也有一些帮助
        </p>
      </section>
    </flod>
  </div>
</template>

<script>
import Flod from "components/common/flod/Flod";
export default {
  name: "ProfileProject",
  components: { Flod },
  data: function () {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
h2{
  margin: 10px;
  height: 25px;
  line-height: 25px;
  font-size: 20px;
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
img{
  width: 100%;
  border-radius: 10px;
}
video{
  width: 100%;
  border-radius: 10px;
}
</style>
