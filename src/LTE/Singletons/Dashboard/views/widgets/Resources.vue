<template>
  <div  :class="[hideWidget === 'Resources'
  ? (index + 1) % 2 === 0
  ? 'hide-right-widget'
  : 'hide-left-widget' : '',
  'container-dashboard-resources']">
    <widgets-header @show-context="showContext"
                    :title="data.title"
                    :icon="data.icon"/>
    <div class="resources-body">
      <div class="body-coast">
        <span class="coast-total">Общая стоимость ресурсов</span>
        <span class="coast-sum">{{ data.data.coastSum }}₴</span>
      </div>
      <div class="body-coast">
        <span class="coast-total">Количество свободных ресурсов</span>
        <span class="coast-sum">{{ data.data.resourcesSum }}</span>
      </div>
    </div>
    <div class="resources-footer">
      <span>Запросы на ресурс</span>
      <span class="footer-num">{{ data.data.requests }}</span>
    </div>
  </div>
</template>

<script>
import WidgetsHeader from "../../facades/WidgetsHeader";
import {mapGetters} from "vuex";

export default {
  name: "Resources",
  methods: {
    showContext(value) {
      this.$emit('show-context', value, this.data.name)
    },
  },
  components: {
    WidgetsHeader
  },
  props: {
    data: Object,
    index: Number
  },
  computed: {
    ...mapGetters({
      hideWidget: 'getHideWidget'
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/animations.module';
.container-dashboard-resources {
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: $grey-scale-500;
  padding: 16px;
  height: 224px;

  .resources-body {
    display: inherit;

    .body-coast {
      display: inherit;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      padding: 8px;
      background: $grey-scale-400;
      border-radius: 12px;
      width: 100%;
      margin-right: 0;
      margin-left: 8px;

      .coast-total {
        font-size: rem(12);
        line-height: rem(16);
        color: $grey-scale-200;
      }

      .coast-sum {
        font-weight: 600;
        font-size: rem(20);
        color: #FFF;
        margin-top: 5%;
      }

      &:first-child {
        margin-right: 8px;
        margin-left: 0;
      }
    }
  }

  .resources-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    padding: 12px;
    height: 40px;
    background: $grey-scale-400;
    border-radius: 12px;
    margin-top: 6.4%;

    .footer-num {
      text-align: center;
      background: $red;
      border-radius: 10px;
      width: 24px;
      height: 16px;
      font-weight: 600;
      font-size: rem(12);
      margin-left: 2%;
    }
  }
}
</style>

