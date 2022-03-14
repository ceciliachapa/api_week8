<script setup>
import { useAPI } from "../composables/getChars";
const { characters, getChars, character, getCharacter } = useAPI();
</script> 

<template>
  <div>
    <div class="flex justify-center p-10 text-slate-700 font-semibold text-3xl">
      Select a character to view more information
    </div>
    <ul class="grid grid-cols-3 gap-12">
      <router-link
        class="
          p-4
          w-auto
          bg-slate-200
          text-center
          rounded-lg
          shadow-2xl
          cursor-pointer
          hover:scale-105
        "
        v-for="character in characters"
        :key="character.id"
        :to="`/character/${character.id}`"
      >
        <div class="flex justify-center">
          <h3 class="text-xl font-semibold text-gray-800 px-4">
            {{ character.fullName }}
            <div class="image_div py-2">
              <img
                class="picture"
                v-bind:src="`${character.imageUrl}`"
                alt=""
              />
            </div>
          </h3>
        </div>
      </router-link>
    </ul>
  </div>
</template> 