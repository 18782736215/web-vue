<template>
  <div>
    <zl-header> Pagination 分页 </zl-header>
    <zl-section header="基本使用">
      <div class="block">
        <span class="demonstration">页数较少时的效果</span>
        <zle-pagination class="my_page" :page.sync="searchParam.current" :size.sync="searchParam.size" :total="50" layout="prev, pager, next" />
      </div>
      <div class="block">
        <span class="demonstration">大于 7 页时的效果</span>
        <zle-pagination layout="prev, pager, next" class="my_page" :page.sync="searchParam.current" :size.sync="searchParam.size" :total="1000" />
      </div>
      <hr>
      <div>page: {{ searchParam.current }} size: {{ searchParam.size }}</div>
      <!-- <zle-pagination class="my_page" :page.sync="searchParam.current" :size.sync="searchParam.size" :total="total" @pagination="changePage" /> -->
    </zl-section>
    <zl-section header="设置最大页码按钮数">
      <zle-pagination :page.sync="searchParam.current" :size.sync="searchParam.size" :pager-count="11" layout="prev, pager, next" :total="1000" />
      <hr>
      <div>{{ searchParam.current }}</div>
    </zl-section>
    <zl-section header="带有背景色的分页">
      <zle-pagination background :page.sync="searchParam.current" :size.sync="searchParam.size" layout="prev, pager, next" :total="1000" />
      <hr>
      <div>{{ searchParam.current }}</div>
    </zl-section>
    <zl-section header="小型分页">
      <zle-pagination small :page.sync="searchParam.current" :size.sync="searchParam.size" layout="prev, pager, next" :total="100" />
      <hr>
      <div>{{ searchParam.current }}</div>
    </zl-section>
    <zl-section header="附加功能">
      <div class="block">
        <span class="demonstration">显示总数</span>
        <zle-pagination :page.sync="currentPage1" :size="100" layout="total, prev, pager, next" :total="1000" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
      <div class="block">
        <span class="demonstration">调整每页显示条数</span>
        <zle-pagination :page.sync="currentPage2" :page-sizes="[100, 200, 300, 400]" :size="100" layout="sizes, prev, pager, next" :total="1000" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
      <div class="block">
        <span class="demonstration">直接前往</span>
        <zle-pagination :page.sync="currentPage3" :size="100" layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
      <div class="block">
        <span class="demonstration">完整功能</span>
        <zle-pagination :page.sync="currentPage4" :page-sizes="[100, 200, 300, 400]" :size="100" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
      <hr>
      <div>currentPage1：{{ currentPage1 }} currentPage2：{{ currentPage2 }} currentPage3：{{ currentPage3 }} currentPage4：{{ currentPage4 }}</div>
    </zl-section>
    <zl-section header="当只有一页时隐藏分页">
      <zle-switch v-model="value" />
      <zle-pagination :page.sync="searchParam.current" :size.sync="searchParam.size" :hide-on-single-page="value" :total="5" layout="prev, pager, next" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchParam: {
        current: 1,
        size: 10
      },
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      total: 100,
      value: false
    }
  },
  methods: {
    changePage(val) {
      console.log(val)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="scss" scoped></style>
