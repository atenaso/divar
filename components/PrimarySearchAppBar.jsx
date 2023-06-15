"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  InputBase,
  Link
  
} from "@mui/material";


import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import theme from "@emotion/styled";






export default function PrimarySearchAppBar() {
 

const LinkStyle1= styled(Link)`
   

   :hover {
    background:#ededed;
    borderRadius:"10px"
   }

   @media only screen and (max-width: 500px) {
   display :none;
  }
  `;
  
  return (
    
    <div>
      <AppBar style={{ backgroundColor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            style={{
              background: "#960b0b",
              fontWeight: "bold",
              fontSize: "16px",
              padding: "5px 20px",
             
             
            }}
          
          >
            ثبت آگهی
          </Button>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#adaaaa",
              marginLeft: "30px",
            }}
          >
            <div>
              <LinkStyle1
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                  height:"40px",
                  borderRadius:"7px",
                  padding:"0 20px",
                  
                }}
              >
                <Typography variant="h7" >پشتیبانی</Typography>
              </LinkStyle1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#adaaaa",
                margin: "0 30px",
              
              }}
            >
              <LinkStyle1
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                  height:"40px",
                  borderRadius:"7px",
               
                }}
              >
                <Typography variant="h7" style={{ margin: "10px" }}>
                  چت
                </Typography >
                <ChatBubbleOutlineIcon />
              </LinkStyle1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#adaaaa",
                padding:"10px",
               
              }}
            >
              <LinkStyle1
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                  height:"40px",
                  borderRadius:"7px",
                 
                }}
              >
                <Typography variant="h7" style={{ margin: "10px" }} >
                  دیوار من
                </Typography>
                <PersonOutlineOutlinedIcon />
              </LinkStyle1>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              borderRadius: "10px",
              color: "#adaaaa",
              alignItems: "center",
              background: "#ded9d9",
              padding: "0 10px",
              margin: "10px 0",
              justifyContent: "flex-end",
              width: "40%",
            }}
          >
            <InputBase
              placeholder="جستجو در همه آگهی ها"
              style={{
                display: "flex",
                flex: 1,
                direction: "rtl",
                cursor: "pointer",
              }}
            />
            <div style={{ margin: "10px" }}>
              <SearchOutlinedIcon />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#adaaaa",
                margin: " 0px 20px",
              }}
            >
              <LinkStyle1
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                  height:"40px",
                  borderRadius:"7px",
                  padding:"0 5px"
                 
                }}
              >
                <KeyboardArrowDownIcon />
                <Typography  >دیوار من</Typography>
              </LinkStyle1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#adaaaa",
                margin: " 0px 20px",
              }}
            >
              <LinkStyle1
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                  height:"40px",
                  borderRadius:"7px",
                  padding:"0 5px",
                }}
              >
                <div>
                  <Typography
                    variant="h7"
                    style={{ margin: "10px" }}
                    className={css`
                      &:hover {
                        color: red;
                      }
                      @media (max-width: 720px) {
                        font-size: 50px;
                      }
                    `}
                  >
                    {" "}
                    مشهد
                  </Typography>
                </div>
                <FmdGoodOutlinedIcon />
              </LinkStyle1>
            </div>
            <div style={{ margin: "0px 20px", fontWeight: "bold" }}>
              <Link
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#960b0b",
                }}
              >
                <Typography variant="h5"> دیوار</Typography>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
