<template>
  <div>
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        header: 'Uma breve história'
      }
    }
  }
</script>

<style lang="less">
  @import '../../style.less';

  h1 {
    color: @color1;
  }
</style>