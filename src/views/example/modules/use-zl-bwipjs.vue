<template>
  <div>
    <zl-header title="">bwip-js</zl-header>
    <zl-section header="条码(code128)">
      <zl-bwipjs bid="code" :text="testText" type="code128" />
    </zl-section>
    <zl-section header="DM码(Data Matrix)">
      <zl-bwipjs bid="dmCode" text="sgewrgdf34" type="datamatrix" />
    </zl-section>
    <zl-section header="Aztec Code">
      <zl-bwipjs bid="aztecCode" text="sfdf" type="azteccode" />
    </zl-section>
    <zl-section header="其他格式示例">
      <div>
        <zle-select v-model="chooseType" placeholder="选择type" filterable @change="changeChoose">
          <zle-option v-for="item in typeList" :key="item.value" :label="item.label" :value="item.value" />
        </zle-select>
      </div>
      <div style="margin-top: 10px">
        <zl-bwipjs v-if="chooseType" bid="types" text="abcde" :type="chooseType" />
      </div>
    </zl-section>
    <zl-section header="基础参数说明">
      <p>pid: 元素id名。类型String 必传</p>
      <p>text: 要转码的内容。类型String 必传</p>
      <p>type: 转码格式。类型String。 默认条码：code128</p>
      <p>scale: 伸缩比例 类型Number。 默认值：1</p>
      <p>width和height: 可控制码大小（不同格式的类型在相同的width和height下展示大小可能不同）。 类型Number。 默认20</p>
      <p>includeText: 是否展示文字。 类型 Boolean。 默认true 不是每种格式都生效</p>
      <p>textXAlign: 文字展示位置。 类型 String. 默认center 其他：left， right</p>
    </zl-section>
    <zl-section>参考文档：<a href="http://bwip-js.metafloor.com/" target="_blank">http://bwip-js.metafloor.com/</a></zl-section>

  </div>
</template>

<script>
import ZlBwipjs from '@/components/zl-bwipjs/bwipjs.vue'

