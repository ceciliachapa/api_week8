import { ref } from "vue";
import axios from "axios";
import { data } from "autoprefixer";

const characters = ref();
const character = ref();

const api = axios.create({
  baseURL: "https://thronesapi.com/api/v2/",
});

export const useAPI = () => {
  const getChars = async () => {
    const response = await api.get("Characters");
    characters.value = response.data;
  };
  const getCharacter = async (id) => {
    const response = await api.get(`Characters/${id}`);
    character.value = response.data;
  };

  getChars();

  return { characters, getChars, character, getCharacter };
};
