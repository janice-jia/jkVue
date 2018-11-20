export default{
    config:{
        imgWenSiteUrl:'http://admin.9kuaiz.com',//图片路径前缀
        telNumber:'123456',      //电话
        userId: '12'        //userId
    },
    getUserId(){
        // openid 微信id  ，userid 用户id
        var data = {};
        data.userid = document.cookie.userid;
        data.openid = document.cookie.openid;
        console.info('获取到的cookie',data)
        return data;
    }
}