<template>
  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/Octaver2131" target="_blank">
          GitHub ©2025 欧可可
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue";
// import { getCurrentUser } from "@/api/user";
//
// getCurrentUser().then((res) => {
//   console.log(res);
// });
</script>

<style scoped>
#basicLayout .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
}
#basicLayout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fefefe, #fff);
}

#basicLayout .header {
  background: #fff;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
</style>
