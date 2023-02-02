/**
 * layout 中公共方法
 */
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState({
      homePath: state => state.user.homePath, // 首页
      isLogin: state => state.user.isLogin // 当前角色
    })
  },
  methods: {
    goHomeMixins() {
      let path = this.$route.path
      console.log(path, this.homePath)
      if (this.homePath && path != this.homePath) {
        this.$router.push(this.homePath)
      }
    }
  }
}
