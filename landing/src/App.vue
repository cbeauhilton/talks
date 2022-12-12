<script setup>
import topics from '../../topics/topics'
</script>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .card .card-logo {
    height: 125px;
  }
</style>

<template>
    <div class="flex flex-wrap">
      <div class="sm:w-1/3 w-1/2 flex flex-col" v-for="topic in topics" v-bind:key="topic.title">
        <div class="mb-0 sm:mb-0 lg:mb-0 m-2 sm:m-6 lg:m-8 border-3 rounded-xl border-gray-800 card">
          <div class="card-image text-center m-4">
            <img
              :src="topic.logo"
              alt="Logo"
              class="w-m inline-block card-logo"
            >
          </div>
          <div class="card-content bg-gray-700">
            <h3 class="m-4">
              <a :href="topic.route" class="text-lg text-white-500">
                {{ topic.title }}
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
</template>

