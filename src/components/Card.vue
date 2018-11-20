<template>
  <div>
    Card
    <div v-if="loading">loading card...</div>
    <div v-else>
      cid:{{cid}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data () {
      return {
        cid: 0,
        loading: false,
      }
    },
    watch: {
      '$route': {
        handler: 'fetchData',
        immediate: true,
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.cid = this.$route.params.cid
        }, 500)
      }
    },
  }
</script>

<style scoped>

</style>
