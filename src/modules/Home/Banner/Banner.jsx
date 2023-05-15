import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { apiGetBanners } from '../../../apis/movieAPI';


function Banner() {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);

  const getBanners = async () => {
    try {
      const data = await apiGetBanners();
      setBanners(data.content);
    } catch (error) {
      setError(error.response?.data?.content);
    }
  }

  useEffect(() => {
    getBanners();
  }, [])

  if (error) return null;

  // carousel: slick: npm install react-slick slick-carousel --save
  const settings = {
    dots: true, // Hiển thị dấu chấm điều hướng
    infinite: true, // Cho phép lặp lại carousel vô hạn
    speed: 500, // Tốc độ chuyển đổi giữa các slide (đơn vị là millisecond)
    slidesToShow: 1, // Số lượng slide được hiển thị cùng một lúc
    slidesToScroll: 1, // Số lượng slide được cuộn trong mỗi lần cuộn
    autoplay: true, // Tự động chuyển đổi slide
    autoplaySpeed: 2000, // Tốc độ chuyển đổi slide khi đang tự động chạy (đơn vị là millisecond)
  };


  return (
    <div style={{marginBottom: "40px"}}>
      <Slider {...settings}>
        {banners.map((item) => (
          <div key={item.maBanner}>
            <img height={500} width='100%' src={item.hinhAnh} alt={item.maBanner} />
          </div>
        ))}
      </Slider>

    </div>
  )
}

export default Banner