<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item v-for="(img, index) in bannerImgs" :key="index">
                            <image mode="aspectFill" style="width: 100%; height: 100%;" :src="img"></image>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
        <scroll-view scroll-x class="bg-white nav">
            <view class="flex text-center">
                <view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in ticket" :key="index" @tap="tabSelect" :data-id="index">
                    <view class="flex">
                        <view class="flex-sub"></view>
                        <view class="flex-sub">{{item.name}}</view>
                        <view class="flex-sub flex align-center justify-center">
                            <view v-if="item.isPromotion" class="cu-tag tag round sm bg-gradual-orange">{{item.promotionContent}}</view>
                        </view>
                    </view>
                </view>
            </view>
        </scroll-view>
        <start-end-point class="top-line"></start-end-point>

        <view class="cu-form-group top-line">
            <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange" style="padding-right: 0px">
                <view style="display: flex; justify-content: space-between;">
                    <view>
                        4 月 28 日 <text class="text-gray text-sm" style="margin-left: 8px">周日</text>
                    </view>
                    <view class="cuIcon-right"></view>
                </view>
            </picker>
        </view>
        <view class="bg-white padding top-line">
            <button class="cu-btn bg-gradual-orange lg" style="width: 100%;" @click="goSearchList()">开始搜索</button>
            <view class="padding-top-sm flex justify-between">
                <view class="text-sm" >
                    <text class="padding-lr-xs">
                        北京 <text class="myIcon-jiantou padding-lr-xs"></text> 唐山
                    </text>
                    <text class="padding-lr-xs">
                        唐山 <text class="myIcon-jiantou padding-lr-xs"></text> 北京
                    </text>
                    <text class="padding-lr-xs">
                        北京 <text class="myIcon-jiantou padding-lr-xs"></text> 秦皇岛
                    </text>
                </view>
                <view>清空历史</view>
            </view>
        </view>
    </view>
</template>

<script>
    import StartEndPoint from './components/StartEndPoint'
    export default {
        name: 'home',
        components: {StartEndPoint},
        data() {
            return {
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 500,
                bannerImgs: [
                    "https://gw.alicdn.com/tfs/TB1g5p0SgHqK1RjSZFkXXX.WFXa-1125-352.jpg_790x10000Q75.jpg_.webp",
                    "https://gw.alicdn.com/tfs/TB1FgL4RwDqK1RjSZSyXXaxEVXa-1125-352.png_790x10000.jpg_.webp",
                    "https://gw.alicdn.com/tfs/TB193I3QkvoK1RjSZPfXXXPKFXa-1125-352.jpg_790x10000Q75.jpg_.webp"
                ],
                ticket: [
                    {
                        name: '汽车票',
                        isPromotion: false,
                        promotionContent: ''
                    },
                    {
                        name: '专车票',
                        isPromotion: true,
                        promotionContent: 'new'
                    }
                ],
                TabCur: 0,
                scrollLeft: 0,
                date: '2018-12-25',
            }
        },
        methods: {
            tabSelect(e) {
                this.TabCur = e.currentTarget.dataset.id;
                this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
            },
            DateChange(e) {
                this.date = e.detail.value
            },
            goSearchList() {
                uni.navigateTo({
                    url: "../home/searchlist/SearchList"
                })
            }
        }
    }
</script>

<style>
    .tag {
        border-top-right-radius: 0px
    }
</style>
