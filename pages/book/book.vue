<template>
	
</template>

<script>
	import { defineComponent } from 'vue';
	export default defineComponent({
		setup() {
			uni.request({
				url: '',
				method: 'GET',
				data: {},
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		}
	})
</script>

<style>
</style>
