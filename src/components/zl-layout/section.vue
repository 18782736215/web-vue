<script>
// 块布局
export default {
  name: 'ZlSection',
  props: {
    header: String, // 标题
    type: {
      type: String,
      default: '',
      validator: function(val) {
        // overspread 铺满
        return ['', 'overspread'].includes(val)
      }
    }
  },
  render() {
    const header = this.$scopedSlots.header || this.header
    return (
      <section class={['section', this.type]}>
        {header && (
          <div class='section_title'>
            {this.$scopedSlots.header ? this.$scopedSlots.header(this) : this.header}
          </div>
        )}
        {this.$scopedSlots.default && <div class='section_body'>{this.$scopedSlots.default(this)}</div>}
      </section>
    )
  }
}
</script>

<style lang="scss" scoped>
.section {
  // 铺满样式
  &.overspread {
    height: calc(100% - 26px);
    display: flex;
    flex-direction: column;
		overflow: hidden;
    .section_body {
      flex: 1;
			box-sizing: border-box;
    }
  }
}
.section_body {
  padding-top: 5px;
}
</style>
