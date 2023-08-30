import { defineComponent, ref, reactive, onMounted } from 'vue';
import './index.scss';
const getImg = (url) => {
  return new URL(url, import.meta.url).href;
}
const searchIcon = new URL('@/assets/search-icon.png', import.meta.url).href;

const engineList = [
  {
    icon: new URL('@/assets/google.png', import.meta.url).href,
    name: 'google',
    searchUrl: 'https://www.google.com/search?q=${word}'
  },
  {
    icon: new URL('@/assets/bing.svg', import.meta.url).href,
    name: 'bing',
    searchUrl: 'https://cn.bing.com/search?q=${word}'
  },
  {
    icon: new URL('@/assets/baidu.png', import.meta.url).href,
    name: '百度',
    searchUrl: 'https://www.baidu.com/s?word=${word}'
  },
  {
    icon: new URL('@/assets/360so.png', import.meta.url).href,
    name: '360',
    searchUrl: 'https://www.so.com/s?q=${word}'
  },
  {
    icon: new URL('@/assets/zhihu.png', import.meta.url).href,
    name: '知乎',
    searchUrl: 'https://www.zhihu.com/search?q=${word}&type=content'
  },
  {
    icon: new URL('@/assets/github.svg', import.meta.url).href,
    name: 'github',
    searchUrl: 'https://github.com/search?q=${word}'
  },
];

export default defineComponent({

  name: 'Search',

  setup() {
    const searchData = ref('');

    const engine = ref(engineList);
    const engineActive = reactive({ ...engineList[0] });

    onMounted(() => {
      const engineIndex = localStorage.getItem('engineIndex') || 0;
      engineActive.icon = engineList[engineIndex].icon;
      engineActive.name = engineList[engineIndex].name;
      engineActive.searchUrl = engineList[engineIndex].searchUrl;
    });

    const onSearch = () => {
      const url = engineActive.searchUrl.replace('${word}', searchData.value);
      window.location.href = url;
    };

    const onInput = (event) => {
      const data = event.target.value;
      searchData.value = data;
    };

    const onKeydown = (event) => {
      if (event.keyCode === 13) onSearch();
    };

    const onSelectEngine = (data, index) => {
      engineActive.icon = data.icon;
      engineActive.name = data.name;
      engineActive.searchUrl = data.searchUrl;
      localStorage.setItem('engineIndex', index);
    };

    return {
      searchData,
      engine,
      engineActive,
      onSearch,
      onInput,
      onKeydown,
      onSelectEngine,
    };
  },

  render() {
    return (
      <div className="search-wrap">
        <div className="search-leftpanel">
          <img class="search-leftpanel-icon" src={this.engineActive.icon} alt="" />
          <div className="search-engine-box">
            <div className="engine-list">
              {
                this.engine.map((item, index) => {
                  return <div className="engine-list-item" onClick={() => this.onSelectEngine(item, index)}>
                    <img src={item.icon} alt="" className="" />
                    <span>{item.name}</span>
                  </div>
                })
              }
            </div>
          </div>
        </div>
        <input className="search-input" onInput={(d) => this.onInput(d)} onKeydown={this.onKeydown}/>
        <div className="search-rightpanel" onClick={this.onSearch}>
          <img src={searchIcon} alt="search-icon" />
        </div>
      </div>
    );
  },

});