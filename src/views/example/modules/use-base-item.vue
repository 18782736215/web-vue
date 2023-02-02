<template>
  <!-- row col 封装 -->
  <div>
    <zl-header>响应式行展示row、col</zl-header>
    <zl-section header="详情响应式布局示例">
      <zle-row>
        <zle-col>
          <span slot="label">课程名称</span>
          <span slot="value">前端开发工程师</span>
        </zle-col>
        <zle-col label="课时" value="48" />
        <zle-col label="开始时间" value="2022-10-08" />
        <zle-col label="结束时间" value="2022-10-31" />
        <zle-col label="可报名人数" value="123" />
        <zle-col label="已报名人数" value="80" />
        <zle-col label="状态" value="审核中" />
        <zle-col label="课程描述" :size="24">
          <template slot="value"> 本课程培养目标 1、熟练掌握计算机原理，熟悉Linux系统的使用 2、熟练掌握Python函数&面向对象编程，可开发基于各种业务场景下的Python工具 3、掌握Socket网络编程、线程、进程知识，可以开发C/S架构的高并发的FTP文件共享软件 4、熟练掌握数据库常用操作，具备为复杂的项目（上百张表）设计合理、可扩展表结构的能力 5、熟练掌握缓存、队列等中间件技术，为开发大并发、高性能应用打下基础 6、熟练掌握前端HTML/CSS/JS/Jquery/Bootstrap知识，熟练掌握Django、Flask框架 7、独立开发完成实战项目BBS论坛 、CRM软件、路飞学城 8、掌握爬虫和基本数据分析知识 9、掌握常用算法和设计模式 </template>
        </zle-col>
      </zle-row>
    </zl-section>
    <zl-section header="详情响应式布局示例二">
      <zle-row>
        <zle-col :size="8" label="法定代表人" value="崔珊珊" />
        <zle-col :size="8" label="注册资本" value="4520美元" />
        <zle-col :size="8" label="成立日期" value="2000-01-18" />
        <zle-col :size="24" label="企业类型" value="有限责任公司（外国法人独资）" />
        <zle-col :size="24" label="经营状态" value="存续" />
        <zle-col :size="24" label="注册地址" value="北京市海淀区上地十街10号百度大厦三层" />
        <zle-col :size="24" label="统一社会信用代码" value="91110108717743469K" />
        <zle-col :size="24">
          <span slot="label">经营范围</span>
          <span slot="value">开发、生产计算机软件；提供相关技术咨询、技术服务、技术培训；承接计算机网络系统工程；货物进出口、技术进出口、代理进出口；设计、制作、代理、发布广告；软件开发；技术开发、技术推广、技术转让；销售自产产品、医疗器械II类、电子产品、器件和元件、计算机、软件及辅助设备、灯具、五金交电、自行开发后的产品；计算机系统集成；委托加工生产通讯设备；销售第三类医疗器械。（市场主体依法自主选择经营项目，开展经营活动；销售第三类医疗器械以及依法须经批准的项目，经相关部门批准后依批准的内容开展经营活动；不得从事国家和本市产业政策禁止和限制类项目的经营活动。）</span>
        </zle-col>
      </zle-row>
    </zl-section>
    <zl-section header="表单响应式布局示例">
      <zle-form label-width="96px">
        <zle-row>
          <zle-col>
            <zle-form-item label="客户姓名">
              <zle-input placeholder="请输入客户姓名" />
            </zle-form-item>
          </zle-col>
          <zle-col>
            <zle-form-item label="客户姓名">
              <zle-input placeholder="请输入客户姓名" />
            </zle-form-item>
          </zle-col>
          <zle-col>
            <zle-form-item label="客户姓名">
              <zle-input placeholder="请输入客户姓名" />
            </zle-form-item>
          </zle-col>
          <zle-col>
            <zle-form-item label="客户姓名">
              <zle-input placeholder="请输入客户姓名" />
            </zle-form-item>
          </zle-col>
          <zle-col>
            <zle-form-item label="客户姓名">
              <zle-input placeholder="请输入客户姓名" />
            </zle-form-item>
          </zle-col>
        </zle-row>
      </zle-form>
    </zl-section>
    <zl-section header="自定义label宽度">
      <zle-row>
        <zle-col label-width="200">
          <span slot="label">label-width</span>
          <span slot="value">200</span>
        </zle-col>
        <zle-col label-width="80" label="label-width" value="40" />
        <zle-col label="默认label-width" value="72" />
      </zle-row>
    </zl-section>
  </div>
</template>
