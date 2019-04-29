<template>
    <view>
        <view class="cu-bar bg-white">
            <view class="action">
                <navigator open-type="navigateBack" >
                    <text class="cuIcon-back text-gray"></text> 返回
                </navigator>
            </view>
            <view class="content text-bold">
                操作条
            </view>
        </view>
        <!--前一天后一天-->
        <view class="cu-bar bg-white top-line" style="min-height: 35px;">
            <view class="action">
                <text class="cuIcon-back text-gray"></text> 前一天
            </view>
            <view style=" background-color: #ffdf40; border-radius: 8upx;">
                <picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange" style="padding-right: 0px">
                    <view style="display: flex; align-items: center;">
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
        <search-item :station="station2"></search-item>
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
              station2: ['天津', '重庆']
          }
        },
        methods: {
            DateChange(e) {
                this.date = e.detail.value
            },
        }
    }
</script>

<style scoped>

</style>
