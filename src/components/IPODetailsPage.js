import React from "react";
import oyologo from "../images/oyo-rooms-logo-6C301512FE-seeklogo.com.png";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Button, Table } from "react-bootstrap";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const steps = [
  "Bidding starts",
  "Bidding ends",
  "Allotment finalisation",
  "Refund Initiation",
  "Demat Transfer",
  "Listing Date",
];

const date = [
  "12 Dec 2023",
  "15 Dec 2023",
  "18 Dec 2023",
  "18 Dec 2023",
  "18 Dec 2023",
  "21 Dec 2023",
];

const CustomStepper = styled(Stepper)(({ theme }) => ({
  "& .MuiStep-root": {
    "& .MuiStepConnector-line": {
      borderColor: "green",
    },
  },
  "& .MuiStepIcon-root": {
    color: "green",
    "&.Mui-active": {
      color: "green",
    },
    "&.Mui-completed": {
      color: "green",
    },
  },
}));

function IPODetailsPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const breadcrumbStyle = {
    "--bs-breadcrumb-divider":
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")",
  };

  return (
    <div className="container-fluid" style={{ fontFamily: "Sora" }}>
      <div className="row">
        <nav style={breadcrumbStyle} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/list">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/"> Market Watch</a>
            </li>
          </ol>
        </nav>
      </div>
      <div className="row align-items-center mb-3 overflow-auto">
        <div className="col-1">
          <NavigateBeforeIcon
            style={{ border: "1px solid black", borderRadius: "5px" }}
          />
        </div>
        <div className="col-6">
          <div className="d-flex">
            <div className="col-auto">
              <img
                className="shadow-lg"
                style={{ width: "50px", borderRadius: "50%" }}
                src={oyologo}
                alt="logo"
              />
            </div>
            <div className="col">
              <div>
                <b>OYO</b>
              </div>
              <div>To be announced</div>
            </div>
          </div>
        </div>
        <div className="col-3 text-end">
          <SystemUpdateAltIcon />
        </div>
        <div className="col-2 text-center">
          <Button
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
            variant="dark"
          >
            Apply now
          </Button>
        </div>
      </div>
      <div
        className="row shadow-lg p-3 mb-2 bg-white rounded-3 mb-3"
        style={{ border: "1px solid grey" }}
      >
        <div className="row mb-3">
          <b>IPO Details</b>
        </div>
        <div
          className="row shadow-lg p-3 mb-2 bg-white rounded-3 ms-1"
          style={{ border: "1px solid gray" }}
        >
          <Table>
            <tbody>
              <tr className="text-center">
                <td>
                  <div>issue size</div>
                  <div>
                    <b>₹3,600-3,700 Cr.</b>
                  </div>
                </td>
                <td>
                  <div>Price range</div>
                  <div>
                    <b>₹100-200</b>
                  </div>
                </td>
                <td>
                  <div>Minimum amount</div>
                  <div>
                    <b>₹50,000</b>
                  </div>
                </td>
                <td>
                  <div>Lot size</div>
                  <div>
                    <b>150 shares/lots</b>
                  </div>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <div>issues dates</div>
                  <div>
                    <b>12 Dec22-15 Dec22</b>
                  </div>
                </td>
                <td>
                  <div>Listed on</div>
                  <div>
                    <b>15 Dec 22</b>
                  </div>
                </td>
                <td>
                  <div>Listed Price</div>
                  <div>
                    <b>₹150</b>
                  </div>
                </td>
                <td>
                  <div>Listing gains</div>
                  <div>
                    <b>
                      ₹10(<span style={{ color: "red" }}>10.0%</span>)
                    </b>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
      <div
        className="row shadow-lg p-3 bg-white rounded-3 mb-3 overflow-auto"
        style={{ border: "1px solid grey" }}
      >
        <div className="row">
          <b>IPO Timeline</b>
        </div>
        <div className="row">
          <CustomStepper
            activeStep={6}
            alternativeLabel={!isMobile}
            orientation={isMobile ? "vertical" : "horizontal"}
          >
            {steps.map((label, index) => (
              <Step
                key={label}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <StepLabel>
                  <Typography component="span" sx={{ fontWeight: "bold" }}>
                    {label}
                  </Typography>
                </StepLabel>
                <Box
                  component="span"
                  sx={{
                    ml: { xs: 0, sm: 2 },
                    display: "block",
                  }}
                >
                  {date[index]}
                </Box>
              </Step>
            ))}
          </CustomStepper>
        </div>
      </div>

      <div
        className="row shadow-lg p-3 mb-2 bg-white rounded-3"
        style={{ border: "1px solid grey" }}
      >
        <div className="row mb-3">
          <b>About the Company</b>
        </div>
        <div className="row">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quibusdam cupiditate. Quia aut tempora repudiandae, excepturi sit
            amet suscipit asperiores at cupiditate, dolor modi rem porro. Illum
            consequuntur aliquam molestiae facilis nemo dolorem iusto, earum
            enim harum recusandae. Sit veniam assumenda excepturi reiciendis non
            laudantium unde, expedita totam repudiandae ipsa. Nemo quidem harum
            quaerat explicabo dolore, laborum ducimus debitis optio! Debitis
            voluptatibus quaerat exercitationem! Inventore excepturi
            perspiciatis illo aperiam commodi aliquid nobis mollitia iusto esse
            ducimus! Dolores in perferendis quos esse quisquam possimus natus
            quod velit illo vero aut ad alias culpa, eligendi laborum
            consequuntur molestias reprehenderit, fugit animi neque facere
            pariatur nobis quam! Modi repudiandae eum perferendis eos! Mollitia,
            laborum dolores! Fugit, illum nihil nisi mollitia distinctio numquam
            sunt exercitationem dolor voluptatem deleniti? Recusandae illo
            ratione deserunt asperiores numquam perferendis iste quas doloribus
            facilis dignissimos dolorum ipsa quod quos rerum, omnis dolorem
            quisquam expedita voluptatum, libero maiores totam, accusamus hic
            fuga? Ab et beatae quam omnis nisi quod. Atque voluptatem architecto
            ipsum ducimus exercitationem odio minus inventore vero rerum commodi
            nemo eum et, dolorum necessitatibus corrupti blanditiis! Dolores
            fugiat explicabo dicta hic nihil nam minus tempore, vitae veniam
            ducimus. Ratione facere blanditiis fuga sunt laborum vero aperiam
            harum quas.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            quibusdam cupiditate. Quia aut tempora repudiandae, excepturi sit
            amet suscipit asperiores at cupiditate, dolor modi rem porro. Illum
            consequuntur aliquam molestiae facilis nemo dolorem iusto, earum
            enim harum recusandae. Sit veniam assumenda excepturi reiciendis non
            laudantium unde, expedita totam repudiandae ipsa. Nemo quidem harum
            quaerat explicabo dolore, laborum ducimus debitis optio! Debitis
            voluptatibus quaerat exercitationem! Inventore excepturi
            perspiciatis illo aperiam commodi aliquid nobis mollitia iusto esse
            ducimus! Dolores in perferendis quos esse quisquam possimus natus
            quod velit illo vero aut ad alias culpa, eligendi laborum
            consequuntur molestias reprehenderit, fugit animi neque facere
            pariatur nobis quam! Modi repudiandae eum perferendis eos! Mollitia,
            laborum dolores! Fugit, illum nihil nisi mollitia distinctio numquam
            sunt exercitationem dolor voluptatem deleniti? Recusandae illo
            ratione deserunt asperiores numquam perferendis iste quas doloribus
            facilis dignissimos dolorum ipsa quod quos rerum, omnis dolorem
            quisquam expedita voluptatum, libero maiores totam, accusamus hic
            fuga? Ab et beatae quam omnis nisi quod. Atque voluptatem architecto
            ipsum ducimus exercitationem odio minus inventore vero rerum commodi
            nemo eum et, dolorum necessitatibus corrupti blanditiis! Dolores
            fugiat explicabo dicta hic nihil nam minus tempore, vitae veniam
            ducimus. Ratione facere blanditiis fuga sunt laborum vero aperiam
            harum quas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IPODetailsPage;
