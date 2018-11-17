<template>
    <div class="jk-rent">

            <!-- 轮播图 start -->
            <!--<div class="jk-house-banner swiper-container" id="slideTop">-->
                <!--<div class="swiper-wrapper">-->
                    <!--<div class="swiper-slide">-->
                        <!--<img src="../../assets/house-banner.jpg" alt="">-->
                    <!--</div>-->
                <!--</div>-->
                <!--<div class="swiper-pagination-top"></div>-->
            <!--</div>-->
            <mt-swipe :auto="4000" class="swipe" showIndicators="false">
                <mt-swipe-item>
                    <img src="../../assets/house-banner.jpg" alt="" class="img-responsive">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/house-banner.jpg" alt="" class="img-responsive">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/house-banner.jpg" alt="" class="img-responsive">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/house-banner.jpg" alt="" class="img-responsive">
                </mt-swipe-item>
            </mt-swipe>
            <div class="swiper-pagination-top"></div>
            <!-- 轮播图  end -->

            <!-- 基本信息 -->
            <div class="jk-groupTit">基本信息<span>（门牌号不会公开）</span></div>
            <div class="jk-group">
                <div class="jk-group-tit">小区：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="请填写信息"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">面积：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="number" placeholder="请填写信息"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">装修：</div>
                <div class="jk-group-inputInfo" @click="showPup(1)">
                    <input type="input" class="jk-group-select"  name="decorate" id="decorate" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">厅室：</div>
                <div class="jk-group-inputInfo" @click="showPup(2)">
                    <input type="text" class="jk-group-input" name="house" id="house" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">朝向：</div>
                <div class="jk-group-inputInfo"  @click="showPup(3)">
                    <input type="input" class="jk-group-select"  name="toward" id="toward" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">楼层：</div>
                <div class="jk-group-inputInfo"  @click="showPup(4)">
                    <input type="input" class="jk-group-select"  name="floor" id="floor" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 入住信息 -->
            <div class="jk-groupTit">入住信息</div>
            <div class="jk-group">
                <div class="jk-group-tit">入住时间：</div>
                <div class="jk-group-inputInfo"  @click="showPup(5)">
                    <input type="input" class="jk-group-select"  name="checkInTime" id="checkInTime" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">看房时间：</div>
                <div class="jk-group-inputInfo"  @click="showPup(6)">
                    <input type="input" class="jk-group-select"  name="lookTime" id="lookTime" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 租金详情 -->
            <div class="jk-groupTit">租金详情</div>
            <div class="jk-group">
                <div class="jk-group-tit">月租金：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="请填写信息"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">付款方式：</div>
                <div class="jk-group-inputInfo"  @click="showPup(7)">
                    <input class="jk-group-input" type="text" name="payType" id="payType" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 联系人 -->
            <div class="jk-groupTit">联系人</div>
            <div class="jk-group">
                <div class="jk-group-tit">个人：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="请填写姓名"/>
                </div>
                <div class="jk-checkBoxSkin jk-checkBoxVal">
                    <input id="sex" class="jk-checkbox" name="check3" type="checkbox" checked/>
                    <label for="sex" class="trigger"></label>
                    <span class="jk-checkbox-checkVal1">男士</span>
                    <span class="jk-checkbox-checkVal2">女士</span>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">联系电话：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="number" placeholder="请填写手机号码"/>
                </div>
            </div>

            <div class="jk-group">
                <div class="jk-group-tit">接听时段:</div>
                <div class="jk-group-inputInfo"  @click="showPup(8)">
                    <input class="jk-group-input" type="text" name="answerTime" id="answerTime"  placeholder="请选择内容"/>
                </div>
            </div>

            <div class="jk-bottom" @click="toSecondStep">
                <button class="jk-oneBtn-bottom" type="submit">下一步</button>
            </div>


         <!--装修的picker-->
            <mt-popup v-model="popDecorate" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                <mt-picker :slots="dcorateSlots" @change="onValuesChange"  style="width: 7.5rem;"  showToolbar>
                    <div class="clearfix picker-toolbar-title">
                        <p class="usi-btn-cancel left" @click="popDecorate = !popDecorate">取消</p>
                        <p class="usi-btn-sure right" @click="popDecorate = !popDecorate">确定</p>
                    </div>
                </mt-picker>
            </mt-popup>
            <!--厅室的picker-->
            <mt-popup v-model="popHouse" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                <mt-picker :slots="houseSlots" @change="onValuesChange"  style="width: 7.5rem;" showToolbar>
                    <div class="clearfix picker-toolbar-title">
                        <p class="usi-btn-cancel left" @click="popHouse = !popHouse">取消</p>
                        <p class="usi-btn-sure right" @click="popHouse = !popHouse">确定</p>
                    </div>
                </mt-picker>
            </mt-popup>
            <!--朝向的picker-->
            <mt-popup v-model="popToward" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                <mt-picker :slots="towardSlots" @change="onValuesChange"  style="width: 7.5rem;" showToolbar>
                    <div class="clearfix picker-toolbar-title">
                        <p class="usi-btn-cancel left" @click="popToward = !popToward">取消</p>
                        <p class="usi-btn-sure right" @click="popToward = !popToward">确定</p>
                    </div>
                </mt-picker>
            </mt-popup>
            <!--楼层的picker-->
            <mt-popup v-model="popFloor" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                <mt-picker :slots="floorSlots" @change="onValuesChange"  style="width: 7.5rem;" showToolbar>
                    <div class="clearfix picker-toolbar-title">
                        <p class="usi-btn-cancel left" @click="popFloor = !popFloor">取消</p>
                        <p class="usi-btn-sure right" @click="popFloor = !popFloor">确定</p>
                    </div>
                </mt-picker>
            </mt-popup>
            <!--入住时间--><!--日期选择器-->
            <mt-datetime-picker
                    type="date"
                    ref="picker"
                    year-format="{value} 年"
                    month-format="{value} 月"
                    date-format="{value} 日"
                    @confirm="handleConfirm"
                    :startDate="startDate"
            >
            </mt-datetime-picker>
            <!--看房的picker-->
            <mt-popup v-model="popLookTime" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                <mt-picker :slots="lookTimeSlots" @change="onValuesChange"  style="width: 7.5rem;" showToolbar>
                    <div class="clearfix picker-toolbar-title">
                        <p class="usi-btn-cancel left" @click="popLookTime = !popLookTime">取消</p>
                        <p class="usi-btn-sure right" @click="popLookTime = !popLookTime">确定</p>
                    </div>
                </mt-picker>
            </mt-popup>
            <!--付款的picker-->
            <mt-popup v-model="popPayType" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                <mt-picker :slots="payTypeSlots" @change="onValuesChange"  style="width: 7.5rem;" showToolbar>
                    <div class="clearfix picker-toolbar-title">
                        <p class="usi-btn-cancel left" @click="popPayType = !popPayType">取消</p>
                        <p class="usi-btn-sure right" @click="popPayType = !popPayType">确定</p>
                    </div>
                </mt-picker>
            </mt-popup>
            <!--接听的picker-->
            <mt-popup v-model="popAnswerTime" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
                <mt-picker :slots="answerTimeSlots" @change="onValuesChange"  style="width: 7.5rem;" showToolbar>
                    <div class="clearfix picker-toolbar-title">
                        <p class="usi-btn-cancel left" @click="popAnswerTime = !popAnswerTime">取消</p>
                        <p class="usi-btn-sure right" @click="popAnswerTime = !popAnswerTime">确定</p>
                    </div>
                </mt-picker>
            </mt-popup>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui';
    Vue.component(Swipe.name, Swipe,SwipeItem.name, SwipeItem);

    export default {
        name: "shared",
        data(){
            return {
                showToolbar:true,
                //装修
                dcorateSlots: [{
                    values: ['毛坯', '简单装修','中等装修','精装修'],

                }],
                popDecorate: false,
                // 厅室
                houseSlots: [
                    {
                        flex: 1,
                        values: ['0室', '1室', '2室', '3室'],
                        className: 'slot1',
                        textAlign: 'left'
                    },{
                        flex: 1,
                        values: ['0厅', '1厅', '2厅', '3厅'],
                        className: 'slot3',
                        textAlign: 'center'
                    },
                    {
                        flex: 1,
                        values: ['0卫', '1卫', '2卫', '3卫'],
                        className: 'slot3',
                        textAlign: 'right'
                    }

                ],
                popHouse: false,
                //朝向
                towardSlots: [{
                    values: ['东', '南','西','北'],

                }],
                popToward:false,
                //楼层
                floorSlots: [
                    {
                        flex: 1,
                        values: ['-1层','1层','2层','3层'],
                        className: 'slot1',
                        textAlign: 'left'
                    }, {
                        flex: 1,
                        values: ['共6层','共7层','共8层','共9层'],
                        className: 'slot2',
                        textAlign: 'right'
                    }

                ],
                popFloor: false,
                //入住时间
                pickerVisible:true,
                dateTime: '',
                startDate: new Date(),
                popPeopleNum: false,
                //看房时间
                lookTimeSlots: [{
                    values: ['随时看', '仅周末','仅工作日']
                }],
                popLookTime: false,
                //付款方式
                payTypeSlots: [{
                    values:['押一付一','押一付三','半年付','年付']
                }],
                popPayType: false,
                //接听时段
                answerTimeSlots: [
                    {
                        flex: 1,
                        values: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00",
                            "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
                            "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
                        className: 'slot1',
                        textAlign: 'left',
                        defaultIndex:8
                    },{
                        flex: 1,
                        content:'至',
                        divider: true,
                        textAlign:'center',
                        className: 'slot1',
                    },
                    {
                        flex: 1,
                        values: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00",
                            "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
                            "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
                        className: 'slot1',
                        defaultIndex:15,
                        textAlign: 'right'
                    }

                ],
                popAnswerTime: false,
            }
        },
        mounted(){},
        methods:{
            showPup(num) {
                let n = num;
                switch(n) {
                    case 1:
                        this.popDecorate = true; //装修
                        break;
                    case 2:
                        this.popHouse = true; //厅室
                        break;
                    case 3:
                        this.popToward = true; //朝向
                        break;
                    case 4:
                        this.popFloor = true;  //楼层
                        break;
                    case 5:
                        this.pickerVisible = true;//入住时间
                        this.$refs.picker.open();
                        break;
                    case 6:
                        this.popLookTime = true; //看房时间
                        break;
                    case 7:
                        this.popPayType = true; //付款方式
                        break;
                    case 8:
                        this.popAnswerTime = true;  //接听时段
                        break;
                }
            },
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
            },
            handleConfirm (data) {
                let date = moment(data).format('YYYY.MM.DD');
                this.dateTime = date;
            },
            toSecondStep(){
                this.$router.push({name: 'secondStep', params:{page:2}});
            },
        },
    }
</script>

<style scoped>
    .picker-toolbar-title{
        padding: .3rem;
    }
    .usi-btn-cancel, .usi-btn-sure{
        font-size: 12px;
    }
    .usi-btn-cancel{
        color: rgb(153,153,153);
    }
    .usi-btn-sure{
        color: rgb(44,104,219);
    }
    .swipe {
        width: 100%;
        height: 200px;
    }
</style>
