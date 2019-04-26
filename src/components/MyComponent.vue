<template>
  <div>
    <span>{{ message }}</span>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      message: 'hello!'
    }
  },
  created() {
    this.message = 'bye!'
  }
}
</script>
