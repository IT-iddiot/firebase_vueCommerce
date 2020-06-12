<template>
  <div class="home">
    <navbar></navbar>
    <welcome></welcome>
  </div>
</template>

<script>
// @ is an alias to /src
import welcome_section from "@/sections/welcome_section.vue";

export default {
  name: "Home",
  components: {
    welcome : welcome_section
  }
};
</script>
