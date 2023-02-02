<template>
  <div>
    <zl-header>Drawer 抽屉</zl-header>
    <zl-section header="抽屉">
      <zle-radio-group v-model="direction">
        <zle-radio label="ltr">从左往右开</zle-radio>
        <zle-radio label="rtl">从右往左开</zle-radio>
        <zle-radio label="ttb">从上往下开</zle-radio>
        <zle-radio label="btt">从下往上开</zle-radio>
      </zle-radio-group>
      <zle-button type="primary" style="margin-left: 16px;" @click="drawer = true">
        点我打开
      </zle-button>
      <div class="black-box">
        <zle-drawer title="我是标题" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
          <span>hhh</span>
          <div slot="footer">
            <zle-button>取消</zle-button>
            <zle-button type="primary">确定</zle-button>
          </div>
        </zle-drawer>
      </div>
      <zle-alert title="修改visible可以控制抽屉的展示，修改direction可以控制抽屉打开的方向" />
      <zle-alert title="ltr：从左往右开 rtl：从右往左开 ttb：从上往下开 btt：从下往上开" />
    </zl-section>
    <zl-section header="嵌套table和form">
      <zle-button type="text" @click="table = true">打开嵌套表格的 Drawer</zle-button>
      <zle-button type="text" @click="dialog = true">打开嵌套 Form 的 Drawer</zle-button>
      <zle-drawer title="我嵌套了表格!" :visible.sync="table" direction="rtl" size="50%">
        <zle-table :data="gridData">
          <zle-table-column property="date" label="日期" width="150" />
          <zle-table-column property="name" label="姓名" width="200" />
          <zle-table-column property="address" label="地址" />
        </zle-table>
      </zle-drawer>

      <zle-drawer ref="drawer" title="我嵌套了 Form !" :before-close="handleClose1" :visible.sync="dialog" direction="ltr">
        <div class="demo-drawer__content">
          <zle-form :model="form">
            <zle-form-item label="活动名称" :label-width="formLabelWidth">
              <zle-input v-model="form.name" autocomplete="off" />
            </zle-form-item>
            <zle-form-item label="活动区域" :label-width="formLabelWidth">
              <zle-select v-model="form.region" placeholder="请选择活动区域">
                <zle-option label="区域一" value="shanghai" />
                <zle-option label="区域二" value="beijing" />
              </zle-select>
            </zle-form-item>
          </zle-form>
          <div class="demo-drawer__footer">
            <zle-button @click="cancelForm">取 消</zle-button>
            <zle-button type="primary" :loading="loading" @click="cancelForm">{{ loading ? '提交中 ...' : '确 定' }}</zle-button>
          </div>
        </div>
      </zle-drawer>
    </zl-section>
    <zl-section>
      <h3 class="description">抽屉嵌套</h3>
      <zle-button type="primary" style="margin-left: 16px;" @click="drawer2 = true">
        点我打开
      </zle-button>

      <zle-drawer title="我是外面的 Drawer" :visible.sync="drawer2" size="50%">
        <div>
          <zle-button @click="innerDrawer2 = true">打开里面的!</zle-button>
          <zle-drawer title="我是里面的" :append-to-body="true" :before-close="handleClose2" :visible.sync="innerDrawer2">
            <p>_(:зゝ∠)_</p>
          </zle-drawer>
        </div>
        <div slot="footer">
          <zle-button>取消</zle-button>
          <zle-button type="primary">确定</zle-button>
        </div>
      </zle-drawer>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer2: false,
      innerDrawer2: false,
      drawer: false,
      direction: 'rtl',
      table: false,
      dialog: false,
      loading: false,
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px',
      timer: null
    }
  },
  methods: {
    handleClose(done) {
      done()
    },
    handleClose1(done) {
      if (this.loading) {
        return
      }
      this.$zlConfirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true
          this.timer = setTimeout(() => {
            done()
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false
            }, 400)
          }, 2000)
        })
        .catch(_ => {})
    },
    handleClose2(done) {
      this.$zlConfirm('还有未保存的工作哦确定关闭吗？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    cancelForm() {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
</style>
