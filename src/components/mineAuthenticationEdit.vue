<template>
    <div class="jk-authen">
        <p class="tit1">请输入真实材料用于认证</p>
        <div class="jk-information-edit">
            <div class="jk-group">
                <div class="jk-group-tit">姓名：</div>
                <div class="jk-group-inputInfo jkInfotr">
                        <input type="input" class="jk-group-select" v-model="name" placeholder="请输入姓名"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">身份证：</div>
                <div class="jk-group-inputInfo jkInfotr">
                    <input type="input" class="jk-group-select"  v-model="idCard" placeholder="请输入身份证号"/>
                </div>
            </div>
            <div class="jk-group"  style="border-bottom:none;">
                <div class="jk-group-inputInfo jkInfotl">
                    <input type="radio" v-model="agree">  我同意  
                    <a href="">《玖快租房认证服务协议》</a>
                </div>
            </div>
        
        </div>

        <div class="jk-bottom">
            <button class="jk-oneBtn-bottom" type="submit" @click="doSubmit">立即授权</button>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
import {Toast} from 'mint-ui';
export default {
    name: 'mineAuthenticationEdit',
    data(){
        return{
            name:'',
            idCard: '',
            agree:''
        }
    },
    methods:{
        doSubmit(){
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
   
            if(!this.name){
                Toast({
                    message: '请填写姓名',
                    position: 'middle',
                    duration: 2000
                });
                return false;
            }else if(!this.idCard){
                Toast({
                    message: '请填写身份证号',
                    position: 'middle',
                    duration: 2000
                });
                return false;
            } else if(reg.test(this.idCard) === false){
                Toast({
                    message: '请输入有效的身份证号码',
                    position: 'middle',
                    duration: 2000
                });
                return false;
            }else if(!this.agree){
                Toast({
                    message: '请同意《玖快租房认证服务协议》',
                    position: 'middle',
                    duration: 2000
                });
                return false;
            }else{
                var sendData = {};
                sendData.name = this.name;
                sendData.idCard = this.idCard;
                sendData.userid = this.GLOBAL.userid;
                this.$http.post(
                    uploadApi,
                    JSON.stringify(sendData),
                    {headers:{'Content-Type':'application/json'}}
                ).then(function (data) {
                    
                })
            }
        }
            
    }
}
</script>