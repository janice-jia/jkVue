<template>
    <div class="jk-lookbox">
    	<div class="jk-lookcon">
                <div class="jk-lookconImg" style="position: relative">
                    <router-link class="houseLink" :to="{name: 'houseInfo', params: {houseid: appointmentDeatil.houseid}}"></router-link>
                    <img :src="imgWenSiteUrl+appointmentDeatil.thumbnailurl" alt="" />
                </div>
                <div class="jk-lookDesc" style="position: relative">
                    <router-link class="houseLink" :to="{name: 'houseInfo', params: {houseid: appointmentDeatil.houseid}}"></router-link>
                    <div class="jkFlex">
                        <p class="tit">
                        	<!--[订]新悦家园-3居-->
                        	{{'[订]'+appointmentDeatil.title}}
                        </p>
                        <p class="price">
                        	<!--1830元/月-->
                        	{{appointmentDeatil.rent}}
                            <span v-show="appointmentDeatil.rentunit=='日租'">元/天</span>
                            <span v-show="appointmentDeatil.rentunit=='月租'">元/月</span>
                        </p>
                        <p class="info">
                            <span>
                            	<!--14㎡-->
                            	{{appointmentDeatil.area+'m²'}}
                            </span>
                            <span>
                            	<!--2/6层-->
                                {{appointmentDeatil.floordesc ? appointmentDeatil.floordesc+'/' : ''}}{{appointmentDeatil.floorcount ? '总'+appointmentDeatil.floorcount : ''}}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="jk-lookadd">
                <p class="jk-loonaddInfo">联系人信息</p>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">姓名</div>
                    <div class="jkFlexItem tr">
                    	<!--吴凡-->
                    	{{appointmentDeatil.realname}}
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">性别</div>
                    <div class="jkFlexItem tr">
                    	<!--男-->
                    	{{appointmentDeatil.sex}}
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">手机</div>
                    <div class="jkFlexItem tr">
                        <!--13109785643-->
                        {{appointmentDeatil.mobile}}
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">期望看房时间</div>
                    <div class="jkFlexItem tr">
                    	<!--随时/全天-->
                    	{{appointmentdate}}
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
    import indexJs from	'../js/index';    
	export default{
		name:'mineOrderInfo',
		data(){
			return{
                houseId:'',
                userId:this.GLOBAL.userid,
                appointmentDeatil:{},//约看详情
				imgWenSiteUrl:this.GLOBAL.imgWenSiteUrl,
				appointmentdate:[],//预约时间
			}
		},
		created(){
			this.houseId=this.$route.params.houseid;
			this.$http.get('/api/API.ashx',{
				params:{
					apicommand:'getmyappointmentdetail',
					houseid:this.houseId,
					userid:this.userId
				}
			}).then(function(data){
				this.appointmentDeatil=data.body.houseinfo[0];
				this.appointmentdate=this.splitStr(this.appointmentDeatil.appointmentdate)[0];
				if(this.appointmentdate=='1990/1/1'){
					this.appointmentdate='随时';
				}
			})

		},
		mounted(){
		},
		methods:{
			// 分割appointmentdate字段
            splitStr(str){
                return str.split(' ');
            }
		}
	}
	
</script>

<style>
</style>