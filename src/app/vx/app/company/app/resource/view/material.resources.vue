<template>
  <div class="resource-material-resources-view">
    <comeback @onClick="$router.push({name: 'vx.resource.structural.units'})"/>
    <div class="header-text-group">
      <title-base>Материальные ресурсы</title-base>
      <icon-points-vertical/>
    </div>
    <input-search :placeholder="'Поиск'"/>

    <header-add setting-slider @onClick="showSidebar()" @create="$router.push({name: 'vx.resource.create.resource'})">
      <template #header-title>объекты</template>
      <template #header-amount>{{materialResources.length ? `${materialResources.length}` : ''}}</template>
    </header-add>

    <material-object-ui
        v-for="(resource, index) in materialResources"
        :resource-identifier="resource.identifier"
        :resource-name="resource.name"
        :worker="resource.worker"
        :key="index"
        @onDelete="modalStatus=true"
        @click.native="$router.push({name: 'vx.resource.info', params: {id: resource.id}})"
    />
    <sidebar-filter-ui :status="sidebarFilterStatus" :levels="levels" disable/>

    <modal-base :status="modalStatus"
                @onClose="modalStatus=false"
                class="modal-delete"
                @onOk="$router.push({name: 'vx.resource.material.resources'})">
      <template #title>
        Сохранить изменения?
      </template>
      <template #description>
        Данные не сохраняются автоматически
      </template>
      <template #content>
        <title-caps class="modal-subtitle">Ресурс</title-caps>
        <div class="delete-resource-plate">
          <title-sub>{{materialObjects[0].name}}</title-sub>
          <title-caption>{{materialObjects[0].number}}</title-caption>
        </div>
      </template>
      <template #button-accept>
        Удалить
      </template>
    </modal-base>
  </div>
</template>

<script>
  import Comeback from "@Facade/Navigation/Comeback";
  import HeaderAdd from "@/LTE/Singletons/facades/HeaderAdd";  //// костыль
  import InputSearch from "@Facade/Input/Search";
  import TitleBase from "@Facade/Title/Base"
  import ModalBase from "@Facade/Modal/Base"
  import TitleCaption from "@Facade/Title/Caption"
  import TitleSub from "@Facade/Title/Sub"
  import TitleCaps from "@Facade/Title/Caps"

  import {mapGetters, mapMutations} from "vuex";
  import {SidebarFilterUi, MaterialObjectUi} from '@Providers'

  export default {
    name: 'vx.resource.material.resources',
    components: {
      Comeback,
      HeaderAdd,
      MaterialObjectUi,
      SidebarFilterUi,
      InputSearch,
      TitleBase,
      ModalBase,
      TitleCaption,
      TitleSub,
      TitleCaps
    },
    data() {
      return{
        modalStatus: false,
      }
    },
    methods: {
      ...mapMutations({
        showSidebar: 'Resources/showSidebar',
      }),
    },
    computed: {
      ...mapGetters({
        sidebarFilterStatus: 'Resources/sidebarFilterStatus',
        levels: 'Resources/levels',
        materialResources: 'Resources/materialResources',
        userID: 'getUserID',
        user: 'getUser'
      }),
    },
    created() {
      console.log('this.user', this.user)
      this.$core.execViaComponent('Resources', 'getMaterialResources', this.userID);
    },
    updated() {
      this.$core.execViaComponent('Resources', 'getMaterialResources', this.userID);
    }
  }
</script>

<style lang="scss" scoped>
  .resource-material-resources-view {
    width: 100%;
    .header-text-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .icon-points-vertical {
        height: 16px;
        color: #fff;
        padding: 8px 10px;
        cursor: pointer;
      }
    }
    .facade-input-search {
      margin-bottom: rem(16);
    }
    .facade-header-add {
      padding: rem(8) 0;
      margin-bottom: 4px;
    }
    .modal-delete{
      .delete-resource-plate{
        padding: rem(8) rem(16);
        border-radius: 8px;
        background-color: $grey-scale-400;
        margin-bottom: 12px;
        .facade-title-sub{
          margin-bottom: 4px;
        }
      }
      .facade-title-caps{
        padding: rem(8) 0;
        margin-bottom: 4px;
      }
    }
    .resource-material-object-ui {
      margin-bottom: 8px;
    }
  }
</style>