<template>
  <view ref="progress">
    <view v-for="(sta, index) in station" :key="sta">
      <view style="display: flex">
        <view v-if="!isCustomizeIcon">
          <view :class="index == 0 ? 'upVerticalLineNone' : 'upVerticalLine'" :ref="'start' + index" :id="'start' + index"></view>
          <view class="hollowCircle" ></view>
          <view :class="index == station.length - 1? 'downVerticalLineNone': 'downVerticalLine'" :ref="'end' + index" :id="'end' + index"></view>
        </view>
        <view style="width: 15px; height: 15px;" v-else>
          <slot></slot>
        </view>
        <view class="udCenter">{{sta}}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "Progress",
  props: {
    station: Array,
    isCustomizeIcon: false
  },
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .udCenter {
    margin-left: 5px;
    display: flex;
    align-items: center;
  }
  .upVerticalLine {
    margin-bottom: 3px;
    height: 5px;
    width: 2px;
    background-color: #eee;
    margin-left: 3px;
  }
  .upVerticalLineNone {
    margin-bottom: 3px;
    height: 5px;
    width: 2px;
    margin-left: 3px;
  }
  .downVerticalLine {
    margin-top: 3px;
    height: 5px;
    width: 2px;
    background-color: #eee;
    margin-left: 3px;
  }
  .downVerticalLineNone {
    margin-top: 3px;
    height: 5px;
    width: 2px;
    margin-left: 3px;
  }
  .hollowCircle {
    height: 8px;
    width: 8px;
    background-color: #ccc;
    border-radius: 100%
  }
</style>
