<script>
import Form from './components/Form/Form.vue'
import Date from './components/Form/Date.vue'
import Input from './components/Form/Input.vue'
import Select from './components/Form/Select.vue'
import CheckBox from './components/Form/CheckBox.vue'
import Radio from './components/Form/Radio.vue'
import Event from './components/Form/Event.vue'
import Vif from './components/Form/Vif.vue'
import Vifs from './components/Form/Vifs.vue'
import MyTable from './components/Table/Table.vue'
import SlotTable from './components/Table/SlotTable.vue'
import BtnsTable from './components/Table/BtnsTable.vue'
import PageTable from './components/Table/PageTable.vue'
import ImgTable from './components/Table/ImgTable.vue'
import Method from './components/Table/Method.vue'
import BaseContent from './components/Content/Base.vue'
import FM from './components/Modal/Form.vue'

export default {
  name: 'App',
  components: {
    Form,
    Date,
    Input,
    Select,
    CheckBox,
    Radio,
    Event,
    Vif,
    Vifs,
    MyTable,
    SlotTable,
    BtnsTable,
    PageTable,
    ImgTable,
    Method,
    BaseContent,
    FM
  },
}
</script>

<template>
  <div id="app">
    <FM />
    <BaseContent />
    <Method />
    <ImgTable />
    <PageTable />
    <BtnsTable />
    <SlotTable />
    <MyTable />
    <Vifs />
    <Vif />
    <Event />
    <Form />
    <Date />
    <Input />
    <Select />
    <CheckBox />
    <Radio />
  </div>
</template>

<style>
#app {
  margin-top: 60px;
  height: 100%;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
