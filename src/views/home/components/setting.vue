<template>
  <el-drawer
    v-model="show"
    size="300px"
    title="设置"
    :direction="direction"
    :before-close="handleClose"
  >
    <div class="setting-wrap">
      123123
      <el-divider content-position="left">模块展示</el-divider>
      <el-checkbox-group :model-value="moduleList" @change="onModuleChange">
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

      <el-button type="primary" style="width: 100%;margin-top: 30px;">保存</el-button>
    </div>
  </el-drawer>
</template>


<script lang="ts" setup>
import { ref } from 'vue';
import { useConfigStore } from '@/store/config.ts';

const { moduleList, setModuleList } = useConfigStore();

const show = ref<boolean>(true);
const module = ref<Array<any>>([
  { id: 'search', name: '极速搜索', disabled: true },
  { id: 'project', name: '极速项目', disabled: false },
  { id: 'setp', name: '极速刷步', disabled: false },
]);
const onModuleChange = (data) => {
  console.log(data);
  setModuleList(data);
};
// const moduleListActive = ref(moduleList);
</script>


<style lang="scss" scoped>
.setting-wrap {

}
</style>