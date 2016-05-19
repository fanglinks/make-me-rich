<style>
  .home {
    background: #4cc7b7;
  }
  .home .title {
    font-size: 2rem;
    color: #ccc;
    text-align: center;
    color: #fff;
    margin: 0;
  }
  .home .card {
    display: block;
    width: 300px;
    margin: 15% auto;
    height: 150px;
    background: #fff;
    border-radius: 10px;
    background-size: contain;
    position: relative;
    box-shadow: 3px 3px 1px 2px rgba(128,128,128,0.5);
  }
  .home .card .text {
    position: absolute;
    width: 40%;
    text-align: center;
    top: 50px;
  }
  .home .card .sub-title {
    font-size: 1.5rem;
    color: #0C0C0C;
  }
  .home .card .info {
    color: #6B6666;
  }
  .home .c1 {
    background-image: url('http://yangjian.qiniudn.com/FnTFCU40ODyuUH3dQgH4S0O2OI-n');
  }
  .home .c2 {
    background-image: url('http://yangjian.qiniudn.com/Fi8feeCM30XDVok5hDWHHzHAGpuO');
  }
  .home .c1 .text { 
    right: 10px;
  }
  .home .c2 .text { 
    left: 10px;
  }
  .wx-share {
    height: 0;
    width: 0;
    opacity: 0;
  }
</style>

<template>
  <section class="home center">
    <div>
      <h1 class="title">请选择一种计算方式</h1>
      <img src="http://yangjian.qiniudn.com/Fp8IV-GrHuCOzJ-N3cYvQtUbfB6I" class="wx-share">
      <nav>
        <a v-link="{path: '/rich'}" class="card c1">
          <div class="text">
            <p class="sub-title">我有钱</p>
            <p class="info">算算我能挣多少</p>
          </div>
        </a>
        <a v-link="{path: '/dream'}" class="card c2">
          <div class="text">
            <p class="sub-title">我有梦想</p>
            <p class="info">算算我需要多少钱</p>
          </div>
        </a>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Home'
}
</script>