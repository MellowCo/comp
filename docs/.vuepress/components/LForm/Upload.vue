<script>
function transform(fileList){
  return fileList.map(file => {
    const { url, response } = file

    if(url.startsWith('http')){
      return url
    }else{
      const { id } = response || {}
      return `${id}`
    }
  })
}

export default {
  data(){
    return {
      formConfig: {
        data: {
          imgs: [],
        },
        formItem: [
          {
            comp: 'upload',
            prop: 'imgs',
            label: 'imgs',
            span: 6,
            action: 'https://jsonplaceholder.typicode.com/posts/',
            limit: 5,
            transform
          }
        ],
      },
    }
  },
}
</script>

<template>
  <div>
    <LForm v-bind="formConfig" />
    <div style="margin-top: 20">
      {{ formConfig.data }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
