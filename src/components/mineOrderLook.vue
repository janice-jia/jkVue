<template>
	  <div class="jk-lookbox">
            <div class="jk-lookcon">
                <div class="jk-lookconImg">
                    <img :src="imgWenSiteUrl+houseBasicInfo.thumbnailurl" alt="" />
                </div>
                <div class="jk-lookDesc">
                    <div class="jkFlex">
                        <p class="tit">
                        	<!--[订]新悦家园-3居-->
                        	{{'[订]'+houseBasicInfo.title}}
                        </p>
                        <p class="price">
                        	<!--1830元/月-->
                        	{{houseBasicInfo.rent+'元/月'}}
                        </p>
                        <p class="info">
                            <span>
                            	<!--14㎡-->
                            	{{houseBasicInfo.area+'㎡'}}
                            </span>
                            <span>
                            	<!--2/6层-->
                            	{{houseBasicInfo.floordesc ? houseBasicInfo.floordesc+'/' : ''}}
                                {{houseBasicInfo.floorcount ? '共'+houseBasicInfo.floorcount : ''}}
                            </span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="jk-lookadd">
                <p class="jk-loonaddInfo">联系人信息</p>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">姓名</div>
                    <div class="jkFlexItem">
                        <input type="text" v-model="realname" />
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">性别</div>
                    <div class="jkFlexItem">
                        <div class="jk-checkBoxSkin jk-checkBoxVal" @click="changesex">
                            <input id="sex" class="jk-checkbox" name="check" type="checkbox" v-model="sex" checked/>
                            <label for="sex" class="trigger"></label>
                            <span class="jk-checkbox-checkVal1">男士</span>
                            <span class="jk-checkbox-checkVal2">女士</span>
                        </div>
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">手机</div>
                    <div class="jkFlexItem">
                        <input class="tr" name="tel" type="text" v-model="mobile" placeholder="请填写手机号码"/>
                    </div>
                </div>
                <div class="jkFlex">
                    <div class="tl jklookaddlabel">期望看房时间</div>
                </div>
                <div class="jkFlex">
                    <div class="jkFlexItem" >
                        <select name="lookday" id=""  v-model="lookDaySelected">
                            <option v-for="(lookDay, index) in lookDayList" :value="lookDay.id" :key="index">{{lookDay.name}}</option>
                        </select>
                    </div>
                    <div class="jkFlexItem">
                        <select name="looktime" id="">
                            <option value="全天">全天</option>
                        </select>
                    </div>
                </div>
            </div>
        
            <div class="jk-bottom">
                <button class="jk-oneBtn-bottom" 
                	@click="submitOrderLook()">提交约看</button>
            </div>
   </div>
</template>

<script>	
	
	import indexJs from '../js/index';
	import {Toast} from 'mint-ui';
	
	export default{
		name:'mineOrderLook',
		data(){
			return{
				houseId:'',
				userId:this.GLOBAL.userid,
				houseBasicInfo:{},//房源基本信息
				imgWenSiteUrl:this.GLOBAL.imgWenSiteUrl,
				realname:'',//姓名
				sex:false,//性別(男：true;女:false)
				mobile:'',//电话
				lookDayList:[{
					id:'0',
					name:'随时看房'
				},{
					id:'1',
					name:'今天'
				},{
					id:'2',
					name:'明天'
				},{
					id:'3',
					name:'后天'
				}],
				lookDaySelected:'',//期望看房日期
				
			}
		},
		created(){
			//获取当前房源基本信息
			this.houseId=this.$route.params.houseid;
			this.$http.get('/api/API.ashx',{
				params:{
					apicommand:'gethousebasic',
					houseid:this.houseId
				}
			}).then(function(data){
				this.houseBasicInfo=data.body.houseinfo[0];
			})
			
			//如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
      		this.lookDaySelected = this.lookDayList[0].id;
		},
		mounted(){
			
		},
		methods:{
			changesex(){
				this.sex = !this.sex;
			},
			//转换期望看房时间为日期
			transferLookDay(lookDay){
				var myDate=new Date();
				if(lookDay=='0'){
					return '1990年1月1日';
				}else if(lookDay=='1'){
					return myDate.getFullYear()+'年'+(myDate.getMonth()+1)+'月'+myDate.getDate()+'日';
				}else if(lookDay=='2'){
					return myDate.getFullYear()+'年'+(myDate.getMonth()+1)+'月'+(myDate.getDate()+1)+'日';
				}else if(lookDay=='3'){
					return myDate.getFullYear()+'年'+(myDate.getMonth()+1)+'月'+(myDate.getDate()+2)+'日';
				}
			},
			transferSex(){
				if(this.sex==false){
					this.sex='女';
				}else if(this.sex==true){
					this.sex='男';
				}
			},
			//提交约看
			submitOrderLook(){
				if(''==this.realname||''==this.mobile){
					alert("请填写完整！")
				}else{
					this.lookDaySelected=this.transferLookDay(this.lookDaySelected);
					this.transferSex();
					var getStr = '';
					 	getStr += '/api/API.ashx?apicommand=submitappointment';
						getStr += '&houseid='+this.houseId;
						getStr += '&userid='+this.userId;
						getStr += '&appointmentdate='+this.lookDaySelected;
						getStr += '&realname='+this.realname;
						getStr += '&sex='+this.sex;
						getStr += '&mobile='+this.mobile;
					this.$http.get(getStr).then(function(data){
						if(data.body.result=='Y'){
							console.info('Success!');
							Toast({
                                message: '约看成功',
                                position: 'middle',
                                duration: 2000
                            });
							this.$router.push({name:'mineOrderInfo',params:{houseid:this.houseId}});
						}else{
							Toast({
                                message: '约看失败',
                                position: 'middle',
                                duration: 2000
                            });
						}
					})
				}
			}
		}
	}
</script>

<style>
</style>