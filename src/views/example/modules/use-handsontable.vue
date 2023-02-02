<template>
  <div id="example1">
    <zl-header>Handsontable</zl-header>
    <zl-section>
      <label for="languages">选择右键菜单语言：</label>
      <select id="languages" @change="updateHotLanguage" /><br>
      <br>
      <hot-table ref="hot" :language="language" :settings="hotSettings" />
      <br>
      <zle-button type="primary" @click="exportsCSV">导出</zle-button>
    </zl-section>
    <zl-section>
      参考文档： <a href="https://handsontable.com/docs/javascript-data-grid/vue-installation/" target="_blank" rel="noopener noreferrer">handsontable文档</a>
    </zl-section>
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue'
import { registerLanguageDictionary, getLanguagesDictionaries, zhCN, zhTW } from 'handsontable/i18n'
import { registerAllModules } from 'handsontable/registry'
import 'handsontable/dist/handsontable.full.css'

registerLanguageDictionary(zhCN)
registerLanguageDictionary(zhTW)

// register Handsontable's modules
registerAllModules()

export default {
  components: {
    HotTable
  },
  data() {
    return {
      hotSettings: {
        data: [
          ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1', 'J1'],
          ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2', 'J2'],
          ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3', 'J3'],
          ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4', 'J4'],
          ['A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5', 'I5', 'J5']
        ],
        colHeaders: true,
        rowHeaders: true,
        contextMenu: true,
        height: 'auto',
        licenseKey: 'non-commercial-and-evaluation'
      },
      language: 'en-US'
    }
  },
  mounted() {
    this.getAllLanguageOptions()
  },
  methods: {
    getAllLanguageOptions() {
      const allDictionaries = getLanguagesDictionaries()
      const langSelect = document.querySelector('#languages')
      langSelect.innerHTML = ''
      for (let language of allDictionaries) {
        langSelect.innerHTML += `<option value="${language.languageCode}">${language.languageCode}</option>`
      }
    },
    updateHotLanguage(event) {
      this.language = event.target.value
    },
    exportsCSV() {
      this.$refs.hot.hotInstance.getPlugin('exportFile').downloadFile('csv', {
        bom: false,
        columnDelimiter: ',',
        columnHeaders: false,
        exportHiddenColumns: true,
        exportHiddenRows: true,
        fileExtension: 'csv',
        filename: 'Handsontable-CSV-file_[YYYY]-[MM]-[DD]',
        mimeType: 'text/csv',
        rowDelimiter: '\r\n',
        rowHeaders: true
      })
    }
  }
}
</script>
