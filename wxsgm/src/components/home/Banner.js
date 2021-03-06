import React from 'react';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import { Link} from 'react-router-dom';
class Banner extends React.Component{

    render(){
        
        return (
            <div className="swiper-container banner-swiper">
                <div className="swiper-wrapper banner-swiper-wrapper">
                    {
                        this.props.slide_list.map((v,i)=>{
                            //console.log(35678,v)
                            return (
                               <div className="swiper-slide banner-swiper-slide" key={i} >
                                   <Link to={''}>
                                       <img style={{width:'100%',height:'100%'}} src={v.image_url} alt="" />
                                   </Link>
                                   
                                </div> 
                            )
                        })
                    }
                    
                </div>

                <div className="swiper-pagination banner-swiper-pagination"></div>

            </div>
        )
    }
    componentDidMount(){

        var mySwiper = new Swiper ('.banner-swiper', {
            direction: 'horizontal', // 垂直切换选项
            loop: true, // 循环模式选项
            speed:300,//自动播放
            autoplay : {
                delay:3000
              },
            
            // 如果需要分页器
            pagination: {
              el: '.banner-swiper-pagination',
            },
          })  
    }
}

export default Banner