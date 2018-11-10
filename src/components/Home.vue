<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">loading...</div>
      <div v-else>
        Api reulst : {{apiRes}}
      </div>
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
        <li>
          <router-link to="/b/3">Board 3</router-link>
        </li>
        <li>
          <router-link to="/b/4">Board 4</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading : false,
        apiRes: ''
      }
    },
    created() {
      this.fetchData();
    },
    methods: {

      fetchData() {
        this.loading = true;
        const req = new XMLHttpRequest();

        req.open('GET', 'http://localhost:3000/health');

        req.send()

        req.addEventListener('load', () => {
          this.loading = false;
          this.apiRes = {
            status: req.status,
            statusText: req.statusText,
            response: JSON.parse(req.response)
          }
        })
      }
    },
    name: "Home"
  }
</script>

<style scoped>

</style>
