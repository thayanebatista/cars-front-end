<template>
  <v-app>
    <main class="bg-[#141415] h-screen text-white p-10">
      <RouterView />
    </main>
  </v-app>
</template>
<script setup lang="ts">
  import { RouterView } from 'vue-router';
</script>
