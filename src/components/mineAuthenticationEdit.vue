<template>
    <div class="jk-authen">
        <form action="" :submit="doSub" enctype='multipart/form-data'>
            <p class="tit1">请输入真实材料用于认证</p>
            <div class="jk-information-edit">
                <div class="jk-group">
                    <div class="jk-group-tit">姓名：</div>
                    <div class="jk-group-inputInfo jkInfotr">
                            <input type="input" class="jk-group-select"  name="" id="" placeholder="请输入姓名"/>
                    </div>
                </div>
                <div class="jk-group">
                    <div class="jk-group-tit">身份证：</div>
                    <div class="jk-group-inputInfo jkInfotr">
                        <input type="input" class="jk-group-select"  name="" id="" placeholder="请输入身份证号"/>
                    </div>
                </div>
                <div class="jk-group"  style="border-bottom:none;">
                    <div class="jk-group-inputInfo jkInfotl">
                        <input type="radio" name="" id="">  我同意  
                        <a href="">《玖快租房认证服务协议》</a>
                    </div>
                </div>
            
            </div>

            <div class="jk-bottom">
                <button class="jk-oneBtn-bottom" type="submit">立即授权</button>
            </div>

        </form>
        
    </div>
</template>
<script type="text/ecmascript-6">
import config from '../js/config'
export default {
    name: 'mineAuthenticationEdit',
    metheds:{
        doSub(){
            console.info(11);
        }
    }
}
</script>