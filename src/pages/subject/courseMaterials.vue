<template>
    <!-- 课程资料模块 -->
    <div class="w-full">
        <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="handleTabClick">
            <el-tab-pane label="视频" name="video">
                <!-- 如果没有视频就展示提示缺省页面 -->
                <!-- 如果有视频 就展示视频列表 -->
            </el-tab-pane>
            <el-tab-pane label="文档" name="docs">文档</el-tab-pane>
            <el-tab-pane label="试题" name="paper">试题</el-tab-pane>
         </el-tabs>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue';
    const activeTab = ref('first');
    const handleTabClick = (tab, event) => {
        console.log(tab, event);
    }
</script>

<style lang="less" scoped>

</style>