<template>
  <div class="home-wrap" :style="{ backgroundImage: `url(${bg})`, backgroundColor: bg }">
    <div className="home-content">
      <div class="home-title">{{title}}</div>
      <div class="home-msg">捐躯赴国难，视死忽如归。——曹植《白马篇》</div>
      <div class="setting" @click="onShowConfig"><el-icon><Tools /></el-icon></div>

      <template v-for="item in moduleList" :key="item">

        <search
          v-if="item === 'search'"
          :key="item"
          style="margin-top: 100px;" />

        <box
          v-if="item === 'project'"
          :key="item"
          title="个人技术展示">
          <project/>
        </box>

        <el-row :key="item" :gutter="24" v-if="item === 'setp'">
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
            <box title="极速刷步(小米运动)">
              <step-num type="xiaomi" />
            </box>
          </el-col>
          <el-col :xs="{ span: 24 }" :sm="{ span: 12 }">
            <box title="极速刷步(zepp life)">
              <step-num type="zepplife" />
            </box>
          </el-col>
        </el-row>
      </template>


    </div>

    <setting />
  </div>
</template>

<script lang="ts" setup>
import Search from './components/search/index.tsx';
import Box from './components/box.vue';
import Project from './components/project.vue';
import StepNum from './components/stepNum.vue';
import { Tools } from '@element-plus/icons-vue';
import Setting from './components/setting.vue';

import { toRefs } from 'vue';
import { useConfigStore } from '@/store/config.ts';
const { setShowConfig } = useConfigStore();
const { moduleList, title, bg } = toRefs(useConfigStore());

const onShowConfig = () => {
  setShowConfig(true);
};

</script>


<style lang="scss" scoped>
.home-wrap {
  width: 100%;
  height: 100%;
  background: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .home-content {
    max-width: 1200px;
    margin: auto;
    padding-top: 1px;
    padding: 36px;
    .home-title {
      text-align: center;
      color: #fff;
      font-size: 36px;
      font-weight: 600;
      text-shadow: 1px 1px 8px #504b4b;
    }
    .home-msg {
      text-align: center;
      padding: 5px 30px;
      border-radius: 10px;
      font-size: 12px;
      color: #fff;
      font-weight: 500;
    }
  }
  .setting {
    color: #fff;
    font-size: 30px;
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
}
</style>