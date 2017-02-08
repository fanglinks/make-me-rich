<style>
  .rich {
    background: #f1df91;
  }
  .rich-title {
    text-align: center;
    font-size: 1.3rem;
    color: #212121;
  }
  .rich .container {
    width: 80%;
  }
  .rich .form-section {
    margin: 20px auto;
    color: #696868;
    font-size: 1.1rem;
  }
  .rich .form-section.result {
    min-height: 80px;
    text-align: center;
    font-size: 0.9rem;
    line-height: 200%;
  }
  .rich .form-section .amount-container {
    display: inline-block;
    width: 68%;
    border-bottom: 1px solid #fff;
    margin-right: 10px;
  }
  .rich .form-section .amount {
    width: 100%;
    height: 25px;
    line-height: 20px;
    padding-left: 3px;
    color: #696868;
    border: none;
    -webkit-appearance: none;
    background: transparent;
  }
  .rich .tips {
    margin-top: 10px;
    font-size: 0.7rem;
    line-height: 100%;
  }
  .rich .g-btn {
    color: #E8760C;
    border: 1px solid #E8760C;
  }
</style>

<template>
  <section class="rich center">
    <div class="container">
      <img src="https://ol1unnb9h.qnssl.com/FiQgI98h3Wbut0nW_iuP5YQUybw_" class="avatar">
      <h2 class="rich-title">看看你能挣多少钱</h2>
      <section class="form-section">
        <span class="key">我有：</span>
        <span class="amount-container">
           <input type="number" class="amount" onafterpaste="this.value=this.value.replace(/\D/g,'');" onpropertychange="this.value=this.value.replace(/\D/g,'');" oninput="this.value=this.value.replace(/\D/g,'');" v-model="user.amount" @keyup="checkAmount">
        </span>
        <span class="unit">元</span>
      </section>
      <section class="form-section">
        <span class="key">我存：</span><span class="days" v-text="showMonth"></span><span class="unit">个月</span>
      </section>
      <section class="form-section">
         <input type="range" min="1" max="365" class="range" v-model="user.days">
      </section>
      <section class="form-section result">
        <p v-show="income > 0">
          那么<span v-text="showMonth"></span>个月后,
          利息<span v-show="income > 10000">居然</span>有<br>
          <span v-text="income | numberFormat"></span>元
        </p>
        <p v-show="showMonth === 12 && income > 0">
          如果利率保持不变,存<span v-text="maxYear"></span>年,连本带息会有<br>
          <span v-text="yearInterest | numberFormat"></span>元
        </p>
        <p class="tips" v-show="income > 0">* 以上投资利率参考了『懒投资』的平均利率。</p>
      </section>
     <div>
        <a href="https://lantouzi.com/union/invite?pcode=h76q" class="g-btn">去挣利息</a>
        <a v-link="{path: '/'}" class="g-btn">返回首页</a>
     </div>
    </div>
  </section>
</template>

<script>
import Util from '../assets/util'
export default {
  name: 'Rich',
  data: function () {
    return {
      type: 1,
      user: {
        amount: '',
        days: 20
      },
      rate: {
        3: 9,
        6: 10,
        9: 11,
        12: 12
      },
      maxYear: 5,
      maxAmount: 1000000000000
    }
  },
  computed: {
    month: function () {
      if (this.$data.user.days < 15) {
        return 1
      } else {
        return Math.round(this.$data.user.days / 30)
      }
    },
    showMonth: function () {
      if (this.month < 3) {
        return 3
      } else {
        return Math.round(this.month / 3) * 3
      }
    },
    income: function () {
      return this.countRepay(+this.$data.user.amount, this.$data.rate[this.showMonth], this.showMonth * 30)
    },
    yearInterest: function () {
      let prevYear = Number(this.$data.user.amount) + this.income // 上一年本息之和
      for (let i = 2; i <= this.$data.maxYear; i++) {
        prevYear = prevYear + this.countRepay(prevYear, this.$data.rate[12], 365) // 更新上一年的本息之和
      }
      return prevYear
    }
  },
  methods: {
    checkAmount: function () {
      if (+this.$data.user.amount > this.$data.user.maxAmount) {
        this.$data.user.amount = this.$data.user.maxAmount
        window.alert('我有一个不成熟的小建议，要不您换个地方算吧~')
      }
    },
    countRepay: function (amount, rate, days) {
      let repay = Util.repayPlanByDays(this.$data.type)
      return repay(amount, rate, days)
    }
  }
}
</script>