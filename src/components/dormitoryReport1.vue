<template>
    <div class="container">
        <div class="nav blue">
            <el-breadcrumb separator="/" class="">
                学院宿管报表
            </el-breadcrumb>
        </div>
        <el-row style="margin:10px 14px;font-size:12px;font-weight:bold;color:gray;">
            <el-col :span="12">学院：</el-col>
            <el-col :span="12" >报表日期：</el-col>
        </el-row>
        <el-row>
            <el-col :span="12"  style="padding:0 10px">
                <el-select v-model="form.majorid" @change="DormitoryReport" placeholder="请选择学院">
                    <el-option 
                        v-for="item in majorList"
                        :key="item.id"
                        :label="item.majorname"
                        :value="item.id"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="12" style="padding-right:10px">
                <el-date-picker 
                    type="date" 
                    placeholder="选择日期" 
                    align="right" 
                    v-model="form.currentdate"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    @change="DormitoryReport" style="width:100%">
                </el-date-picker>
            </el-col>
        </el-row>
        
        <el-row type="flex" class="report-col">
            <el-col :span="12" class="green">
                <i class="el-icon-user-solid"></i>
                <div class="grid-content bg-purple">学生总数量</div>
                <p class="num">{{resultData.studentscount || 0}}</p>
            </el-col>
            <el-col :span="12" class="gray">
                <i class="el-icon-folder-checked"></i>
                <div class="grid-content bg-purple">全部通行记录</div>
                <p class="num">{{resultData.inoutcount || 0}}</p>
            </el-col>
        </el-row>
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
                    currentdate: ''
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
            // var date = new Date()
            // this.form.currentdate = date.getTime() + '';
            // 获取学院
            this.GetMajorList();
        },
        mounted(){

        },
        components: {
            bottomCom
        },
        methods: {
            // 获取学院
            GetMajorList(){
                this.$http.get('/WxAPI/DormitoryManageAPI.ashx?command=GetMajorList').then(function (res) {
                    if (res.body.code == '200') {
                        this.majorList = res.body.data || [];
                    }
                })
            },
            DormitoryReport() {
                if(!this.form.majorid){
                    // this.$message.error('请选择宿舍楼');
                    return
                }else if(!this.form.currentdate){
                    // this.$message.error('请选择时间');
                    return
                }
                this.resultData = {}
                this.$http.get('WxAPI/DormitoryManageAPI.ashx?command=MajorReport&majorid='+this.form.majorid+'&currentdate='+this.form.currentdate).then(function (res) {
                    if (res.body.code == '200') {
                        this.resultData = res.body.data || {};
                    }else{
                        this.$message.error(res.msg || '查询失败！');
                    }
                })
            }
        }
    }
</script>
