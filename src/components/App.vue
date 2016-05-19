<template>
  <section>
    <router-view class="view" transition transition-mode="in-out"></router-view>
  </section>
</template>

<script>
require('assets/css/normalize.css')
require('assets/css/base.css')
export default {
  name: 'App'
}
</script>
