<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import Todo from './components/Todo'

export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>