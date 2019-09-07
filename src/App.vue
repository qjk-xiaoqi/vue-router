<template>
    <div>
        <h1>Hello World!</h1>
    <p>
    <!-- 使用 router-link 组件来导航，通过传入 `to` 属性指定链接，<router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/app1">Go to app1</router-link>
    <router-link to="/app2">Go to app2</router-link>
  </p>
        <router-view></router-view>
    </div>
  

</template>

<script>
  export default {
    name: 'App'   
  }
</script>
 
<style>
  html, body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 16px;
  }
</style>
