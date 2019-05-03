<template>
	<view id="index">
		<home v-if="PageCur == 'home'"></home>
        <order v-if="PageCur == 'order'"></order>
        <my v-if="PageCur == 'my'"></my>
        <view class="cu-bar tabbar bg-white shadow foot">
            <view class="action" @click="NavChange" :class="PageCur=='home'?'text-green':'text-gray'" data-cur="home">
                <view class='cuIcon-cu-image'>
                    <!--<image :src="'/static/mainMenu/home.png'"></image>-->
                    <text class=" cuIcon-home "></text>
                </view>
                <view>首页</view>
            </view>
            <view class="action" @click="NavChange" :class="PageCur=='order'?'text-green':'text-gray'" data-cur="order">
                <view class='cuIcon-cu-image'>
                    <!--<image :src="'/static/mainMenu/order.png'"></image>-->
                    <text class=" cuIcon-form "></text>
                </view>
                <view>订单</view>
            </view>
            <view class="action" @click="NavChange" :class="PageCur=='my'?'text-green':'text-gray'" data-cur="my">
                <view class='cuIcon-cu-image'>
                    <!--<image :src="'/static/mainMenu/my.png'"></image>-->
                    <text class=" cuIcon-my "></text>
                </view>
                <view>我的</view>
            </view>
        </view>
        <div id="logo" style="text-align: center; margin-top: 30px">
            <img id="logoImage" style="width: 60px; height: 40px;" src="/static/exchange.svg"/>
            <div id="logoChar" class="logoChar">金美美旗下旅行公司</div>
        </div>
	</view>
</template>

<script>
    import home from '../home/home'
    import order from '../order/order'
    import my from '../my/my'
    export default {
        name: 'index',
        components: {home, order, my},
        data() {
            return {
                PageCur: 'home'
            }
        },
        methods: {
            NavChange: function(e) {
                this.PageCur = e.currentTarget.dataset.cur
            }
        }
    }
</script>

<style>
    .logoChar {
        font-size: 13px;
        -webkit-transform: scale(0.7);
    }
</style>
