<template>
    <div class="container">
        <div class="nav blue">
            <el-breadcrumb separator="/" class="">
                实时查寝
            </el-breadcrumb>
        </div>

        <el-form ref="form" class="zjForm" :model="form" label-width="100px">
            <el-form-item label="请选择宿舍楼">
                <el-select v-model="form.dormbuildingid" @change="selectChanged" placeholder="请选择宿舍楼">
                    <el-option 
                        v-for="item in dormbuilding"
                        :key="item.id"
                        :label="item.dormbuildingname"
                        :value="item.id"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请选择学院">
                <el-select v-model="form.majorid" placeholder="请选择学院">
                    <el-option 
                        v-for="item in majorList"
                        :key="item.id"
                        :label="item.majorname"
                        :value="item.id"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请选择楼层">
                <el-select v-model="form.floor" @change="selectChanged" placeholder="请选择楼层">
                    <el-option 
                        v-for="item in floorList"
                        :key="item.floor"
                        :label="item.floor"
                        :value="item.floor"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请选择房间号">
                <el-select v-model="form.dormitoryno" placeholder="请选择房间号">
                    <el-option 
                        v-for="item in dormitoryno"
                        :key="item.id"
                        :label="item.dormitoryno"
                        :value="item.id"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="dormitoryManage" style="float: right">查询</el-button>
            </el-form-item>
        </el-form>

        <div class="searrch-con">
            <p>校内学生总数： {{resultData.total}} 人</p>
            <p>在寝人数： {{resultData.in}} 人</p>
            <p>在外人数： {{resultData.out}} 人</p>
        </div>
        <bottomCom></bottomCom>
    </div>

</template>

<script type="text/ecmascript-6">
    import bottomCom from './bottomCom.vue';

    export default {
        name: 'index',
        data () {
            return {
                form: {
                },
                // 宿舍楼 
                dormbuilding:[],
                // 院系
                majorList:[],
                // 楼层
                floorList: [],
                // 房间号
                dormitoryno: [],
                resultData:{}
            }
        },
        created () {
            // 获取宿舍楼
            this.GetAllDormbuilding();
            // 获取学院
            this.GetMajorList();
            // 获取楼层
            this.GetFloorList();
        },
        mounted(){

        },
        components: {
            bottomCom
        },
        methods: {
            // 获取宿舍楼
            GetAllDormbuilding(){
                this.$http.get('/WxAPI/DormitoryManageAPI.ashx?command=GetAllDormbuilding').then(function (res) {
                    if (res.body.code == '200') {
                        this.dormbuilding = res.body.data || [];
                    }
                })
            },
            // 获取学院
            GetMajorList(){
                this.$http.get('/WxAPI/DormitoryManageAPI.ashx?command=GetMajorList').then(function (res) {
                    if (res.body.code == '200') {
                        this.majorList = res.body.data || [];
                    }
                })
            },
            selectChanged(){
                console.info('111')
                this.GetDormitorynoByDormbuildingId()
            },
            // 获取楼层
            GetFloorList(){
                this.$http.get('/WxAPI/DormitoryManageAPI.ashx?command=GetFloorList').then(function (res) {
                    if (res.body.code == '200' && res.body.data) {
                        this.floorList = res.body.data || [];
                    }
                })
            },
            // 宿舍房间号
            GetDormitorynoByDormbuildingId(){
                if(!this.form.dormbuildingid || !this.form.floor) return;
                this.$http.get('/WxAPI/DormitoryManageAPI.ashx?command=GetDormitorynoByDormbuildingId&dormbuildingid=' + this.form.dormbuildingid + '&floor=' + this.form.floor).then(function (res) {
                    if (res.body.code == '200' && res.body.data) {
                        this.dormitoryno = res.body.data || [];
                    }
                })
            },
            dormitoryManage() {
                if(!this.form.dormbuildingid){
                    this.$message.error('请选择宿舍楼');
                }else if(!this.form.majorid){
                    this.$message.error('请选择学院');
                }else if(!this.form.floor){
                    this.$message.error('请选择楼层');
                }else if(!this.form.dormitoryno){
                    this.$message.error('请选择房间号');
                }
                this.$http.get('/WxAPI/DormitoryManageAPI.ashx?command=RealTimeHeadCount&dormbuildingid=2&majorid=29&floor=2层&dormitoryno=102&page=1&limit=10').then(function (res) {
                    if (res.body.code == '200') {
                        this.resultData = res.body || {};
                    }else{
                        this.$message.error(res.msg || '查询失败！');
                    }
                })
            }
        }
    }
</script>
