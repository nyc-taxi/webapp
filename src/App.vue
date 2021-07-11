<template>
  <v-app>
    <v-app-bar
      app
      color="rgb(251, 198, 58)"
      dark
    >
      <v-img
        class="shrink"
        :src="require('@/assets/nyc_taxi_logo.png')"
        transition="scale-transition"
        width="150"
      />
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
