<template>
  <div>
    <zl-header>Divider 分割线</zl-header>
    <zl-section header="水平分割线 ">
      <p>通过高效广告平台，协助品牌和市场营销者触达数以亿计的中国消费者通过金融科技及企业服务，促进合作伙伴业务发展，助力实现数字化升级，我们大力投资于人才队伍和推动科技创新，积极参与互联网行业协同发展。</p>
      <zle-divider :direction="'horizontal'" />
      <zle-alert type="info">
        direction='horizontal'
        <br>
        设置分割方向 vertical/horizontal 默认水平方向
      </zle-alert>
    </zl-section>
    <zl-section header="垂直分割线">
      包容
      <zle-divider :direction="'vertical'" />连接
      <zle-divider :direction="'vertical'" />
      <zle-alert>direction='vertical'</zle-alert>
    </zl-section>
    <zl-section header="带文字水平分割线">
      <p>通过高效广告平台，协助品牌和市场营销者触达数以亿计的中国消费者通过金融科技及企业服务，促进合作伙伴业务发展，助力实现数字化升级，我们大力投资于人才队伍和推动科技创新，积极参与互联网行业协同发展。</p>
      <zle-divider :content-position="'left'"><b>left</b> </zle-divider>
      <p>通过高效广告平台，协助品牌和市场营销者触达数以亿计的中国消费者通过金融科技及企业服务，促进合作伙伴业务发展，助力实现数字化升级，我们大力投资于人才队伍和推动科技创新，积极参与互联网行业协同发展。</p>
      <zle-divider><b>center</b> </zle-divider>
      <p>通过高效广告平台，协助品牌和市场营销者触达数以亿计的中国消费者通过金融科技及企业服务，促进合作伙伴业务发展，助力实现数字化升级，我们大力投资于人才队伍和推动科技创新，积极参与互联网行业协同发展。</p>
      <zle-divider :content-position="'right'"><b>right</b> </zle-divider>
      <zle-alert title="设置插入文本位置,默认插入中间 center/left/right三种可选" type="info" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.section_title {
  padding: 10px 0;
}
</style>
