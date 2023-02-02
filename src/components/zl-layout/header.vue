<script>
// 头部
export default {
  name: 'ZlHeader',
  props: {
    title: String // 标题
  },
  render() {
    const title = this.$scopedSlots.default || this.title
    return <header class='section'>
      {title && <div class='section_title'>{this.$scopedSlots.default ? this.$scopedSlots.default(this) : this.title}</div>}</header>
  }
}
</script>
