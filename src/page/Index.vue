<template>
  <div id="index">
    <header-nav></header-nav>
    <div class="content">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>

<style>
#index{
    height: 100%;
    margin-top: 0%;
    padding-top: 0%
}
</style>
