<template>
    <div class="container">
        <div class="nav blue">
            <el-breadcrumb separator="/" class="">
                实时查寝
            </el-breadcrumb>
        </div>

        <el-form ref="form" class="zjForm" :model="form" label-width="100px">
            <el-form-item label="请选择宿舍楼">
                <el-select v-model="form.name" placeholder="请选择宿舍楼">
                    <el-option label="请选择宿舍楼" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请选择学院">
                <el-select v-model="form.name" placeholder="请选择学院">
                    <el-option label="请选择学院" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请选择楼层">
                <el-select v-model="form.name" placeholder="请选择楼层">
                    <el-option label="请选择楼层" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="请选择房间号">
                <el-select v-model="form.name" placeholder="请选择房间号">
                    <el-option label="请选择房间号" value="shanghai"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="float: right">查询</el-button>
            </el-form-item>
        </el-form>

        <div class="searrch-con">
            <p>校内学生总数： 人</p>
            <p>在寝人数： 人</p>
            <p>在外人数： 人</p>
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
                }
            }
        },
        beforeCreated(){
            // //获取城市列表
            // this.getCity();
        },
        created () {
        },
        mounted(){

        },
        components: {
            bottomCom
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
