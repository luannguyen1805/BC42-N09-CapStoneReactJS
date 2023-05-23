import { Col, Card, Button } from "antd";
import moment from "moment/moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./MovieList.css";


function MovieList(){
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => <div className="mt-10 slick-dots">{i + 1}</div>,
  };
  const movies = useSelector((state) => state.booking.movies);
  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-4xl text-center font-medium">
        Danh sách phim
      </h2>
      <Slider {...settings}>
        {movies.map((item) => (
          <div
            key={item.maPhim}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div className="border-solid border-indigo-900 hover:border-indigo-500 m-3 pb-8">
              <img
                className="h-72 w-full max-w-full object-cover object-left-top mx-auto"
                alt=""
                src={item.hinhAnh}
              />
              <h2 className="text-xl text-center text">
                {item.tenPhim}
              </h2>
              <p className="m-1">
              <i class="fa-regular fa-square-check m-1"></i>
                Khởi Chiếu:{" "}
                {moment(item.ngayKhoiChieu).format("DD/MM/YYYY h:mm a")}
              </p>
              <p className="m-1">
              <i class="fa-regular fa-square-check m-1"></i>
              Đánh giá: {item.danhGia}/10</p>
              <div className="mt-5 text-center">
                <Link to={`/detail/${item.maPhim}`}>
                  <Button className="text-center font-bold" style={{background:"#cd6a22",color:"#ffff", padding:"5px 20px",height: "40px", fontSize:"16px"}}>
                    Đặt vé
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieList;
