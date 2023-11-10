<template>
  <div class="contributor-panel">
    <ContributorCard
      class="contrib-card"
      v-for="contributor in state.contributors"
      :link="contributor.html_url"
      :img-url="contributor.avatar_url"
      :name="contributor.login"
      :title="contributor.login"
    />
    <ContributorCard
      class="contrib-card"
      v-for="contributor in state.manualContributors"
      :link="contributor.html_url"
      :img-url="contributor.avatar_url"
      :name="contributor.login"
      :title="contributor.login"
    />
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";
import ContributorCard from "../components/ContributorCard.vue";

const state = reactive({
  contributors: [],
  manualContributors: [],
});

// 通过 GitHub API 获取贡献者列表
const getContributors = () => {
  axios
    .get("https://api.github.com/repos/ssegsa/ssegsa.github.io/contributors")
    .then((response) => {
      // 请求成功回调
      state.contributors = response.data;
    })
    .catch((error) => {
      // 请求异常回调
      console.log(error);
    });
};

// 获取手动添加的贡献者名单（位于/docs/public/contributors.json里）
const getManualContributors = () => {
  let contributorsJsonUrl = new URL(`/contributors.json`, import.meta.url).href;
  axios
    .get(contributorsJsonUrl)
    .then((response) => {
      console.log(response);
      // 请求成功回调
      state.manualContributors = response.data;
    })
    .catch((error) => {
      // 请求异常回调
      console.log(error);
    });
};

onMounted(() => {
  getContributors();
  getManualContributors();
});
</script>

<style scoped>
.contributor-panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
}

.contrib-card {
  margin: 5px;
}
</style>
