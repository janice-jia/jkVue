import zepto from './zepto.min'
import flexible from './flexible_css'
import swiper from './swiper.min'

export default {
    // designWidth:设计稿的实际宽度值，需要根据实际设置
    // maxWidth:制作稿的最大宽度值，需要根据实际设置
    flexible(designWidth, maxWidth) {
        var doc = document,
        win = window,
        docEl = doc.documentElement,
        remStyle = document.createElement("style"),
        tid;

        function refreshRem() {
            var width = docEl.getBoundingClientRect().width;
            maxWidth = maxWidth || 540;
            width>maxWidth && (width=maxWidth);
            var rem = width * 100 / designWidth;
            remStyle.innerHTML = 'html{font-size:' + rem + 'px;}';
        }

        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(remStyle);
        } else {
            var wrap = doc.createElement("div");
            wrap.appendChild(remStyle);
            doc.write(wrap.innerHTML);
            wrap = null;
        }
        //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
        refreshRem();

        win.addEventListener("resize", function() {
            clearTimeout(tid); //防止执行两次
            tid = setTimeout(refreshRem, 300);
        }, false);

        win.addEventListener("pageshow", function(e) {
            if (e.persisted) { // 浏览器后退的时候重新计算
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);

        if (doc.readyState === "complete") {
            doc.body.style.fontSize = "16px";
        } else {
            doc.addEventListener("DOMContentLoaded", function(e) {
                doc.body.style.fontSize = "16px";
            }, false);
        }
    },
     //吸顶条
    fixed(num) {
        var stickyEl = document.querySelector('.jk-screen');
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; 
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); 
        if(isAndroid) {
            window.onscroll = function(e) {
                var scrollT = document.documentElement.scrollTop;
                if (scrollT > num) {
                    $(stickyEl).addClass('fixed-top');
                }else {
                    $(stickyEl).removeClass('fixed-top');
                }
            };
        }else if(isiOS) {
            $(stickyEl).addClass('sticky');
        }
    },

    //个人信息页面显示“我想住”选择
    showScreenArea(){
        var THIS = this;
        $('.jkScreen').show();

        //默认显示 附近
        THIS.showTab('near');
    },

    // 点击首页筛选显示弹出层
    //（区域，租金，户型，筛选，排序）添加点击切换展示dom事件      
    clickShowTab(){
        var jkScreenItem = $('.jkScreenItem');
        var jkScreenNav = $('.jkScreenNav');
        var jkScreenMenuItem = $('.jk-screen-menu-item');
        // console.info('jkScreenMenuItem', jkScreenMenuItem);
        //（区域，租金，户型，筛选，排序）添加点击切换展示dom事件
        for(var i=0; i<jkScreenNav.length; i++){
            jkScreenNav[i].onclick = function(){
                $('#jkScreen').show();
                document.addEventListener("touchmove",function(e){
                    e.preventDefault();
                    e.stopPropagation();
                },false);
                var ScreenItemId = this.getAttribute('data-show-screen');
                
                //判断是否是排序，如果是排序设置高度
                if(ScreenItemId == 'Sort'){
                    $('#jkScreen').height('auto');
                }else{
                    $('#jkScreen').height('100%');
                }

                //设置筛选dom元素的display为none
                for(var i=0; i<jkScreenItem.length; i++){
                    jkScreenItem[i].style.display = 'none';
                }
                //默认设置导航灰色
                 /**
                 * 设置选中效果
                 */
                for(var i=0; i<jkScreenMenuItem.length; i++){
                    jkScreenMenuItem[i].className = 'jk-screen-menu-item';
                }
                $('.menu'+ScreenItemId).parent('.jk-screen-menu-item').addClass('screen-menu-hover');

                if(ScreenItemId){
                    $('#screen'+ScreenItemId).show();
                }else{
                    $('#screenArea').show();
                }
            }
        }
    },
    

    // 个人信息页面“我想住弹层”点击完成之后的回显
    getLikeplace(){
        $('.jkScreen').hide();
        console.info()
        var screenType = $('#screenType').val();
        if(screenType == '附近'){
            var likePlaceVal =  $('#row1Val').val();
            $('#likePlace').html(likePlaceVal);
        }else{
            var likePlaceVal =  $('#row1Val').val() + '/'+ $('#row2Val').val();
            $('#likePlace').html(likePlaceVal);
        }
    },

    /**
     * tag 选择组件
     * @param tagItem           tag匹配的数组，注数组顺序要与页面显示顺序一致
     * @param itemBoxId         tag标签外侧div的id  默认‘tag’
     * @param tagItemClassName  tag标签的class 默认‘tagItem’
     * @param returnTagDataId   tag标签需要set返回值的input的id 默认‘returnTagDataId’
     * @param selectClass       选中标签的高亮class 默认‘tagHover’
     * @param isRadio           是否是单选          默认false
     * @param radioDefault      选中标签的高亮class
     * @param rowData           用于首页二级
     */
    getSelectData(tagItem, itemBoxId, tagItemClassName, returnTagDataId, selectClass, isRadio, radioDefault, rowData) {
        if(!tagItem)   tagItem = [];
        if(!itemBoxId) itemBoxId = 'tag';
        if(!itemBoxId) itemBoxId = 'tagItem';
        if(!returnTagDataId) returnTagDataId = 'returnTagDataId';
        if(!selectClass) selectClass = 'tagHover';
        if(!isRadio) isRadio = false;
        if(!radioDefault) radioDefault = null;
        var returnData=[];
        var tagEle = $('#'+itemBoxId + ' .' + tagItemClassName);
        var THIS = this;

        if(isRadio && radioDefault){
            //根据当前选中tag匹配默认值  设置默认值及默认选中class
            var s = tagItem.join(",").indexOf(radioDefault);
            $("#"+returnTagDataId).val(radioDefault);
            $(tagEle[s]).addClass(selectClass);
        }else{
            $("#"+returnTagDataId).val(tagItem[0]);
            $(tagEle[0]).addClass(selectClass);
        }

        //给每一个tag绑定点击事件
        for(var i = 0,m = tagEle.length; i < m;i++){
            $(tagEle[i]).click(function(){
                
                // 判断标签是否是单选
                if(isRadio){
                    //获取当前点击tag的id
                    var _thisI = $(this).attr('data-id');
                    // console.info('_thisI', _thisI)
                    tagEle.each(function () {
                        $(this).removeClass(selectClass);
                    })
                    $(tagEle[_thisI]).addClass(selectClass);
                    //设置当前选中的值
                    $("#"+returnTagDataId).val($(tagEle[_thisI]).html());


                    //首页筛选二级单独处理
                    if(itemBoxId == 'row1'){
                        $('#row2').remove();
                        if(rowData && rowData[_thisI].child)
                        THIS.addRow(rowData[_thisI].child, 1, 2);
                    }

                }else{
                    //获取当前点击tag的id
                    var _thisI = $(this).attr('data-id');
                    // console.info('_thisI', _thisI)
                    $(tagEle[_thisI]).addClass(selectClass)
                    //根据当前选中tag匹配是否已选
                    var s = returnData.join(",").indexOf(tagItem[_thisI]);
                    if(s>=0){
                        for(var r in returnData){
                            if( returnData[r] == tagItem[_thisI] ){
                                returnData.splice(r,1);
                                $(tagEle[_thisI]).removeClass(selectClass)
                            }
                        }
                    } else{
                        returnData.push(tagItem[_thisI])
                    }
                    // console.info('returnData' ,returnData);
                    $("#"+returnTagDataId).val(returnData.join(" "));
                }

            })
        }
    },




    // 区域切换
    showTab(type){
        var tabItemEle = $('.showTabItem');
        tabItemEle.removeClass('shover');
        var THIS = this;
        // console.info('THIS',THIS)
        $('#screenType'). val($('#'+type).html());
        $('.addRow').remove();
        // console.info('type', type)
        if(type == 'near'){
            // 默认附近
            //请求区域数据
            var rentNear = ["不限","1000m内","2000m内","3000m内"];
            $(tabItemEle[0]).addClass('shover');
            THIS.addRow(rentNear, 1, 1);
            
        }else if(type == 'area'){
            $(tabItemEle[1]).addClass('shover');

            //请求区域数据
            $.ajax({ 
                type: "get", 
                url: "/api/API.ashx?apicommand=getregion&parentid=607", 
                datatype: "JSON", 
                contentType: "application/json", 
                success: function (data) {
                    var areaData = eval("("+data+")");
                    //渲染区域dom及click事件
                    THIS.addRow(areaData, 2, 1);
                },
                error:function(){
                    console.info('error')
                }
            })


        }else if(type == 'subWay'){
            $(tabItemEle[2]).addClass('shover');
            //请求区域数据
            $.get('../index.html', function (response) {
                response =  [
                    {name:"全北京",child:['test1-1','test1-2','test1-4']},
                    {name:"朝阳",child:['test2-1','test2-2','test2-5']},
                    {name:"昌平",child:['test3-1','test3-2','test3-3']}
                ];
                // 地铁
                var subWayData = response;
                console.info('subWayData', subWayData)
                //渲染地铁dom及click事件
                THIS.addRow(subWayData, 2, 1);
            })
        }
    },

    addRow(rowData, addNum,rowNum){
        var THIS = this;
        var bg = 'screenBg';
        if(addNum != 1){
            bg = "screenBg1";
        }
        var jkScreenItem = '<div class="addRow jk-screen-cont jkFlexItem '+ bg+'" id="row'+rowNum+'">'+
                                '<ul class="jk-screen-ui">';
        var tagList = [];
        // 判断需要追加几行
        if(addNum == 1){
            for(var i=0; i<rowData.length; i++){
                jkScreenItem += '<li class="tagItem" data-id="'+i+'">'+rowData[i]+'</li>';
            }
        }else{
            for(var i=0; i<rowData.length; i++){
                tagList.push(rowData[i].name);
                jkScreenItem += '<li class="tagItem" data-id="'+i+'">'+rowData[i].name+'</li>';
            }
        }
        
        // console.info('tagList', tagList);
        jkScreenItem +='</ul>'+
                        '<input type="hidden" name="row'+rowNum+'Val" id="row'+rowNum+'Val" />'+
                        '</div>';
        $('#jkScreenArea').append(jkScreenItem);

        
        if(addNum == 1){
            THIS.getSelectData(rowData, 'row'+rowNum, 'tagItem', 'row'+rowNum+'Val','shover', true);
        }else if(addNum==2 ){

            THIS.getSelectData(tagList, 'row'+rowNum, 'tagItem', 'row'+rowNum+'Val','shover', true, undefined, rowData);

            //根据当前选中tag匹配是否已选
            var val = $('#row'+rowNum+'Val').val();
            var s = tagList.join(",").indexOf(val);

            if(s >= 0 && rowData[s].child && rowData[s].child.length>0){
                THIS.addRow(rowData[s].child, 1, 2);
            }
        }
    },
    initSearch(){
        //点击搜索框后X，清空搜索框内容
        $('#clearSearch').click(function(){
            $('#searchVal').val('');
        });
    
        //推荐搜索点击之后，更改input框搜索内容
        $('.searchArr').click(function(){
            var searchVal = $(this).find('.jk-search-tit').html();
            $('#searchVal').val(searchVal);
        })
    
        //清空历史
        $('#clearBtn').click(function(){
            $("#searchList").html('');
        })
    },
    //房源信息幻燈片
    showHouseInfoTopSwiper(){
    	// 顶部轮播图
        var swiper = new Swiper('#slideTop', {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            autoplay:3000,
            speed:500,
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
            pagination: '.swiper-pagination-top',
            paginationType: 'custom',
            initialSlide:0,
            paginationCustomRender: function ( swiper, current, total ) {
                var _html = '';
                for ( var i = 1; i <= total; i++ ) {
                    if ( current == i ) {
                        _html += '<span class="swiper-pagination-customs swiper-pagination-customs-active">'+i+'</span>';
                    }
                }
                _html += '<span class="swiper-pagination-customs">/'+total+'</span>';
                    return _html; //返回所有的页码html
                },
                onReachEnd: function ( swiper ) {
                    console.log( '到了最后一个slide' );
            }
        });
    },
    //房源信息左滑效果
    showHouseInfoLeftSwiper(){
    	var swiper = new Swiper('#slideCenter', {
            pagination: '.swiper-pagination',
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 20
        });
    }
    
}

