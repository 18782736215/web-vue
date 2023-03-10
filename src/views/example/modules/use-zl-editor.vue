<template>
  <!-- 富文本 -->
  <div class="flex_column">
    <div class="flex_1_auto">
      <zl-section header="富文本编辑" type="overspread">
        <div style="height:100%">
          <zl-editor v-model="editorValue" @change="editorChange" />
        </div>
      </zl-section>
    </div>
    <zl-section>
      参考文档：<a href="https://www.wangeditor.com/v5/for-frame.html#vue2" target="_blank"> https://www.wangeditor.com/v5/for-frame.html#vue2</a>
    </zl-section>
  </div>
</template>

<script>
import ZlEditor from '@/components/zl-editor/editor'
export default {
  components: {
    ZlEditor
  },
  data() {
    return {
      editorValue: `<p>各区（市、县）人民政府，各重点产业功能区，市级有关部门：</p><p><br></p><p>《德阳市金融守信红名单企业认定规则（2022年修订）》已经市政府九届第10次常务会议审议通过，现印发给你们，请认真组织实施。</p><p><br></p><p>德阳市人民政府办公室</p><p><br></p><p>2022年9月2日</p><p><br></p><p>德阳市金融守信红名单企业认定规则（2022年修订）</p><p><br></p><p>为深入推进德阳市社会信用体系建设，不断增强企业信用意识，提高企业信用管理水平，持续构建“守信得益，失信惩戒”的激励惩戒机制，集合各类政策资源支持诚实守信企业发展，促进全市金融生态环境和社会信用环境不断改善，特制定德阳市金融守信红名单企业认定规则。</p><p><br></p><h1>一、认定目的和基本原则</h1><p><br></p><h2>（一）认定目的</h2><p><br></p><p>推进全市金融守信红名单企业品牌建设，提高金融生态环境及社会信用治理能力，不断夯实全市社会信用体系建设基础，构建“守信得益，失信惩戒”的激励惩戒机制，促进企业信用文化建设，不断提高信用管理水平和履约行为规范。深化中小微企业金融服务，发挥信用赋能企业融资作用，聚集资金资源支持实体经济发展，提高贷款的可获得性。</p><p><br></p><h2>（二）认定原则</h2><p><br></p><p>1.坚持政策引导和企业自愿申报原则。</p><p><br></p><p>2.坚持公开、公平、公正原则。</p><p><br></p><p>3.坚持守信企业得实惠原则。</p><p><br></p><p>二、认定范围</p><p><br></p><p>注册地为德阳市辖内的中小微企业。根据《四川省产业园区企业金融信用分类工作方案》（成银发〔2021〕19号附件），涉及各产业园区红名单企业分类一并纳入本规则认定范围。</p><p><br></p><p>三、认定条件和审核标准</p><p><br></p><p>一般企业申报金融守信红名单企业，须符合以下条件或审核标准：</p><p><br></p><p>（一）依法设立满三年，科技创新型企业可放宽至两年。</p><p><br></p><p>（二）企业符合国家及地方产业、行业、土地、环保等政策和社会发展规划。</p><p><br></p><p>（三）最近三年企业主体及其法定代表人、实际控制人、主要股东无犯罪记录；申报企业及其法定代表人、实际控制人、主要股东及时履行生效法律文书确定的义务，未纳入全国法院失信被执行人名单。</p><p><br></p><p>（四）最近三年在市场管理、税务、商务、环保、社保等方面无重大违法、严重失信行为记录，或者已完成信用修复。</p><p><br></p><p>（五）企业财务管理规范，经营状况良好，最近三个年度无经营性亏损且会计财务审计报告为“无保留意见”。</p><p><br></p><p>（六）重视信用管理和信用文化建设，企业高管人员在经营管理中信用意识较强，注重商业信誉。企业及其法定代表人在信用中国等公共信用信息平台无重大负面记录。</p><p><br></p><p>（七）在银行开立基本账户并建立信贷关系，相关信息载入国家金融信用信息基础数据库。企业及其法定代表人、实际控制人、主要股东信用记录良好，无拖欠贷款本息和金融逃废债等违约失信记录。</p><p><br></p><p>（八）产业园区申报企业履约情况良好，包括较好地履行入驻协议，入驻后无拖欠水电气、电信资费、物管、厂房租赁等各类费用的情况；最近一年来无员工投诉事件等。</p><p><br></p><p>四、组织实施流程</p><p><br></p><p>（一）工作启动</p><p><br></p><p>人行德阳中心支行和市发改委、市金融局、市经信局负责全市金融守信红名单企业认定制度的组织和实施，按照时间安排联合启动当年认定或复审工作。启动工作对象为全市金融机构及中小微企业。</p><p><br></p><p>（二）金融机构筛选和推荐</p><p><br></p><p>金融机构在本机构贷款企业客户中进行深入宣传和广泛动员，筛选出符合认定条件或审核标准的企业客户名单向组织实施部门推荐。</p><p><br></p><p>（三）企业申报与初审</p><p><br></p><p>申报企业填报《德阳市金融守信红名单企业申报表》（附件），加盖公章后连同其他申报材料一并提交主办金融机构。金融机构初步审查企业申报材料并填写推荐意见，然后按照组织实施部门要求提交资料。</p><p><br></p><p>具体申报方式和申报所需资料由组织实施部门根据实际条件进行安排。</p><p><br></p><p>（四）评审与公示</p><p><br></p><p>人行德阳中心支行联合市发改委、市金融局、市经信局，会同其他经济金融主管部门，依照本规则对金融机构推荐的申报企业进行全面审查，最后拟定上榜企业名单。拟上榜企业名单在天府信用通（德阳市）、信用中国（四川德阳）、德阳金融发布等互联网平台予以公示，接受社会监督。</p><p><br></p><p>（五）命名确认</p><p><br></p><p>拟上榜企业名单经公示无异议后，由组织实施部门提请市政府发文予以命名为认定年度德阳市金融守信红名单企业。</p><p><br></p><p>五、组织保障</p><p><br></p><p>（一）完善认定工作协调机制</p><p><br></p><p>金融守信红名单企业认定由人行德阳中心支行、市发改委、市金融局、市经信局联合推动，市人社局、市生态环境局、市商务局、市市场监管局、市税务局、德阳银保监分局共同推进。各职能部门建立健全协同联动工作机制，形成“政府领导、联合推动、多方参与”的工作格局。</p><p><br></p><p>（二）建立健全认定工作制度</p><p><br></p><p>金融守信红名单企业认定制度按照“一年一认定，两年一复审”频度组织实施。一般每年3-4月启动认定工作，5月为申报期，8月底前完成全部审核工作，经公示后予以命名。</p><p><br></p><p>（三）强化“守信得益，失信惩戒”激励惩戒机制</p><p><br></p><p>金融机构要进一步完善和落实针对上榜金融守信红名单企业的优惠政策措施。各经济金融主管部门要根据各自职责范围给予优惠政策扶持。</p><p><br></p><p>六、其他</p><p><br></p><p>本规则自2022年10月10日起施行，有效期五年，《德阳市金融守信红名单认定规则》（德办函〔2017〕63号）同时废止。</p>`
    }
  },
  methods: {
    editorChange(val) {
      this.editorValue = val
      console.log(this.editorValue)
    }
  }
}
</script>

<style lang="scss" scoped></style>
