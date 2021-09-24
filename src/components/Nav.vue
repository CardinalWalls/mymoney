<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/Money">记账</router-link>
    |
    <router-link to="/Labels">图标</router-link>
    |
    <router-link to="/Statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>

</style>