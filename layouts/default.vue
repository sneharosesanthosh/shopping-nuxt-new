<template>
  <div class="app">
    <NavBar />
    <PageHeader />
    <nuxt />
    <PageFooter />
  </div>
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Shopping Site',
      meta: [
        {
          hid: 'Description',
          name: 'Description',
          content: 'Your friendly shopping site',
        },
      ],
    }
  },
  
}
</script>
