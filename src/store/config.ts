/**
 * 配置 store
 */
import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';


export const useConfigStore = defineStore('configStore', () => {


  const isGetLocal = ref<boolean>(false);
  const showConfig = ref<boolean>(false);
  const moduleList = ref(['search', 'project', 'setp']);
  const title = ref<string>('厉害了，我的国！');
  const bg = ref<string>('https://image-70559.picnjc.qpic.cn/albumpic/42ef97395601262f7adfba5353cc6cd0.jpeg');

  function setBg(b) {
    bg.value = b;
  }

  function setTitle(t) {
    title.value = t;
  }

  function setShowConfig(data) {
    showConfig.value = data;
  }

  function setModuleList(list) {
    moduleList.value = list;
  }

  function setConfigLocal() {
    const configStore = {
      moduleList: moduleList.value,
      title: title.value,
      bg: bg.value,
    };
    localStorage.setItem('configStore', JSON.stringify(configStore));
  }

  function getConfigLocal() {
    isGetLocal.value = true;
    const configStoreStr = localStorage.getItem('configStore') as string;
    try {
      const configStore = JSON.parse(configStoreStr);
      moduleList.value = configStore.moduleList;
      title.value = configStore.title || title.value;
      bg.value = configStore.bg || bg.value;
    } catch (error) {
      
    }
  }

  return {
    isGetLocal,
    moduleList,
    showConfig,
    title,
    bg,
    setBg,
    setModuleList,
    setShowConfig,
    setTitle,

    setConfigLocal,
    getConfigLocal,
  };
});
