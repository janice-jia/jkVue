<template>
    <!--发布 by zqy-->
    <div class="jk-publish">
        <!-- 整租 -->
        <div class="jk-publish-item" @click="toPublishPage(1)">
            <div class="jk-publish-itemImg">
                <img :src="menuImg1" alt="整租" />
            </div>
            <div class="jk-publish-itemType">
                <p class="publishtit">整租</p>
                <p class="publishcon">一整套房子，也包括开间</p>
            </div>
            <div class="jk-publish-itemRight">
                <img :src="iconRight" alt="" />
            </div>
        </div>

        <!-- 合租 -->
        <div class="jk-publish-item" @click="toPublishPage(2)">
            <div class="jk-publish-itemImg">
                <img :src="menuImg2" alt="合租" />
            </div>
            <div class="jk-publish-itemType">
                <p class="publishtit">合租</p>
                <p class="publishcon">一个房间</p>
            </div>
            <div class="jk-publish-itemRight">
                <img :src="iconRight" alt="" />
            </div>
        </div>

        <!-- 短租 -->
        <div class="jk-publish-item" @click="toPublishPage(3)">
            <div class="jk-publish-itemImg">
                <img :src="menuImg3" alt="短租" />
            </div>
            <div class="jk-publish-itemType">
                <p class="publishtit">短租</p>
                <p class="publishcon">最短一天起租</p>
            </div>
            <div class="jk-publish-itemRight">
                <img :src="iconRight" alt="" />
            </div>
        </div>

        <!-- 底部导航 start-->
        <bottomCom></bottomCom>
        <!-- 底部导航 end-->
    </div>
</template>

<script>
    import bottomCom from '../bottomCom.vue';

    import menuImg1 from '../../assets/menu-item-1.png';
    import menuImg2 from '../../assets/menu-item-2.png';
    import menuImg3 from '../../assets/menu-item-3.png';
    import iconRight from '../../assets/icon-right.png';



    export default {
        name: "publish",
        data () {
            return {
                menuImg1: menuImg1,
                menuImg2: menuImg2,
                menuImg3: menuImg3,
                iconRight: iconRight,
                imgWenSiteUrl:this.GLOBAL.imgWenSiteUrl,
                isauth:false
            }
        },
        components: {
            bottomCom
        },
        mounted(){
            this.isauthFn();
        },
        methods:{
            //判断是否认证
            isauthFn(){
                this.$http.get('/api/API.ashx?apicommand=isauth&userid='+this.GLOBAL.userid).then(function(data) {
                    console.info(data)
                    if(data.body.result == 'Y'){
                        this.isauth = true;
                    }else{
                        this.isauth = false;
                    }
                })
            },
            toPublishPage(page){
                if(!this.isauth){
                    this.$router.push({ name:'noAuth',params: { renttype:page}})
                }else{
                    this.$router.push({ name:'tenant',params: { renttype:page}})
                }
            }
        }

    }
</script>

<style scoped>

</style>
