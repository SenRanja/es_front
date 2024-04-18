<!--
 * @Author: 仙道
 * @Date: 2024-04-07 14:24:41
 * @LastEditTime: 2024-04-11 18:09:20
 * @email: hao.li08@weimob.com
 * @Description: 
 * @FilePath: /es_front/src/components/Dialog.vue
-->
<script setup>
import { ElDialog, ElScrollbar } from 'element-plus'
import { propTypes } from '~/utils/propTypes'
import { computed, useAttrs, ref, unref, useSlots, watch, nextTick } from 'vue'
import { isNumber } from '~/utils/is'
import Icon from '~/components/Icon.vue'
const slots = useSlots()

const props = defineProps({
  modelValue: propTypes.bool.def(false),
  title: propTypes.string.def('Dialog'),
  fullscreen: propTypes.bool.def(true),
  maxHeight: '400px',
  width:'50%'
})

const getBindValue = computed(() => {
  const delArr = ['fullscreen', 'title', 'maxHeight']
  const attrs = useAttrs()
  const obj = { ...attrs, ...props }
  for (const key in obj) {
    if (delArr.indexOf(key) !== -1) {
      delete obj[key]
    }
  }
  return obj
})

const isFullscreen = ref(false)

const toggleFull = () => {
  isFullscreen.value = !unref(isFullscreen)
}

const dialogHeight = ref(isNumber(props.maxHeight) ? `${props.maxHeight}px` : props.maxHeight)

watch(
  () => isFullscreen.value,
  async (val) => {
    await nextTick()
    if (val) {
      const windowHeight = document.documentElement.offsetHeight
      dialogHeight.value = `${windowHeight - 55 - 60 - (slots.footer ? 63 : 0)}px`
    } else {
      dialogHeight.value = isNumber(props.maxHeight) ? `${props.maxHeight}px` : props.maxHeight
    }
  },
  {
    immediate: true
  }
)

const dialogStyle = computed(() => {
  return {
    height: unref(dialogHeight)
  }
})
</script>

<template>
  <ElDialog
    v-bind="getBindValue"
    :fullscreen="isFullscreen"
    destroy-on-close
    lock-scroll
    draggable
    top="0"
    :close-on-click-modal="false"
    :show-close="false"
    :width="width"
  >
    <template #header="{ close }">
      <div class="flex justify-between items-center h-46px pl-15px pr-15px relative">
        <slot name="title">
          {{ title }}
        </slot>
        <div
          class="h-46px flex justify-between items-center absolute  right-15px translate-y-[-50%]"
        >
       
          <el-icon :size="24" class="cursor-pointer is-hover d-icon">
            <component is="Close"/>
          </el-icon>
        </div>
      </div>
    </template>

    <ElScrollbar :style="dialogStyle">
      <slot></slot>
    </ElScrollbar>

    <template v-if="slots.footer" #footer>
      <slot name="footer"></slot>
    </template>
  </ElDialog>
</template>

<style lang="less">
.el-overlay-dialog {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-dialog {
  margin: 0 !important;

  &__header {
    // height: 54px;
    padding: 0;
    margin-right: 0 !important;
    border-bottom: 1px solid var(--el-border-color);
    
  }
  .d-icon{
    color:var(--el-color-primary);
    &:hover{
        background:var(--el-color-primary);
        color:#fff;
    }
  }

  &__body {
    padding: 15px !important;
  }

  &__footer {
    border-top: 1px solid var(--el-border-color);
  }

  &__headerbtn {
    top: 0;
  }
}
</style>