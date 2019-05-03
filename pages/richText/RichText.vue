<template>
    <view>
        <cu-custom bgColor="bg-white" :isBack="true">
            <block slot="content">{{title}}</block>
        </cu-custom>
        <view class="padding-sm bg-white">
            <u-parse :content="article" @preview="preview" @navigate="navigate" ></u-parse>
            <div id="此div里的内容正式运用的时候换成富文本放到 'article中'">
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #333; margin: 15px 0 15px;">第一条 协议订立</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 1.1本协议的缔约方为在飞猪汽车票平台（其URL为：http://h5.m.taobao.com/trip/car/search/index.html （或飞猪根据业务需要不时修改的URL及客户端，以下简称“平台”）为用户提供汽车票查询/预订服务的服务商（服务商）和用户（“您”），本协议具有合同效力。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 1.2用户在线确认本预订协议后，方可使用平台服务商提供的汽车票预订服务（以下简称“服务”）。本协议自用户点击确认后生效，在用户使用平台服务商提供的汽车票查询/预订服务期间一直有效。</div>
                </div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #333; margin: 15px 0 15px;">第二条 服务说明</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 2.1服务内容以订单内容、本协议、飞猪相关规则，及服务商在平台服务产品预订页面中公示的内容（以下简称“服务商约定”）为准。但服务商自行公示内容需符合国家相关法律法规规定，且符合本协议及平台汽车票预订相关规则约定，否则无效。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"></div>
                </div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #333; margin: 15px 0 15px;">第三条 用户的权利和义务</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 3.1用户在委托服务商提供相关产品服务前,应仔细阅读本协议、飞猪规则及服务商所公示的流程、售后服务等服务商约定。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 3.2用户提交订单时，应当准确填写、核对乘车人的姓名、身份证号、手机联系方式、日期、出发到达车站、车次、座位类型等信息内容，以确保乘车人可取票，订单一经提交无法更改填写信息。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 3.3用户应在提交订单后20分钟内完成付款，收到出票成功确认短信信息后出票成功。用户应按照与服务商约定自行去汽车站取票。如用户未按时完成付款，则该订单将会被系统自动取消；用户知悉服务产品存在可能预订失败情形，因此用户接受付款完成后，在未收到出票成功确认短信信息情形下，仅以退款方式解决。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 3.4用户预订成功后，如需取消订单或办理退票手续的，依据本协议约定进行。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 3.5用户因预订产生的咨询、退票服务等均与服务商咨询、办理。如因此产生争议由用户与服务商协商解决，飞猪不承担除法律有明确规定外的责任。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 3.6用户知晓并同意服务商获得用户提交订单中所涉及的个人信息，同时授权服务商可为完成汽车票预订服务目的在必须时向道路运输服务提供者披露用户提交订单中所提交</div>
                </div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #333; margin: 15px 0 15px;">第四条　服务商权利义务</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 4.1服务商承诺其发布于飞猪平台的所有信息真实、准确、有效，符合相关法律法规及飞猪相关规则规定。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 4.2服务商将根据实际车次收取一定预订服务费，具体服务费金额以订单页面展示为准。如出票成功且用户已取出汽车票后申请退票，则服务费不予退还。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 4.3部分地区的汽车票可支持网上退票，具体以预订页面的说明展示为准。如页面无支持在线退票说明，则用户需在发车前至出发车站，按车站规定办理退票或改签相关手续。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 4.4服务商承诺对用户提交订单信息内容保密</div>
                </div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #333; margin: 15px 0 15px;">第五条　免责说明</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 5.1因全国各客运站随时会调整车次、票价、坐席等信息，因此，用户预订之汽车票的车次、票价、坐席等信息最终以实际购买票面为准。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 5.2因用户提供错误订单信息所导致的损失，用户需自行承担，飞猪平台及服务商不承担任何除法律有明确规定外的责任。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 5.3因不可抗力，包括但不限于黑客入侵、计算机病毒等原因造成用户资料泄露、丢失、被盗用、被篡改的，飞猪平台不承担任何除法律有明确规定外的责任。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 5.4用户理解并同意，飞猪仅为服务商提供服务的途径，就服务商提供服务时的违法违约违规行为，须由服务商自行向用户承担相应责任。</div>
                </div>
                <div>
                    <div style="font-size: 15px; font-weight: 700; color: #333; margin: 15px 0 15px;">第六条 争议解决及法律适用</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"> 6.1在用户的预订生效后，如用户与服务商就本协议或订单约定内容履行发生争议，用户同意按照中华人民共和国颁布的相关法律法规来解决争议，并同意接受平台所在地有管辖权的法院管辖。</div>
                    <div style="margin-bottom: 9px; font-size: 13px; color: #666;"></div>
                </div>
            </div>
        </view>
    </view>
</template>

<script>
    import uParse from '../common/u-parse/u-parse'
    export default {
        name: "RichText",
        components: {
            uParse
        },
        data () {
            return {
                title: '汽车票预订协议',
                article: '      '
            }
        },
        methods: {
            preview(src, e) {
                // do something
            },
            navigate(href, e) {
                // do something
            }
        }
    }
</script>

<style scoped>
    @import url("../common/u-parse/u-parse.css");
</style>
