import React from "react";
import { Table } from "react-bootstrap";
import goairlogo from "../images/idmGTRd4no.jpeg";
import bajajlogo from "../images/Bajaj Energy_300x118_Png.png";
import oyologo from "../images/oyo-rooms-logo-6C301512FE-seeklogo.com.png";

const IPOListPage = () => {
  return (
    <div className="col-12" style={{ fontFamily: "Sora" }}>
      <Table>
        <thead>
          <tr className="text-center ">
            <td style={{ backgroundColor: "lightgray" }}>Company/issue date</td>
            <td style={{ backgroundColor: "lightgray" }}>Issue Size</td>
            <td style={{ backgroundColor: "lightgray" }}>Price Range</td>
            <td style={{ backgroundColor: "lightgray" }}>Min invest/qty</td>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>
              <div className="d-flex">
                <div className="col text-end">
                  <img
                    className="shadow-lg"
                    style={{ width: "50px", borderRadius: "50%" }}
                    src={goairlogo}
                    alt="logo"
                  />
                </div>
                <div className="col">
                  <div><b>Go AIR</b></div>
                  <div>4th-7th Oct 2022</div>
                </div>
              </div>
            </td>
            <td><b>₹3600 Crores</b></td>
            <td><b>₹50-60</b></td>
            <td>
              <div><b>₹50,000</b></div>
              <div>100 Shares/5 Lots</div>
            </td>
          </tr>
          <tr className="text-center">
            <td>
              <div className="d-flex">
                <div className="col text-end">
                  <img
                    className="shadow-lg"
                    style={{ width: "50px", borderRadius: "50%" }}
                    src={bajajlogo}
                    alt="logo"
                  />
                </div>
                <div className="col">
                  <div><b>BAJAJ ENERGY</b></div>
                  <div>4th-7th Oct 2022</div>
                </div>
              </div>
            </td>
            <td><b>₹3600 Crores</b></td>
            <td><b>₹50-60</b></td>
            <td>
              <div><b>₹50,000</b></div>
              <div>100 shares/5Lots</div>
            </td>
          </tr>
          <tr className="text-center">
            <td>
              <div className="d-flex">
                <div className="col text-end">
                  <a href="\">
                  <img
                    className="shadow-lg"
                    style={{ width: "50px", borderRadius: "50%" }}
                    src={oyologo}
                    alt="logo"
                  />
                  </a>
                </div>
                <div className="col">
                  <div><b>OYO</b></div>
                  <div>To be announced</div>
                </div>
              </div>
            </td>
            <td><b>₹3600 Crores</b></td>
            <td><b>₹50-60</b></td>
            <td>
              <div><b>₹50,000</b></div>
              <div>100 shares/5Lots</div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default IPOListPage;
