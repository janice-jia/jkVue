<template>

    <div class="jk-wap">
        <div class="jk-searchbox">
            <form action="/">
                <input type="text" placeholder="您想住哪？" id="searchVal" name="keyword" value=""/>
                <a class="jk-search-clear" id="clearSearch" href="javascript:;"></a>
            </form>
        </div>

        <!-- 搜索历史 -->
        <!-- <div class="jk-searchList" id="searchList">
            <ul>
                <li class="jkFlex">
                    <div class="jk-search-tit jkFlexItem gray">历史记录</div>
                    <div class="jk-search-desc" id="clearBtn">清空历史</div>
                </li>
                <li class="jkFlex searchArr">
                    <div class="jk-search-tit jkFlexItem">海淀1</div>
                    <div class="jk-search-desc">不限制房型/不限</div>
                </li>
                <li class="jkFlex searchArr">
                        <div class="jk-search-tit jkFlexItem">朝阳</div>
                        <div class="jk-search-desc">不限制房型/不限</div>
                    </li>
            </ul>
        </div> -->

        <!-- 搜索推荐 -->
        <!-- <div class="jk-searchList">
            <ul>
                <li class="jkFlex searchArr">
                    <div class="jk-search-tit jkFlexItem">海淀周边</div>
                </li>
                <li class="jkFlex searchArr">
                    <div class="jk-search-tit jkFlexItem">海淀周边</div>
                </li>
            </ul>
        </div> -->
    </div>
</template>

<script type="text/ecmascript-6">
    import indexJs from '../js/index'
    export default {
        name: 'search',
        mounted(){
            indexJs.initSearch();
        }
    }
</script>