export default {
  components: {
    ZlBwipjs
  },
  data() {
    return {
      testText: 'testText',
      // bwip-js 可以渲染码类型
      typeList: [
        { value: 'auspost', label: 'AusPost 4 State Customer Code' },
        { value: 'azteccode', label: 'Aztec Code' },
        { value: 'azteccodecompact', label: 'Compact Aztec Code' },
        { value: 'aztecrune', label: 'Aztec Runes' },
        { value: 'bc412', label: 'BC412' },
        { value: 'channelcode', label: 'Channel Code' },
        { value: 'codablockf', label: '	Codablock F' },
        { value: 'code11', label: '	Code 11' },
        { value: 'code128', label: '	Code 128--条形码' },
        { value: 'code16k', label: '	Code 16K' },
        { value: 'code2of5', label: '	Code 25' },
        { value: 'code32', label: '	Italian Pharmacode' },
        { value: 'code39', label: '	Code 39' },
        { value: 'code39ext', label: '	Code 39 Extended' },
        { value: 'code49', label: '	Code 49' },
        { value: 'code93', label: '	Code 93' },
        { value: 'code93ext', label: '	Code 93 Extended' },
        { value: 'codeone', label: '	Code One' },
        { value: 'coop2of5', label: '	COOP 2 of 5' },
        { value: 'daft', label: '	Custom 4 state symbology' },
        { value: 'databarexpanded', label: 'GS1 DataBar Expanded' },
        { value: 'databarexpandedcomposite', label: 'GS1 DataBar Expanded Composite' },
        { value: 'databarexpandedstacked', label: 'GS1 DataBar Expanded Stacked' },
        { value: 'databarexpandedstackedcomposite', label: 'GS1 DataBar Expanded Stacked Composite' },
        { value: 'databarlimited', label: 'GS1 DataBar Limited' },
        { value: 'databarlimitedcomposite', label: 'GS1 DataBar Limited Composite' },
        { value: 'databaromni', label: 'GS1 DataBar Omnidirectional' },
        { value: 'databaromnicomposite', label: 'GS1 DataBar Omnidirectional Composite' },
        { value: 'databarstacked', label: 'GS1 DataBar Stacked' },
        { value: 'databarstackedcomposite', label: 'GS1 DataBar Stacked Composite' },
        { value: 'databarstackedomni', label: 'GS1 DataBar Stacked Omnidirectional' },
        { value: 'databarstackedomnicomposite', label: 'GS1 DataBar Stacked Omnidirectional Composite' },
        { value: 'databartruncated', label: 'GS1 DataBar Truncated' },
        { value: 'databartruncatedcomposite', label: 'GS1 DataBar Truncated Composite' },
        { value: 'datalogic2of5', label: '	Datalogic 2 of 5' },
        { value: 'datamatrix', label: '	Data Matrix--DM码' },
        { value: 'datamatrixrectangular', label: '	Data Matrix Rectangular' },
        { value: 'datamatrixrectangularextension', label: '	Data Matrix Rectangular Extension' },
        { value: 'dotcode', label: 'DotCode' },
        { value: 'ean13', label: 'EAN-13' },
        { value: 'ean13composite', label: 'EAN-13 Composite' },
        { value: 'ean14', label: 'GS1-14' },
        { value: 'ean2', label: 'EAN-2 (2 digit addon)' },
        { value: 'ean5', label: 'EAN-5 (5 digit addon)' },
        { value: 'ean8', label: 'EAN-8' },
        { value: 'ean8composite', label: 'EAN-8 Composite' },
        { value: 'flattermarken', label: 'Flattermarken' },
        { value: 'gs1-128', label: 'GS1-128' },
        { value: 'gs1-128composite', label: '	GS1-128 Composite' },
        { value: 'gs1-cc', label: '	GS1 Composite 2D Component' },
        { value: 'gs1datamatrix', label: 'GS1 Data Matrix' },
        { value: 'gs1datamatrixrectangular', label: 'GS1 Data Matrix Rectangular' },
        { value: 'gs1dotcode', label: 'GS1 DotCode' },
        { value: 'gs1northamericancoupon', label: 'GS1 North American Coupon' },
        { value: 'gs1qrcode', label: 'GS1 QR Code' },
        { value: 'hanxin', label: 'Han Xin Code' },
        { value: 'hibcazteccode', label: 'HIBC Aztec Code' },
        { value: 'hibccodablockf', label: 'HIBC Codablock F' },
        { value: 'hibccode128', label: 'HIBC Code 128' },
        { value: 'hibccode39', label: 'HIBC Code 39' },
        { value: 'hibcdatamatrix', label: 'HIBC Data Matrix' },
        { value: 'hibcdatamatrixrectangular', label: 'HIBC Data Matrix Rectangular' },
        { value: 'hibcmicropdf417', label: 'HIBC MicroPDF417' },
        { value: 'hibcpdf417', label: 'HIBC PDF417' },
        { value: 'hibcqrcode', label: 'HIBC QR Code' },
        { value: 'iata2of5', label: 'IATA 2 of 5' },
        { value: 'identcode', label: 'Deutsche Post Identcode' },
        { value: 'industrial2of5', label: 'Industrial 2 of 5' },
        { value: 'interleaved2of5', label: 'Interleaved 2 of 5 (ITF)' },
        { value: 'isbn', label: 'ISBN' },
        { value: 'ismn', label: 'ISMN' },
        { value: 'issn', label: 'ISSN' },
        { value: 'itf14', label: 'ITF-14' },
        { value: 'japanpost', label: 'Japan Post 4 State Customer Code' },
        { value: 'kix', label: 'Royal Dutch TPG Post KIX' },
        { value: 'leitcode', label: 'Deutsche Post Leitcode' },
        { value: 'mailmark', label: 'Royal Mail Mailmark' },
        { value: 'matrix2of5', label: 'Matrix 2 of 5' },
        { value: 'maxicode', label: 'MaxiCode' },
        { value: 'micropdf417', label: 'MicroPDF417' },
        { value: 'microqrcode', label: 'Micro QR Code' },
        { value: 'msi', label: 'MSI Modified Plessey' },
        { value: 'onecode', label: 'USPS Intelligent Mail' },
        { value: 'pdf417', label: 'PDF417' },
        { value: 'pdf417compact', label: 'Compact PDF417' },
        { value: 'pharmacode', label: 'Pharmaceutical Binary Code' },
        { value: 'pharmacode2', label: 'Two-track Pharmacode' },
        { value: 'planet', label: 'USPS PLANET' },
        { value: 'plessey', label: 'Plessey UK' },
        { value: 'posicode', label: 'PosiCode' },
        { value: 'postnet', label: 'USPS POSTNET' },
        { value: 'pzn', label: 'Pharmazentralnummer (PZN)' },
        { value: 'qrcode', label: 'QR Code--二维码' },
        { value: 'rationalizedCodabar', label: 'Codabar' },
        { value: 'raw', label: 'Custom 1D symbology' },
        { value: 'rectangularmicroqrcode', label: 'Rectangular Micro QR Code' },
        { value: 'royalmail', label: 'Royal Mail 4 State Customer Code' },
        { value: 'sscc18', label: 'SSCC-18' },
        { value: 'symbol', label: 'Miscellaneous symbols' },
        { value: 'telepen', label: 'Telepen' },
        { value: 'telepennumeric', label: 'Telepen Numeric' },
        { value: 'ultracode', label: 'Ultracode' },
        { value: 'upca', label: 'UPC-A' },
        { value: 'upcacomposite', label: 'UPC-A Composite' },
        { value: 'upce', label: 'UPC-E' },
        { value: 'upcecomposite', label: 'UPC-E Composite' }
      ],
      chooseType: ''
    }
  },
  mounted() {
    setTimeout(() => {
      this.testText = '12323232'
    }, 3000)
  },
  methods: {
    changeChoose(val) {
      this.$nextTick(() => {
        this.chooseType = val
      })
    }
  }
}
</script>

<style scoped lang="scss">
.section_box {
  margin-right: 20px;
  text-align: center;
}
</style>
