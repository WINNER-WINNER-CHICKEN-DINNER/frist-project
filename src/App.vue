<template>
  <div id="app">
    <div class="bgc">
      <div :style="{'background-position-x':position+'px'}" class="bgc-img" style="height: 100%; opacity: 1; background-image: url('https://cn.bing.com/az/hprichbg/rb/HongKongFireworks_ZH-CN13422096721_1920x1080.jpg');"></div>
      <!--<div class="bgc-img" style="height: 100%; opacity: 1; background-image: url('http://cn.bing.com/ImageResolution.aspx?w=488&h=897&t=2018215');"></div>-->
      <div style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;">
        <h1 style="text-align: center;padding-top: 27%;color:#ff0000;font-size: 40px;">新 年 快 乐 ！</h1>
        <div style="color:#ff4c05;text-align: center;">happy New Year</div>
        <div style="padding-top: 50px;text-align: center;color:#fff;">
          支付宝口令红包
        </div>
        <div style="text-align: center;">39617416</div>
        <p style="text-align: center; color:#fff; padding-top: 40px;">祝大家狗年大吉</p>
        <p  style="text-align: center; color:#fff;">合家欢乐！</p>
      </div>
      <audio loop autoplay src="http://dl.stream.qqmusic.qq.com/C400001bqs4K2Tgl2q.m4a?vkey=98C1EC1C5C85C9BFCDD2055AE9DCC716F9F8695361A5AFF937C49FF21749821BC58A714463B96D3C34EC484F47F2C797A8E21AF02F0DCD8F&guid=6951676560&uin=0&fromtag=66"></audio>
      <!--<audio loop autoplay src="http://dl.stream.qqmusic.qq.com/C400000TOO4v0AF3Bs.m4a?fromtag=38&vkey=5E066BF0ACF39D9D5476F301102541B6F91A9062BC6FEA3FC23FC62E7E2B650E5C1B2224457EF2585CF9767C326C57688ADC22788B9F25BB&guid=6951676560"></audio>-->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'app',
    data () {
      return {
        position: -1
      }
    },
    mounted () {
      setInterval(() => {
        this.position--
        if (this.position < -400) {
          this.position = -1
        }
      }, 100)
    }
  }
</script>

<style>
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .bgc, #app {
    width: 100%;
    height: 100%;
    display: inline-block;
    position: relative;
  }
  .bgc-img {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    position: relative;
    background-size: cover;
    z-index: 0;
  }
</style>
