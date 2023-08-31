<template>
  <el-form ref="formRef" label-width="60" :model="formData" :rules="rules">
    <el-form-item label="账号" prop="mobile">
      <el-input placeholder="请输入账号" style="width: 100%; max-width: 500px;" v-model="formData.mobile" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input placeholder="请输入密码" style="width: 100%; max-width: 500px;" v-model="formData.password" type="password" />
    </el-form-item>
    <el-form-item label="步数" prop="step">
      <el-input placeholder="请输入步数" style="width: 100%; max-width: 500px;" v-model="formData.step" />
    </el-form-item>
    <el-form-item label-width="20px">
      <el-checkbox v-model="isRemember">记住密码</el-checkbox>
      <el-button :loading="loading" style="width: 100px;margin-left: 30px;" @click="onSubmit(formRef)">刷步</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref, defineEmits, defineProps, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const props = defineProps({ type: String });
const emits = defineEmits(['submit']);
import axios from 'axios';

const formData = reactive({
  mobile: '',
  password: '',
  step: '',
});
const rules = {
  mobile: { required: true, message: '请输入账号' },
  password: { required: true, message: '请输入密码' },
  step: { required: true, message: '请输入步数' },
};
const formRef = ref(null);
const loading = ref(false);
const isRemember = ref(false); // 是否记住密码

const xiaomiFn = (formData, close) => {
  axios({
    url: 'https://api.kit9.cn/api/xiaomi_sports/api.php',
    method: 'post',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: {
      ...formData,
    }
  })
    .then(res => {
      close && close();
      if (res.data.code === 200) {
        ElMessage.success('成功');
      }
      else {
        ElMessage.error(res.data.data || '失败');
      }
    })
    .catch(() => {
      close && close();
    });
};

const zepplifeFn = (formData, close) => {
  axios.get(`https://apis.jxcxin.cn/api/mi?user=${formData.mobile}&password=${formData.password}&step=${formData.step}`)
    .then(res => {
      close && close();
      if (res.data.code == 200) {
        ElMessage.success('成功');
      }
      else {
        ElMessage.error(res.data.data || '失败');
      }
    })
    .catch(() => {
      close && close();
    })
}
  

const onSubmit = (formRef) => {
  formRef.validate(valid => {
    if (!valid) return false;
    loading.value = true;
    if (isRemember.value) {
      localStorage.setItem(props.type, JSON.stringify(formData));
    }
    else {
      localStorage.removeItem(props.type);
    }
    const close = () => { loading.value = false; };
    if (props.type === 'xiaomi') xiaomiFn(formData, close);
    else if (props.type === 'zepplife') zepplifeFn(formData, close);
  });
};

onMounted(() => {
  try {
    let local = localStorage.getItem(props.type);
    let temp = JSON.parse(local);
    formData.mobile = temp.mobile;
    formData.password = temp.password;
    isRemember.value = true;
  } catch (error) {}
});
</script>