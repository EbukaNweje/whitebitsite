import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'
import img1 from  "./a.png"
import img2 from  "./b.png"
import img3 from  "./c.png"
import img4 from  "./d.png"
import img5 from  "./e.png"
import img6 from  "./f.png"
import img7 from  "./g.png"
import img8 from  "./h.png"
import img9 from  "./i.png"
import img10 from  "./j.png"
import img11 from  "./k.png"
import img12 from  "./l.png"
import img13 from  "./m.png" 
import img14 from  "./n.png"
function Carousel() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",}}
        onClick={onClick}
      />
    )  }

    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "none", }}
          onClick={onClick}
        />
      );
    }

  const settings = {
    dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 372,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        }
    ],
  };

      const images = [
        img1,
        img2,
        img3,
        img4,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        // img13,
        // img14,
        // img1,
        // "https://cdn.whitebit.com/home_page_banners/bb3584f2-0a37-4336-9da9-66b1f942d44e.png",
        // // "https://cdn.whitebit.com/home_page_banners/46c1ee8e-ad8b-4388-bca7-11d86279d598.png",
        // // "https://cdn.whitebit.com/home_page_banners/74a503b3-355b-43bc-8e39-ecd47e5ce120.png",
        // "https://cdn.whitebit.com/home_page_banners/5d97adec-75d4-4aba-91d0-a658b8017542.png",
        // "https://cdn.whitebit.com/home_page_banners/af79aabd-223c-42d5-ba10-7cd6b6456bb5.png",
        // "https://cdn.whitebit.com/home_page_banners/d7718ca0-edbd-4bd9-89bb-b61a8abecdd4.png",
        // "https://cdn.whitebit.com/home_page_banners/1dc84a74-b48f-454b-aca5-1b83a4d58230.png",
        // "https://cdn.whitebit.com/home_page_banners/56baf778-32fa-4e75-bb2d-04ff1acdc337.png",
        // "https://cdn.whitebit.com/home_page_banners/237da29f-617c-41ed-bdfc-39c660d4e6c6.png",
        // "https://cdn.whitebit.com/home_page_banners/d53314b3-7d99-4e29-878b-b6cbd0a2a94e.png",
        // "https://cdn.whitebit.com/home_page_banners/712c0778-890f-4ba2-906c-0d6a51ca4895.png",
        // "https://cdn.whitebit.com/home_page_banners/2cf0a316-d9f2-4469-b96d-3412b1114777.png",
        // "https://cdn.whitebit.com/home_page_banners/c06d26b2-8c71-4738-8708-ff3fd6af832d.png",
        // "https://cdn.whitebit.com/home_page_banners/f545c3c6-2e18-46fa-b5ad-db1935ed9c65.png",
        // "https://cdn.whitebit.com/home_page_banners/af66e09e-6bc5-45fe-a165-68bd57e1cf9c.png",
        // "https://cdn.whitebit.com/home_page_banners/20d25abe-f81d-468a-bd96-e5ae3c437576.png",
        // "https://cdn.whitebit.com/home_page_banners/d94066e6-0057-405b-97dd-30323db40318.png",
        // "https://cdn.whitebit.com/home_page_banners/8bf5f158-30c5-4009-a197-665f8be7ade1.png",
    ]
    // const rem = new Set(images)
    // console.log(rem);
    // const final = Array.from(rem)
    // console.log(final);

    // console.log(images);
  return (
      <section className='Carousel_Container'>
          <Slider {...settings} className='SlidersDiv'> 
            {
                images.map((e, index)=>(
                  <div className='Slick_Carousels' key={index}>
                       <img src={e} alt="" />
                 </div>
                  
                ))
            }
        </Slider>
    </section>
  )
}

export default Carousel