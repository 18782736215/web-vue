<template>
  <div>
    <zl-header>Form 表单</zl-header>
    <zl-section header="基础使用">
      <zle-form ref="form" class="my_form" :model="addForm" label-width="80px">
        <zle-form-item label="文章标题">
          <zle-input v-model.trim="addForm.name" />
        </zle-form-item>
        <zle-form-item label="发布对象">
          <zle-select v-model="addForm.region" placeholder="请选择">
            <zle-option label="全部" value="all" />
            <zle-option label="企业" value="business" />
          </zle-select>
        </zle-form-item>
        <zle-form-item label="活动时间">
          <zle-col :size="11">
            <zle-date-picker v-model="addForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </zle-col>
          <zle-col class="line" :size="2">-</zle-col>
          <zle-col :size="11">
            <zle-time-picker v-model="addForm.date2" placeholder="选择时间" style="width: 100%;" />
          </zle-col>
        </zle-form-item>
        <zle-form-item label="即时配送">
          <zle-switch v-model="addForm.delivery" />
        </zle-form-item>
        <zle-form-item label="活动性质">
          <zle-checkbox-group v-model="addForm.type">
            <zle-checkbox label="美食/餐厅线上活动" name="type" />
            <zle-checkbox label="地推活动" name="type" />
            <zle-checkbox label="线下主题活动" name="type" />
            <zle-checkbox label="单纯品牌曝光" name="type" />
          </zle-checkbox-group>
        </zle-form-item>
        <zle-form-item label="特殊资源">
          <zle-radio-group v-model="addForm.resource">
            <zle-radio label="线上品牌商赞助" />
            <zle-radio label="线下场地免费" />
          </zle-radio-group>
        </zle-form-item>
        <zle-form-item label="活动形式">
          <zle-input v-model.trim="addForm.desc" type="textarea" show-word-limit :maxlength="50" :autosize="{ minRows: 3, maxRows: 6 }" />
        </zle-form-item>
        <zle-form-item>
          <zle-button type="primary" @click="onSubmit">立即创建</zle-button>
          <zle-button>取消</zle-button>
        </zle-form-item>
      </zle-form>
    </zl-section>
    <zl-section header="行内表单">
      <zle-form :inline="true" :model="formInline" class="demo-form-inline">
        <zle-form-item label="审批人">
          <zle-input v-model="formInline.user" placeholder="审批人" />
        </zle-form-item>
        <zle-form-item label="活动区域">
          <zle-select v-model="formInline.region" placeholder="活动区域">
            <zle-option label="区域一" value="shanghai" />
            <zle-option label="区域二" value="beijing" />
          </zle-select>
        </zle-form-item>
        <zle-form-item>
          <zle-button type="primary" @click="onSubmit">查询</zle-button>
        </zle-form-item>
      </zle-form>
    </zl-section>
    <zl-section header="对齐方式">
      <zle-radio-group v-model="labelPosition" size="small">
        <zle-radio label="left">左对齐</zle-radio>
        <zle-radio label="right">右对齐</zle-radio>
        <zle-radio label="top">顶部对齐</zle-radio>
      </zle-radio-group>
      <div style="margin: 20px;" />
      <zle-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <zle-form-item label="名称">
          <zle-input v-model="formLabelAlign.name" />
        </zle-form-item>
        <zle-form-item label="活动区域">
          <zle-input v-model="formLabelAlign.region" />
        </zle-form-item>
        <zle-form-item label="活动形式">
          <zle-input v-model="formLabelAlign.type" />
        </zle-form-item>
      </zle-form>
    </zl-section>
    <zl-section header="表单校验">
      <zle-form ref="ruleForm" class="my_form" :rules="rules" :model="addForm" label-width="80px">
        <zle-form-item label="文章标题" prop="name">
          <zle-input v-model.trim="addForm.name" />
        </zle-form-item>
        <zle-form-item label="发布对象" prop="region">
          <zle-select v-model="addForm.region" placeholder="请选择">
            <zle-option label="全部" value="all" />
            <zle-option label="企业" value="business" />
          </zle-select>
        </zle-form-item>
        <zle-form-item label="活动时间" required>
          <zle-col :size="11">
            <zle-form-item prop="date1">
              <zle-date-picker v-model="addForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
            </zle-form-item>
          </zle-col>
          <zle-col class="line" :size="2">-</zle-col>
          <zle-col :size="11">
            <zle-form-item prop="date2">
              <zle-time-picker v-model="addForm.date2" placeholder="选择时间" style="width: 100%;" />
            </zle-form-item>
          </zle-col>
        </zle-form-item>
        <zle-form-item label="即时配送">
          <zle-switch v-model="addForm.delivery" />
        </zle-form-item>
        <zle-form-item label="活动性质" prop="type">
          <zle-checkbox-group v-model="addForm.type">
            <zle-checkbox label="美食/餐厅线上活动" name="type" />
            <zle-checkbox label="地推活动" name="type" />
            <zle-checkbox label="线下主题活动" name="type" />
            <zle-checkbox label="单纯品牌曝光" name="type" />
          </zle-checkbox-group>
        </zle-form-item>
        <zle-form-item label="特殊资源" prop="resource">
          <zle-radio-group v-model="addForm.resource">
            <zle-radio label="线上品牌商赞助" />
            <zle-radio label="线下场地免费" />
          </zle-radio-group>
        </zle-form-item>
        <zle-form-item label="活动形式">
          <zle-input v-model.trim="addForm.desc" type="textarea" show-word-limit :maxlength="50" :autosize="{ minRows: 3, maxRows: 6 }" />
        </zle-form-item>
        <zle-form-item>
          <zle-button type="primary" @click="onSubmit('rule')">立即创建</zle-button>
        </zle-form-item>
      </zle-form>
    </zl-section>
  </div>

</template>
<script>
export default {
  data() {
    return {
      addForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formInline: {
        user: '',
        region: ''
      },
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'string', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'string', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit(type) {
      console.log('submit!')
      if (type) {
        this.$refs.ruleForm.validate().then(res => {
          console.log(res)
        }).catch(() => {})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my_form{
	width: 600px;
}
.line {
  text-align: center;
}
</style>
