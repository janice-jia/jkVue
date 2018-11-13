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
                <a href="/?renttype=整租">
                    <img :src="menuImg1" alt="整租" />
                    <p>整租</p>
                </a>
            </div>
            <div class="jk-menu-item jkFlexItem">
                <a href="/?renttype=合租">
                    <img :src="menuImg2" alt="合租" />
                    <p>合租</p>
                </a>
            </div>
            <div class="jk-menu-item jkFlexItem">
                <a href="/?renttype=短租">
                    <img :src="menuImg3" alt="短租" />
                    <p>短租</p>
                </a>
            </div>
        </div>
        <!-- 导航 end-->

        <!-- 筛选 nav start-->
        <div class="jk-screen" id="screenMenu">
            <div class="jk-screen-menu jkFlex">
                <!-- <div class="jk-screen-menu-item screen-menu-hover"> -->
                <div v-bind:class="[areaTyprStr=='区域' ? 'jk-screen-menu-item' : 'jk-screen-menu-item  screen-menu-hover']">
                    <p class="jkScreenNav menuArea" data-show-screen="Area">
                        <span class="overEllipsis screen-menu-width">
                            <!-- 区域 -->
                            {{areaTyprStr}}
                        </span>
                    </p>
                </div>
                <div v-bind:class="[priceTyprStr=='租金' ? 'jk-screen-menu-item' : 'jk-screen-menu-item  screen-menu-hover']">
                    <p class="jkScreenNav menuPrice" data-show-screen="Price">
                        <span class="overEllipsis screen-menu-width">
                            <!-- 租金 -->
                            {{priceTyprStr}}
                        </span>
                    </p>
                </div>
                <div v-bind:class="[hostTyprStr=='户型' ? 'jk-screen-menu-item' : 'jk-screen-menu-item  screen-menu-hover']">
                    <p class="jkScreenNav menuHouseType"  data-show-screen="HouseType">
                        <span class="overEllipsis screen-menu-width">
                            <!-- 户型 -->
                            {{hostTyprStr}}
                        </span>
                    </p>
                </div>
                <div v-bind:class="[screenTyprStr=='筛选' ? 'jk-screen-menu-item' : 'jk-screen-menu-item  screen-menu-hover']">
                    <p class="jkScreenNav menuScreen" data-show-screen="Screen">
                        <span class="overEllipsis screen-menu-width">
                            <!-- 筛选 -->
                            {{screenTyprStr}}
                        </span>
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
            <!-- <div class="jk-banner">
                此处预留banner位置
                <a href="">
                        <img src="./images/cont-item.jpg" alt="" />
                </a>
            </div> -->
            <div class="jk-cont">
                <scroll-list :heights="heightList" :remain="10" @toBottom="onBottom" @scrolling="onScroll">
                    <div class="jk-cont-item jkFlex" 
                                v-for="(item,index) in hoseListAll" 
                                :key="index"
                                :style="{height: item.itemHeight + 'px', 'line-height': item.itemHeight + 'px'}">
                        <a href="houseInfo.html" class="houseLink"></a>
                        <div class="jk-cont-item-media">
                            <img :src="'http://admin.9kuaiz.com'+item.thumbnailurl" alt="" />
                        </div>
                        <div class="jk-cont-item-main jkFlexItem">
                            <div class="jk-cont-item-tit oneLine">
                                <!-- 合租。丰西北里3居室-南卧 -->
                                {{item.community}}
                            </div>
                            <div class="jk-cont-item-price oneLine">
                                <!-- 1700元/月 -->
                                {{item.rent + '元/月'}}
                            </div>
                            <div class="jk-cont-item-desc oneLine">
                                <!-- 15m²|南|看丹桥 -->
                                {{item.area+'m²'}}{{'|'+item.direction}}{{'|'+item.POI?item.POI:''}}
                            </div>
                            <div class="jk-cont-item-tag oneLine">
                                <!-- 押一付一|独立卫浴|有阳台 -->
                                {{item.housefeature}}
                            </div>
                        </div>
                    </div>
                </scroll-list>
                <div class="jk-null jk-null-nopadding" v-if="!hoseListAll || hoseListAll.length==0">
                    <div class="jk-null-tit">
                        暂无房源信息
                    </div>
                    <!-- <div class="jk-null-desc">
                            有合适的房子快来发布吧
                    </div> -->
                </div>
            </div>
        </div>
        <!-- 内容 end-->

        <bottomCom></bottomCom>   
        
  
    </div>


    <!-- 筛选 弹层 start-->
    <div class="jkScreen" id="jkScreen">
        <form action="/">
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
                            <li class="showTabItem shover" id="near" @click="showTab('near')">附近</li>
                            <li class="showTabItem" id="area" @click="showTab('area')">区域</li>
                            <!-- <li class="showTabItem" id="subWay" @click="showTab('subWay')">地铁</li> -->
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
import indexJs from '../js/index'

import menuImg1 from '../assets/menu-item-1.png';
import menuImg2 from '../assets/menu-item-2.png';
import menuImg3 from '../assets/menu-item-3.png';

