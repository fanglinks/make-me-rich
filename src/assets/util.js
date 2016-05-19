const Util = {
  // 要格式化的数字, 要保留的小数位数, 指定小数点显示的字符, 指定千位分隔符显示的字符
  numberFormat: function (number, decimals, decPoint, thousandsSep, decMethod) {
    decMethod = decMethod || 'round'
    number = (number + '').replace(/[^0-9+\-Ee.]/g, '')
    let n = !isFinite(+number) ? 0 : +number
    let prec = !isFinite(+decimals) ? 0 : Math.abs(decimals)
    let sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep
    let dec = (typeof decPoint === 'undefined') ? '.' : decPoint
    let s = ''
    let toFixedFix = function (n, prec) {
      let k = Math.pow(10, prec)
      return '' + Math[decMethod](n * k) / k
    }
    s = (prec ? toFixedFix(n, prec) : '' + Math[decMethod](n)).split('.')
    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
    }
    if ((s[1] || '').length < prec) {
      s[1] = s[1] || ''
      s[1] += new Array(prec - s[1].length + 1).join('0')
    }
    return s.join(dec)
  },
  formatMoneyDisplay: function (value) {
    let scale = 100 // 1元，100分
    let amount = 0
    if (+value < 10000 * scale) { // 小于10000，直接展示金额
      amount = Util.numberFormat(+value / 100)
    } else { // 大于1万
      scale *= 100 * 100
      if (+value % scale === 0) {
        amount = Util.numberFormat(+value / scale)
      } else {
        amount = Util.numberFormat(+value / scale, 2)
      }
      amount = amount + '万'
    }
    return amount
  },
  repayPlanByDays: function (type) {
    let RepayPlans = {
      debx: function (amount, rate, days) { // 等额本息
        let r = rate / 100 / 12
        let n = Math.ceil(days / 31)
        let preMonthRepay = amount * (r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1))
        return preMonthRepay * n - amount
      },
      ayfx: function (amount, rate, days) { // 按月付息
        return amount * (rate / 100 / 365) * days
      }
    }
    var f = function () {
      return 0
    }
    switch (type) {
      case 0:
        f = RepayPlans.debx // 等额本息
        break
      case 1:
      default:
        f = RepayPlans.ayfx // 按月付息
        break
    }
    return f
  }
}

export default {
  numberFormat: Util.numberFormat,
  formatMoneyDisplay: Util.formatMoneyDisplay,
  repayPlanByDays: Util.repayPlanByDays
}
