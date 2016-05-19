import Util from '../assets/util.js'

export default {
  // 金额统一格式化
  numberFormat: function (value, decimals, decPoint, thousandsSep, decMethod) {
    return Util.numberFormat(value, decimals || 2, decPoint, thousandsSep, decMethod)
  }
}
