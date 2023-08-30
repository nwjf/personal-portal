import { defineComponent } from 'vue';
import Search from './components/search/index.tsx';
import './index.scss';
import Box from './components/box/index.tsx';
import { ElRow, ElCol } from 'element-plus'

export default defineComponent({
  name: 'Home',
  render() {
    return (
      <div class="home-wrap">
        <div className="home-content">
          <Search style="margin-top: 100px;" />

          <Box title="个人技术展示"></Box>

          <ElRow gutter={24}>
            <ElCol xs={{ span: 24 }} sm={{ span: 12 }}>
              <Box title="智能系统" v-slot={123}></Box>
            </ElCol>
            <ElCol xs={{ span: 24 }} sm={{ span: 12 }}>
              <Box title="智能系统"></Box>
            </ElCol>
          </ElRow>
        </div>
      </div>
    );
  },
});