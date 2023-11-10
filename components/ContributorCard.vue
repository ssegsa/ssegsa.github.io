<template>
  <div class="contributor-card">
    <a :href="link" target="_blank">
      <img class="avatar" :src="imgUrl" :alt="name" />
      <div class="name">
        <sub><b>{{ name }}</b></sub>
      </div>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  link: {
    type: String,
  },
  imgUrl: {
    type: String,
  },
  name: {
    type: String,
  },
});

const onClick = () => {};
</script>

<style scoped>
.contributor-card {
  width: 80px;
  border-radius: 5px;
  border: 1px solid var(--vp-c-bg-soft);
  padding: 5px;
  background-color: var(--vp-c-bg-soft);
}

.contributor-card:hover {
  border: 1px solid var(--vp-c-indigo-1);
}

.avatar {
  margin: 0 auto;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 3px;
}

.name {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
