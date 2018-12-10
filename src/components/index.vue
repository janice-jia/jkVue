<template>
<div>
<div class="jk-wap">
        <!-- 搜索 start-->
        <!-- <div class="jk-search jkFlex">
            <a href="javascript:;" class="jk-search-address">邯郸</a>
            <input class="jk-search-text jkFlexItem" id="searchText" type="text" placeholder="您想住哪？" @focus="goSearchPage"/>
        </div> -->
        <!-- 搜索 end-->

        <!-- 导航 start-->
        <div class="jk-menu jkFlex">
            <div class="jk-menu-item jkFlexItem" @click="changeRenttype('整租')">
                <a href="javascript:;" >
                    <img :src="menuImg1" alt="整租" />
                    <p>整租</p>
                </a>
            </div>
            <div class="jk-menu-item jkFlexItem" @click="changeRenttype('合租')">
                <a href="javascript:;">
                    <img :src="menuImg2" alt="合租" />
                    <p>合租</p>
                </a>
            </div>
            <div class="jk-menu-item jkFlexItem" @click="changeRenttype('短租')">
                <a href="javascript:;">
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
                <div v-bind:class="[isSortClass ? 'jk-screen-menu-item screen-menu-hover' : 'jk-screen-menu-item']">
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
            <div class="jk-scrollerWrap">
                <div class="jk-cont">
                    <scroller
                            :on-refresh="refresh"
                            :on-infinite="infinite"
                            ref="myscroller"
                            >
                        <div class="jk-cont-item jkFlex"
                             v-for="(item,index) in hoseListAll"
                             :key="index"
                             :style="{height: item.itemHeight + 'px', 'line-height': item.itemHeight + 'px'}">
                            <router-link class="houseLink" :to="{name: 'houseInfo', params: {houseid: item.houseid}}"></router-link>
                            <div class="jk-cont-item-media">
                                <img :src="imgWenSiteUrl+item.thumbnailurl" alt="" />
                            </div>
                            <div class="jk-isrecommend" v-show="item.isrecommend">
                                优选
                            </div>
                            <div class="jk-cont-item-main jkFlexItem">
                                <div class="jk-cont-item-tit oneLine">
                                    <!-- 合租。丰西北里3居室-南卧 -->
                                    {{item.title}}
                                    <!-- {{item.renttype+' · '}}{{item.community}}{{item.housestructure}} -->
                                </div>
                                <div class="jk-cont-item-price oneLine">
                                    <!-- 1700元/月 -->
                                    {{item.rent}}
                                    <span v-show="item.rentunit=='日租'">元/天</span>
                                    <span v-show="item.rentunit=='月租'">元/月</span>
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
                    </scroller>

                    
                </div>
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
  
    </div>
    <bottomCom></bottomCom>


    <!-- 筛选 弹层 start-->
    <div class="jkScreen" id="jkScreen">
        <div class="jkScreenBox">
        
        <form action="/" id="searchForm">
            <!--筛选的类型 Area区域 Price租金 HouseType户型 Screen筛选 Sort排序-->
            <input type="hidden" name="searchType" id="searchType">
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
                            <!-- <li class="showTabItem shover" id="near" @click="showTab('near')">附近</li> -->
                            <li class="showTabItem shover" id="area" @click="showTab('area')">区域</li>
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
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="6">东西</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="7">东北</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="8">东南</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="9">西北</p></div>
                        <div class="jk-tag-4"><p class="jk-ca-tag" data-id="10">西南</p></div>
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
                    <input type="hidden" value="" name="asctype" id="asctype"/>
                    <div class="jk-screen-cont jkFlexItem">
                        <ul class="jk-screen-ui">
                            <li v-bind:class="[!asctypeClass ? 'shover' : '']"><button name="paixu" type="submit">默认排序</button></li>
                            <li v-bind:class="[asctypeClass=='rentasc' ? 'shover' : '']">
                                <button type="button" @click="setasctype('rentasc')" value="rentasc">价格从低到高</button>
                            </li>
                            <li v-bind:class="[asctypeClass=='rentdesc' ? 'shover' : '']">
                                <button type="button" @click="setasctype('rentdesc')" value="rentdesc">价格从高到低</button>
                            </li>
                            <li v-bind:class="[asctypeClass=='adddatetimedesc' ? 'shover' : '']">
                                <button type="button" @click="setasctype('adddatetimedesc')" value="adddatetimedesc">发布从新到旧</button>
                            </li>
                            <li v-bind:class="[asctypeClass=='adddatetimeasc' ? 'shover' : '']">
                                <button type="button" @click="setasctype('adddatetimeasc')"  value="adddatetimeasc">发布从旧到新</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 排序  end-->
        </form>
        </div>
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

