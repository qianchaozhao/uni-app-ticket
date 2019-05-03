<template>
    <view>
        <cu-custom bgColor="bg-white" :isBack="true">
            <block slot="content">
                北京  <text class=" myIcon-jiantou padding-lr-xs"></text>  唐山
            </block>
        </cu-custom>
        <!--前一天后一天-->
        <view class="cu-bar bg-white top-line min-height35">
            <view class="action">
                <text class="cuIcon-back text-gray"></text> 前一天
            </view>
            <view style=" background-color: #ffdf40; border-radius: 8upx;">
                <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange" style="padding-right: 0px">
                    <view class="flex align-center">
                        <view style="margin: 8upx">4 月 28 日 周日</view>
                        <view style="height: 22px; max-height: 22px border-left: 1px; border-right-style: solid; transform: scaleX(.333)"></view>
                        <view style="margin: 8upx" class="cuIcon-calendar"></view>
                    </view>
                </picker>
            </view>
            <view class="action">
                后一天 <text class="cuIcon-right text-gray"></text>
            </view>
        </view>
        <view >
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
            <search-item :station="station2"></search-item>
        </view>

        <view class="bottom-fix bg-white top-line flex justify-around align-center" :class="showCond">
            <view class="padding-tb5" @click="showModal('priceModal')">
                <view class="text-center">
                    <text class='cuIcon-order font-size21 dian-yellow'></text>
                </view>
                <view class="font-size12 text-center">最早出发 </view>
            </view>
            <view class="padding-tb5">
                <view class="text-center">
                    <text class="cuIcon-time font-size21"></text>
                </view>
                <view class="font-size12">发车时段</view>
            </view>
            <view class="padding-tb5">
                <view class="text-center">
                    <text class="cuIcon-filter font-size21"></text>
                </view>
                <view class="font-size12">筛选</view>
            </view>
        </view>
        <!--价格,出发早晚,模态框-->
        <view class="cu-modal bottom-modal" :class="modalName=='priceModal'?'show':''" @tap="hideModal">
            <view class="cu-dialog" style="" @tap.stop="">
                <view class="padding-lr-sm">
                    <view class="cu-bar top-line">
                        <view class="text-orange2">最早出发</view>
                        <view class="cuIcon-check text-orange2"></view>
                    </view>
                    <view class="cu-bar top-line">
                        <view class="">最晚出发</view>
                        <view class=""></view>
                    </view>
                    <view class="cu-bar top-line">
                        <view class="">价格低到高</view>
                        <view class=""></view>
                    </view>
                    <view class="cu-bar top-line">
                        <view class="">价格高到低</view>
                        <view class=""></view>
                    </view>
                </view>
            </view>
        </view>
        <!--发车时段模态框-->
        <view class="cu-modal bottom-modal" :class="modalName=='faCheModal'?'show':''" @tap="hideModal">
            <view class="cu-dialog" style="" @tap.stop="">
                <view class="padding-lr-sm">
                    <view class="cu-bar top-line">
                        <view class="text-orange2">最早出发</view>
                        <view class="cuIcon-check text-orange2"></view>
                    </view>
                    <view class="cu-bar top-line">
                        <view class="">最晚出发</view>
                        <view class=""></view>
                    </view>
                    <view class="cu-bar top-line">
                        <view class="">价格低到高</view>
                        <view class=""></view>
                    </view>
                    <view class="cu-bar top-line">
                        <view class="">价格高到低</view>
                        <view class=""></view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import SearchItem from "./SearchItem"
    export default {
        name: "SearchList",
        components: {SearchItem},
        data() {
          return {
              date: '2018-12-25',
              station2: ['北京', '唐山'],
              scrollTopFlag: 0,
              showCond: '',
              modalName: ''
          }
        },
        methods: {
            DateChange(e) {
                this.date = e.detail.value
            },
            // 隐藏modal
            hideModal(e) {
                this.modalName = null
            },
            // 显示某个modal
            showModal(modalName) {
                this.modalName = modalName
            }
        },
        // 监听页面滚动
        onPageScroll(obj) {
            if (this.scrollTopFlag > obj.scrollTop) {
                this.showCond = 'show-cond'
            } else {
                this.showCond = 'hide-cond'
            }
            this.scrollTopFlag = obj.scrollTop
        },
    }
</script>

<style scoped>
    .padding-tb5{
        padding: 5px 0px;
    }
    .font-size12 {
        font-size: 12px;
    }
    .font-size21 {
        font-size: 21px;
    }
    .hide-cond {
        transition-duration: 0.5s;
        bottom: -1000px;
    }
    .show-cond {
        transition-duration: 0.5s;
        bottom: 0px;
    }
    .dian-yellow {
        position: relative;
        margin-top: 50px;
    }

    .dian-yellow:after {
        content: attr(data-num);
        line-height: 50px;
        text-align: center;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #ffc900;
        position: absolute;
        top: 0px;
        right: -5px;
    }
</style>
