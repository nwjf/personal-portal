import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent({

  name: 'Box',

  props: {
    title: { type: String }
  },

  render() {
    return (
      <div class="box">
        <div class="box-title">{this.title}</div>
        <div class="box-warp">
          <solt/>
        </div>
      </div>
    );
  },
});