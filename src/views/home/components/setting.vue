<template>
  <el-drawer
    :model-value="showConfig"
    size="300px"
    title="设置"
    @close="setShowConfig(false)"
  >
    <div class="setting-wrap">
      <el-divider content-position="left">标题修改</el-divider>
      <el-input v-model="homeTitle"/>

      <el-divider content-position="left">模块展示</el-divider>
      <el-checkbox-group v-model="moduleActive">
        <el-checkbox
          v-for="(item, index) in module"
          :key="index"
          :label="item.id"
          border
          :disabled="item.disabled"
          style="width: 100%;margin-bottom: 10px;">
          {{item.name}}
        </el-checkbox>
      </el-checkbox-group>

      <el-divider content-position="left">背景设置</el-divider>
      <div class="bg-box">
        <div
          class="bg-box-item"
          v-for="(item, index) in bgList"
          :key="index"
          :style="{ background: item}"
          @click="onSelectBg(item)">
          <el-icon class="icon" v-if="homeBg === item"><SuccessFilled /></el-icon>
          <img :src="item" alt="" v-if="item.indexOf('http') >= 0">
        </div>
      </div>

      <el-button type="primary" style="width: 100%;margin-top: 30px;" @click="onSubmit">保存</el-button>
    </div>
  </el-drawer>
</template>


<script lang="ts" setup>
import { ref, toRefs } from 'vue';
import { useConfigStore } from '@/store/config.ts';
import { SuccessFilled } from '@element-plus/icons-vue'

const { moduleList, showConfig, title, bg } = toRefs(useConfigStore());
const { setModuleList, setShowConfig, setTitle, setConfigLocal, setBg } = useConfigStore();

const show = ref<boolean>(true);
const module = ref<Array<any>>([
  { id: 'search', name: '极速搜索', disabled: true },
  { id: 'project', name: '极速项目', disabled: false },
  { id: 'setp', name: '极速刷步', disabled: false },
]);
const moduleActive = ref([...moduleList.value]);


// 标题
const homeTitle = ref(title.value);

// 背景
const bgList = [
  'https://image-70559.picnjc.qpic.cn/albumpic/42ef97395601262f7adfba5353cc6cd0.jpeg',
  '#000000'
];
const homeBg = ref(bg.value);
const onSelectBg = (data) => {
  homeBg.value = data;
};

// 保存
const onSubmit = () => {
  setModuleList(moduleActive.value);
  setTitle(homeTitle.value);
  setBg(homeBg.value);
  setConfigLocal();
};
</script>


<style lang="scss" scoped>
.setting-wrap {
  .bg-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .bg-box-item {
      width: 120px;
      height: 60px;
      background: #000;
      cursor: pointer;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .icon {
        position: absolute;
        top: -4px;
        right: -4px;
        color: #409eff;
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
</style>