/**
 * 配置 store
 */
import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';


export const useConfigStore = defineStore('configStore', () => {

  const moduleList = ref(['search']);

  function setModuleList(list) {
    console.log('l', list);
    moduleList.value = list;
  }

  return {
    moduleList,
    setModuleList,
  };
});
