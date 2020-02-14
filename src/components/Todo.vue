<template>
  <div v-bind:style="{maxHeight: '96.3vh', height: '100%', backgroundSize: 'cover', backgroundImage: `url(${background})`}">
    <v-container fluid fill-height pl-0 pr-0 pb-0 pt-0>
      <v-layout row align-space-between justify-space-between>
        <v-flex xs12 >
          <Lists/>
      </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Lists from "./Lists";
export default {
  name: "todo",
  components: { Lists },
};
</script>
