<template>
  <div>
    <zl-header>二维码展示组件</zl-header>
    <zl-section header="展示二维码值">
      <zl-qr :text="id" :size="50" :show-text="true" />
    </zl-section>
    <zl-section header="二维码的颜色">
      <zl-qr :text="id" :size="50" color="#FF0000" />
    </zl-section>
    <zl-section header="二维码嵌入logo">
      <zl-qr :text="id" :size="50" :logo="require('@/assets/img/logo.png')" :logo-scale="0.4" />
      <!-- logo 嵌入logo的地址  logo-scale 控制嵌入logo的大小 -->
    </zl-section>
    <!-- text: 二位码的值 size：二维码所占大小px margin：二维码边缘留白px show-text: 是否展示二维码的值-->
    <zl-section header="多个二维码">
      <div class="h">
        <zl-qr v-for="item in ids" :key="item" :text="item" :size="60" :margin="5" />
      </div>
    </zl-section>
  </div>
</template>

<script>
import ZlQr from '@/components/zl-qr/qr'
export default {
  components: {
    ZlQr
  },
  data() {
    return {
      id: 'sh7429',
      ids: ['sdgfgr', 'gsngwehkndn', 'sdhisuhgjru98']
    }
  }
}
</script>

<style lang="scss" scoped>
.h {
  display: flex;
}
.section_title {
  margin-bottom: 10px;
}
</style>
