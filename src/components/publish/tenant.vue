<template>
    <div class="jk-rent">
        <div>
            <!-- 图片轮播 -->
            <mt-swipe :auto="0" class="swipe"  v-if="picArr.length>0">
                <mt-swipe-item v-for="(item, index) in picArr" :key="index">
                    <img :src="imgWenSiteUrl+item.imgurl" alt="" class="img-responsive">
                </mt-swipe-item>
            </mt-swipe>
            <!--图片上传-->
            <div class="jk-rent-bannerDefault" v-else>
                <!-- 上传按钮 -->
                <div class="jk-rent-photo">
                    <div class="jk-rent-photoBtn">
                        <input name="pic" ref="fileInput" @change="selectFile" multiple accept="image/*"
                        type="file"/>
                    </div>
                </div>
                <img src="../../assets/rent-banner.jpg" alt="" />
            </div>

            <!--图片预览 by zqy-->
            <div class="clearfix preview-img" v-show="picArr.length>0">
                <p v-for="(item,idx) in picArr"
                   :style="'backgroundImage:url('+imgWenSiteUrl+item.thumbnailurl+')'" :key="idx" class="upload_picture">
                    <span class="del" @click="delPic(idx,item.id,item.thumbnailurl,item.imgurl)"></span>
                </p>

                <p class="upload_picture upload-btn">
                    <img src="../../assets/icon-add.png" alt="upload" class="upload-btn-img">
                    <input name="pic" ref="fileInput" @change="selectFile" type="file" multiple accept="image/*"/>
                </p>
            </div>


            <!-- 基本信息 -->
            <div class="jk-groupTit">基本信息<span>（门牌号不会公开）</span></div>
            <div class="jk-group">
                <div class="jk-group-tit">小区：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="例:曙光小区" v-model="sendDataInfo.community"/>
                </div>
            </div>
            <div class="jk-group" v-show="rentType==1">
                <div class="jk-group-tit">门牌号：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" v-model="sendDataInfo.housenumber" name="roomNum" placeholder="例:1-2-203"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">地区选择：</div>
                <div class="jk-group-inputInfo" @click="showPup(12)">
                    <input type="text"  class="jk-group-input" v-model="address" readonly name="place" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">所在POI：</div>
                <div class="jk-group-inputInfo" @click="showPup(13)">
                    <input type="text"  class="jk-group-input" readonly v-model="sendDataInfo.POI" name="place" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">面积：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="number" placeholder="请填写信息" v-model="sendDataInfo.area"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">装修：</div>
                <div class="jk-group-inputInfo" @click="showPup(1)">
                    <input type="input" class="jk-group-select" v-model="sendDataInfo.decorated" readonly name="decorate"  placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">厅室：</div>
                <div class="jk-group-inputInfo" @click="showPup(2)">
                    <input type="text" class="jk-group-input" name="house" readonly v-model="sendDataInfo.housestructure" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">朝向：</div>
                <div class="jk-group-inputInfo" @click="showPup(3)">
                    <input type="input" class="jk-group-select" readonly name="toward" v-model="sendDataInfo.direction" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">楼层：</div>
                <div class="jk-group-inputInfo" @click="showPup(4)">
                    <input type="input" class="jk-group-select" readonly name="floor" v-model="sendDataInfo.floor" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">总楼层：</div>
                <div class="jk-group-inputInfo">
                    <div class="jk-group-inputInfo" @click="showPup(14)">
                        <input type="input" class="jk-group-select" readonly name="floorcount" v-model="sendDataInfo.floorcount" placeholder="请选择内容"/>
                    </div>
                    <!-- <input type="number" class="jk-group-select"  name="floorcount" v-model="sendDataInfo.floorcount" placeholder="请填写内容"/> -->
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">电梯：</div>
                <div class="jk-group-inputInfo">
                    <div class="jk-checkBoxSkin">
                        <input id="lift" class="jk-checkbox" name="check1" checked type="checkbox"
                               v-model="sendDataInfo.elevator"/>
                        <label for="lift" class="trigger"></label>
                    </div>
                </div>
            </div>
            <div class="jk-group"  v-show="rentType==1">
                <div class="jk-group-tit">车位：</div>
                <div class="jk-group-inputInfo">
                    <div class="jk-checkBoxSkin">
                        <input id="park" class="jk-checkbox" name="check2" type="checkbox"
                               v-model="sendDataInfo.carport"/>
                        <label for="park" class="trigger"></label>
                    </div>
                </div>
            </div>


            <!-- 入住信息 -->
            <div class="jk-groupTit">入住信息</div>
            <div class="jk-group">
                <div class="jk-group-tit">入住时间：</div>
                <div class="jk-group-inputInfo" @click="showPup(5)">
                    <input type="input" class="jk-group-select" readonly  name="checkInTime" v-model="sendDataInfo.checkin" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group" v-show="rentType==1">
                <div class="jk-group-tit">宜住人数：</div>
                <div class="jk-group-inputInfo" @click="showPup(6)">
                    <input type="input" class="jk-group-select" readonly name="peopleNum" v-model="sendDataInfo.occupancynum" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">看房时间：</div>
                <div class="jk-group-inputInfo" @click="showPup(7)">
                    <input type="input" class="jk-group-select" readonly name="lookTime" v-model="sendDataInfo.openhomedate" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 租金详情 -->
            <div class="jk-groupTit">租金详情</div>
            <div class="jk-group">
                <div class="jk-group-tit">租金形式：</div>
                <div class="jk-group-inputInfo" @click="showPup(11)">
                    <input class="jk-group-input" type="text"  readonly name="payType" v-model="sendDataInfo.rentunit" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">租金：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="请填写信息"
                           v-model="sendDataInfo.rent"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">付款方式：</div>
                <div class="jk-group-inputInfo" @click="showPup(8)">
                    <input class="jk-group-input" type="text" readonly name="payType" v-model="sendDataInfo.payment" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group"  v-show="rentType==1">
                <div class="jk-group-tit">租金包含费用<span>（物业费等）</span>:</div>
                <div class="jk-group-inputInfo" @click="showPup(9)">
                    <input class="jk-group-input" readonly type="text" name="priceContains" v-model="sendDataInfo.rentcontent" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 联系人 -->
            <div class="jk-groupTit">联系人</div>
            <div class="jk-group">
                <div class="jk-group-tit">{{rentType==1 ? '房东' : '个人'}}：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="请填写姓名"
                           v-model="sendDataInfo.realname"/>
                </div>
                <div class="jk-checkBoxSkin jk-checkBoxVal">
                    <input id="sex" class="jk-checkbox" name="check3" type="checkbox" checked
                           v-model="sexy"/>
                    <label for="sex" class="trigger"></label>
                    <span class="jk-checkbox-checkVal1">男士</span>
                    <span class="jk-checkbox-checkVal2">女士</span>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">联系电话：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="请填写手机号码"
                           v-model="sendDataInfo.ownermobile"/>
                </div>
            </div>

            <!--<div class="jk-group">-->
                <!--<div class="jk-group-tit">接听时段:</div>-->
                <!--<div class="jk-group-inputInfo" @click="showPup(10)">-->
                    <!--<input class="jk-group-input" type="text" name="answerTime" v-model="sendDataInfo.housestructure"  placeholder="请选择内容"/>-->
                <!--</div>-->
            <!--</div>-->
            <!--提交信息-->
            <div class="jk-bottom" @click="toSecondStep">
                <button class="jk-oneBtn-bottom" type="submit">下一步</button>
            </div>

        </div>

        <!--装修的picker by zqy-->
        <mt-popup v-model="popDecorate" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="dcorateSlots" @change="onValuesChangeDecorate"  style="width: 7.5rem;"  showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popDecorate = !popDecorate">取消</p>
                    <p class="usi-btn-sure right" @click="popDecorate = !popDecorate">确定</p>
                </div>
            </mt-picker>
        </mt-popup>

        <!--地点的picker-->
        <mt-popup v-model="popPlace" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker id="myAddressSlots" :slots="myAddressSlots" @change="addressChange"  :visibleItemCount="5" valueKey="RegionName" style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popPlace = !popPlace">取消</p>
                    <p class="usi-btn-sure right" @click="popPlace = !popPlace">确定</p>
                </div>
            </mt-picker>    
        </mt-popup>
        
        <!--厅室的picker-->
        <mt-popup v-model="popHouse" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="houseSlots" @change="onValuesChangeHouse"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popHouse = !popHouse">取消</p>
                    <p class="usi-btn-sure right" @click="popHouse = !popHouse">确定</p>
                </div>
            </mt-picker>
        </mt-popup>
        <!--朝向的picker-->
        <mt-popup v-model="popToward" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="towardSlots" @change="onValuesChangeToward"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popToward = !popToward">取消</p>
                    <p class="usi-btn-sure right" @click="popToward = !popToward">确定</p>
                </div>
            </mt-picker>
        </mt-popup>
        <!--楼层的picker-->
        <mt-popup v-model="popFloor" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="floorSlots" @change="onValuesChangeFloor"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popFloor = !popFloor">取消</p>
                    <p class="usi-btn-sure right" @click="popFloor = !popFloor">确定</p>
                </div>
            </mt-picker>
        </mt-popup>
        <!--总楼层的picker-->
        <mt-popup v-model="popAllFloor" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="allFloorSlots" @change="onValuesChangeAllFloor"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popAllFloor = !popAllFloor">取消</p>
                    <p class="usi-btn-sure right" @click="popAllFloor = !popAllFloor">确定</p>
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
        <!--人数的picker-->
        <mt-popup v-model="popPeopleNum" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="peopleNumSlots" @change="onValuesChangePople"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popPeopleNum = !popPeopleNum">取消</p>
                    <p class="usi-btn-sure right" @click="popPeopleNum = !popPeopleNum">确定</p>
                </div>
            </mt-picker>
        </mt-popup>
        <!--看房的picker-->
        <mt-popup v-model="popLookTime" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="lookTimeSlots" @change="onValuesChangeLook"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popLookTime = !popLookTime">取消</p>
                    <p class="usi-btn-sure right" @click="popLookTime = !popLookTime">确定</p>
                </div>
            </mt-picker>
        </mt-popup>
        <!--付款的picker-->
        <mt-popup v-model="popPayType" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="payTypeSlots" @change="onValuesChangePay" valueKey="RegionName" style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popPayType = !popPayType">取消</p>
                    <p class="usi-btn-sure right" @click="popPayType = !popPayType">确定</p>
                </div>
            </mt-picker>
        </mt-popup>
        <!-- Poi -->
        <div v-if="PoiList && PoiList.length>0">
         <mt-popup v-model="popPoi" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <div class="clearfix picker-toolbar-title">
                <p class="usi-btn-cancel left" @click="popPoi = !popPoi">取消</p>
                <p class="usi-btn-sure right" @click="popPoi = !popPoi">确定</p>
            </div>
            <div style="width: 7.5rem;height:6rem; overflow:auto;">
                <mt-checklist 
                    v-model="PoiVal" 
                    :options="PoiList"
                >
                </mt-checklist>
            </div>
        </mt-popup>
        </div>

        <!-- 租金包含项目 -->
        <div>
         <mt-popup v-model="rentcontent" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <div class="clearfix picker-toolbar-title">
                <p class="usi-btn-cancel left" @click="rentcontent = !rentcontent">取消</p>
                <p class="usi-btn-sure right" @click="rentcontent = !rentcontent">确定</p>
            </div>
            <div style="width: 7.5rem;height:4rem;">
                <mt-checklist 
                    v-model="rentcontentvalue" 
                    :options="priceContainsList"
                    @change="checkon($event)"
                >
                </mt-checklist>
            </div>
        </mt-popup>
        </div>

        <!--接听的picker-->
