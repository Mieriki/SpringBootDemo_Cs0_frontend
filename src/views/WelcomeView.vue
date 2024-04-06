<template>
	<div class="soto">
		<div class="sotu-back">
			<el-image style="width: 100%; height: 100%;" fit="cover"  
				src="src/assets/welcome.png"></el-image>
		</div>
		<div class="welcome-title">
			<div style="font-size: 30px; font-weight: bold;">你有这么高速运转的机械进入中国，记住我给出的原理</div>
			<div style="margin-top: 10px;">小的时候,就是研发人 就是研发这个东西的原理是阴间政权管着,知道为什么有生灵给他运转</div>
			<div style="margin-top: 5px;">先位还有还有专门饲养这个,为什么地下产这种东西,它管着它说是五世同堂旗下子孙,你以为我跟你闹着玩呢,你不你不你不警察吗,黄龙江一派全都带蓝牙</div>
		</div>
		<div class="right-card">
			<router-view/>
		</div>
	</div>
</template>

<script setup>
</script>

<style>
	.soto {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		display: flex;
	}
	
	.sotu-back {
		flex: 1;
		background-color: #000000;
	}
	
	.right-card {
		width: 400px;
		z-index: 1;
		background-color: #ffffff;
	}
	
	.welcome-title {
		position: absolute;
		bottom: 30px;
		padding-left: 30px;
		padding-right: 430px;
		background-color: #ffffffAA;
		text-shadow: 0 0 10px #ffffff;
	}
</style>