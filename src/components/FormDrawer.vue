<template>
  <el-drawer v-model="showDrawer" :title="title" :size="size" :close-on-click-modal="false"
             :destroye-on-close="destroyeOnClose">

    <div class="formDrawer">
      <div class="body">
        <slot></slot>
      </div>
      <div class="actions">
        <el-button type="primary" @click="submit" :loading="loading">{{ confirmText }}</el-button>
        <el-button type="default" @click="close">取消</el-button>
      </div>
    </div>

  </el-drawer>
</template>

<script setup>
import {ref} from "vue"

const showDrawer = ref(false)

const props = defineProps({
  title: String,
  size: {
    type: String,
    default: '60%'
  },
  destroyeOnClose: {
    type: Boolean,
    default: false
  },
  confirmText: {
    type: String,
    default: '提交'
  },
})

const loading = ref(false)
const showLoading = () => loading.value = true
const hideLoading = () => loading.value = false

// 打开
const open = () => showDrawer.value = true

// 关闭
const close = () => showDrawer.value = false

// 提交
const emit = defineEmits(['submit'])
const submit = () => emit("submit")

// 向父组件暴露的方法
defineExpose({
  open,
  close,
  showLoading,
  hideLoading
})

</script>

<style>
.formDrawer {
  height: 100%;
  width: 100%;
  position: relative;

  @apply flex flex-col;
}

.formDrawer .body {
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 50;
  overflow-y: auto;
}

.formDrawer .actions {
  height: 50px;
  @apply mt-auto flex items-center;
}
</style>