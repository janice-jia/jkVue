<template>
    <div class="jk-rent">
        <div>
            <!-- 图片轮播 -->
            <mt-swipe :auto="4000" class="swipe"  v-if="picArr.length>0">
                <mt-swipe-item>
                    <img src="../../assets/house-banner.jpg" alt="" class="img-responsive">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../assets/house-banner.jpg" alt="" class="img-responsive">
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
                <p v-for="(item,index) in picArr" :style="'backgroundImage:url('+item+')'" class="upload_picture">
                    <span class="del" @click="delPic(index)"></span>
                </p>

                <p class="upload_picture upload-btn">
                    <!--<img src="../../assets/icon-add.png" alt="upload" class="upload-btn-img">-->
                    <input name="pic" ref="fileInput" @change="selectFile" type="file" />
                </p>
            </div>


            <!-- 基本信息 -->
            <div class="jk-groupTit">基本信息<span>（门牌号不会公开）</span></div>
            <div class="jk-group">
                <div class="jk-group-tit">小区：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="请填写信息"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">门牌号：</div>
                <div class="jk-group-inputInfo" @click="showPup(0)">
                    <input class="jk-group-input" type="text" id="roomNum" name="roomNum" placeholder="请填写信息"/>
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
                <div class="jk-group-inputInfo" @click="showPup(3)">
                    <input type="input" class="jk-group-select"  name="toward" id="toward" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">楼层：</div>
                <div class="jk-group-inputInfo" @click="showPup(4)">
                    <input type="input" class="jk-group-select"  name="floor" id="floor" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">总楼层：</div>
                <div class="jk-group-inputInfo">
                    <input type="input" class="jk-group-select"  name="floorAll" id="floorAll" placeholder="请填写内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">电梯：</div>
                <div class="jk-group-inputInfo">
                    <div class="jk-checkBoxSkin">
                        <input id="lift" class="jk-checkbox" name="check1" checked type="checkbox" />
                        <label for="lift" class="trigger"></label>
                    </div>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">车位：</div>
                <div class="jk-group-inputInfo">
                    <div class="jk-checkBoxSkin">
                        <input id="park" class="jk-checkbox" name="check2" type="checkbox" />
                        <label for="park" class="trigger"></label>
                    </div>
                </div>
            </div>


            <!-- 入住信息 -->
            <div class="jk-groupTit">入住信息</div>
            <div class="jk-group">
                <div class="jk-group-tit">入住时间：</div>
                <div class="jk-group-inputInfo" @click="showPup(5)">
                    <input type="input" class="jk-group-select"  name="checkInTime" id="checkInTime" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">易住人数：</div>
                <div class="jk-group-inputInfo" @click="showPup(6)">
                    <input type="input" class="jk-group-select"  name="peopleNum" id="peopleNum" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">看房时间：</div>
                <div class="jk-group-inputInfo" @click="showPup(7)">
                    <input type="input" class="jk-group-select"  name="lookTime" id="lookTime" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 租金详情 -->
            <div class="jk-groupTit">租金详情</div>
            <div class="jk-group">
                <div class="jk-group-tit">租金形式：</div>
                <div class="jk-group-inputInfo" @click="showPup(11)">
                    <input class="jk-group-input" type="text" name="payType" id="priceType" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">租金：</div>
                <div class="jk-group-inputInfo">
                    <input class="jk-group-input" type="text" placeholder="请填写信息"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">付款方式：</div>
                <div class="jk-group-inputInfo" @click="showPup(8)">
                    <input class="jk-group-input" type="text" name="payType" id="payType" placeholder="请选择内容"/>
                </div>
            </div>
            <div class="jk-group">
                <div class="jk-group-tit">租金包含费用<span>（物业费等）</span>:</div>
                <div class="jk-group-inputInfo" @click="showPup(9)">
                    <input class="jk-group-input" type="text" name="priceContains" id="priceContains" placeholder="请选择内容"/>
                </div>
            </div>

            <!-- 联系人 -->
            <div class="jk-groupTit">联系人</div>
            <div class="jk-group">
                <div class="jk-group-tit">房东：</div>
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
                <div class="jk-group-inputInfo" @click="showPup(10)">
                    <input class="jk-group-input" type="text" name="answerTime" id="answerTime"  placeholder="请选择内容"/>
                </div>
            </div>
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
        <!--租金的picker-->
        <mt-popup v-model="popPriceContains" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="priceContainsSlots" @change="onValuesChangePrice"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popPriceContains = !popPriceContains">取消</p>
                    <p class="usi-btn-sure right" @click="popPriceContains = !popPriceContains">确定</p>
                </div>
            </mt-picker>
        </mt-popup>
        <!--接听的picker-->
        <mt-popup v-model="popAnswerTime" popup-transition="popup-fade" closeOnClickModal="true" position="bottom">
            <mt-picker :slots="answerTimeSlots" @change="onValuesChangeAnswer"  style="width: 7.5rem;" showToolbar>
                <div class="clearfix picker-toolbar-title">
                    <p class="usi-btn-cancel left" @click="popAnswerTime = !popAnswerTime">取消</p>
                    <p class="usi-btn-sure right" @click="popAnswerTime = !popAnswerTime">确定</p>
                </div>
            </mt-picker>
        </mt-popup>

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
    import { Picker,Popup,DatetimePicker,MessageBox , Swipe, SwipeItem} from 'mint-ui';
    Vue.component(Picker.name, Picker,Popup.name, Popup,
        DatetimePicker.name, DatetimePicker,Swipe.name, Swipe,SwipeItem.name, SwipeItem);

    let apiUrl = '/api/API.ashx',
        // uploadApi = '/Ajax/UploadImg.ashx';
        uploadApi = 'http://admin.9kuaiz.com/Ajax/UploadImg.ashx?command=webuploadhouseimg';

    export default {
        name: "tenant",
        data(){
            return {
                showToolbar:true,
            //装修
                dcorateSlots: [{
                    values: ['毛坯', '简单装修','中等装修','精装修'],

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
                //易住人数
                peopleNumSlots: [{
                    values: ['1人', '2人','3人','4人'],

                }],
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
                //租金
                priceContainsList:[],
                priceContainsSlots: [],
                popPriceContains: false,
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
                    },

                ],
                popAnswerTime: false,
                //基本信息的数据
                sendDataInfo: {
                    houseid:'',
                    community:'',
                    housenumber:'',
                    area:'',
                    decorated:'',
                    housestructure:'',
                    direction:'',
                    floor:'',
                    elevator:'',
                    carport:'',
                    checkin:'',
                    openhomedate:'',
                    occupancynum:'',
                    rent:'',
                    rentunit:'',
                    payment:'',
                    realname:'',
                    rentcontent:'',
                    ownermobile:''

                },
                //租金形式
                popPriceType:false,
                priceTypeSlots: [{
                    values:['月租','日租']
                }],
                //图片上传 and 预览 and 删
                picValue:'',
                picArr:[],
                sendImgArr:[]

            }
        },
        mounted(){
            this.getRentcontent();
        },
        methods: {
            showPup(num) {
                let n = num;
                switch(n) {
                    case 0:
                        this.popRoomNum = true; //门牌
                        break;
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
                        this.popPriceContains = true;  //租金
                        break;
                    case 10:
                        this.popAnswerTime = true;  //接听时段
                        break;
                    case 11:
                        this.popPriceType = true;  //租金形式
                        break;

                }
            },
            onValuesChangeDecorate(picker, values) {
                console.log(picker.getSlotValue(0));
            },
            onValuesChangeHouse(){

            },
            onValuesChangeHouse(){

            },
            onValuesChangeToward(){

            },
            onValuesChangeFloor(){

            },
            onValuesChangePople(){

            },
            onValuesChangeLook(){

            },
            onValuesChangePay(){

            },
            onValuesChangePrice(){},
            onValuesChangeAnswer(){},
            onValuesChangePriceType(){},

            handleConfirm (data) {
                let date = moment(data).format('YYYY.MM.DD');
                this.dateTime = date;
            },

            //选择图片
            selectFile(e) {
                //先清空在push
                this.sendImgArr = [];
                //获取图片
                let files = e.target.files || e.dataTransfer.files,
                    _this = this;
                console.log(files,'files')
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
                let sendData = {
                    command:'webuploadhouseimg',
                    img:this.sendImgArr
                };
                if(this.sendImgArr.length>0){
                    console.log(sendData,'qwr');
                    this.$http.post(uploadApi,{params:sendData}).then(function (data) {
                        this.picVal = [];
                        let resData = data.data;
                        this.houseId = resData.houseid;
                        if(resData.imglist && resData.imglist>0){
                            this.picArr= resData.imglist;
                        }
                    })
                }
            },
            //删除图片
            delPic(idx) {
                MessageBox({
                    $type:'prompt',
                    title:'提示',
                    message:'确定执行此操作?',
                    closeOnClickModal:true,    //点击model背景层不关闭MessageBox
                    showCancelButton:false,     //不显示取消按钮
                }).then(({ value, action }) => {
                    /* value 为填写的值，进行下一步操作 */
                    console.log(111)
                    this.picVal.splice(idx, 1);
                });

            },


            //点击下一步提交基本信息进入其他信息
            toSecondStep(){
                let sendData = this.sendDataInfo;
                for(let item in sendData){//遍历json对象的每个key/value对,item为key
                    console.log(item + " " + myJson[item]);
                }
                if(houseId == ''){
                    return false;
                }
                this.$http.post(apiUrl,{params:sendData}).then(function (data) {
                    if(data.data.content && data.data.content.length>0){
                        console.log(data.data.content,'fdsfdg');
                        this.$router.push({ name:'secondStep',params: { page:1}});
                    }
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
