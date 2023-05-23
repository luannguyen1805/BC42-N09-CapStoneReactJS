import React from "react";
import { FaFacebook, FaTwitterSquare, FaInstagram, FaAndroid, FaApple } from "react-icons/fa";
import { Row, Col } from "antd";

function Footer() {
  return (
    <footer style={{ background: "#222", color: "#fff", marginTop: "40px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "10px 20px" }}>
        <Row gutter={20}>
          <Col span={6}>
            <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>TIX</h1>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ fontSize: "14px", marginBottom: "5px" }}>
                <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>FAQ</a>
              </li>
              <li style={{ fontSize: "14px", marginBottom: "5px" }}>
                <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Thỏa thuận sử dụng</a>
              </li>
              <li style={{ fontSize: "14px", marginBottom: "5px" }}>
                <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Brand Guidelines</a>
              </li>
              <li style={{ fontSize: "14px", marginBottom: "5px" }}>
                <a href="#" style={{ color: "#ccc", textDecoration: "none" }}>Chính sách bảo mật</a>
              </li>
            </ul>
          </Col>
          <Col span={6}>
            <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>Đối tác</h1>
            <Row gutter={10}>
              <Col>
                <a href="https://www.cgv.vn/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="../img/cgv.png"
                    alt="cgv"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Col>
              <Col>
                <a href="https://www.bhdstar.vn/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="../img/bhd.png"
                    alt="bhd"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Col>
              <Col>
                <a href="https://www.galaxycine.vn/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="../img/galaxy.png"
                    alt="galaxy"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Col>
              <Col>
                <a href="http://cinestar.com.vn/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="../img/cinestar.png"
                    alt="cinestar"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Col>
              <Col>
                <a href="https://www.lottecinemavn.com/LCHS/index.aspx" target="_blank" rel="noopener noreferrer">
                  <img
                    src="../img/lotte.png"
                    alt="lotte"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Col>
              <Col>
                <a href="https://www.megagscinemas.vn/" target="_blank" rel="noopener noreferrer">
                  <img
                    src="../img/megags.png"
                    alt="megags"
                    width={30}
                    height={30}
                    style={{ cursor: "pointer" }}
                  />
                </a>
              </Col>
            </Row>
          </Col>
          <Col span={6}>
            <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>Mobile App</h1>
            <div style={{ display: "flex", gap: "10px" }}>
              <FaAndroid style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }} />
              <FaApple style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }} />
            </div>
          </Col>
          <Col span={6}>
            <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>Social</h1>
            <div style={{ display: "flex", gap: "10px" }}>
              <FaFacebook style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }} />
              <FaTwitterSquare style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }} />
              <FaInstagram style={{ fontSize: "30px", color: "#fff", cursor: "pointer" }} />
            </div>
          </Col>
        </Row>
      </div>
      <div style={{ maxWidth: "1200px", margin: "0 auto"}}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <img src="../img/logo.png" alt="thongbaobct" width={100} height={100} />
          </div>
          <div style={{ color: "#ccc", fontSize: "12px" }}>
            <h1 style={{ fontSize: "16px", marginBottom: "5px" }}>DDMEDIA – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN DDMEDIA</h1>
            <p style={{ marginBottom: "5px" }}>
              Địa chỉ: Quận 7 - TP HCM.
            </p>
            <p style={{ marginBottom: "5px" }}>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
            <p style={{ marginBottom: "5px" }}>
              đăng ký thay đổi lần thứ 30, ngày 30 tháng 05 năm 2023 do Sở kế hoạch và đầu tư Thành phố HCM cấp.
            </p>
            <p>Số Điện Thoại (Hotline): 1900 090 090</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;