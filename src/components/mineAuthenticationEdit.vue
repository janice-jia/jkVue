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
import config from '../js/config'
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
            console.info(this.name)
            return false;
        }
    }
}
</script>