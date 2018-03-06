<template>
    <div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      lists: []
    };
  },
  created() {
    var id = this.$router.history.current.params.id;
    this.get_data({ id: id });
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