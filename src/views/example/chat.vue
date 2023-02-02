<template>
  <div class="page_chat">
    <zl-chat />
  </div>
</template>

<script>
import ZlChat from '@/components/zl-chat/chat'
import { mapGetters } from 'vuex'
export default {
  components: {
    ZlChat
  }
}
</script>

<style lang="scss" scoped>
.page_chat {
	height: 100%;
  padding: 10px;
	box-sizing: border-box;
}
</style>
