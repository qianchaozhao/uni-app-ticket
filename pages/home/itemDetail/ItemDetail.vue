<template>
    <view>
        <cu-custom bgColor="bg-yellow2" :isBack="true">
        </cu-custom>
        <view class="cu-bar bg-yellow2">
            <view class="padding-lr flex align-center">
                北京  <text class=" myIcon-jiantou padding-lr-xs"></text>  唐山
            </view>
            <view class="padding-lr text-gray text-xs">
                04-24 周三 12:35乘车 约4-5小时
            </view>
        </view>
        <view class=" bg-white top-line flex align-center justify-between map" style=" min-height: 100upx;" @click="goMap()">
            <view class="padding-lr">
                <view>京通快速路与四惠桥交叉口南100米</view>
                <view class="text-gray text-xs">取票、乘车地址</view>
            </view>
            <!--<image class="padding-lr" style="width: 55px;" mode="widthFix"  src="../../../static/mapIcon.png"></image>-->
            <text class="myIcon-map padding-lr textxxl text-orange"></text>
        </view>
        <seat-charts height="500"></seat-charts>
        <view class="cu-bar bg-white bottom-fix">
            <view class="padding-lr">
                <view class="text-xl text-orange2"><text class="text-sm">¥</text>88</view>
                <view class="text-sm text-gray">7×24小时服务保障，车站原价</view>
            </view>
            <view class="padding-lr">
                <button class="cu-btn bg-gradual-orange" @click="gotoBuy()">订</button>
            </view>
        </view>
    </view>
</template>

<script>
    import SeatCharts from "./SeatCharts"
    export default {
        name: "ItemDetail",
        components: {SeatCharts},
        data() {
            return {
                mapHeight: '400'
            }
        },
        methods: {
            gotoBuy() {
                uni.navigateTo({
                    url: '../orderDetail/OrderDetail'
                })
            },
            goMap() {
                uni.navigateTo({
                    url: "../components/MyMap"
                })
            }
        }
    }
</script>

<style scoped>
    .map {
        background: #fff url('../../../static/falseMap.png') no-repeat 100% 0;
    }

    .textxxl {
        font-size: 24px;
    }
</style>
