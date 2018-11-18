<template>
    <div class="jk-rent">
        <div>
            <!-- 图片轮播 -->
            <mt-swipe :auto="4000" class="swipe"  v-if="picArr.length>0">
                <mt-swipe-item v-for="item in picArr">
                    <img :src="imgWenSiteUrl+item.thumbnailurl" alt="" class="img-responsive">
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
                   :style="'backgroundImage:url('+imgWenSiteUrl+item.thumbnailurl+')'" class="upload_picture">
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
                    <input class="jk-group-input" type="text" placeholder="请填写信息" v-model="sendDataInfo.community"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">门牌号：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" v-model="sendDataInfo.housenumber" name="roomNum" placeholder="请填写信息"/>
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
                    <input type="input" class="jk-group-select" v-model="sendDataInfo.decorated"  name="decorate"  placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">厅室：</div>
                <div class="jk-group-inputInfo" @click="showPup(2)">
                    <input type="text" class="jk-group-input" name="house" v-model="sendDataInfo.housestructure" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">朝向：</div>
                <div class="jk-group-inputInfo" @click="showPup(3)">
                    <input type="input" class="jk-group-select"  name="toward" v-model="sendDataInfo.direction" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">楼层：</div>
                <div class="jk-group-inputInfo" @click="showPup(4)">
                    <input type="input" class="jk-group-select"  name="floor" v-model="sendDataInfo.floor" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">总楼层：</div>
                <div class="jk-group-inputInfo">
                    <input type="number" class="jk-group-select"  name="floorcount" v-model="sendDataInfo.floorcount" placeholder="请填写内容"/>
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
            <div class="jk-group">
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
                    <input type="input" class="jk-group-select"  name="checkInTime" v-model="sendDataInfo.checkin" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">易住人数：</div>
                <div class="jk-group-inputInfo" @click="showPup(6)">
                    <input type="input" class="jk-group-select"  name="peopleNum" v-model="sendDataInfo.occupancynum" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">看房时间：</div>
                <div class="jk-group-inputInfo" @click="showPup(7)">
                    <input type="input" class="jk-group-select"  name="lookTime" v-model="sendDataInfo.openhomedate" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 租金详情 -->
            <div class="jk-groupTit">租金详情</div>
            <div class="jk-group">
                <div class="jk-group-tit">租金形式：</div>
                <div class="jk-group-inputInfo" @click="showPup(11)">
                    <input class="jk-group-input" type="text" name="payType" v-model="sendDataInfo.rentunit" placeholder="请选择内容"/>
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
                    <input class="jk-group-input" type="text" name="payType" v-model="sendDataInfo.payment" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">租金包含费用<span>（物业费等）</span>:</div>
                <div class="jk-group-inputInfo" @click="showPup(9)">
                    <input class="jk-group-input" type="text" name="priceContains" v-model="sendDataInfo.rentcontent" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 联系人 -->
            <div class="jk-groupTit">联系人</div>
            <div class="jk-group">
                <div class="jk-group-tit">房东：</div>
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
                    <input class="jk-group-input" type="number" placeholder="请填写手机号码"
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
            <mt-picker :slots="payTypeSlots" @change="onValuesChangePay"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popPayType = !popPayType">取消</p>
                    <p class="usi-btn-sure right" @click="popPayType = !popPayType">确定</p>
                </div>
            </mt-picker>
        </mt-popup>
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
    import config from '../../js/config'

    import { Picker,Popup,DatetimePicker,MessageBox , Swipe, SwipeItem,Toast} from 'mint-ui';
    Vue.component(Picker.name, Picker,Popup.name, Popup,
        DatetimePicker.name, DatetimePicker,Swipe.name, Swipe,SwipeItem.name, SwipeItem);

    let apiUrl = '/api/API.ashx',
        // uploadApi = '/Ajax/UploadImg.ashx';
        uploadApi = 'http://admin.9kuaiz.com/Ajax/UploadImg.ashx';

    export default {
        name: "tenant",
        data(){
            return {
                rentType:this.$route.params.renttype,
                imgWenSiteUrl:config.config.imgWenSiteUrl,
                showToolbar:true,
            //装修
                dcorateSlots: [{
                    values: ['','毛坯', '简单装修','中等装修','精装修'],

                }],
                popDecorate: false,
            //    厅室
                houseSlots: [
                    {
                        flex: 1,
                        values: ['1室', '2室', '3室'],
                        className: 'slot1',
                        textAlign: 'left'
                    },{
                        flex: 1,
                        values: ['1厅', '2厅', '3厅'],
                        className: 'slot2',
                        textAlign: 'center'
                    },
                    {
                        flex: 1,
                        values: ['1卫', '2卫', '3卫'],
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
                //入住时间
                pickerVisible:true,
                startDate: new Date(),
                //易住人数
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
                //基本信息的数据
                sendDataInfo: {
                    renttype:'整租',
                    houseid:'100026',
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
                sexy:'男士'

            }
        },
        mounted(){
            this.getRentcontent();
        },
        methods: {
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
                    // case 10:
                    //     this.popAnswerTime = true;  //接听时段
                    //     break;
                    case 11:
                        this.popPriceType = true;  //租金形式
                        break;

                }
            },
            onValuesChangeDecorate(picker, values) {
                console.log(values,'装修 ');
                this.sendDataInfo.decorated = values[0];
            },
            onValuesChangeHouse(picker, values){
                console.log(values,'厅室');
                this.sendDataInfo.housestructure = values[0]+values[1]+values[2];
            },
            onValuesChangeToward(picker, values){
                console.log('朝向',values);
                this.sendDataInfo.direction = values[0];
            },
            onValuesChangeFloor(picker, values){
                console.log('楼层',values);
                this.sendDataInfo.floor = values[0];
            },
            onValuesChangePople(picker, values){
                console.log('住的人数',values);
                this.sendDataInfo.occupancynum = values[0];
            },
            onValuesChangeLook(picker, values){
                console.log('看房时间',values);
                this.sendDataInfo.openhomedate = values[0];
            },
            onValuesChangePay(picker, values){
                console.log('付款形式',values);
                this.sendDataInfo.payment = values[0];
            },
            onValuesChangePriceType(picker, values){
                console.log('租金形式',values);
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
                return Y + '-' + M + '-' + D + ' ' + H + ':' + Mi + ':' + S;
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
                }else if(files.length > 10){
                    return false;
                }

                for (let i = 0; i < files.length; i++) {
                    // 看支持不支持FileReader
                    if (!files[i] || !window.FileReader) return;
                    if (/^image/.test(files[i].type)) {
                        let reader = new FileReader();
                        reader.readAsDataURL(files[i]);
                        // 读取成功后的回调
                        reader.onloadend = function () {
                            let result = this.result;
                            let img = new Image();
                            img.src = result;

                            _this.sendImgArr.push(this.result);
                            //判断到循环结束再开始上传
                            if(i == files.length-1){
                                _this.uploadImg();
                            }

                        }
                    }
                }

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
                    img:this.sendImgArr
                };
                sendData = JSON.parse(JSON.stringify(sendData));
                if(this.sendImgArr.length>0){
                    this.$http.post(uploadApi,{params:sendData},{headers:{'Content-Type':'application/json'}}).then(function (data) {
                        this.picVal = [];
                        let resData = data.data;
                        this.houseId = resData.houseid;
                        if(resData.imglist && resData.imglist.length>0){
                            this.picArr= resData.imglist;
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

                let sendData = this.sendDataInfo,
                    isDataNull = false;
                for(let item in sendData){//遍历json对象的每个key/value对,item为key
                    if(!sendData[item]){
                        isDataNull = true;
                    }
                };
                console.info('ssss',sendData)
                // if(isDataNull == true || !this.houseId){
                //     Toast({
                //         message: '您有未选择的选项，请检查',
                //         position: 'middle',
                //         duration: 2000
                //     });
                //     return false;
                // };

                // this.$http.post(apiUrl,{params:sendData}).then(function () {
                this.$http.get(apiUrl,{params:sendData}).then(function () {
                    this.$router.push({ name:'secondStep',params: { page:1}});
                })

            },
            getRentcontent(){
                let sendData = {
                    apicommand:'getrentcontent'
                    },
                    _this = this;
                this.$http.get(apiUrl,{params:sendData}).then(function (data) {
                    if(data.data.content && data.data.content.length>0){
                        let list = JSON.parse(JSON.stringify(data.data.content)),
                            json = {};
                        list.map(function (item,idx) {
                            _this.priceContainsList.push(item.rentcontent)
                        });

                        json.values = this.priceContainsList;
                        this.priceContainsSlots.push(json);
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .picker-toolbar-title{
       padding: .3rem;
    }
    .usi-btn-cancel, .usi-btn-sure{
        font-size: 16px;
    }
    .usi-btn-cancel{
        color: rgb(153,153,153);
    }
    .usi-btn-sure{
        color: rgb(44,104,219);
    }
    /*修改选择时间的样式*/
    .mint-datetime-picker .mint-datetime-action{
        font-size: 16px!important;
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
        margin: 4px;
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
