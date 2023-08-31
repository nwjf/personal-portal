<template>
  <div
    class="project-wrap"
    v-for="(item, index) in projectList"
    :key="index"
    @click="onClick(item)">
    <div class="project-pic">
      <img :src="item.img" >
    </div>
    <div class="project-name">{{item.name}}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';

const xywy = () => {
    ElMessageBox.alert(
      `
        <h2 style="text-align: center;">微信识别</h2>
        <img style="display: block; margin: auto;" src="${new URL('@/assets/xywy-qrcode.jpg', import.meta.url).href}" alt="">
        <div style="text-align: center;">
          罗列北京市医保定点医院，方便快速查找定点医院
        </div>
      `,
      '寻医问院',
      { dangerouslyUseHTMLString: true },
    );
  };

const projectList = ref([
  {
    name: '运算系统',
    href: '/parental-tools',
    img: new URL('@/assets/js.png', import.meta.url).href,
  },
  {
    name: '博客',
    href: '/blog',
    img: new URL('@/assets/blog.png', import.meta.url).href,
  },
  {
    name: 'github',
    href: 'https://www.github.com/nwjf',
    img: new URL('@/assets/github.png', import.meta.url).href,
  },
  {
    name: '寻医问院',
    href: '',
    img: new URL('@/assets/xywy.png', import.meta.url).href,
    fn: xywy,
  },
  {
    name: 'adminX demo',
    href: '/adminX',
    img: new URL('@/assets/adminx.png', import.meta.url).href,
  },
  {
    name: 'adminX doc',
    href: 'https://github.com/nwjf/adminX',
    img: new URL('@/assets/adminx.png', import.meta.url).href,
  },
]);

const onClick = (data) => {
  if (data.fn) data.fn();
  else window.location.href = data.href;
};

</script>

<style lang="scss" scoped>
.project-wrap {
  min-width: 100px;
  cursor: pointer;
  border-radius: 10px;
  padding: 4px;
  flex: none;
  overflow: hidden;
  // border: 1px solid red;
  &:hover {
    box-shadow: 0 0 0.625rem #d4d4d44d;
  }
  .project-pic {
    width: 45px;
    height: 45px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    margin: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .project-name {
    width: 100%;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>