import axios from "axios";
import { ElMessage } from "element-plus";

const authItemName = "authorize";

const defaultFailure = (code, url, message) => {
    console.warn(`url: ${url}\n code: ${code}\n error message: ${message}`);
    ElMessage.warning(message);
};

const defaultError = (err) => {
    console.error(err);
    ElMessage.warning(`发生了一些错误，请联系管理员`);
};

function takeAccessToken() {
    const str = localStorage.getItem(authItemName) || sessionStorage.getItem(authItemName);
    if(!str) return null;
    const authObj = JSON.parse(str);
    if(new Date(authObj.expire) <= new Date()) {
        deleteAccessToken();
        ElMessage.warning("登录状态已过期，请重新登录！");
        return null;
    }
    return authObj.token;
}

function storeAccessToken(remember, token, expire){
    const authObj = {
        token: token,
        expire: expire
    };
    const str = JSON.stringify(authObj);
    if(remember)
        localStorage.setItem(authItemName, str);
    else
        sessionStorage.setItem(authItemName, str);
}

function deleteAccessToken() {
    localStorage.removeItem(authItemName);
    sessionStorage.removeItem(authItemName);
}

function internalPost(url, data, header, success, failure, error = defaultError) {
    axios.post(url, data, {
        headers: header
    }).then(({data}) => {
        if (data.code === 200) {
            success(data.data);
        } else {
            failure(data.code, url, data.message);
        }
    }).catch(err => error(err));
}

function internalGet(url, header, success, failure, error = defaultError) {
    axios.get(url, {
        headers: header
    }).then(({data}) => {
        if (data.code === 200) {
            success(data.data);
        } else {
            failure(data.code, url, data.message);
        }
    }).catch(err => error(err));
}

function login(username, password, remember, success, failure = defaultFailure){
    internalPost('/api/auth/login', {
        username: username,
        password: password
    }, {
        'Content-Type': 'application/x-www-form-urlencoded'
    }, (data) => {
        storeAccessToken(remember, data.token, data.expire);
        ElMessage.success(`登录成功，欢迎 ${data.username}`);
        success(data);
    }, failure);
}

export { login };