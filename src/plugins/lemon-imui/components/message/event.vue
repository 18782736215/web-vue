<script>
export default {
  name: 'LemonMessageEvent',
  inheritAttrs: false,
  inject: ['IMUI'],
  methods: {
    _emitClick(e, key) {
      this.IMUI.$emit('message-click', e, key, this.$attrs.message, this.IMUI)
    }
  },
  render() {
    const { content } = this.$attrs.message
    return (
      <div class='lemon-message lemon-message-event'>
        <span
          class='lemon-message-event__content'
          on-click={e => this._emitClick(e, 'content')}
        >
          {content}
        </span>
      </div>
    )
  }
}
</script>
<style lang="stylus">
@import '~plugins/lemon-imui/styles/utils/index'
+b(lemon-message-event)
  +e(content)
    user-select none
    display inline-block
    background #e9e9e9
    color #aaa
    font-size 12px
    margin 0 auto
    padding 5px 10px
    border-radius 4px
</style>
