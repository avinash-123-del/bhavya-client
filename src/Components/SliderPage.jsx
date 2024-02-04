import React from 'react'
import Slider from "react-slick";
const SliderPage = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (

        <div className='slider-c'>
            <Slider {...settings} className='silder-c'>
                <img  src='https://img.freepik.com/free-vector/flat-design-organic-food-brochure-template_23-2149112287.jpg?w=1380&t=st=1705639267~exp=1705639867~hmac=e2d15c17565e8afe478a992bbc24b9579531683076f18e2ccfd9d3210122612d' alt='' width="80%" />

                <img  src='https://img.freepik.com/free-vector/flat-design-organic-food-brochure-template_23-2149112287.jpg?w=1380&t=st=1705639267~exp=1705639867~hmac=e2d15c17565e8afe478a992bbc24b9579531683076f18e2ccfd9d3210122612d' alt='' width="80%" />  

                <img  src='https://img.freepik.com/free-vector/flat-design-organic-food-brochure-template_23-2149112287.jpg?w=1380&t=st=1705639267~exp=1705639867~hmac=e2d15c17565e8afe478a992bbc24b9579531683076f18e2ccfd9d3210122612d' alt='' width="80%" />  
            </Slider>
        </div>
    )
}

export default SliderPage