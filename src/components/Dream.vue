<style>
  .dream {
    background: #8d8be7;
  }
  .dream-title {
    text-align: center;
    font-size: 1.3rem;
    color: #fff;
  }
  .dream .container {
    width: 80%;
  }
  .dream .form-section {
    margin: 20px auto;
    color: #fff;
    font-size: 1.1rem;
  }
  .dream .form-section.result {
    min-height: 120px;
    text-align: center;
    font-size: 1rem;
    line-height: 200%;
  }
  .dream .form-section .amount-container {
    display: inline-block;
    width: 55%;
    border-bottom: 1px solid #fff;
    margin-right: 10px;
  }
  .dream .form-section .want {
    width: 100%;
    height: 25px;
    line-height: 20px;
    padding-left: 3px;
    color: #fff;
    border: none;
    -webkit-appearance: none;
    background: transparent;
  }
  .dream .tips {
    margin-top: 10px;
    font-size: 0.7rem;
    line-height: 100%;
  }
  .dream .g-btn {
    color: #FFC10D;
    border: 1px solid #FFC10D;
  }
</style>

<template>
  <section class="dream center">
    <div class="container">
      <img src="http://yangjian.qiniudn.com/FgK42tvCdYx27lzp74c_puktkrEu" class="avatar">
      <h2 class="dream-title">你想每月收到多少利息</h2>
      <section class="form-section">
        <span class="key">每月我要：</span>
        <span class="amount-container">
           <input type="number" class="want" onafterpaste="this.value=this.value.replace(/\D/g,'');" onpropertychange="this.value=this.value.replace(/\D/g,'');" oninput="this.value=this.value.replace(/\D/g,'');" v-model="user.want" @keyup="checkWant">
        </span>
        <span class="unit">元</span>
      </section>
      <section class="form-section result">
        <p v-show="needAmount > 0">
          那你今年需要先存<br>
          <span v-text="needAmount | numberFormat"></span>元
        </p>
        <p class="tips" v-show="needAmount > 0">* 以上投资利率参考了『懒投资』的平均利率。</p>
      </section>
      <div>
        <a href="https://lantouzi.com/union/invite?pcode=h76q" class="g-btn" v-show="needAmount >=1000000">吓死我了，先去挣钱</a>
        <a v-link="{path: '/'}" class="g-btn">返回首页</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dream',
  data: function () {
    return {
      type: 1,
      user: {
        want: '',
        month: 12
      },
      rate: {
        3: 9,
        6: 10,
        9: 11,
        12: 12
      },
      maxWant: 1000000
    }
  },
  computed: {
    needAmount: function () {
      return Number(this.$data.user.want) * this.$data.user.month / (this.$data.rate[this.$data.user.month] / 100)
    }
  },
  methods: {
    checkWant: function () {
      if (+this.$data.user.want > this.$data.maxWant) {
        this.$data.user.want = this.$data.maxWant
        window.alert('我有一个不成熟的小建议，要不您换个方式吧~')
      }
    }
  }
}
</script>