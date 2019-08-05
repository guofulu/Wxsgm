import React from  'react';
import {
    NavLink
} from 'react-router-dom';
import '../../assets/scss/home/vipBlock.scss';

class VipBlock extends React.Component{

    render(){
        console.log(99999,this.props)
        return (
            <div className={'vip-block'}>
                <NavLink className={'vip-block__advert'} to={'/null'}>
                    <div className={'vip-block__advert__left'}>
                        <span className={'vip-block__advert__left__logo'}></span>
                        <span className={'vip-block__advert__left__tip'}>VIP+会员尊享权益</span>
                    </div>
                    <div className={'vip-block__advert__right'}>
                        <span className={'vip-block__advert__right__lab'}>开通99元/年</span>
                        <span className={'icon'}>&gt;</span>
                    </div>
                </NavLink>
                <div className={'vip-block__conent'}>
                    <div className={'vip-block__conent__power'}>
                        <h3 className={'vip-block__conent__power__title'}>专享折扣</h3>
                        <ul className={"vip-block__conent__power__wrap wrap--ul"}>
                            <li className={'vip-block__conent__power__item item--list'}>
                                <NavLink className={'vip-block__conent__power__click'} to={'null'}>
                                    <img style={{width: '2.1rem',height:'2.92rem'}}  src={this.props.discountList[0].pic} alt={''} />
                                    <p>
                                        <strong>{this.props.discountList[0].min_discount}</strong>
                                        <span>折</span>
                                    </p>
                                </NavLink>
                            </li>
                            <li className={'vip-block__conent__power__item item--list'}>
                                <NavLink className={'vip-block__conent__power__click'}>
                                    <img style={{width: '2.1rem',height:'2.92rem'}} src={this.props.discountList[1].pic} alt={''} />
                                    <p>
                                        <strong>{this.props.discountList[1].min_discount}</strong>
                                        <span>折</span>
                                    </p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    

                    <div className={'vip-block__conent__power'}>
                        <h3 className={'vip-block__conent__power__title title--right'}>优先购票</h3>
                        <ul className={'vip-block__conent__power__wrap wrap-list--right'}>
                            <li className={'vip-block__conent__power__item'}>
                                <NavLink className={"vip-block__conent__power__click"}>
                                    <img style={{width: '2.1rem',height:'2.92rem'}} src={this.props.priorList[0].pic} alt={''} />
                                    <p>
                                        <strong style={{fontSize:'.24rem'}}>{this.props.priorList[0].pre_time}</strong>
                                        <span>开始</span>
                                    </p>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
} 
export default VipBlock;