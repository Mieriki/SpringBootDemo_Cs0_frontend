<template>
	<div style="text-align: center; margin: 0 20px;">
		<div style="margin-top: 150px;">
			<div style="font-size: 25px; font-weight: bold;">登录</div>
			<div style="font-size: 14px; color: gray; margin-top: 5px;">在进入系统之前，请先输入用户名和密码登录</div>
		</div>
		<div style="margin-top: 50px;">
			<el-form :model="form" :rules="rules" ref="formRef">
				<el-form-item prop="username">
					<el-input v-model="form.username" maxlength="25" type="text" placeholder="用户名/邮箱">
						<template #prefix>
							<el-icon><User/></el-icon>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="form.password" maxlength="25" type="password" placeholder="密码">
						<template #prefix>
							<el-icon><Lock/></el-icon>
						</template>
					</el-input>
				</el-form-item>
				<el-row>
					<el-col :span="12" style="text-align: left;">
						<el-form-item prop="remember">
							<el-checkbox v-model="form.remember" label="记住我" />
						</el-form-item>
					</el-col>
					<el-col :span="12" style="text-align: right;">
						<el-link href="/forgot-password">忘记密码？</el-link>
					</el-col>
				</el-row>
			</el-form>
		</div>
		<div style="margin-top: 40px;">
			<el-button @click="userLogin" style="width: 270px;" type="success" plain>登录</el-button>
		</div>
		<el-divider>
			<span style="font-size: 13px; color: gray;">没有账号</span>
		</el-divider>
		<div>
			<el-button style="width: 270px;" type="warning" plain>立即注册</el-button>
		</div>
	</div>
</template>

<script setup>
	import { User, Lock } from '@element-plus/icons-vue'
	import router from "@/router";
	import { reactive, ref } from "vue";
	import { login } from '@/net'

	const formRef = ref()
	const loginLoading = ref(false)

	const form = reactive({
	  username: '',
	  password: '',
	  remember: false
	})

	const rules = {
	  username: [
		{ required: true, message: '请输入用户名' }
	  ],
	  password: [
		{ required: true, message: '请输入密码'}
	  ]
	}

	function userLogin() {
	  formRef.value.validate((isValid) => {
		if(isValid) {
		  loginLoading.value = true;
		  login(form.username, form.password, form.remember, () => {
			router.push("/index");
			loginLoading.value = false;
		  })
		}
	  });
	}
</script>

<style>
</style>