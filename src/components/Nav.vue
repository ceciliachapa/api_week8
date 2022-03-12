<template>
  <div class="bg-gray-900 text-yellow-100">
    <div class="container mx-auto flex items-center justify-between">
      <h1 class="tracking-tighter text-3xl font-thin">
        Basic<span class="font-normal">Router</span>
      </h1>
      <nav>
        <ul class="flex space-x-4">
          <router-link to="/">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-500 hover:text-yellow-900
              "
            >
              Home
            </li></router-link
          >
          <router-link :to="{ name: 'About' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-500 hover:text-yellow-900
              "
            >
              About
            </li></router-link
          >
          <router-link :to="{ path: '/hello', name: 'Hello' }">
            <li
              class="
                py-8
                px-4
                hover:cursor-pointer hover:bg-yellow-500 hover:text-yellow-900
              "
            >
              Hello
            </li></router-link
          >
        </ul>
      </nav>
    </div>
  </div>
</template>