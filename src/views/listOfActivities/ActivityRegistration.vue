<template>
    <div class="registrationItem">
        <x-header title="活动报名"></x-header>
        <div class="form">
            <div class="form-title">2018残障青年"伙伴"宣讲会</div>
            <div class="form-control">
                <label>姓名:</label>
                <input placeholder="请输入姓名" v-model="userName" required/>
            </div>
            <div class="form-control">
                <label>手机号:</label>
                <input type="number" v-model="phoneNo" placeholder="请输入手机号" pattern="[0-9]*" oninput="if(value.length > 11) value = value.slice(0,11)" required/>
            </div>
            <div class="form-control">
                <label>邮箱:</label>
                <input v-model="mail" placeholder="请输入邮箱" pattern="/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/" required/>
            </div>
            <div class="form-button">
                <button @click="jump">报名</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Header from "@/components/Header"
export default {
    data(){
        return{
            userName: "",
            phoneNo: "",
            mail: ""
        }
    },
    components: {
        'x-header': Header,
    },
    created(){
         
    },
    mounted(){
        var lImg = document.getElementsByClassName("registrationItem");
        var screenHeight = window.screen.height;
        lImg[0].style.height = screenHeight+"px";
    },
    methods: {
        jump(){
            this.$router.push({name:"eventSuccess"});
            axios.post('http://103.229.213.219:8086/yabuli/api/activity/saveAttendActivity', {
                params: {
                    userId: 1,
                    activityId: 1,
                    name: this.userName,
                    phone: this.phoneNo,
                    mail: this.mail
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>
<style lang="scss" scoped>
.registrationItem{
    background-color: #2C9EF2;
}
.form{
    padding-left: 18px;
    padding-right: 18px;
    .form-title{
        padding-top: 68px;
        margin-bottom: 38px;
        text-align: center;
        font-size: 20px;
        color: white;
    }
}
.form-control{
    display: flex;
    color: white;
    font-size: 13px;
    border-bottom: 1px solid white;
    label{
        line-height: 40px;
    }
    input{
        flex: 1;
        margin-left: 5px;
        background-color: #2C9EF2;
        border: none;
        text-align: right;
        outline: none;
    }
    input::-webkit-input-placeholder{
        color: white;
    }
}
.form-button{
    margin-top: 305px;
    text-align: center;
    button{
        width: 100%;
        height: 40px;
        background-color: #FFAD5D;
        color: white;
        font-size: 18px;
        border-radius: 10px;
        outline: none;
    }
}
</style>
