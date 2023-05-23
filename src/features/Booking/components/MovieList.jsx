import {Card, Button, Modal } from "antd";
import moment from "moment/moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function MovieList() {
  const [visible, setVisible] = React.useState(false);
  const [trailerUrl, setTrailerUrl] = React.useState("");

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

  const handleOpenModal = (trailer) => {
    setTrailerUrl(trailer);
    setVisible(true);
  };

  return (
    <div className="container mx-auto mb-10">
      <h2 className="text-4xl text-center font-medium">Danh sách phim</h2>
      <Slider {...settings}>
        {movies.map((item) => (
          <div key={item.maPhim}>
            <Card
              hoverable
              className="m-3 pb-8"
              cover={
                <img
                  className="h-72 w-full max-w-full  object-left-top mx-auto"
                  alt=""
                  src={item.hinhAnh}
                />
              }
            >
              <Card.Meta
                title={item.tenPhim}
                description={
                  <div>
                    <p className="m-1">
                      <i className="fa-regular fa-square-check m-1"></i>
                      Khởi Chiếu:{" "}
                      {moment(item.ngayKhoiChieu).format("DD/MM/YYYY h:mm a")}
                    </p>
                    <p className="m-1">
                      <i className="fa-regular fa-square-check m-1"></i>
                      Đánh giá: {item.danhGia}/10
                    </p>
                  </div>
                }
              />
              <div className="mt-5 text-center">
                <Link to={`/detail/${item.maPhim}`}>
                  <Button
                    className="text-center font-bold bg-sky-800 text-slate-200 mr-2"
                    style={{
                      padding: "5px 20px",
                      height: "40px",
                      fontSize: "16px",
                    }}
                  >
                    Đặt vé
                  </Button>
                </Link>
                <Button
                  className="text-center font-bold bg-sky-600 text-slate-200"
                  style={{
                    padding: "5px 20px",
                    height: "40px",
                    fontSize: "16px",
                  }}
                  onClick={() => handleOpenModal(item.trailer)}
                >
                  Trailer
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </Slider>
      <Modal
        title="Xem Trailer"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
        width={800} 
      >
        <iframe
          width="100%"
          height="600"
          src={trailerUrl}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    </div>
  );
}

export default MovieList;
