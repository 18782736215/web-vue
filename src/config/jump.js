// Get the jump parameters only once during page construction
import { _setSessionItem, _removeSessionItem, _getQueryString } from '@/utils/modules/tool.js'
import SYS_CONFIG from './system-config'
// queryList Build priority by page top priority
const jump = {
  param: {
    [SYS_CONFIG.TOKEN_ACCESS]: null, // token auto login
    code: null, // dingding  auto login by code
    redirectURL: null // with token auto login redirect 'redirectURL'  page
  },
  // Get the value in the path parameters and store it in memory
  set() {
    Object.keys(this.param).forEach(key => {
      let v = _getQueryString(key)
      let param = v ? decodeURIComponent(v) : null
      if (param) {
        this.param[key] = param || null
        _setSessionItem(key, param)
      }
    })
  },
  // delete jump parameters
  remove(key) {
    this.param[key] = null
    _removeSessionItem(key)
  }
}

export default jump
