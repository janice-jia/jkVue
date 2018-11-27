<template>
	 <div class="jk-publish">
        <p class="jk-fk">请选择反馈内容</p>
        <!-- 界面加载慢 -->
        <div class="jk-publish-item h80">
        	<router-link class="houseLink" :to="{name: 'mineAdviceAdd', params:{type: 1}}"></router-link>
            <!--<a href="adviceAdd.html" class="houseLink"></a>-->
            <div class="jk-publish-itemType">
                <p class="publishtit">界面加载慢</p>
            </div>
            <div class="jk-publish-itemRight">
                <img src="../assets/icon-right.png" alt="" />
            </div>
        </div>

        <!-- 卡顿 -->
        <div class="jk-publish-item h80">
        	<router-link class="houseLink" :to="{name: 'mineAdviceAdd', params:{type: 2}}"></router-link>
            <!--<a href="adviceAdd.html" class="houseLink"></a>-->
            <div class="jk-publish-itemType">
                <p class="publishtit">卡顿</p>
            </div>
            <div class="jk-publish-itemRight">
                <img src="../assets/icon-right.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script>    
	export default{
		name:'mineAdvice',
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