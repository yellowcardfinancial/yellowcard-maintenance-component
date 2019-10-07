<template>
  <div id="maintenance">
    <div class="maintain-logo"><img  src="https://yellowcard-static.s3.amazonaws.com/Logo.png"></div>
    <div class="maintain-content-container">
      <p class="maintain-intro">This page is under maintenance</p>
      <p class="maintain-desc">Our developers at YellowCard are currently working very hard to fix this page, please try again later.</p>
      <button class="maintain-button" onClick="window.location.href = 'https://www.yellowcard.io'">Do Something Else</button>
    </div>
    <div class="maintain-img-container">
       <div class="crane"><img src="https://yellowcard-static.s3.amazonaws.com/maintenance/crane.png"></div>
       <div class="russell"><img src="https://yellowcard-static.s3.amazonaws.com/maintenance/russell.png"></div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'Maintenance',
}
</script>

<style lang="scss" scoped>
@import "../scss/maintenance.scss";
</style>