<template>
    <view>
        <cu-custom bgColor="bg-yellow2" :isBack="true">
            <block slot="content">新增乘车人</block>
        </cu-custom>

        <view class="cu-form-group min-height40">
            <view class="min-width75">姓名</view>
            <input placeholder="请输入真实姓名" name="input" />
        </view>
        <view class="cu-form-group min-height40 justify-start">
            <view class="min-width75">乘客类型</view>
            <view >成人</view>
        </view>
        <view class="cu-form-group min-height40 margin-top-xs justify-start">
            <view class="min-width75">证件类型</view>
            <view >身份证</view>
        </view>
        <view class="cu-form-group min-height40">
            <view class="min-width75">证件号码</view>
            <input placeholder="请与证件保持一致" name="input" />
        </view>
        <view class="padding-lr margin-top">
            <view class="flex">
                <text class="cuIcon-info text-orange self-start text-gray" style="margin: 2px"></text>
                <view class="padding-lr-xs text-sm">
                    点击确定表示您已阅读并同意以下内容
                </view>
            </view>
            <view class="text-sm text-gray">
                根据实名制要求，购买汽车票需提交乘客的身份证件信息，并需在乘车时出具对应身份证件用于验证，请确保录入信息真实有效。飞猪将通过加密等方式保护您录入的身份证件信息，且仅在具体订票过程中提供给与您进行交易的商户/承运人。
            </view>
        </view>

        <view class="flex bottom-fix ">
            <view class="cu-bar bg-gradual-orange half-width justify-center" style="width: 100%" @click="finish()">确定</view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "AddPassenger",
        methods: {
            finish() {
                uni.navigateBack({delta: 1});
            }
        }
    }
</script>

<style scoped>

    .min-width75 {
        min-width: 75px;
    }
</style>
