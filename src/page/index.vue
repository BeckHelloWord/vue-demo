<template>
    <div>
        <Header></Header>
        <div class="article_list">
            <ul>
                <li v-for="i in lists" :key="i.id">
                    <time v-text="$utils.goodTime(i.create_at)"></time>
                    <router-link :to="'/content/' + i.id">
                        {{ i.title }}
                    </router-link>
                </li>
            </ul>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from "../components/header";
import Footer from "../components/footer";
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      lists: []
    };
  },
  created() {
    // 组件创建完后获取数据，这里和1.0不一样，改成了这个样子
    this.get_data();
    this.$add();
  },
  methods: {
    get_data: function(params) {
      var _this = this;
      if (!params) params = {};
      // 我们这里用全局绑定的 $api 方法来获取数据，方便吧~
      _this.$api.get("topics", params, function(r) {
        _this.lists = r.data;
      });
    }
  }
};
</script>