<template>
  <div class="resource-editing-intangible-view">
    <comeback @onClick="$router.push({name: 'vx.resource.intangible.resource.info'})"/>
    <title-base>Редактировать ресурс</title-base>
    <div class="resource-main-plate">
      <input-base :model="resource.name" labeled :placeholder="'Название'" @onInput="setValue('name', $event)"/>
      <input-base :model="resource.url" labeled :placeholder="'URL'" @onInput="setValue('url', $event)"/>
      <input-base :model="resource.login" labeled :placeholder="'Логин'" @onInput="setValue('login', $event)"/>
      <input-password :model="resource.password" labeled :placeholder="'Пароль'" @onInput="setValue('password', $event)"/>
      <text-area :model="resource.description" labeled :placeholder="'Описание (не обязательно)'" :max-length="1000" @onInput="setValue('description', $event)" />
    </div>
    <div class="create-resource-buttons">
      <button-secondary class="create-resource-button">Отмена</button-secondary>
      <button-base class="create-resource-button" :disable="buttonDisable" @click.native="addResource">
        Сохранить
      </button-base>
    </div>
  </div>
</template>

<script>
import Comeback from "@Facade/Navigation/Comeback";
import TitleBase from "@Facade/Title/Base";
import InputBase from "@Facade/Input/Base"
import TextArea from "@Facade/Input/TextArea"
import ButtonSecondary from "@Facade/Button/Secondary"
import ButtonBase from "@Facade/Button/Base"
import InputPassword from "@Facade/Input/Password"

export default {
  name: 'vx.resource.editing.intangible',
  components: {
    Comeback,
    TitleBase,
    InputBase,
    TextArea,
    ButtonSecondary,
    ButtonBase,
    InputPassword
  },
  data() {
    return{
      resource: null,
      resources: [
        {
          id: 1,
          name: 'facebook account',
          url: 'facebook.com/29kadgdbsi9a_21g3_1%_ab',
          login: 'jerronvymex@vymex.com',
          password: 'Abra_Kadabra',
          description: 'Тестовый аккаунт для рекламных сайтов, что бы мы лучше понимали рынок земли и продажи алюминия, радости вам и хорошего настроения',
        }
      ]
    }
  },
  created() {
    console.log(this.$route.params.resourceId)
    this.resource = this.resources.find(el => el.id === this.$route.params.resourceId)
  },
  methods: {
    setValue(stage, data){
      if(data) {
        this.resource[`${stage}`] = data
      } else {
        this.resource[`${stage}`] = null
      }
    },
    addResource(){
      if (!this.buttonDisable){
        this.$router.push({name: 'vx.resource.intangible.resources'})
      }
    }
  },
  computed:{
    buttonDisable(){
      if(this.resource.name && this.resource.url && this.resource.login){
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.resource-editing-intangible-view {
  width: 100%;
  .facade-title-base {
    text-align: center;
    margin-bottom: rem(36);
  }
  .resource-main-plate {
    width: 100%;
    margin-bottom: rem(36);
    padding: 48px 164px 52px;
    box-sizing: border-box;
    background-color: $grey-scale-500;
    border-radius: 16px;
    .facade-input-base {
      border-width: 1px;
      margin-bottom: rem(16);
    }
    .facade-input-password::v-deep{
      margin-bottom: rem(16);
      .facade-input-base{
        border-width: 1px;
      }
    }
    .facade-text-area::v-deep {
      margin-bottom: rem(16);

      .textarea-title{
        font-size: 15px;
        line-height: 20px;
      }
      .textarea-container{
        min-height: 96px;
      }
    }
    .facade-title-caps {
      margin-bottom: rem(16);
    }
    .facade-input-price {
      margin-bottom: rem(24);
    }
    .user {
      margin-bottom: 24px;
    }
    .owner.facade-header-add::v-deep {
      padding: rem(8) 0;
      margin-bottom: rem(4);
      .icon-add {
        display: none;
      }
    }
    .facade-resource-company {
      margin-bottom: rem(24);
    }
  }
  .create-resource-buttons {
    display: flex;
    justify-content: space-between;
    .create-resource-button {
      width: 222px;
    }
    .facade-button-base::v-deep {
      font-size: 15px;
      &[disable] {
        background-color: $grey-scale-400;
      }
    }
  }
}
</style>