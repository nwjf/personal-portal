<template>
  <div class="box">
    <div class="box-title">{{ props.title }}</div>
    <div class="box-warp">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({ title: String });
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  padding: 10px 24px;
  background: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 0.5rem 0.625rem #d4d4d44d;
  margin-top: 20px;
  .box-title {
    width: 100%;
    min-width: auto;
    margin: 0;
    height: 35px;
    font-size: 16px;
    line-height: 33px;
    /* padding: 0 20px 0 10px; */
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .box-warp {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>