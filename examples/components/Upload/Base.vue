<template>
  <div>
    <LUpload ref="uploadRef" v-bind="uploadConfig" v-model="list"></LUpload>
    <div>{{ list }}</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      uploadConfig: {
        action: '/api/xxxxxx',
        limit: 10
      },
      list: [
        
      ]
    }
  },
  mounted(){
    const imgs = [
      'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
      'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    ]

    this.list = imgs
  },
}
</script>

<style lang="scss" scoped>

</style>
