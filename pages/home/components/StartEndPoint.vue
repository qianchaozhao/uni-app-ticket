<template>
    <view>
        <view class="cu-bar bg-white" style="display: flex; justify-content: space-between; align-items: center">
            <view class="padding-lr" :class="animation?'animation-slide-right' :''">
                {{start.name}}
            </view>
            <img style="height: 18px; width: 18px" src="../../../static/exchange.svg" @tap="toggle()"/>
            <view class="padding-lr" :class="animation?'animation-slide-left' :''">
                {{end.name}}
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        name: "StartEndPoint",
        data() {
            return {
                animation: false,
                start: {name: "北京"},
                end: {name: "唐山"},
            }
        },
        methods: {
            toggle() {
                this.animation= true;
                setTimeout(()=>{
                    this.animation = false;
                }, 1000)
                let temp = null;
                temp = this.start;
                this.start = this.end;
                this.end = temp;
            },
        }
    }
</script>

<style>

</style>
