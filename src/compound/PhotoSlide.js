import React, {Component} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
const photos=[
    {
        name:'Photo1',
        url: 'https://images.unsplash.com/photo-1566491888763-e71518bbe846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },

    {
        name:'Photo 2',
        url: ' https://images.unsplash.com/photo-1585518126763-5146ad8837a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
    },
    {
        name:'Photo 3',
        url: '   https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=651&q=80'
    },





]



class PhotoSlide extends Component {



    render() {
        const settings={
            dots:true,
            fade:true,
            infinite:true,
            speed:true,
            slidesToShow:1  ,
            arrows:true,
            slidesToScroll:1,
            className:'slider',

            autoplay: true,
            autoplaySpeed:2000,
        }

        return (

            <div className="container-fluid">


                <div className="container">
                    <Slider {...settings}>
                        {photos.map((photos)=>{
                            return <div>
                                <h3 className='right-align'> New Arivals </h3>
                                <img width='40%'  src={photos.url}/>

                            </div>
                        })}

                    </Slider>


                </div>




            </div>



        );



    }
}

export default PhotoSlide;
