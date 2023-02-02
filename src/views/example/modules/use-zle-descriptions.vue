<template>
  <div>
    <zl-section header="Descriptions 描述列表">
      <zle-alert type="error">
        由于组件内层封装添加 name 校验， 使用此组件时 el-descriptions-item 名称不变
      </zle-alert>
    </zl-section>
    <zl-section header="基础用法">
      <zle-descriptions title="用户信息">
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <zle-tag size="small">学校</zle-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </zle-descriptions>
    </zl-section>
    <zl-section header="不同尺寸 size 列表的尺寸 medium / small / mini">
      <zle-radio-group v-model="size">
        <zle-radio label="">默认</zle-radio>
        <zle-radio label="medium">中等</zle-radio>
        <zle-radio label="small">小型</zle-radio>
        <zle-radio label="mini">超小</zle-radio>
      </zle-radio-group>

      <zle-descriptions class="margin-top" title="带边框列表 border" :column="3" :size="size" border>
        <template slot="extra">
          <zle-button type="primary" size="small">操作</zle-button>
        </template>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-user" />
            用户名
          </template>
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone" />
            手机号
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline" />
            居住地
          </template>
          苏州市
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets" />
            备注
          </template>
          <zle-tag size="small">学校</zle-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building" />
            联系地址
          </template>
          江苏省苏州市吴中区吴中大道 1188 号
        </el-descriptions-item>
      </zle-descriptions>

      <zle-descriptions class="margin-top" title="无边框列表" :column="3" :size="size">
        <template slot="extra">
          <zle-button type="primary" size="small">操作</zle-button>
        </template>
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <zle-tag size="small">学校</zle-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </zle-descriptions>
    </zl-section>
    <zl-section header="垂直带边框列表 direction  vertical / horizontal">
      <zle-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
        <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
        <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
        <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <zle-tag size="small">学校</zle-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
      </zle-descriptions>
    </zl-section>
    <!-- <div class="section">
      <zle-card header="自定义样式列表  label-class-name  content-class-name">
        <zle-descriptions title="自定义样式列表" :column="3" border>
          <el-descriptions-item label="用户名" :label-class-name="" content-class-name="my-content">kooriookami</el-descriptions-item>
          <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
          <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
          <el-descriptions-item label="备注">
            <zle-tag size="small">学校</zle-tag>
          </el-descriptions-item>
          <el-descriptions-item label="联系地址" :contentStyle="{ 'text-align': 'right' }">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
        </zle-descriptions>
      </zle-card>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: ''
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
.my-label {
  background: #e1f3d8;
}

.my-content {
  background: #fde2e2;
}
</style>
