<template>
    <div class="jk-lookbox">
    	<div class="jk-lookcon">
                <div class="jk-lookconImg">
                    <!--<img src="./images/recommend.jpg" alt="" />-->
                </div>
                <div class="jk-lookDesc">
                    <div class="jkFlex">
                        <p class="tit">[订]新悦家园-3居</p>
                        <p class="price">1830元/月</p>
                        <p class="info">
                            <span>14㎡</span>
                            <span>2/6层</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="jk-lookadd">
                <p class="jk-loonaddInfo">联系人信息</p>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">姓名</div>
                    <div class="jkFlexItem tr">
                        吴凡
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">性别</div>
                    <div class="jkFlexItem">
                        <div class="jk-checkBoxSkin jk-checkBoxVal">
                            <input id="sex" class="jk-checkbox" name="check" type="checkbox" checked disabled="disabled"/>
                            <label for="sex" class="trigger"></label>
                            <span class="jk-checkbox-checkVal1">男士</span>
                            <span class="jk-checkbox-checkVal2">女士</span>
                        </div>
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">手机</div>
                    <div class="jkFlexItem tr">
                        13109785643
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">期望看房时间</div>
                    <div class="jkFlexItem tr">
                        随时/全天
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
    import indexJs from	'../js/index';
    import configJs from '../js/config'; 
    
	export default{
		name:'mineOrderInfo',
		data(){
			return{
                houseId:'',
                userId:configJs.config.userId,

			}
		},
		created(){

		},
		mounted(){
		},
		methods:{
			
		}
	}
	
</script>

<style>
</style>