<template>
  <unit-ui class="su-checkbox" v-bind="$props" @click.native="$emit('onClick')">
    <div class="structure-unit-checkbox">
      <input-checkbox :model="model" :view-type="viewType"/>
    </div>
  </unit-ui>
</template>

<script>
  import UnitUi from './unit.ui'
  import InputCheckbox from '@Facade/Input/Checkbox'
  import Mixin from './mixin'

  export default {
    name: 'Company.Structure.UnitSetting.Ui',
    components: {UnitUi, InputCheckbox},
    mixins: [Mixin],
    props: {
      model: {
        type: Boolean,
        required: true
      },
      viewType: Number
    },
    data: () => ({
      modalSettingList: false
    })
  }
</script>
