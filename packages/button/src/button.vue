<template>
  <button
    class="hw-button"
    @click="handleClick"
  >
  </button>
</template>

<script>
export default {
  name: 'HwButton',
  props: {

  },
  computed: {

  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
}
</script>

