<script setup>
import { useRoute } from "vue-router";
import { useAPI } from "../composables/getChars";

const route = useRoute();

const { id } = route.params;

const { character, getCharacter } = useAPI();

getCharacter(id);
</script> 

<template>
  {{ character }}
</template>