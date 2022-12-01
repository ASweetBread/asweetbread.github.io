<template>
  <div id="vditor" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Vditor from 'vditor';
import 'vditor/dist/index.css';

const vditor = ref(null);

onMounted(() => {
  vditor.value = new Vditor('vditor', {
    after: () => {
      // vditor.value is a instance of Vditor now and thus can be safely used here
      vditor.value.setValue('Vue Composition API + Vditor + TypeScript Minimal Example');
    },
  });
});
</script>

<style></style>
