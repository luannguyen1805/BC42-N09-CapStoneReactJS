import { Button, Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCinemaSchedule } from "../redux/action";

function CinemaSchedule() {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => state.booking.cinemas);
  useEffect(() => {
    dispatch(fetchCinemaSchedule(cinemas[0]?.maHeThongRap));
  }, [cinemas]);
  const cinemaSchedule = useSelector((state) => state.booking.cinemaSchedule);
  return (
    <div className="container mx-auto mt-28 pb-10">
      <h2 className="text-4xl font-medium text-slate-600">
        Lịch Chiếu Theo Rạp
      </h2>
      <Tabs
        tabPosition="left"
        className="text-slate-600 "
        onChange={(key) => {
          dispatch(fetchCinemaSchedule(key));
        }}
        items={cinemas.map((item) => {
          return {
            key: item.maHeThongRap,
            label: (
              <div>
                <img alt="" src={item.logo} className="h-12" />
              </div>
            ),
            children: cinemaSchedule.length > 0 && (
              <Tabs
                className="text-slate-600 h-100 "
                tabPosition="left"
              >
                {cinemaSchedule[0].lstCumRap.map((itemCinema) => {
                  return (
                    <TabPane
                    className="text-slate-600 overflow-y-auto h-100 "
                      tab={
                        <div
                          className="w-96 text-left border-neutral-600"
                          style={{ borderBottom: "solid 1px" }}
                        >
                          <p className="font-semibold text-lg ">{itemCinema.tenCumRap}</p>
                          <p>{itemCinema.diaChi}</p>
                        </div>
                      }
                      key={itemCinema.maCumRap}
                    >
                      {itemCinema.danhSachPhim.map((itemMovies) => (
                        <div
                          className="flex items-center border-neutral-500 pb-3"
                          style={{ borderBottom: "solid 1px" }}
                          key={itemMovies.maPhim}
                        >
                          <div className="info mr-4 w-1/6">
                            <h1 className="font-semibold text-lg text-center text-indigo-600">
                              {itemMovies.tenPhim}
                            </h1>
                            <img alt="" src={itemMovies.hinhAnh} className="w-full" />
                          </div>
                          <div className="schedule w-5/6 ">
                            {itemMovies.lstLichChieuTheoPhim.map((itemMovieSchedule) => (
                              <Link
                                to={`/booking/${itemMovieSchedule.maLichChieu}`}
                                key={itemMovieSchedule.maLichChieu}
                              >
                                <Button className="bg-sky-900 text-slate-100 m-1">
                                  {moment(itemMovieSchedule.ngayChieuGioChieu).format(
                                    "DD/MM/YYYY ~ HH:mm"
                                  )}
                                </Button>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </TabPane>
                  );
                })}
              </Tabs>
            ),
          };
        })}
      />
    </div>
  );


};

export default CinemaSchedule;
