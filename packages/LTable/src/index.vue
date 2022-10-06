<script>
import { Table, TableColumn } from 'element-ui'
import { defaultPageConfig, defaultTableConfig } from './config'

export default {
  name: 'LTable',
  components: {
    Table, TableColumn
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    pageConfig: {
      type: Object,
      default: () => {},
    },
    showPage: {
      type: Boolean,
      default: true,
    },
    config: {
      type: Object,
      default: () => {},
    },
  }, 
  data(){
    return {
      defaultPageConfig, defaultTableConfig
    }
  },
}
</script>

<template>
  <div>
    <Table
      :data="data"
      v-bind="{ ...defaultTableConfig, ...config }"
    >
      <TableColumn
        v-for="(column, index) in columns"
        :key="index"
        v-bind="column"
        v-on="$attrs"
      >
        <template
          v-if="column.slotName"
          #default="{ row }"
        >
          <slot
            :row="row"
            :name="column.slotName"
          />
        </template>
      </TableColumn>
    </Table>

    <div
      v-if="showPage"
      style="margin-top: 24px;text-align: right;"
    >
      <el-pagination
        v-bind="{ ...defaultPageConfig, ...pageConfig }"
        @size-change="$emit('sizeChange', $event)"
        @current-change="$emit('currentChange', $event)"
      />
    </div>
  </div>
</template>

