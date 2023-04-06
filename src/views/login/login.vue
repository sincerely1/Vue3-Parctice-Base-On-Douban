<template>
    <div class="login-container">
        <div class="login-content">
            <div class="login-logo"></div>
            <div class="login-title">用户登陆</div>
            <div class="input-wrap">
                <div><input class="login-input" type="text" placeholder="手机号 / 邮箱" v-model="loginInfo.username" /></div>
                <div><input class="login-input" type="password" placeholder="密码" v-model="loginInfo.password" /></div>
                <div class="login-btn" @click="login">登陆</div>
            </div>
            <div class="error-tips" v-if="loginInfo.errorInfo">用户名或密码错误</div>
            <div class="tips">text/abc123</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    beforeRouteEnter(to, from, next) {
        {
            next(vm => {
                // 获取vm this得到上一个页面路由from
                vm.prevRoute = from;
            })
        }
    }
}
</script>
<script setup>
import { reactive, ref, computed, onMounted, getCurrentInstance } from 'vue'
import { useDataStore } from '../../stores/dataStore'
import { useRouter } from 'vue-router';
const preRouter = ref(null)
let loginInfo = reactive({
    username: '',
    password: '',
    errorInfo: false
})
const userInfo = {
    nickname: 'text',
    age: 20,
    username: '',
    avatar: 'https://qiniu.nihaoshijie.com.cn/images/image-1559844211742.jpeg'
}
const store = useDataStore()
const router = useRouter()

function login() {
    // 验证用户名密码
    if (loginInfo.username == 'text' && loginInfo.password == 'abc123') {
        store.setUser(userInfo)
        loginInfo.errorInfo = false
        if (router.prevRoute) {
            router.push(router.prevRoute)
        }
        else{
            router.push('/home')
        }
    } else {
        loginInfo.errorInfo = true
    }
}

</script>
<style scoped lang="less">
.login-container {
    overflow: hidden;
}

.login-content {
    min-height: 300px;
    width: 340px;
    padding: 50px 30px 100px;
    margin: 0 auto;
    margin-top: 100px;
    overflow: hidden;
    position: relative;
    background: #fff;
    border: 1px solid #d8d8d8;
}

.login-title {
    border-bottom: 2px solid #494949;
    color: #333;
    font-weight: 600;
    font-size: 18px;
    width: 150px;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 20px;
}

.login-logo {
    width: 225px;
    height: 44px;
    ;
    margin: 0 auto;
    background-size: cover;
    background-image: url('./imgs/logo.png');
}

.input-wrap {
    text-align: center;
}

.login-input {
    width: 280px;
    font-size: 13px;
    padding: 10px;
    border-radius: 3px;
    box-sizing: border-box;
    border: 1px solid #e4e6e5;
    -webkit-tap-highlight-color: rgba(255, 0, 0, 0);
    background: transparent;
    outline: none;
    margin-top: 7px;
}

.login-btn {
    width: 280px;
    height: 36px;
    border-radius: 3px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    line-height: 36px;
    text-align: center;
    outline: 0;
    cursor: pointer;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #41ac52;
}

.tips {
    margin-top: 10px;
    color: #ddd;
    text-align: center;
}

.error-tips {
    color: red;
    text-align: left;
    width: 280px;
    margin: 0 auto;
}
</style>