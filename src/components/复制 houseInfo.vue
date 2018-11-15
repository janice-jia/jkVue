<template>
<div>
	 <div class="jk-house-banner swiper-container" id="slideTop">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img :src="houseBanner1" alt=""></div>
            <div class="swiper-slide"><img :src="houseBanner1" alt=""></div>
            <div class="swiper-slide"><img :src="houseBanner1" alt=""></div>
            <div class="swiper-slide"><img :src="houseBanner1" alt=""></div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination-top"></div>
    </div>
    <div class="jk-house">
        <div class="jk-house-name">
            整租·新潮嘉园二区1室1厅1卫
        </div>
        <div class="jk-house-price">
            3000元/每月
        </div>
        <div class="jk-house-tagbox tag-parent">
            <div class="jk-tag-4"><p class="jk-ca-tag">随时看房</p></div>
            <div class="jk-tag-4"><p class="jk-ca-tag">配套齐全</p></div>
            <div class="jk-tag-4"><p class="jk-ca-tag">南北通透</p></div>
            <div class="jk-tag-4"><p class="jk-ca-tag">独立卫浴</p></div>
            <div class="jk-tag-4"><p class="jk-ca-tag">押一付一</p></div>
            <div class="jk-tag-4"><p class="jk-ca-tag">有阳台</p></div>
        </div>

        <div class="jk-house-desc jkFlex">
            <p class="jkFlexItem">73m³</p>
            <p class="jkFlexItem">1室1厅1卫</p>
            <p class="jkFlexItem">南</p>
        </div>

        <div class="jk-house-desc1">
            <div class="houseinfo">
                <div class="houseinfoitem">
                    <span class="desclabel">装修</span>
                    <span class="desccon">暂无数据</span>
                </div>
                <div  class="houseinfoitem">
                    <span class="desclabel">楼层</span>
                    <span class="desccon">高层/15层</span>
                </div>
            </div>
            <div class="houseinfo">
                <div class="houseinfoitem">
                        <span class="desclabel">类型</span>
                        <span class="desccon">暂无数据</span>
                </div>
                <div class="houseinfoitem">
                        <span class="desclabel">电梯</span>
                        <span class="desccon">有</span>
                </div>
            </div>
            <div class="houseinfo">
                <div class="houseinfoitem">
                        <span class="desclabel">车位</span>
                        <span class="desccon">无</span>
                </div>
                <div class="houseinfoitem">
                        <span class="desclabel">入住</span>
                        <span class="desccon">2018.10.12</span>
                </div>
            </div>
            <div class="houseinfo">
                <div class="houseinfoitem">
                        <span class="desclabel">看房</span>
                        <span class="desccon">随时看房</span>
                </div>
            </div>
            <div class="jkClear"></div>
        </div>

        <div class="jk-house-tit">房源配置</div>

        <div class="jk-house-configTag">
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg">
                    <img src="../assets/config-wifi.png" alt="宽带" />
                </p>
                <p class="jk-house-conTit">
                    宽带
                </p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg">
                    <img src="../assets/config-bed.png" alt="床" />
                </p>
                <p class="jk-house-conTit">
                    床
                </p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg">
                    <img src="../assets/config-wardrobe.png" alt="衣柜" />
                </p>
                <p class="jk-house-conTit">
                    衣柜
                </p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg">
                    <img src="../assets/config-sofa.png" alt="沙发" />
                </p>
                <p class="jk-house-conTit">
                    沙发
                </p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-tables.png" alt="桌椅" /></p>
                <p class="jk-house-conTit">桌椅</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-tv.png" alt="电视" /></p>
                <p class="jk-house-conTit">电视</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-air-conditioner.png" alt="空调" /></p>
                <p class="jk-house-conTit">空调</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-washingMmachine.png" alt="洗衣机" /></p>
                <p class="jk-house-conTit">洗衣机</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-refrigerator.png" alt="冰箱" /></p>
                <p class="jk-house-conTit">冰箱</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-heating.png" alt="暖气" /></p>
                <p class="jk-house-conTit">暖气</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-calorifier.png" alt="热水器" /></p>
                <p class="jk-house-conTit">热水器</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-gas-stove.png" alt="燃气灶" /></p>
                <p class="jk-house-conTit">燃气灶</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-kitchen-ventilator.png" alt="抽油烟机" /></p>
                <p class="jk-house-conTit">抽油烟机</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-private-bathroom.png" alt="独卫" /></p>
                <p class="jk-house-conTit">独卫</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-balcony.png" alt="阳台" /></p>
                <p class="jk-house-conTit">阳台</p>
            </div>
            <div class="jk-house-config-tag-item">
                <p class="jk-house-conimg"><img src="../assets/config-cook.png" alt="可做饭" /></p>
                <p class="jk-house-conTit">可做饭</p>
            </div>
        </div>

        <div class="jk-house-tit">新潮嘉园A区04楼</div>
        <div class="jk-house-map">
            <img :src="mapImg" alt=""/>
        </div>
        <div class="jk-house-mapgood">
            <ul>
                <li>距离八通线梨园直线距离400m</li>
                <li>距离八通线梨园直线距离400m</li>
            </ul>
        </div>


        <div class="jk-house-tit">房源推荐</div>
        <div class="jk-recommend swiper-container" id="slideCenter">
            <div class="swiper-wrapper">
                <!-- 房源推荐 item start -->
                <div class="jk-recommend-item swiper-slide">
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
                </div>
                <!-- 房源推荐 item end -->
                <!-- 房源推荐 item start -->
                <div class="jk-recommend-item swiper-slide">
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
                </div>
                <!-- 房源推荐 item start -->
                <div class="jk-recommend-item swiper-slide">
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
                </div>
                <!-- 房源推荐 item end -->
                <!-- 房源推荐 item start -->
                <div class="jk-recommend-item swiper-slide">
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
                </div>
                <!-- 房源推荐 item end -->
                <!-- 房源推荐 item start -->
                <div class="jk-recommend-item swiper-slide">
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
                </div>
                <!-- 房源推荐 item end -->
                <!-- 房源推荐 item start -->
                <div class="jk-recommend-item swiper-slide">
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
                </div>
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
                <div class="jk-shareleftitem jkFlexItem" id="shareBtn">
                    <p class="jk-shareleftitemimg"><img src="../assets/icon-share.png" alt="分享" /></p>
                    <p class="jk-shareleftitemTit">分享</p>
                </div>
                <div class="jk-shareleftitem jkFlexItem">
                    <a href="" class="houseLink"></a>
                    <p class="jk-shareleftitemimg jk-like jklikehover"></p>
                    <p class="jk-shareleftitemTit">收藏</p>
                </div>
            </div>
            <div class="jk-share-right">
                <div class="jk-sharerightitem">
                    <button class="jk-call" id="callBtn">拨打电话</button>
                </div>
                <div class="jk-sharerightitem">
                    <a class="jk-look" href="myOrderLook.html">预约看房</a>
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
                    <button class="jkBottomBtn2">立即拨打</button>
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
	import houseBanner1 from '../assets/house-banner.jpg';
	import houseBanner2 from '../assets/house-banner.jpg';
	import houseBanner3 from '../assets/house-banner.jpg';
	import houseBanner4 from '../assets/house-banner.jpg';
	import mapImg from '../assets/map.jpg';

	
	import indexJs from	'../js/index'
	export default{
		name:'houseInfo',
		data(){
			return{
				houseBanner1:houseBanner1,
				houseBanner2:houseBanner2,
				houseBanner3:houseBanner3,
				houseBanner4:houseBanner4,
				mapImg:mapImg,
			}
		},
		created(){
			
		},
		mounted(){
			indexJs.showHouseInfoTopSwiper();
			indexJs.showHouseInfoLeftSwiper();
		},
		method(){
			
		}
	}
	
</script>

<style src="../styles/swiper.min.css">
</style>