import scrollList from 'vue-scroll-list';
export default {
    name: 'index',
    data () {
        return {
            menuImg1: menuImg1,
            menuImg2: menuImg2,
            menuImg3: menuImg3,
            heightList:[],
            hoseListAll:[],
            totalItems: 11,  //总条数
            pagesize: 10,   //没有显示条数
            pageindex:1,  //当前页码
            currentPage: 1, //当前页码
            loading: false, 
            count:0,

            renttype:'', //房源类型  用于查询

            hostTyprStr:'户型', //户型选中的筛选，用于首页展示
            priceTyprStr:'租金', //租金选中的筛选，用于首页展示
            areaTyprStr:'区域', //区域选中的筛选，用于首页展示
            screenTyprStr:'筛选', //筛选选中的筛选，用于首页展示
        }
    },
    created () {
        console.info('this.$router.query',this.$route.query)
        //设置查询条件
        this.setQuery();

        //吸顶条效果
        indexJs.fixed(200);
        
        //上拉加载
        this.created();
        
    },
    mounted(){
        indexJs.flexible(750,750);
        // 首页展示筛选效果
        indexJs.clickShowTab();
         //默认显示 附近
        indexJs.showTab('near');

        var priceType = ["不限","≤500元","500-1000","1000-1500","2000-3000","3000-4000","合4000-5000租","≥5000"];
        indexJs.getSelectData(priceType, 'priceType','tagItem', 'priceTypeVal','shover', true, '不限');

        var rentType = ["不限","整租","合租","短租"];
        indexJs.getSelectData(rentType, 'rentType','jk-ca-tag', 'rentTypeVal','tag-hover', true, '不限');

        var rentHoseType = ["不限","1室","2室","3室","4+室"];
        indexJs.getSelectData(rentHoseType, 'rentHoseType','jk-ca-tag', 'rentHoseTypeVal','tag-hover', true, '不限');

        var rentRequire = ["不限","只限女生","半年起租","一家人"];
        indexJs.getSelectData(rentRequire, 'rentRequire','jk-ca-tag', 'rentRequireVal','tag-hover', true, '不限');

        var rendToward = ["不限","东","南","西","北","南北"];
        indexJs.getSelectData(rendToward, 'rendToward','jk-ca-tag', 'rendTowardVal','tag-hover', true, '不限');


        var rentFeature = ["不限","临高铁","押一付一","配套齐全","精装修","普通装修","南北通透","有阳台","首次出租","随时看房","女生合租","男生合租"];
        indexJs.getSelectData(rentFeature, 'rentFeature','jk-ca-tag', 'rentFeatureVal','tag-hover', true, '不限');
    },
    components: {
        bottomCom,
        scrollList
    },
    methods: {
        showTab(type){
            indexJs.showTab(type);
        },
        setQuery(){
            if(this.$route.query.row1Val || this.$route.query.row2Val || this.$route.query.row3Val){
                this.areaTyprStr = (this.$route.query.row1Val ? this.$route.query.row1Val : '') 
                + (this.$route.query.row2Val ? this.$route.query.row2Val : '')
                 + (this.$route.query.row3Val ? this.$route.query.row3Val : '')
            }

            // 房源出租类型
            if(this.$route.query.renttype){
                this.renttype = this.$route.query.renttype; 
                this.hostTyprStr = this.$route.query.renttype; 
            }
            if(this.$route.query.rentTypeVal){
                if(this.$route.query.rentTypeVal != '不限') this.renttype = this.$route.query.rentTypeVal; 
                this.hostTyprStr = this.$route.query.rentTypeVal; 
            }

            // 租金
            if(this.$route.query.priceTypeVal) {
                // this.priceTypeVal = this.$route.query.priceTypeVal;
                this.priceTyprStr = this.$route.query.priceTypeVal;
            } 

            // 筛选
            if(this.$route.query.rentRequireVal){
                this.screenTyprStr = this.$route.query.rentRequireVal;
            }
        
        },
        createData:function(){
            console.log('refresh')
            
            this.$http.get('/api/API.ashx?apicommand=gethousepage&renttype='+this.renttype+'&pagesize='+this.pagesize+'&pageindex='+this.pageindex).then(function (data) {
                this.totalItems = data.body.count;
                this.loading = true;
                this.pageindex++;

                let size = window.__createSize || 40;
                this.count += size;
                if (data.body) {
                    for (var i = 0; i < data.body.list.length; i++) {
                        // data.body.list[i].itemHeight = 100
                        this.hoseListAll.push(data.body.list[i])
                        this.heightList.push(100);
                    }
                }
                this.$emit('update:count', this.count);
                window.__stopLoadData = true;
                console.info('this.hoseListAll',this.hoseListAll)
            })
        },
        onScroll(event) {
            this.currentPosition = event.target.scrollTop;
            window.__showScrollEvent && console.log(event);
        },
        created() {
            window.__createSize = 40;
            window.__stopLoadData = false;
            window.__showScrollEvent = true;
            this.createData();
        },
        onBottom: function(){
            console.log('[demo]:page to bottom.');
            !window.__stopLoadData && this.createData();
        }
    }
}
</script>
