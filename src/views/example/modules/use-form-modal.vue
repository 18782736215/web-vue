<template>
  <div>
    <zl-header>表单模型</zl-header>
    <zl-section header="表单值">
      {{ form }}
    </zl-section>
    <zl-section header="动态表单">
      <zl-form ref="formRef" v-model="form" :config="config" :loading="loading" />
    </zl-section>
  </div>
</template>

<script>
import ZlForm from '@/components/zl-form/form'
import { config, form } from '../data/form.js'
export default {
  components: {
    ZlForm
  },
  data() {
    return {
      loading: false,
      config: {},
      form: {}
    }
  },
  mounted() {
    setTimeout(() => {
      this.config = config
    }, 500)

    this.loading = true
    setTimeout(() => {
      this.form = form
      this.loading = false
    }, 100)
  }
}
</script>

<style lang="scss" scoped>
</style>
