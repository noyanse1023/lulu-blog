<template>
	<div class="tags">
		<el-button @click="visible = true">Button</el-button>
	    <el-dialog :visible.sync="visible" title="Hello world">
	      <p>Try Element</p>
	    </el-dialog>
	</div>
</template>
<script>
export default {
	data() {
		return { visible: false }
	}
}
</script>
<style scoped>
.tags{
	margin:200px;
}
</style>