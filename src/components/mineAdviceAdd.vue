<template>
	<div class="jk-suggestions">
            <div class="jk-sTit">界面加载慢</div>
            <div class="jk-sText jk-supplement">
                <textarea name="" id="" cols="30" rows="10" placeholder="请填写10个字以上的问题描述以便我们提供更好的帮助"></textarea>
                <p class="jk-swordNum"><span class="origin">22</span> / 200字以内</p>
            </div>
            <div class="jk-sTit">相关截图（选填）<span>0/4</span></div>
            <div class="jk-sAdd-img">
                <!--<div class="jkFlexItem">
                    <div class="jk-sAdd-imgItem">
                        <img src="./images/sImg.png" alt="">
                        <span class="del"></span>
                    </div>
                </div>-->
            
                <div class="jkFlexItem">
                    <div class="jk-sAdd-imgItem">
                        <div class="jk-rent-photoBtn">
                            <input type="file">
                        </div>
                    </div>
                </div>

                <div class="jk-bottom">
                    <button class="jk-oneBtn-bottom" type="submit">提交</button>
                </div>

            </div>
    </div>
</template>

<script>
    
	export default{
		name:'mineAdviceAdd',
		data(){
			return{
                userId:this.GLOBAL.userid,
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