import React from "react"
import MyPhone from "./MyPhone/MyPhone"
import {
    Link
} from "react-router-dom"

export default class MySetting extends React.Component{
    render() {
        return(
            <div className={"mine_setting"}>

                {/*<div className={"mine_setting_null"}></div>*/}
                <ul className={"mine_setting__list"}>
                    <li className={"mine_setting__list__item"}>
                        <Link className={"mine_setting__list__item_link"} to={"/myjuooo/myRealNameCertification"}>
                            <i className={"mine_icon iconfont"}>&#xe60c;</i>
                            <p className={"mine_setting__list__item_name"}>实名购票</p>
                        </Link>
                    </li>
                    <li className={"mine_setting__list__item"}>
                        <Link  className={"mine_setting__list__item_link"} to={"Home"}>
                            <i className={"mine_icon iconfont"}>&#xe64e;</i>
                            <p className={"mine_setting__list__item_name"}>收货地址</p>
                        </Link>
                    </li>
                    <li className={"mine_setting__list__item"}>
                        <Link to={"/feedback/index"} className={"mine_setting__list__item_link"} to={"/feedback/index"}>
                            <i className={"mine_icon iconfont"}>&#xe61a;</i>
                            <p className={"mine_setting__list__item_name"}>意见反馈</p>
                        </Link>
                    </li>
                    <li className={"mine_setting__list__item"}>
                        <i className={"mine_icon iconfont"}>&#xe606;</i>
                        <MyPhone className={"mine_setting__list__item_name"}>客服帮助</MyPhone>
                    </li>
                </ul>
                <ul className={"mine_setting__list"}>
                    <li className={"mine_setting__list__item"}>
                        <Link className={"mine_setting__list__item_link"} to={"/my/myOrderList"}>
                            <i className={"mine_icon iconfont"}>&#xe70b;</i>
                            <p className={"mine_setting__list__item_name"}>我的订单</p>
                        </Link>
                    </li>
                    <li className={"mine_setting__list__item"}>
                        <Link className={"mine_setting__list__item_link"} to={"/eticket/list"}>
                            <i className={"mine_icon iconfont"}>&#xe612;</i>
                            <p className={"mine_setting__list__item_name"}>我的票夹</p>
                        </Link>
                    </li>
                    <li className={"mine_setting__list__item"}>
                        <Link className={"mine_setting__list__item_link"} to={"/my/cardproduct"}>
                            <i className={"mine_icon iconfont"}>&#xe669;</i>
                            <p className={"mine_setting__list__item_name"}>我的卡包</p>
                        </Link>
                    </li>
                    <li className={"mine_setting__list__item"}>
                        <Link className={"mine_setting__list__item_link"}  to={"/null"}>
                        </Link>
                    </li>
                </ul>
            </div>

        )
    }
}