<template>
<div>
	 <!--<div class="jk-house-banner swiper-container" id="slideTop">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(houseImg,index) in houseImgList" :key="index">
            	<img :src="imgWenSiteUrl+houseImg.imgurl" alt="">
            </div>
            <div class="swiper-slide"><img :src="houseBanner1" alt=""></div>
            <div class="swiper-slide"><img :src="houseBanner1" alt=""></div>
            <div class="swiper-slide"><img :src="houseBanner1" alt=""></div>
        </div>-->
        <!-- Add Pagination -->
        <!--<div class="swiper-pagination-top"></div>
    </div>-->
    <!-- 图片轮播 -->
        <mt-swipe :auto="4000" class="swipe" style="height:5.62rem">
            <mt-swipe-item v-for="(houseImg,index) in houseImgList" :key="index">
                <img :src="imgWenSiteUrl+houseImg.imgurl" alt="">
            </mt-swipe-item>
        </mt-swipe>
    <div class="jk-house">
        <div class="jk-house-name">
            <!--整租·新潮嘉园二区1室1厅1卫-->
            {{houseInfoAll.renttype+'·'}}{{houseInfoAll.community}}{{houseInfoAll.housestructure}}
        </div>
        <div class="jk-house-price">
            <!--3000元/每月-->
            {{houseInfoAll.rent+'元/每月'}}
        </div>
       
        <div class="jk-house-tagbox tag-parent" >
            <div class="jk-tag-4" v-for="item in houseFeatures" :key="item"><p class="jk-ca-tag">
                <!-- 随时看房 -->
                {{item}}
                </p></div>
        </div>

        <div class="jk-house-desc jkFlex">
            <p class="jkFlexItem">
            	<!--73m³-->
            	{{houseInfoAll.area+'m²'}}
            </p>
            <p class="jkFlexItem">
            	<!--1室1厅1卫-->
            	{{houseInfoAll.housestructure}}
            </p>
            <p class="jkFlexItem">
            	<!--南-->
            	{{houseInfoAll.direction}}
            </p>
        </div>

        <div class="jk-house-desc1">
            <div class="houseinfo">
                <div class="houseinfoitem">
                    <span class="desclabel">装修</span>
                    <span class="desccon">
                    	<!--暂无数据-->
                    	{{houseInfoAll.decorated}}
                    </span>
                </div>
                <div  class="houseinfoitem">
                    <span class="desclabel">楼层</span>
                    <span class="desccon">
                    	<!--高层/15层-->
                    	{{houseInfoAll.floorcount+'层'}}
                    </span>
                </div>
            </div>
            <div class="houseinfo">
                <div class="houseinfoitem">
                        <span class="desclabel">类型</span>
                        <span class="desccon">
                        	<!--暂无数据-->
                        	{{houseInfoAll.housetype}}
                        </span>
                </div>
                <div class="houseinfoitem">
                        <span class="desclabel">电梯</span>
                        <span class="desccon">
                        	<!--有-->
                        	{{houseInfoAll.elevator}}
                        </span>
                </div>
            </div>
            <div class="houseinfo">
                <div class="houseinfoitem">
                        <span class="desclabel">车位</span>
                        <span class="desccon">
                        	<!--无-->
                        	{{houseInfoAll.carport}}
                        </span>
                </div>
                <div class="houseinfoitem">
                        <span class="desclabel">入住</span>
                        <span class="desccon">
                        	<!--2018.10.12-->
                        	{{houseInfoAll.checkin}}
                        </span>
                </div>
            </div>
            <!--<div class="houseinfo">
                <div class="houseinfoitem">
                        <span class="desclabel">看房</span>
                        <span class="desccon">随时看房</span>
                </div>
            </div>-->
            <div class="jkClear"></div>
        </div>

        <div class="jk-house-tit">房源配置</div>

        <div class="jk-house-configTag">
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'宽带')">
                <p class="jk-house-conimg">
                    <img src="../assets/config-wifi.png" alt="宽带" />
                </p>
                <p class="jk-house-conTit">
                    宽带
                </p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'床')">
                <p class="jk-house-conimg">
                    <img src="../assets/config-bed.png" alt="床" />
                </p>
                <p class="jk-house-conTit">
                    床
                </p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'衣柜')">
                <p class="jk-house-conimg">
                    <img src="../assets/config-wardrobe.png" alt="衣柜" />
                </p>
                <p class="jk-house-conTit">
                    衣柜
                </p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'沙发')">
                <p class="jk-house-conimg">
                    <img src="../assets/config-sofa.png" alt="沙发" />
                </p>
                <p class="jk-house-conTit">
                    沙发
                </p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'桌椅')">
                <p class="jk-house-conimg"><img src="../assets/config-tables.png" alt="桌椅" /></p>
                <p class="jk-house-conTit">桌椅</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'电视')">
                <p class="jk-house-conimg"><img src="../assets/config-tv.png" alt="电视" /></p>
                <p class="jk-house-conTit">电视</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'空调')">
                <p class="jk-house-conimg"><img src="../assets/config-air-conditioner.png" alt="空调" /></p>
                <p class="jk-house-conTit">空调</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'洗衣机')">
                <p class="jk-house-conimg"><img src="../assets/config-washingMmachine.png" alt="洗衣机" /></p>
                <p class="jk-house-conTit">洗衣机</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'冰箱')">
                <p class="jk-house-conimg"><img src="../assets/config-refrigerator.png" alt="冰箱" /></p>
                <p class="jk-house-conTit">冰箱</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'暖气')"> 
                <p class="jk-house-conimg"><img src="../assets/config-heating.png" alt="暖气" /></p>
                <p class="jk-house-conTit">暖气</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'热水器')">
                <p class="jk-house-conimg"><img src="../assets/config-calorifier.png" alt="热水器" /></p>
                <p class="jk-house-conTit">热水器</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'燃气灶')">
                <p class="jk-house-conimg"><img src="../assets/config-gas-stove.png" alt="燃气灶" /></p>
                <p class="jk-house-conTit">燃气灶</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'抽油烟机')">
                <p class="jk-house-conimg"><img src="../assets/config-kitchen-ventilator.png" alt="抽油烟机" /></p>
                <p class="jk-house-conTit">抽油烟机</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'独卫')">
                <p class="jk-house-conimg"><img src="../assets/config-private-bathroom.png" alt="独卫" /></p>
                <p class="jk-house-conTit">独卫</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'阳台')">
                <p class="jk-house-conimg"><img src="../assets/config-balcony.png" alt="阳台" /></p>
                <p class="jk-house-conTit">阳台</p>
            </div>
            <div class="jk-house-config-tag-item" 
            v-if="iscontains(houseInfoAll.housecontent,'可做饭')">
                <p class="jk-house-conimg"><img src="../assets/config-cook.png" alt="可做饭" /></p>
                <p class="jk-house-conTit">可做饭</p>
            </div>
        </div>
        
        <div class="jk-house-feture">
            <div class="houseinfo">
                <div class="houseinfoitem">
                    <span class="desclabel">房屋亮点</span>
                	<span class="desccon">
	                    {{houseInfoAll.housefeature}}
	                </span>
                </div>
            </div>
        </div>
         <div class="jk-house-description">
            <div class="houseinfo">
                <div  class="houseinfoitem">
                    <span class="desclabel">房源描述</span>
	                <span class="desccon">
	                    {{houseInfoAll.description}}
	                </span>
                </div>
            </div>
        </div>
        

        <!-- <div class="jk-house-tit">
            新潮嘉园A区04楼
            {{houseInfoAll.title}}
        </div>
        <div class="jk-house-map">
            <img :src="mapImg" alt=""/>
        </div>
        <div class="jk-house-mapgood">
            <ul>
                <li>距离八通线梨园直线距离400m</li>
                <li>距离八通线梨园直线距离400m</li>
            </ul>
        </div> -->


        <div class="jk-house-tit">房源推荐</div>
        <div class="jk-recommend swiper-container" id="slideCenter">
            <div class="swiper-wrapper">
                <!-- 房源推荐 item start -->
                <div class="jk-recommend-item swiper-slide" 
                v-for="(item,index) in houseRecommandAll" 
                :key="index">
                    <!--<a class="houseLink" href=""></a>-->
                    <router-link class="houseLink" :to="{name:'houseInfo',params:{houseid:item.houseid}}" ></router-link>
                    <div class="jk-recommend-img">
                    	<!--<img src="../assets/recommend.jpg" alt="房源推荐" />-->
                    	<img :src="imgWenSiteUrl+item.thumbnailurl" alt="房源推荐" />
                    </div>
                    <div class="jk-recommend-con">
                        <div class="jk-recommend-conTit">
                            <!-- 新悦家园4居室-北卧 -->
                            {{item.title}}
                        </div>
                        <div class="jk-recommend-conDesc">
                            <span>
                                <!-- 4室1厅 -->
                                {{item.housestructure}}
                            </span>
                            <span>
                                <!-- 14.9m³ -->
                                {{item.area+'m²'}}
                            </span>
                        </div>
                        <div class="jk-recommend-conPrice">
                            <!-- 1860元/月 -->
                            {{item.rent}}
                        </div>
                        <div class="jk-recommend-tag tag-parent">
                            <div class="jk-tag-2 " 
                            v-for="featureItem in item.housefeature" 
                            :key="featureItem">
                                <p class="jk-ca-tag">
                                    <!-- 离地铁近 -->
                                    {{featureItem}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 房源推荐 item end -->
                <!-- 房源推荐 item start -->
                <!-- <div class="jk-recommend-item swiper-slide">
                    <a class="houseLink" href=""></a>
                    <div class="jk-recommend-img"><img src="../assets/recommend.jpg" alt="房源推荐" /></div>
                    <div class="jk-recommend-con">
                        <div class="jk-recommend-conTit">新悦家园4居室-北卧</div>
                        <div class="jk-recommend-conDesc">
                            <span>4室1厅</span>
                            <span>14.9m³</span>
                        </div>
                        <div class="jk-recommend-conPrice">1860元/月</div>
                        <div class="jk-recommend-tag tag-parent">
                            <div class="jk-tag-2 ">
                                <p class="jk-ca-tag">离地铁近</p>
                            </div>
                            <div class="jk-tag-2">
                                <p class="jk-ca-tag">首次出租</p>
                            </div>
                            
                        </div>
                    </div>
                </div> -->
                <!-- 房源推荐 item end -->
            </div>
        </div>

        <!-- 玖快租房 start-->
        <div class="jk-icon">
            <div class="jk-icon-jk">
                <img src="../assets/icon-jk.png" alt="玖快租房" />
                玖快租房
            </div>
            <div class="jk-icon-desc">为您精选最优质的房源</div>
        </div>
        <!-- 玖快租房 end-->

        <!-- 分享、预约，打电话 -->
        <div class="jk-share jk-bottom">
            <div class="jk-share-left jkFlex">
                <div class="jk-shareleftitem jkFlexItem" id="shareBtn" @click="share();">
                    <p class="jk-shareleftitemimg"><img src="../assets/icon-share.png" alt="分享" /></p>
                    <p class="jk-shareleftitemTit">分享</p>
                </div>
                <div class="jk-shareleftitem jkFlexItem" @click="collect();">
                    <p class="jk-shareleftitemimg" 
                    	v-bind:class="collectStatus?'jklikehover':'jk-like'"></p>
                    <p class="jk-shareleftitemTit">收藏</p>
                </div>
            </div>
            <div class="jk-share-right">
                <div class="jk-sharerightitem">
                    <button class="jk-call" id="callBtn" @click="call();">拨打电话</button>
                </div>
                <div class="jk-sharerightitem">
                	<!--<a class="jk-look" href="myOrderLook.html"></a>-->
                	<router-link class="jk-look" 
                		:to="!orderLookStatus?{name:'mineOrderLook',params:{houseid:houseInfoAll.houseid}}:{name:'mineOrderInfo',params:{houseid:houseInfoAll.houseid}}" >
                		预约看房
                	</router-link>
                </div>
            </div>
        </div>


        <!-- 拨打电话 -->
        <div class="jk-bottom" id="callBottom">
            <div class="jkFlex jkBottomFlex2">
                <div class="jkFlexItem">
                    <button class="jkBottomBtn2" id="callCancelBtn">取消</button>
                </div>
                <div class="jkFlexItem">
                    <a v-bind:href="houseInfoAll.contactsmobile">
                        <button class="jkBottomBtn2">立即拨打</button>
                    </a>
                </div>
            </div>
        </div>

        <!-- 分享 -->
        <div class="jk-bottom" id="weCharBottom">
            <div class="jkFlex jkBottomFlex2">
                <div class="jkFlexItem">
                    <p class="jkShareWechat">
                        <img src="../assets/icon-share1.png" alt="分享好友"/>
                    </p>
                    <p class="jkShareWechatTit">分享好友</p>
                </div>
                <div class="jkFlexItem">
                    <p class="jkShareWechat">
                        <img src="../assets/icon-share2.png" alt="分享朋友圈"/>
                    </p>
                    <p class="jkShareWechatTit">分享朋友圈</p>
                </div>
            </div>
        </div>
	</div>
</div>
</template>

<script>
//	import houseBanner1 from '../assets/house-banner.jpg';
    import mapImg from '../assets/map.jpg';
	
    import indexJs from	'../js/index';
    import configJs from '../js/config'; 
    import Vue from 'vue';
    import {Swipe, SwipeItem} from 'mint-ui';
    Vue.component(Swipe.name, Swipe,SwipeItem.name, SwipeItem);
    
	export default{
		name:'houseInfo',
		data(){
			return{
				houseImgList:[],
//				houseBanner1:houseBanner1,
//				houseBanner2:houseBanner2,
//				houseBanner3:houseBanner3,
//				houseBanner4:houseBanner4,
				mapImg:mapImg,
				houseInfoAll:{},//房源详细信息
                houseId:'',
                userId:configJs.config.userId,
                houseFeatures:[],
                houseRecommandAll:[],//推荐房源
                collectStatus:false,//收藏状态
                orderLookStatus:false,//是否已经约看
                imgWenSiteUrl:configJs.config.imgWenSiteUrl,//图片路径前缀

			}
		},
		created(){
			this.houseId=this.$route.params.houseid;
			//banner图获取
			this.$http.get('/api/API.ashx',{
				params:{
					apicommand:'gethouseimg',
					houseid:this.houseId
				}
			}).then(function(data){
                if(data.body){
                	for(var i=0;i<data.body.imglist.length;i++){
                        this.houseImgList.push(data.body.imglist[i]);
                    }
                }
                console.info(this.houseImgList);
            })
			
			//获取当前房源所有详细信息
			this.$http.get('/api/API.ashx',{
				params:{
					apicommand:'gethouseinfo',
					houseid:this.houseId,
					userid:this.userId
				}
			}).then(function(data){
                this.houseInfoAll=data.body.houseinfo[0];
                this.houseFeatures=this.splitStr(this.houseInfoAll.housefeature);
                this.houseInfoAll.checkin=this.splitStr(this.houseInfoAll.checkin,' ')[0];
                 //获取当前房源是否被收藏
	            if(this.houseInfoAll.collectid){
	            	this.collectStatus=true;
	            }else{
	            	this.collectStatus=false;
	            }
            })
            //获取推荐房源
            this.$http.get('/api/API.ashx?apicommand=getrecommend').then(function(data){
                if(data.body){
                    for(var i=0;i<data.body.houselist.length;i++){
                        data.body.houselist[i].housefeature=this.splitStr(data.body.houseList[i].housefeature,',');
                        this.houseRecommandAll.push(data.body.houselist[i]);
                    }
                }
            })
            //查看是否已经约看当前房源
            this.$http.get('/api/API.ashx',{
            	params:{
            		apicommand:'isappointment',
            		houseid:this.houseId,
            		userid:this.userId
            	}
            }).then(function(data){
            	console.info(data.body.result)
                 if(data.body.result=="Y"){
	            	this.orderLookStatus=true;
	            }else{
	            	this.orderLookStatus=false;
	            }
            })

		},
		mounted(){
			//顶部轮播图
			indexJs.showHouseInfoTopSwiper();
			//底部房源推荐轮播图
			indexJs.showHouseInfoLeftSwiper();
		},
		methods:{
			//拨打电话
			call(){
				$("#callBottom").show();
                $("#callCancelBtn").click(function(){
                    $("#callBottom").hide();
                });
			},
			//分享
			share(){
				 $("#weCharBottom").show();
           },
            //收藏
            collect(){
            	console.info(this.collectStatus);
            	if(this.collectStatus==false){
            		this.$http.get('/api/API.ashx',{
		            	params:{
		            		apicommand:'collect',
		            		houseid:this.houseId,
		            		userid:this.userId
		            	}
		            }).then(function(data){
			          	if(data.body.result=='Y'){
			          		this.collectStatus=true;
			          	}else if(data.body.result=='N'){
			          		this.collectStatus=false;
			          	}
		            })
	            }else{
	            	this.$http.get('/api/API.ashx',{
		            	params:{
		            		apicommand:'collectcancel',
		            		houseid:this.houseId,
		            		userid:this.userId
		            	}
		            }).then(function(data){
			          	if(data.body.result=='Y'){
			          		this.collectStatus=false;
			          	}else if(data.body.result=='N'){
			          		this.collectStatus=true;
			          	}
		            })
	            }
	            
            },
            //判断字段是否包含
            iscontains(str,substr){
                return new RegExp(substr).test(str);
            },
            // 分割houseFeatures字段
            splitStr(str,style){
                return str.split(style);
            }
		}
	}
	
</script>

<style src="../styles/swiper.min.css">
</style>