<template>
  <div class="app-company">
    <div class="app-company-navigation">
      <navigation-panel/>
    </div>
    <div class="app-company-main">
      <router-view class="app-company-router-view"/>
    </div>
  </div>
</template>

<script>
  import NavigationPanel from "@Container/PanelNavigation/app";
  import {mapGetters} from 'vuex'




  export default {
    name: 'vx.co.app',
    components: {
      NavigationPanel
    },
    created() {
      if(this.getSelectedCompany.unitLevel === 0){
        this.$router.push({name: 'vx.co.founder'}).catch(() => {})
      }
    },
    computed:{
      ...mapGetters({
        getSelectedCompany: 'Company/getSelectedCompany'
      })
    }
  }
</script>

<style lang="scss" scoped>
  .app-company{
    width: 100%;
    height: 100%;
    display: flex;
    .app-company-navigation{
      height: 100%;
      width: 60px;
      position: relative;
      .container-navigation-panel{
        position: fixed;
        height: calc(100% - 64px);
      }
    }
    .app-company-main{
      width: 100%;
      height: 100%;
      .app-company-router-view{ //// сделать логику передачи саб-кдасов как для задач
        padding-top: 24px;
        max-width: 796px;
        margin: 0 auto;
      }
    }
  }
</style>