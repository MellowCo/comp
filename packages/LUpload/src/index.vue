<!--
 * @Author: licl
 * @Date: 2022-06-16 09:54:49
 * @LastEditTime: 2022-10-18 15:49:36
 * @LastEditors: licl
 * @Description: 图片上传
-->
<template>
  <div>
    <el-upload
      v-bind="$attrs"
      :limit="limit"
      list-type="picture-card"
      :file-list="imgs"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-exceed="handleExceed"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>

function getWebImgs(fileList){
  return fileList.map(file => {
    const { url, response } = file

    if(url.startsWith('http')){
      return url
    }else{
      const { data } = response || {}
      return data.filePath
    }
  })
}

export default {
  name: 'LUpload',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    limit: {
      type: Number,
      default: 1
    },
    transform: {
      type: Function,
      default: getWebImgs
    }
  },
  data(){
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      imgs: []
    }
  },
  methods: {
    setDefaultImgs(imgs){
      this.imgs = imgs.map((img) => ({
        url: img
      }))
    },
    clearImgs(){
      this.imgs = []
      this.$emit('input', [])
    },
    handleRemove(_file, fileList){
      this.$emit('input', this.transform(fileList))
    },
    handleSuccess(_response, _file, fileList){
      this.$emit('input', this.transform(fileList))
      this.$emit('onSuccess')
    },
    handlePictureCardPreview(file){
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleExceed(){
      this.$message.error(`只能上传${this.limit}张图片`)
    }
  },
  mounted(){
    if(this.value.length > 0){
      this.setDefaultImgs(this.value)
    }else{
      let unwatch = null
      // 初始化设置默认值
      unwatch = this.$watch(
        'value',
        function(newValue){
          this.setDefaultImgs(newValue)
          if(unwatch){
            unwatch()
          }
        },
        { immediate: true }
      );
    }
  },
}
</script>
