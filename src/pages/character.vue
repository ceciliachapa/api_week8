<script setup>
import { useRoute } from "vue-router";
import { useAPI } from "../composables/getChars";

const route = useRoute();

const { id } = route.params;

const { character, getCharacter } = useAPI();

getCharacter(id);
</script> 

<template>
  <div class="mx-auto justify-center">
    <h1 class="text-5xl font-semibold text-gray-800 px-4 text-center p-4">
      {{ character.fullName }}
    </h1>

    <p class="image_div py-5 flex justify-center">
      <img class="picture" v-bind:src="`${character.imageUrl}`" alt="" />
    </p>
    <div class="flex justify-center py-15 text-2xl">
      <div>
        <p>
          First Name:
          <span class="font-semibold underline">
            {{ character.firstName }}
          </span>
        </p>
        <p>
          Last Name:
          <span class="font-semibold underline">{{ character.lastName }}</span>
        </p>
        <p>
          Title:
          <span class="font-semibold underline">{{ character.title }}</span>
        </p>
        <p>
          Family:
          <span class="font-semibold underline">{{ character.family }}</span>
        </p>
      </div>
    </div>
  </div>
</template>