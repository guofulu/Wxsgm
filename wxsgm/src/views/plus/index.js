import React from "react"
import Grid  from "../../components/VipIndex/Grid"
import "../../assets/css/plus.css"
import { Drawer, Button, Radio } from 'antd';
import "../../assets/css/ticket.css"
import 'antd/dist/antd.css'
import Popover from  "../../components/public/Popover"
const RadioGroup = Radio.Group;
class Plus extends React.Component{
    state = { visible: false, placement: 'bottom' };
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };
    onClose = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        return(
            <div className={"plus"}>
                <div className={"plus_head"}>
                    <i className={"iconfont icon-zuojiantou"} onClick={()=>{
                        this.props.history.go(-1)
                    }}></i>
                    <p className={"plus_head_title"}>橙PLUS卡</p>
                    <Popover></Popover>
                </div>
                    <div className={"plus__no__info"}>
                        <div className={"plus__no__info__center"}>
                            <p className={"plus__no__info__center__type"}>橙PLUS卡</p>
                            <div className={"plus__no__info__center__cnt"}>
                                <span className={"plus__no__info__center__cnt--1"}>开卡999</span>
                                <span className={"plus__no__info__center__cnt--2"}>送</span>
                                <span className={"plus__no__info__center__cnt--3"}>100</span>
                                <span className={"plus__no__info__center__cnt--4"}>储值卡</span>
                            </div>
                            <a className={"plus__no__btn__rule"} onClick={this.showDrawer}>使用规则</a>
                            <Drawer
                                height={"600px"}
                                title="温馨提示"
                                placement={this.state.placement}
                                closable={true}
                                onClose={this.onClose}
                                visible={this.state.visible}
                            >
                                <div>
                                    <p>橙PLUS卡是聚橙网发行的储值卡。用户开通橙PLUS卡，其有效期自开通之日起长期有效，可在聚橙网各平台购买演出票及周边产品时使用橙PLUS卡进行支付。</p>
                                    <p>开卡送</p>
                                    <p>开通橙PLUS卡单一面额999元，新开通可赠送：</p>
                                    <p>1.余额100元（平台节日活动额外叠加赠送）</p>
                                    <p>2.VIP+会员1年，尊享10大权益，会员有效期从开通之日顺延。</p>
                                    <p>成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
                                    <p>· 购票提醒</p>
                                    <p> 单笔订单仅支持单一方式支付，即可选择橙PLUS卡支付，或其他方式支付，不支持混合支付。（部分演出项目有购买张数的限制）平台节日活动期间，可能基于保护所有消费者公平购物的机会，保障公平交易秩序以及其他合理商业原因，采取限制橙PLUS卡充值数量的安排，具体以线上活动规则为准。</p>
                                </div>
                            </Drawer>
                            <div className={"plus__no__info__center__hint"}>
                                <span className={"plus__no__info__center__hint--1"}>赠送+vip会员</span>
                                <span className={"plus__no__info__center__hint--2"}>年</span>
                                <span className={"plus__no__info__center__hint--3"}>享受10大权益</span>
                            </div>
                        </div>
                    </div>
                    <div className={"plus__no__btn"}>
                        <button className={"ju-button_plus__no__btn__open"}>立即开卡</button>
                    </div>
                    <div className={"plus__no__rights"}>
                        <div className={"plus__no__rights__grid"}>
                            <Grid></Grid>
                        </div>
                    </div>
                <div className={"plus__save"}>
                    <img src={"data:image/png;base64,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"} className={"plus__save__pic"}/>
                </div>
                <div className={"plus__btn"}>
                    <div className={"plus__btn__txt"}>
                        <span className={"plus__btn__txt__des"}>开卡即送</span>
                        <span className={'plus__btn__txt__amount'}>￥100</span>
                    </div>
                    <button className={"ju-button_button--round"}>立即开卡</button>
                </div>
            </div>
        )
    }
}
export default Plus