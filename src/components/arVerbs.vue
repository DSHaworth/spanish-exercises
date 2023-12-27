<template>
  <div>
    <pre><code>{{JSON.stringify(jsonData, null, 2)}}</code></pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataContext from '@/javascript/dataContext.js';

const jsonData = ref(null);

onMounted(async () => {
    try {
        jsonData.value = await DataContext.getJsonFile('ar-verbs');
    } catch (error) {
        console.error(`Error in onMounted hook: ${error}`);
    }
});

</script>