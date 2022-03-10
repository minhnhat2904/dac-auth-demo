<template>
  <div class="alert alert-danger" role="alert">
      {{ error }}
  </div>
</template>

<script>
export default {
    name: 'ErrorComponent',
    props: ['error']
}
</script>

<style>
.alert {
    height: 30px !important;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
}
</style>