import {Toast} from 'mint-ui';
export default {
    name: 'index',
    data () {
        return {
            menuImg1: menuImg1,
            menuImg2: menuImg2,
            menuImg3: menuImg3,
            imgWenSiteUrl:this.GLOBAL.imgWenSiteUrl,
            heightList:[],
            hoseListAll:[],
            totalItems: 0,  //总条数
            pagesize: 10,   //没有显示条数
            pageindex:1,  //当前页码
            currentPage: 1, //当前页码
            loading: false, 
            count:0,
            isSortClass:this.getSortClass(),
            

            renttype:'', //房源类型  用于查询
            asctype:'', //房源排序   用于查询
            ascfiled:'', //房源排序字段   用于查询
            rentstart:'',//房源租金起始 用于查询
            rentend:'',//房源租金截止   用于查询
            housestructure:'',//户型    用于查询
            houserequire: '',  //出租要求    用于查询
            direction: '',  //朝向    用于查询
            housefeature: '',  //房源特色    用于查询
            county:"",     //市
            POI:"",        //地标

            keyword:'',//搜索关键字    用于手动输入查询
            isrecommend:this.$route.query.isrecommend,
            

            hostTyprStr:'户型', //户型选中的筛选，用于首页展示
            priceTyprStr:'租金', //租金选中的筛选，用于首页展示
            areaTyprStr:'区域', //区域选中的筛选，用于首页展示
            screenTyprStr:'筛选', //筛选选中的筛选，用于首页展示

            areaData:[],  //区域数组

            asctypeClass: this.$route.query.asctype
        }
    },
    beforeCreated(){
        // //获取城市列表
        // this.getCity();
    },
    created () {
        // console.info('this.$router.query',this.$route.query)
        //设置查询条件
        this.setQuery();

        //吸顶条效果
        indexJs.fixed(200);
    },
    mounted(){
        // 首页展示筛选效果
        indexJs.clickShowTab();
         //默认显示 附近
        //  console.info('this.areaData======',this.areaData)
        // indexJs.showTab('area', this.areaData);
         //获取城市列表
        this.getCity();

        var priceType = ["不限","≤500元","500-1000","1000-1500","2000-3000","3000-4000","合4000-5000租","≥5000"];
        indexJs.getSelectData(priceType, 'priceType','tagItem', 'priceTypeVal','shover', true, this.$route.query.priceTypeVal ? this.$route.query.priceTypeVal : '不限');

        var rentType = ["不限","整租","合租","短租"];
        // console.info('this.renttype', this.renttype);
        indexJs.getSelectData(rentType, 'rentType','jk-ca-tag', 'rentTypeVal','tag-hover', true, this.renttype ? this.renttype : '不限');

        var rentHoseType = ["不限","1室","2室","3室","4+室"];
        indexJs.getSelectData(rentHoseType, 'rentHoseType','jk-ca-tag', 'rentHoseTypeVal','tag-hover', true, this.housestructure ? this.housestructure : '不限');

        var rentRequire = ["不限","只限女生","半年起租","一家人"];
        indexJs.getSelectData(rentRequire, 'rentRequire','jk-ca-tag', 'rentRequireVal','tag-hover', true, this.houserequire ? this.houserequire : '不限');

        var rendToward = ["不限","东","南","西","北","南北"];
        indexJs.getSelectData(rendToward, 'rendToward','jk-ca-tag', 'rendTowardVal','tag-hover', true, this.direction ? this.direction : '不限');


        var rentFeature = ["不限","临高铁","押一付一","配套齐全","精装修","普通装修","南北通透","有阳台","首次出租","随时看房","女生合租","男生合租"];
        indexJs.getSelectData(rentFeature, 'rentFeature','jk-ca-tag', 'rentFeatureVal','tag-hover', true, this.housefeature ? this.housefeature : '不限');

        if(this.$route.query.asctype) $('#asctype').val(this.$route.query.asctype);
    },
    components: {
        bottomCom
    },
    methods: {
        changeRenttype(renttype){
            $('#rentTypeVal').val(renttype);
            $('#searchForm').submit();
        },
        getCity(){
            var THIS = this;
             //请求区域数据
            this.$http.get("/api/API.ashx?apicommand=getregion&parentid=607").then(function (data) {
                var areaData = eval("("+data.bodyText+")");
                this.areaData = areaData;
                var row1Default = '';
                for(var i=0; i < this.areaData.length; i++){
                    if(this.areaData[i].id == this.county){
                        row1Default = this.areaData[i].id;
                    }
                }
                // console.info('THIS.$route.query.row2Val', THIS.$route.query.row2Val);
                if(THIS.$route.query.row2Val) this.POI = THIS.$route.query.row2Val;
                // console.info('this.POI', this.POI);
                indexJs.showTab('area', this.areaData, row1Default, this.POI);

                //设置区域搜索显示
                if(THIS.$route.query.row1Val || THIS.$route.query.row2Val || THIS.$route.query.row3Val){
                    var row1Val = '';
                    if(THIS.$route.query.row1Val){
                        THIS.areaData.forEach(function(item){
                            if(item.id == THIS.$route.query.row1Val) row1Val = item.name
                        });
                    }
                    
                    THIS.areaTyprStr = row1Val
                    + (THIS.$route.query.row2Val ? THIS.$route.query.row2Val : '')
                    + (THIS.$route.query.row3Val ? THIS.$route.query.row3Val : '')
                }
            }).then(function(){
                console.info('获取区域error')
            })
        },
        showTab(type){
            indexJs.showTab(type,this.areaData);
        },
        setQuery(){

            // 房源出租类型
            if(this.$route.query.renttype){
                this.renttype = this.$route.query.renttype; 
                this.hostTyprStr = this.$route.query.renttype;
            }
            if(this.$route.query.rentTypeVal){
                if(this.$route.query.rentTypeVal != '不限') this.renttype = this.$route.query.rentTypeVal;

                if(this.$route.query.rentTypeVal != '不限'){
                    this.hostTyprStr = this.$route.query.rentTypeVal;
                }else if(this.$route.query.rentHoseTypeVal != '不限'){
                    this.hostTyprStr = this.$route.query.rentHoseTypeVal;
                }else{
                    this.hostTyprStr = '不限'
                }
            }

            if(this.$route.query.row1Val || this.$route.query.row2Val){
                this.county = this.$route.query.row1Val;     //市
                this.POI = this.$route.query.row2Val;        //地标
            }

            // 租金
            if(this.$route.query.priceTypeVal) {
                // this.priceTypeVal = this.$route.query.priceTypeVal;
                this.priceTyprStr = this.$route.query.priceTypeVal;
                var priceTypeVal = this.$route.query.priceTypeVal;
                if(priceTypeVal === '≤500元'){
                    this.rentstart = 0
                    this.rentend = 500
                }else if(priceTypeVal == '500-1000'){
                    this.rentstart = 500
                    this.rentend = 1000
                }else if(priceTypeVal == '1000-1500'){
                    this.rentstart = 1000
                    this.rentend = 1500
                }else if(priceTypeVal == '1500-2000'){
                    this.rentstart = 1500
                    this.rentend = 2000
                }else if(priceTypeVal == '2000-3000'){
                    this.rentstart = 2000
                    this.rentend = 3000
                }else if(priceTypeVal == '3000-4000'){
                    this.rentstart = 3000
                    this.rentend = 4000
                }else if(priceTypeVal == '4000-5000'){
                    this.rentstart = 4000
                    this.rentend = 5000
                }else if(priceTypeVal == '≥5000'){
                    this.rentstart = 5000
                    this.rentend = 100000
                }
                
            } 

            // 户型
            if(this.$route.query.rentHoseTypeVal){
                if(this.$route.query.rentHoseTypeVal != '不限') this.housestructure = this.$route.query.rentHoseTypeVal;
            }

            // 筛选
            if(this.$route.query.rentRequireVal){
                if(this.$route.query.rentRequireVal !='不限')
                    this.screenTyprStr = this.$route.query.rentRequireVal;
                else  if(this.$route.query.rentFeatureVal != '不限')
                    this.screenTyprStr = this.$route.query.rentFeatureVal;
                else if(this.$route.query.rendTowardVal != '不限')
                    this.screenTyprStr = this.$route.query.rendTowardVal;
                else
                    this.screenTyprStr = '不限';
            }

            //排序
            if(this.$route.query.asctype){
                if(this.$route.query.asctype == 'rentasc'){
                    this.asctype = 'asc'
                    this.ascfiled = 'rent'
                }else if(this.$route.query.asctype == 'rentdesc'){
                    this.asctype = 'desc'
                    this.ascfiled = 'rent'
                }else if(this.$route.query.asctype == 'adddatetimeasc'){
                    this.asctype = 'asc'
                    this.ascfiled = 'adddatetime'
                }else if(this.$route.query.asctype == 'adddatetimedesc'){
                    this.asctype = 'desc'
                    this.ascfiled = 'adddatetime'
                }else{
                    this.asctype = ''
                    this.ascfiled = ''
                }
            }
            
            // 出租要求
            if(this.$route.query.rentRequireVal){
                if(this.$route.query.rentRequireVal != '不限') this.houserequire = this.$route.query.rentRequireVal;
            }

            // 房源特色
            if(this.$route.query.rentFeatureVal){
                if(this.$route.query.rentFeatureVal != '不限') this.housefeature = this.$route.query.rentFeatureVal;
            }

            // 朝向
            if(this.$route.query.rendTowardVal){
                if(this.$route.query.rendTowardVal != '不限') this.direction = this.$route.query.rendTowardVal;
            }
        
        },
        refresh:function(){
            console.log('refresh')
            this.$refs.myscroller.finishPullToRefresh();
        },
        infinite: function (done) {
            var THIS = this;
            var apiUrl = '';
            apiUrl = '/api/API.ashx';
            var queryData = {}
            // 是否是手动输入查询
            queryData.apicommand = 'gethousepage'; 
            if(this.keyword){
                queryData.keyword = this.keyword; //类型
            }else if(this.isrecommend){
                queryData.isrecommend = this.isrecommend; //类型
            }else{
                /**
                    * 根据筛选类型设置参数
                    * Area区域 Price租金 HouseType户型 Screen筛选 Sort排序
                    */
                var searchType = this.$route.query.searchType;
                queryData.renttype = this.renttype; //类型
                queryData.province = 113; //省份
                queryData.city = 607;      //城市
                queryData.county= this.county;     //市
                queryData.POI= this.POI;        //地标
  
                queryData.rentstart = this.rentstart;  //租金起始
                queryData.rentend = this.rentend;  //租金截止
                queryData.housestructure = this.housestructure;  //户型
                queryData.houserequire = this.houserequire;  //出租要求
                queryData.direction = this.direction;  //朝向
                queryData.housefeature = this.housefeature;  //房源特色
                queryData.asctype = this.asctype;  //排序类型
                queryData.ascfiled = this.ascfiled;  //排序字段
            }
            queryData.pagesize = this.pagesize;  //每页显示
            queryData.pageindex = this.pageindex; //第几页
            // if(queryData.renttype == undefined) queryData.renttype = ''
            
            this.$http.get(apiUrl,{params:queryData}).then(function (data) {
                if (data.body) {
                    for (var i = 0; i < data.body.list.length; i++) {
                        this.hoseListAll.push(data.body.list[i])
                    }
                }

                this.pageindex++;
                if(!data.body || data.body.count == 0 || (this.hoseListAll.length >=data.body.count)){
                    // this.$refs.myscroller.finishInfinite(2);
                    // this.$refs.myscroller.finishPullToRefresh();
                    done(true);
                }else{
                    //表示这次异步加载数据完成，加载下一次
                    done()
                }
                
            })
        },
        goSearchPage(){
            this.$router.push({name: 'search'});
        },
        getSortClass(){
            if(this.$route.query.asctype){
                return true
            }else{
                return false
            }
        },
        setasctype (type){
            $('#asctype').val(type);
            $('#searchForm').submit();
        }
    }
}
</script>