<!--        <mt-popup v-model="popAnswerTime" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">-->
<!--            <mt-picker :slots="answerTimeSlots" @change="onValuesChangeAnswer"  style="width: 7.5rem;" showToolbar>-->
<!--                <div class="clearfix picker-toolbar-title">-->
<!--                    <p class="usi-btn-cancel left" @click="popAnswerTime = !popAnswerTime">取消</p>-->
<!--                    <p class="usi-btn-sure right" @click="popAnswerTime = !popAnswerTime">确定</p>-->
<!--                </div>-->
<!--            </mt-picker>-->
<!--        </mt-popup>-->

        <!--租金形式的picker-->
        <mt-popup v-model="popPriceType" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="priceTypeSlots" @change="onValuesChangePriceType"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popPriceType = !popPriceType">取消</p>
                    <p class="usi-btn-sure right" @click="popPriceType = !popPriceType">确定</p>
                </div>
            </mt-picker>
        </mt-popup>





    </div>
</template>

<script>
    import Vue from 'vue'
    import Exif from 'exif-js'  
    import { Picker,Popup,DatetimePicker,MessageBox , Swipe, SwipeItem,Toast,Checklist} from 'mint-ui';
    // import threeLevelAddress from './address.json'
    Vue.component(Picker.name, Picker,Popup.name, Popup,
        DatetimePicker.name, DatetimePicker,Swipe.name, Swipe,SwipeItem.name, SwipeItem,Checklist);

    let apiUrl = '/api/API.ashx',
        // uploadApi = '/Ajax/UploadImg.ashx';
        uploadApi = 'http://admin.9kuaiz.com/Ajax/UploadImg.ashx';

    export default {
        name: "tenant",
        data(){
            return {
                maxsize:204800, //200kb
                rentType:this.$route.params.renttype,
                imgWenSiteUrl:this.GLOBAL.imgWenSiteUrl,
                showToolbar:true,
                userid:this.GLOBAL.userid,
                provinceList:[],
                priceContainsList:[],//租金包含项目
                rentcontentvalue:[],
                threeListAddress:[],
                //装修
                dcorateSlots: [{
                    values: ['','毛坯', '简单装修','中等装修','精装修'],

                }],
                popDecorate: false,
                //    厅室
                houseSlots: [
                    {
                        flex: 1,
                        values: ['1室', '2室', '3室','4室','4室','5室','7室'],
                        className: 'slot1',
                        textAlign: 'left'
                    },{
                        flex: 1,
                        values: ['1厅', '2厅', '3厅', '4厅', '5厅', '6厅', '7厅'],
                        className: 'slot2',
                        textAlign: 'center'
                    },
                    {
                        flex: 1,
                        values: ['1卫', '2卫', '3卫', '4卫', '5卫', '6卫', '7卫'],
                        className: 'slot3',
                        textAlign: 'center'
                    },
                    {
                        flex: 1,
                        values: ['1阳台', '2阳台', '3阳台', '4阳台', '5阳台', '6阳台', '7阳台'],
                        className: 'slot3',
                        textAlign: 'right'
                    }

                ],
                popHouse: false,
                //朝向
                towardSlots: [{
                    values: ['','东', '南','西','北'],

                }],
                popToward:false,
                //楼层
                floorSlots: [{
                    values: ['','1层', '2层', '3层','4层', '5层', '6层','7层', '8层', '9层','10层',
                        '11层', '12层', '13层','14层', '15层', '16层','17层', '18层', '19层','20层',
                        '21层', '22层', '23层','24层', '25层', '26层','27层', '28层', '29层','30层',
                        '31层', '32层', '33层','34层', '35层', '36层','37层', '38层', '39层','40层',
                        '41层', '42层', '43层','44层', '45层', '46层','47层', '48层', '49层','50层',],
                }],
                popFloor: false,
                //总楼层
                allFloorSlots: [{
                    values: ['','1层', '2层', '3层','4层', '5层', '6层','7层', '8层', '9层','10层',
                        '11层', '12层', '13层','14层', '15层', '16层','17层', '18层', '19层','20层',
                        '21层', '22层', '23层','24层', '25层', '26层','27层', '28层', '29层','30层',
                        '31层', '32层', '33层','34层', '35层', '36层','37层', '38层', '39层','40层',
                        '41层', '42层', '43层','44层', '45层', '46层','47层', '48层', '49层','50层',],
                }],
                popAllFloor: false,
                //入住时间
                pickerVisible:true,
                startDate: new Date(),
                //宜住人数
                peopleNumSlots: [{
                    values: ['','1人', '2人','3人','4人'],

                }],
                popPeopleNum: false,
                //看房时间
                lookTimeSlots: [{
                    values: ['','随时看', '仅周末','仅工作日']
                }],
                popLookTime: false,
                //付款方式
                payTypeSlots: [{
                    values:['','押一付一','押一付三','半年付','年付']
                }],
                popPayType: false,
                // //接听时段
                // answerTimeSlots: [
                //     {
                //         flex: 1,
                //         values: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00",
                //             "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
                //             "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
                //         className: 'slot1',
                //         textAlign: 'left',
                //         defaultIndex:8
                //     },{
                //         flex: 1,
                //         content:'至',
                //         divider: true,
                //         textAlign:'center',
                //         className: 'slot1',
                //     },
                //     {
                //         flex: 1,
                //         values: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00",
                //             "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
                //             "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
                //         className: 'slot1',
                //         defaultIndex:15,
                //         textAlign: 'right'
                //     },
                //
                // ],
                popAnswerTime: false,
                //租金形式
                popPriceType:false,
                priceTypeSlots: [{
                    values:['','月租','日租']
                }],
                //地点
                place:'',
                popPlace: false,
                popPlaceInit: false,
                 //picker组件插槽
                myAddressSlots: [
                      //省
                    {
                        flex: 1,
                        values: [], //省份数组
                        className: 'slot1',
                        textAlign: 'center'
                    },
                       //分隔符
                    {
                        divider: true,
                        content: '',
                        className: 'slot2'
                    },
                      //市
                    {
                        flex: 1,
                        values: [],
                        className: 'slot3',
                        textAlign: 'center'
                    },
                    {
                        divider: true,
                        content: '',
                        className: 'slot4'
                    },
                      //县
                    {
                        flex: 1,
                        values: [],
                        className: 'slot5',
                        textAlign: 'center'
                    }
                ],
                   
                //基本信息的数据
                sendDataInfo: {
                    apicommand:'addhouseinfo',
                    renttype:'整租',
                    // houseid:'100026',
                    houseid:'',
                    community:'',
                    housenumber:'',
                    area:'',
                    decorated:'毛坯',
                    housestructure:'1室1厅1卫',
                    direction:'东',
                    floor:'-1',
                    elevator:'',
                    carport:'',
                    checkin:'',
                    openhomedate:'随时看',
                    occupancynum:'1',
                    rent:'',
                    rentunit:'月租',
                    payment:'押一付一',
                    realname:'',
                    rentcontent:'',
                    ownermobile:'',
                    floorcount:''
                },
                //图片上传 and 预览 and 删
                picValue:'',
                picArr:[],
                sendImgArr:[],
                //男士女士
                sexy:'男士',

                cityList:[],

                // region:'',//地址
                province:'',//省
                city:'',//市
                county:'',//县
                address:'',//地址用于显示
                rentcontent:false, //租金包含项是否显示
                popPoi: false,
                PoiList: [], //poilist
                PoiVal:[], // poi存储数据
            }
        },
        watch:{
            rentcontentvalue:{
                //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
                handler(curVal,oldVal){
                    // console.log(curVal,oldVal);
                    this.rentcontentvalue = curVal;
                    if(this.rentcontentvalue && this.rentcontentvalue.length>0){
                        var _this = this;
                        _this.sendDataInfo.rentcontent = '';
                        this.rentcontentvalue.map(function (item,index) {
                            _this.sendDataInfo.rentcontent += item;
                            if(index < (_this.rentcontentvalue.length-1)) _this.sendDataInfo.rentcontent += ',';
                        })
                        
                    }
                },
                deep:true
            },
            PoiVal:{
                //注意：当观察的数据为对象或数组时，curVal和oldVal是相等的，因为这两个形参指向的是同一个数据对象
                handler(curVal,oldVal){
                    // console.log(curVal,oldVal);
                    this.PoiVal = curVal;
                    if(this.PoiVal && this.PoiVal.length>0){
                        var _this = this;
                        _this.sendDataInfo.POI = '';
                        this.PoiVal.map(function (item,index) {
                            _this.sendDataInfo.POI += item;
                            console.info('======',index+'======'+_this.PoiVal.length)
                            if(index < (_this.PoiVal.length-1)) _this.sendDataInfo.POI += ',';
                        })
                        
                    }
                },
                deep:true
            }
        },
        created(){
            console.info("uderid=="+this.GLOBAL.userid+',,openid='+this.GLOBAL.openid)
        },
        mounted(){
            this.getProvince();
            this.getCity();
            this.getCounty();
            this.getRentcontent();
            // console.info('this.myAddressSlots',this.myAddressSlots)
        },
        methods: {
            checkon: function(){
                // console.log(this.rentcontentvalue)
            },

            //picker组件的change事件，进行取值赋值
            addressChange(picker, values){
                //取值并赋值
                if(values[0]!=undefined && values[1]!=undefined && values[2]!=undefined){
                    var provinceName = values[0]["RegionName"];
                    var cityName = values[1]["RegionName"];
                    var countyName = values[2]["RegionName"];
                    this.sendDataInfo.province = values[0]["Id"];
                    this.sendDataInfo.city = values[1]["Id"];
                    this.sendDataInfo.county = values[2]["Id"];
                    this.address = provinceName + ',' + cityName + ',' + countyName;


                    // 当地址改变时修清空上次的poilist以及所选择的值
                    this.PoiList = [];
                    this.PoiVal = [];
                    this.sendDataInfo.POI = '';
                    
                    this.getPoi(this.sendDataInfo.county);
                }
            },
            // 获取省
            getProvince(){
                //请求区域数据
                this.$http.get("/api/API.ashx?apicommand=getprovince&t="+Date.now()).then(function (data) {
                    var areaData = eval("("+data.bodyText+")");
                    areaData = areaData.filter(item => item.RegionName=='河北省')
                    this.myAddressSlots[0].values = areaData;
                    // console.info('this.myAddressSlots',this.myAddressSlots)
                }).then(function(){
                    console.info('获取省份error')
                })
            },
            // get市
            getCity(){
                var THIS = this;
                //请求区域数据
                this.$http.get("/api/API.ashx?apicommand=getcity&t="+Date.now()).then(function (data) {
                    var areaData = eval("("+data.bodyText+")");
                    areaData = areaData.filter(item => item.RegionName=='邯郸市')
                    this.myAddressSlots[2].values = areaData;
                    // console.info('this.myAddressSlots',this.myAddressSlots)
                }).then(function(){
                    console.info('获取省份error')
                })
            },
            
            //get 区
            getCounty(){
                var THIS = this;
                
                //请求区域数据
                this.$http.get("/api/API.ashx?apicommand=getcounty&t="+Date.now()).then(function (data) {
                    var areaData = eval("("+data.bodyText+")");
                    this.myAddressSlots[4].values = areaData;
                    
                }).then(function(){
                    console.info('获取省份error')
                })
            },
            //getpoi
            getPoi(countyId){
                if(countyId){
                    var THIS = this;
                    //请求区域数据
                    this.$http.get("/api/API.ashx?apicommand=getpoi&parentid="+countyId+"&t"+Date.now()).then(function (data) {
                        var areaData = eval("("+data.bodyText+")");
                        if(data.data && data.data.length>0){
                        let json = {};
                            areaData.map(function (item) {
                                THIS.PoiList.push({
                                    label:item.RegionName,
                                    value:item.RegionName
                                })
                            });
                        }
                        console.info('this.PoiList', THIS.PoiList);
                        return false;
                    }).then(function(){
                        console.info('获取省份error')
                    })
                }
            },
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
                        this.popPeopleNum = true; //人数
                        break;
                    case 7:
                        this.popLookTime = true; //看房时间
                        break;
                    
                    case 8:
                        this.popPayType = true; //付款方式
                        break;
                    case 9:
                        this.rentcontent = true; //租金包含项
                        break;
                    // case 10:
                    //     this.popAnswerTime = true;  //接听时段
                    //     break;
                    case 11:
                        this.popPriceType = true;  //租金形式
                        break;
                    case 12:
                        this.popPlace = true;//地点
                        this.popPlaceInit = true;
                        break;
                    case 13:
                        this.popPoi = true;//poi
                        break;
                    case 14:
                        this.popAllFloor = true;  //总楼层
                        break;

                }
            },
            onValuesChangePlace(picker, values){
                // console.log('地点',values);
                // this.sendDataInfo.payment = values[0];
            },
            onValuesChangeDecorate(picker, values) {
                // console.log(values,'装修 ');
                this.sendDataInfo.decorated = values[0];
            },
            onValuesChangeHouse(picker, values){
                // console.log(values,'厅室');
                this.sendDataInfo.housestructure = values[0]+values[1]+values[2]+values[3];
            },
            onValuesChangeToward(picker, values){
                // console.log('朝向',values);
                this.sendDataInfo.direction = values[0];
            },
            onValuesChangeFloor(picker, values){
                // console.log('楼层',values);
                this.sendDataInfo.floor = values[0];
            },
            onValuesChangeAllFloor(picker, values){
                // console.log('总楼层',values);
                this.sendDataInfo.floorcount = values[0];
            },
            onValuesChangePople(picker, values){
                // console.log('住的人数',values);
                this.sendDataInfo.occupancynum = values[0];
            },
            onValuesChangeLook(picker, values){
                // console.log('看房时间',values);
                this.sendDataInfo.openhomedate = values[0];
            },
            onValuesChangePay(picker, values){
                // console.log('付款形式',values);
                this.sendDataInfo.payment = values[0];
            },
            onValuesChangePriceType(picker, values){
                // console.log('租金形式',values);
                this.sendDataInfo.rentunit = values[0];
            },
            // onValuesChangeAnswer(picker, values){
            //     console.log('接听时段',values);
            //     this.sendDataInfo.ownermobile = values[0]+','+values[1];
            // },

            //时间格式转换
            format(Date){
                let Y = Date.getFullYear(),
                    M = Date.getMonth() + 1;
                M = M < 10 ? '0' + M : M;// 不够两位补充0
                let D = Date.getDate();
                D = D < 10 ? '0' + D : D;
                let H = Date.getHours();
                H = H < 10 ? '0' + H : H;
                let Mi = Date.getMinutes();
                Mi = Mi < 10 ? '0' + Mi : Mi;
                let S = Date.getSeconds();
                S = S < 10 ? '0' + S : S;
                // return Y + '-' + M + '-' + D + ' ' + H + ':' + Mi + ':' + S;
                return Y + '-' + M + '-' + D;
            },
            //获取入住时间
            handleConfirm (data) {
                this.sendDataInfo.checkin = this.format(data);
            },

            //选择图片
            selectFile(e) {
                
                //先清空在push
                this.sendImgArr = [];
                //获取图片
                let files = e.target.files || e.dataTransfer.files,
                    _this = this;
                if (!files.length){
                    return false;
                }else if(files.length > 9){
                    Toast({
                        message: '最多同时只可上传9张图片',
                        position: 'middle',
                        duration: 2000
                    });
                    return false;
                }

                var Orientation;
                for (let i = 0; i < files.length; i++) {
                    // 看支持不支持FileReader
                    if (!files[i] || !window.FileReader) return;
                    if (/^image/.test(files[i].type)) {
                        Exif.getData(files[i], function(){  
                            Orientation = Exif.getTag(files[i], 'Orientation');  
                            // Orientation = 6;
                            // alert(Orientation)
                        });  


                        let reader = new FileReader();
                        reader.readAsDataURL(files[i]);

                        

                        // 读取成功后的回调
                        reader.onloadend = function () {
                            let result = this.result;
                            let img = new Image();
                            img.src = result;

                            console.info('图片大小图片大小',result.length);
                            if (result.length <= this.maxsize) {
                                _this.sendImgArr.push(this.result);
                            }
                            // 图片加载完毕之后进行压缩，然后上传
                            if (img.complete) {
                                callback();
                            } else {
                                img.onload = callback;
                            }
                            
                            function callback() {
                                var data = _this.compressChangeWidthAndHeight(img, Orientation);
                                    _this.sendImgArr.push(data);
                                // console.info('datadatadatadatadata',data)

                                //判断到循环结束再开始上传
                                if(_this.sendImgArr.length == files.length){
                                    console.info('files.length', files.length);
                                    console.info('_this.sendImgArr', _this.sendImgArr.length);
                                    _this.uploadImg();
                                }
                            }
                            
                        }
                    }
                }

            },
            // 图片压缩----修改尺寸
            compressChangeWidthAndHeight(img, Orientation) {
                console.info('Orientation-----', Orientation)
                var min_step = 0;
                var max_step = 3;
                Toast({
                    message: '正在上传，请稍等',
                    position: 'middle',
                    duration: 2000
                });

                //    用于压缩图片的canvas
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext('2d');
                //    瓦片canvas
                var tCanvas = document.createElement("canvas");
                var tctx = tCanvas.getContext("2d");
                
                var initSize = img.src.length;
                var width = img.width;
                var height = img.height;

          

                canvas.width = 750;
                canvas.height = 562;

                //        铺底色
                ctx.fillStyle = "#fff";
                // alert('widht='+img.width+'height='+img.height+'比例='+img.width/img.height);
                // return false;
                //修复ios上传图片的时候 被旋转的问题
                if(Orientation == 6 ){
                    ctx.rotate(90*Math.PI/180);
                    ctx.fillRect(0, -750, 1000, 750);
                    ctx.drawImage(img, -img.width*0.075, -750, 1000, 750);
                }else{
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    if(img.width< img.height){
                        ctx.drawImage(img,0,(img.height*0.75)/2,img.width,img.height,0,0,750,1000);
                    }else{
                        ctx.drawImage(img, 0, 0, 750, 562);
                    }
                    
                }
                
                //进行压缩(0-1  1图片质量最高)
                var ndata = canvas.toDataURL('image/jpeg', 0.9);

                console.log('压缩前：' + initSize);
                console.log('压缩后：' + ndata.length);
                console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");

                tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

                return ndata;
            },
            
            // 图片压缩----不修改尺寸---暂不用
            compress(img) {

                Toast({
                    message: '正在上传，请稍等',
                    position: 'middle',
                    duration: 2000
                });

                //    用于压缩图片的canvas
                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext('2d');
                //    瓦片canvas
                var tCanvas = document.createElement("canvas");
                var tctx = tCanvas.getContext("2d");
                
                var initSize = img.src.length;
                var width = img.width;
                var height = img.height;

                //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
                var ratio;
                if ((ratio = width * height / 4000000)>1) {
                    ratio = Math.sqrt(ratio);
                    width /= ratio;
                    height /= ratio;
                }else {
                    ratio = 1;
                }

                canvas.width = width;
                canvas.height = height;

                //        铺底色
                ctx.fillStyle = "#fff";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                //如果图片像素大于100万则使用瓦片绘制
                var count;
                if ((count = width * height / 1000000) > 1) {
                    count = ~~(Math.sqrt(count)+1); //计算要分成多少块瓦片

                    //            计算每块瓦片的宽和高
                    var nw = ~~(width / count);
                    var nh = ~~(height / count);

                    tCanvas.width = nw;
                    tCanvas.height = nh;

                    for (var i = 0; i < count; i++) {
                        for (var j = 0; j < count; j++) {
                            tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);

                            ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                        }
                    }
                } else {
                    ctx.drawImage(img, 0, 0, width, height);
                }

                //进行最小压缩
                var ndata = canvas.toDataURL('image/jpeg', 0.1);

                console.log('压缩前：' + initSize);
                console.log('压缩后：' + ndata.length);
                console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");

                tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

                return ndata;
            },

            //上传图片、预览图片
            uploadImg(){
                Toast({
                    message: '正在上传，请稍等',
                    position: 'middle',
                    duration: 2000
                });
                let sendData = {
                    command:'webuploadhouseimg',
                    img:this.sendImgArr,
                    userid: this.userid,
                    houseid: this.houseId
                };
                sendData = JSON.parse(JSON.stringify(sendData));
                console.info('sendData',sendData)
                if(this.sendImgArr.length>0){
                    this.$http.post(uploadApi,{params:sendData},{headers:{'Content-Type':'application/json'}}).then(function (data) {
                        if(data.body.result=='Y'){
                            Toast({
                                message: '上传失败',
                                position: 'middle',
                                duration: 2000
                            });
                        }else{
                            this.picVal = [];
                            let resData = data.data;
                            this.houseId = resData.houseid;
                            if(resData.imglist && resData.imglist.length>0){
                                this.picArr= resData.imglist;
                            }
                        }
                        
                    })
                }
            },
            //删除图片
            delPic(idx,id,thumbnailurl,imgurl) {
                let _this= this;
                MessageBox({
                    $type:'prompt',
                    title:'提示',
                    message:'确定执行此操作?',
                    closeOnClickModal:true,    //点击model背景层不关闭MessageBox
                    showCancelButton:false,     //不显示取消按钮
                }).then(({ value, action }) => {
                    /* value 为填写的值，进行下一步操作 */
                    console.log(111)
                    let sendData = {
                        command:'DelHouseImg',
                        id:id,
                        thumbnailurl:thumbnailurl,
                        imgurl:imgurl

                    };

                    _this.$http.get(uploadApi,{params:sendData}).then(function () {
                        _this.picArr.splice(idx, 1);
                    })

                });

            },

            //点击下一步提交基本信息进入其他信息
            toSecondStep(){
            
                //电梯有无
                if(this.sendDataInfo.elevator == true){
                    this.sendDataInfo.elevator = '有';
                }else{
                    this.sendDataInfo.elevator = '无';
                };
                //车位有无
                if(this.sendDataInfo.carport == true){
                    this.sendDataInfo.carport = '一个车位';
                }else{
                    this.sendDataInfo.carport = '无';
                };

                console.info('ssss',this.sendDataInfo);
                //根据类型处理不同的验证
                if(this.rentType == 2){
                    delete this.sendDataInfo.housenumber;//门牌号
                    delete this.sendDataInfo.carport;  //车位
                    delete this.sendDataInfo.occupancynum; //宜住人数
                    delete this.sendDataInfo.rentcontent; //租金包含项目
                }


                let sendData = this.sendDataInfo,
                    isDataNull = false;
                sendData.houseid = this.houseId;
                for(let item in sendData){//遍历json对象的每个key/value对,item为key
                    if(!sendData[item]){
                        isDataNull = true;
                    }
                };
                
                

                if(isDataNull == true || !this.houseId){
                    Toast({
                        message: '您有未选择的选项，请检查',
                        position: 'middle',
                        duration: 2000
                    });
                    return false;
                };

                sendData.userid = this.userid;
                // this.$http.post(apiUrl,{params:sendData}).then(function () {
                this.$http.get(apiUrl,{params:sendData}).then(function () {
                    this.$router.push({ name:'secondStep',params: { houseid:sendData.houseid}});
                })

            },
            getRentcontent(){
                let _this = this;
                this.$http.get(apiUrl+'?apicommand=getrentcontent&t='+Date.now()).then(function (data) {
                    if(data.data.content && data.data.content.length>0){
                        let list = JSON.parse(JSON.stringify(data.data.content)),
                            json = {};
                            // console.info('list', list)
                            list.map(function (item) {
                                _this.priceContainsList.push({
                                    label:item.rentcontent,
                                    value:item.rentcontent
                                })
                            });
                            // console.info('_this.priceContainsList', _this.priceContainsList)
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .picker-items{
        width: 100%;
    }
    .picker-toolbar-title{
       padding: .4rem;
    }
    .usi-btn-cancel, .usi-btn-sure{
        font-size: 14px;
        font-weight: normal;
    }
    .usi-btn-cancel{
        color: rgb(153,153,153);
    }
    .usi-btn-sure{
        color: rgb(44,104,219);
    }
    /*修改选择时间的样式*/
    .mint-datetime-picker .mint-datetime-action{
        font-size: 14px!important;
        text-align: justify!important;
    }
    .mint-datetime-picker .mint-datetime-confirm{
        color: rgb(44,104,219)!important;
    }
    .mint-datetime-picker .mint-datetime-cance{
        color: rgb(153,153,153)!important;
    }
    .upload_picture{
        position: relative;
        height: 1.66rem;
        width: 1.71rem;
        border: 1px solid #979797;
        border-radius: 6px;
        margin: 3px;
        float: left;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .upload-btn{
        background: #f5f5f5;
        border: 0;
        text-align: center;
        line-height: 1.66rem;
    }
    .upload-btn-img{
        width: .5rem;
        height: .5rem;
    }
    .upload-btn input{
        height: 1.66rem;
        width: 100%;
        position: absolute;
        z-index: 100;
        opacity: 0;
        left: 0;
    }
    .preview-img{
        display: flex;
        flex-wrap:wrap;
        flex-grow: 4; /* default 0 */
    }
    .del{
        position: absolute;
        right: 0.1rem;
        top:0.1rem;
        background: url("../../assets/icon-close.png") no-repeat;
        background-size: 0.2rem 0.2rem;
        z-index: 2;
        height: 0.2rem;
        width: 0.2rem;
    }
    .swipe {
        width: 100%;
        height: 5.62rem;
    }
</style>
