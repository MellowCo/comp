<script>
import Form from './components/Form.vue'
import Date from './components/Date.vue'
import Input from './components/Input.vue'
import Select from './components/Select.vue'
import CheckBox from './components/CheckBox.vue'
import Radio from './components/Radio.vue'
import Event from './components/Event.vue'
import Vif from './components/Vif.vue'
import Vifs from './components/Vifs.vue'
import MyTable from './components/Table.vue'

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
  },
}
</script>

<template>
  <div id="app">
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
</style>
