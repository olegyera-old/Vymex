<template>
  <div class="pending-code-verification-view">
    <div class="vymex-preloader">
      <img src="@/assets/img/preloader.gif" alt="">
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'auth.code',
    created() {
      this.$core.execViaComponent('Auth', 'verifyCode')

    },
    computed: {
      ...mapGetters({Dash: 'getDashClient', DashServer: 'getDashServer', isJumpReg: 'getUserIsJumpReg'}),
    },
    watch: {
      Dash(){
        this.$core.execViaComponent('Auth', 'flipFlopDash')

      },
      DashServer(){
        if(this.isJumpReg){
          this.$router.push({ name: 'auth.password'});
        } else {
          this.$router.push({ name: 'auth.fill.profile'});
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pending-code-verification-view{
    width: 375px;
    .vymex-animation{
      max-width: 256px;
      min-width: 128px;
      img{
        width: 100%;
      }
    }
  }
</style>