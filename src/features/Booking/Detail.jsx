import React, { useState, useEffect, useRef } from "react";
import { Button, Modal, Rate, Tabs } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetail } from "./redux/action";

const Detail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoTrailer = useRef();

  useEffect(() => {
    const movieId = params.id;
    dispatch(fetchMovieDetail(movieId));
  }, [params]);

  const movie = useSelector((state) => state.booking.movieDetail);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    if (videoTrailer.current) {
      let iframeSrc = videoTrailer.current.src;
      videoTrailer.current.src = iframeSrc;
    }
  };

  let trailer = "";
  if (movie && movie.trailer.includes("watch?v=")) {
    trailer = movie.trailer.replace("watch?v=", "embed/");
  }

  return (
    movie && (
      <div className="container mx-auto bg-white pt-20">
        <div className="flex">
          <div className="w-1/4">
            <img alt="" src={movie.hinhAnh} className="w-full" />
          </div>
          <div className="w-3/4 pl-10 text-gray-900">
            <h1>{movie.tenPhim}</h1>
            <p>{movie.moTa}</p>
            <p>
              Khởi Chiếu: {moment(movie.ngayKhoiChieu).format("DD/MM/YYYY")}
            </p>
            <p>Đánh giá: {movie.danhGia}/10</p>

            <Button
              className="bg-indigo-900 text-white mt-4"
              onClick={showModal}
            >
              Trailer
            </Button>

            <h4 className="mt-6">Lịch Chiếu:</h4>
            <Tabs
              tabPosition="left"
              className="mt-4"
              items={movie.heThongRapChieu.map((item) => {
                return {
                  key: item.maHeThongRap,
                  label: (
                    <div>
                      <img alt="" src={item.logo} className="w-14" />
                    </div>
                  ),
                  children: (
                    <div>
                      {item.cumRapChieu.map((itemCinema) => (
                        <div key={itemCinema.maCumRap}>
                          <p>{itemCinema.tenCumRap}</p>
                          <div>
                            {itemCinema.lichChieuPhim.map((itemSchedule) => (
                              <div key={itemSchedule.maLichChieu}>
                                <Link
                                  to={`/booking/${itemSchedule.maLichChieu}`}
                                >
                                  <Button className="bg-indigo-900 text-white my-2">
                                    {moment(
                                      itemSchedule.ngayChieuGioChieu
                                    ).format("DD / MM / YYYY ~ HH:mm")}
                                  </Button>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ),
                };
              })}
            />

            <Modal
              visible={isModalOpen}
              onCancel={handleCancel}
              width="70%"
              footer={[
                <Button
                  key="back"
                  onClick={handleCancel}
                  className="bg-indigo-900 text-white m-1"
                >
                  Close
                </Button>,
              ]}
            >
              <iframe
                ref={videoTrailer}
                width="100%"
                height="580"
                src={movie.trailer}
                title={movie.tenPhim}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Modal>
          </div>
        </div>
      </div>
    )
  );
};

export default Detail;
