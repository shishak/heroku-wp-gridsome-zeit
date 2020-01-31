<template>
  <div>
    <h2 v-html="post.title"/>
    <g-link :to="post.path">Read More, here</g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
