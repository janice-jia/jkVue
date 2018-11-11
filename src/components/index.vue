<template>
<div>
<div class="jk-wap">
        <!-- 搜索 start-->
        <div class="jk-search jkFlex">
            <a href="changeCity.html" class="jk-search-address">北京</a>
            <input class="jk-search-text jkFlexItem" id="searchText" type="text" placeholder="您想住哪？"/>
        </div>
        <!-- 搜索 end-->

        <!-- 导航 start-->
        <div class="jk-menu jkFlex">
            <div class="jk-menu-item jkFlexItem">
                <a href="">
                    
                    <img :src="menuImg1" alt="整租" />
                    <p>整租</p>
                </a>
            </div>
            <div class="jk-menu-item jkFlexItem">
                <a href="">
                    <img :src="menuImg2" alt="合租" />
                    <p>合租</p>
                </a>
            </div>
            <div class="jk-menu-item jkFlexItem">
                <a href="">
                    <img :src="menuImg3" alt="短租" />
                    <p>短租</p>
                </a>
            </div>
        </div>
        <!-- 导航 end-->

        <!-- 筛选 nav start-->
        <div class="jk-screen" id="screenMenu">
            <div class="jk-screen-menu jkFlex">
                <div class="jk-screen-menu-item screen-menu-hover">
                    <p class="jkScreenNav menuArea" data-show-screen="Area">
                        <span class="overEllipsis screen-menu-width">区域</span>
                    </p>
                </div>
                <div class="jk-screen-menu-item">
                    <p class="jkScreenNav menuPrice" data-show-screen="Price">
                        <span class="overEllipsis screen-menu-width">租金</span>
                    </p>
                </div>
                <div class="jk-screen-menu-item">
                    <p class="jkScreenNav menuHouseType"  data-show-screen="HouseType">
                        <span class="overEllipsis screen-menu-width">户型</span>
                    </p>
                </div>
                <div class="jk-screen-menu-item">
                    <p class="jkScreenNav menuScreen" data-show-screen="Screen">
                        <span class="overEllipsis screen-menu-width">筛选</span>
                    </p>
                </div>
                <div class="jk-screen-menu-item">
                    <p class="jkScreenNav menuSort" data-show-screen="Sort">
                        <span class="sort-icon">&nbsp;</span>
                    </p>
                </div>
            </div>
        </div>
        <!-- 筛选 nav end-->

        <!-- 内容 start-->
        <div class="content">
            <div class="jk-banner">
                此处预留banner位置
                <!-- <a href="">
                        <img src="./images/cont-item.jpg" alt="" />
                </a> -->
            </div>
            <div class="jk-cont">
                
                <!-- <div class="jk-cont-item jkFlex">
                    <a href="houseInfo.html" class="houseLink"></a>
                    <div class="jk-cont-item-media">
                        <img src="./images/cont-item.jpg" alt="" />
                    </div>
                    <div class="jk-cont-item-main jkFlexItem">
                        <div class="jk-cont-item-tit oneLine">
                            合租。丰西北里3居室-南卧
                        </div>
                        <div class="jk-cont-item-price oneLine">
                            1700元/月
                        </div>
                        <div class="jk-cont-item-desc oneLine">
                            15m²|南|看丹桥
                        </div>
                        <div class="jk-cont-item-tag oneLine">
                            押一付一|独立卫浴|有阳台
                        </div>
                    </div>
                </div>
                <div class="jk-cont-item jkFlex">
                    <a href="houseInfo.html" class="houseLink"></a>
                    <div class="jk-cont-item-media">
                        <img src="./images/cont-item.jpg" alt="" />
                    </div>
                    <div class="jk-cont-item-main jkFlexItem">
                        <div class="jk-cont-item-tit oneLine">
                            合租。丰西北里3居室-南卧
                        </div>
                        <div class="jk-cont-item-price oneLine">
                            1700元/月
                        </div>
                        <div class="jk-cont-item-desc oneLine">
                            15m²|南|看丹桥
                        </div>
                        <div class="jk-cont-item-tag oneLine">
                            押一付一|独立卫浴|有阳台
                        </div>
                    </div>
                </div>
                <div class="jk-cont-item jkFlex">
                    <a href="houseInfo.html" class="houseLink"></a>
                    <div class="jk-cont-item-media">
                        <img src="./images/cont-item.jpg" alt="" />
                    </div>
                    <div class="jk-cont-item-main jkFlexItem">
                        <div class="jk-cont-item-tit oneLine">
                            合租。丰西北里3居室-南卧
                        </div>
                        <div class="jk-cont-item-price oneLine">
                            1700元/月
                        </div>
                        <div class="jk-cont-item-desc oneLine">
                            15m²|南|看丹桥
                        </div>
                        <div class="jk-cont-item-tag oneLine">
                            押一付一|独立卫浴|有阳台
                        </div>
                    </div>
                </div>
                <div class="jk-cont-item jkFlex">
                    <a href="houseInfo.html" class="houseLink"></a>
                    <div class="jk-cont-item-media">
                        <img src="./images/cont-item.jpg" alt="" />
                    </div>
                    <div class="jk-cont-item-main jkFlexItem">
                        <div class="jk-cont-item-tit oneLine">
                            合租。丰西北里3居室-南卧
                        </div>
                        <div class="jk-cont-item-price oneLine">
                            1700元/月
                        </div>
                        <div class="jk-cont-item-desc oneLine">
                            15m²|南|看丹桥
                        </div>
                        <div class="jk-cont-item-tag oneLine">
                            押一付一|独立卫浴|有阳台
                        </div>
                    </div>
                </div>
                <div class="jk-cont-item jkFlex">
                    <a href="houseInfo.html" class="houseLink"></a>
                    <div class="jk-cont-item-media">
                        <img src="./images/cont-item.jpg" alt="" />
                    </div>
                    <div class="jk-cont-item-main jkFlexItem">
                        <div class="jk-cont-item-tit oneLine">
                            合租。丰西北里3居室-南卧
                        </div>
                        <div class="jk-cont-item-price oneLine">
                            1700元/月
                        </div>
                        <div class="jk-cont-item-desc oneLine">
                            15m²|南|看丹桥
                        </div>
                        <div class="jk-cont-item-tag oneLine">
                            押一付一|独立卫浴|有阳台
                        </div>
                    </div>
                </div>
                <div class="jk-cont-item jkFlex">
                    <a href="houseInfo.html" class="houseLink"></a>
                    <div class="jk-cont-item-media">
                        <img src="./images/cont-item.jpg" alt="" />
                    </div>
                    <div class="jk-cont-item-main jkFlexItem">
                        <div class="jk-cont-item-tit oneLine">
                            合租。丰西北里3居室-南卧
                        </div>
                        <div class="jk-cont-item-price oneLine">
                            1700元/月
                        </div>
                        <div class="jk-cont-item-desc oneLine">
                            15m²|南|看丹桥
                        </div>
                        <div class="jk-cont-item-tag oneLine">
                            押一付一|独立卫浴|有阳台
                        </div>
                    </div>
                </div>
                <div class="jk-cont-item jkFlex">
                    <a href="houseInfo.html" class="houseLink"></a>
                    <div class="jk-cont-item-media">
                        <img src="./images/cont-item.jpg" alt="" />
                    </div>
                    <div class="jk-cont-item-main jkFlexItem">
                        <div class="jk-cont-item-tit oneLine">
                            合租。丰西北里3居室-南卧
                        </div>
                        <div class="jk-cont-item-price oneLine">
                            1700元/月
                        </div>
                        <div class="jk-cont-item-desc oneLine">
                            15m²|南|看丹桥
                        </div>
                        <div class="jk-cont-item-tag oneLine">
                            押一付一|独立卫浴|有阳台
                        </div>
                    </div>
                </div> -->
            </div>
        </div>
        <!-- 内容 end-->

        <bottomCom></bottomCom>   
        
        
    </div>


    <!-- 筛选 弹层 start-->
    <div class="jkScreen" id="jkScreen">
        <form action="./index.html">
            <!-- 筛选 nav start-->
            <div class="jk-screen">
                <div class="jk-screen-menu jkFlex">
                    <div class="jk-screen-menu-item">
                        <p class="jkScreenNav menuArea" data-show-screen="Area">
                            <span class="overEllipsis screen-menu-width">区域</span>
                        </p>
                    </div>
                    <div class="jk-screen-menu-item">
                        <p class="jkScreenNav menuPrice" data-show-screen="Price">
                            <span class="overEllipsis screen-menu-width">租金</span>
                        </p>
                    </div>
                    <div class="jk-screen-menu-item">
                        <p class="jkScreenNav menuHouseType"  data-show-screen="HouseType">
                            <span class="overEllipsis screen-menu-width">户型</span>
                        </p>
                    </div>
                    <div class="jk-screen-menu-item">
                        <p class="jkScreenNav menuScreen" data-show-screen="Screen">
                            <span class="overEllipsis screen-menu-width">筛选</span>
                        </p>
                    </div>
                    <div class="jk-screen-menu-item">
                        <p class="jkScreenNav menuSort" data-show-screen="Sort">
                            <span class="sort-icon">&nbsp;</span>
                        </p>
                    </div>
                </div>
            </div>
            <!-- 筛选 nav end-->

            <!-- 区域筛选  start-->
            <div class="jkScreenItem" id="screenArea">
                <div class="jk-screen-box jkFlex" id="jkScreenArea">

                    <!-- 附近 start-->
                    <div class="jk-screen-cont jkFlexItem tl">
                        <ul class="jk-screen-ui">
                            <li class="showTabItem shover" id="near" onclick="showTab('near')">附近</li>
                            <li class="showTabItem" id="area" onclick="showTab('area')">区域</li>
                            <li class="showTabItem" id="subWay" onclick="showTab('subWay')">地铁</li>
                            <input type="hidden" name="screenType" id="screenType">
                        </ul>
                    </div>

                    <!-- 附近 end-->
        
                </div>
                <div class="jk-screen-btn">
                    <button class="blue-btn" type="submit">确定</button>
                </div>
                
            </div>
            <!-- 区域筛选  end-->

            <!-- 租金筛选  start-->
            <div class="jkScreenItem" id="screenPrice">
                <div class="jk-screen-box jkFlex">
                    <div class="jk-screen-cont jkFlexItem">
                        
                        <ul class="jk-screen-ui" id="priceType">
                            <li class="tagItem" data-id="0">不限</li>
                            <li class="tagItem" data-id="1">≤500元</li>
                            <li class="tagItem" data-id="2">500-1000</li>
                            <li class="tagItem" data-id="3">1000-1500</li>
                            <li class="tagItem" data-id="4">1500-2000</li>
                            <li class="tagItem" data-id="5">2000-3000</li>
                            <li class="tagItem" data-id="6">3000-4000</li>
                            <li class="tagItem" data-id="7">4000-5000</li>
                            <li class="tagItem" data-id="8">≥5000</li>
                        </ul>
                        <input type="hidden" name="priceTypeVal" id="priceTypeVal" />

                    </div>
                </div>
                <div class="jk-screen-btn">
                    <button class="blue-btn" type="submit">确定</button>
                </div>
            </div>
            <!-- 租金筛选  end-->

            <!-- 户型筛选  start-->
            <div class="jkScreenItem" id="screenHouseType">
                <div class="jkscreenHouseType">
                    <!-- 租房类型 -->
                    <div class="jk-houseType-tit">租房类型</div>
                    <div class="jk-houseType-con tag-parent" id="rentType"> 
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="0">不限</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="1">整租</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="2">合租</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="3">短租</p></div>
                    </div>
                    <input type="hidden" name="rentTypeVal" id="rentTypeVal" />

                    <!-- 户型 -->
                    <div class="jk-houseType-tit">户型</div>
                    <div class="jk-houseType-con tag-parent" id="rentHoseType">
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="0">不限</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="1">1室</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="2">2室</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="3">3室</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="4">4+室</p></div>
                    </div>
                    <input type="hidden" name="rentHoseTypeVal" id="rentHoseTypeVal" />
                </div>
                
                <div class="jk-screen-btn">
                    <button class="blue-btn" type="submit">确定</button>
                </div>
            </div>
            <!-- 户型筛选  end-->

            <!-- 筛选  start-->
            <div class="jkScreenItem" id="screenScreen">
                <div class="jkscreenScreen">
                    <!-- 出租要求 -->
                    <div class="jk-screenScreen-tit">出租要求</div>
                    <div class="jk-screenScreen-con tag-parent" id="rentRequire">
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="0">不限</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="1">只限女生</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="2">半年起租</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="3">一家人</p></div>
                    </div>
                    <input type="hidden" name="rentRequireVal" id="rentRequireVal" />
                    <!-- 朝向 -->
                    <div class="jk-screenScreen-tit">朝向</div>
                    <div class="jk-screenScreen-con tag-parent" id="rendToward">
                        <div class="jk-tag-4"><p class="jk-ca-tag tag-hover" data-id="0">不限</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="1">东</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="2">南</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="3">西</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="4">北</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="5">南北</p></div>
                    </div>
                    <input type="hidden" name="rendTowardVal" id="rendTowardVal" />

                    <!-- 房源特色 -->
                    <div class="jk-screenScreen-tit">房源特色</div>
                    <div class="jk-screenScreen-con tag-parent" id="rentFeature">
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="0">不限</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="1">临高铁</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="2">押一付一</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="3">配套齐全</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="4">精装修</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="5">普通装修</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="6">南北通透</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="7">有阳台</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="8">首次出租</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="9">随时看房</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="10">女生合租</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="11">男生合租</p></div>
                    </div>
                    <input type="hidden" name="rentFeatureVal" id="rentFeatureVal" />
                </div>
                <div class="jk-screen-btn">
                    <button class="blue-btn" type="submit">确定</button>
                </div>
            </div>
            <!-- 筛选  end-->

            <!-- 排序  start-->
            <div class="jkScreenItem" id="screenSort">
                <div class="jk-screen-box jkFlex">
                    <div class="jk-screen-cont jkFlexItem">
                        <ul class="jk-screen-ui">
                            <li class="shover"><button name="paixu" type="submit" value="price0">默认排序</button></li>
                            <li><button name="paixu" type="submit" value="price1">价格从低到高</button></li>
                            <li><button name="paixu" type="submit" value="price2">价格从高到低</button></li>
                            <li><button name="paixu" type="submit" value="price3">发布从新到旧</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 排序  end-->
        </form>
    </div>
    <!-- 筛选 弹层 end-->
      
</div>

</template>

<script type="text/ecmascript-6">
import bottomCom from './bottomCom.vue';

import menuImg1 from '../assets/menu-item-1.png';
import menuImg2 from '../assets/menu-item-2.png';
import menuImg3 from '../assets/menu-item-3.png';
export default {
    name: 'index',
    data () {
        return {
            menuImg1: menuImg1,
            menuImg2: menuImg2,
            menuImg3: menuImg3,
            currentPage: 1,
            totalItems: 0
        }
    },
    created () {
        this.getHouseList(this.currentPage)
    },
    components: {
        bottomCom
    },
    methods: {
        getHouseList(currentPage) {
            this.$http.get('/api/API.ashx?apicommand=gethousepage').then(function (data) {
                console.info('data',data)
            }, function (response) {
                console.info(response)
            })
        }
    }
}
</script>
