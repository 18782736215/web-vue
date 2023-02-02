<template>
  <div>
    <zl-header>NavMenu 导航菜单</zl-header>
    <div class="section">
      <zle-switch v-model="isCollapse" inactive-text="展开" active-text="收起" />
    </div>
    <zl-section header="横向菜单">
      <zle-nav-menu :data="navMenu" index="path" mode="horizontal" :collapse="isCollapse" />
    </zl-section>
    <zl-section header="垂直菜单">
      <div class="left_nav">
        <zle-nav-menu :data="navMenu" :collapse="isCollapse" index="path" />
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      navMenu: [
        {
          path: '/home',
          title: '首页',
          icon: 'el-icon-setting',
          children: [
            {
              path: '/announcementManage/1',
              title: '发布公告'
            },
            {
              path: '/announcementManage/2',
              title: '公告审核'
            },
            {
              path: '/announcementManage/3',
              title: '公告列表'
            }
          ]
        },
        // 公告管理
        {
          name: 'announcementManage',
          path: '/announcementManage',
          title: '公告管理',
          icon: 'el-icon-setting',
          children: [
            {
              path: '/announcementManage/releaseAnnouncement',
              title: '发布公告'
            },
            {
              path: '/announcementManage/announcementExamine',
              title: '公告审核'
            },
            {
              path: '/announcementManage/announcementList',
              title: '公告列表'
            }
          ]
        },
        // 培训管理
        {
          path: '/trainManage',
          title: '培训管理',
          icon: 'el-icon-setting',
          children: [
            {
              path: '/trainManage/releaseTrain',
              title: '发布培训'
            },
            {
              path: '/trainManage/trainExamine',
              title: '培训审核'
            },
            {
              path: '/trainManage/trainList',
              title: '培训列表'
            }
          ]
        },
        // 职位管理
        {
          path: '/positionManage',
          title: '职位管理',
          icon: 'el-icon-setting',
          children: [
            {
              path: '/positionManage/positionExamine',
              title: '职位审核'
            },
            {
              path: '/positionManage/positionList',
              title: '职位列表'
            }
          ]
        },
        // 测试group
        {
          path: '/positionManage1',
          title: '分组测试',
          icon: 'el-icon-setting',
          children: [
            {
              path: '/positionExamine',
              title: '分组一',
              type: 'group',
              children: [
                {
                  path: '/positionExamine1',
                  title: '选项一'
                },
                {
                  path: '/positionList1',
                  title: '选项二'
                }
              ]
            },
            {
              path: '/positionList',
              title: '分组二',
              type: 'group',
              children: [
                {
                  path: '/positionExamine2',
                  title: '选项一'
                },
                {
                  path: '/positionList2',
                  title: '选项二'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.left_nav{
	width: 200px;
	height: 200px;
	overflow-y: auto;
	overflow-x:hidden;
}
</style>
