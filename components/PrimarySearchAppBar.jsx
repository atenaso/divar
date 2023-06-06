"use client";

import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  InputBase,
  Link,
} from "@mui/material";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { css } from "@emotion/css";

export default function PrimarySearchAppBar() {
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
              <Link
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                }}
              >
                <Typography variant="h7">پشتیبانی</Typography>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#adaaaa",
                margin: "0 30px",
              }}
            >
              <Link
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                }}
              >
                <Typography variant="h7" style={{ margin: "10px" }}>
                  چت
                </Typography>
                <ChatBubbleOutlineIcon />
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#adaaaa",
              }}
            >
              <Link
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                }}
              >
                <Typography variant="h7" style={{ margin: "10px" }}>
                  دیوار من
                </Typography>
                <PersonOutlineOutlinedIcon />
              </Link>
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
              <Link
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                }}
              >
                <KeyboardArrowDownIcon />
                <Typography variant="h7">دیوار من</Typography>
              </Link>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#adaaaa",
                margin: " 0px 20px",
              }}
            >
              <Link
                href=""
                underline="none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#adaaaa",
                }}
              >
                <div>
                  <Typography
                    variant="h7"
                    style={{ margin: "10px" }}
                    className={css`
                      padding: 32px;
                      font-size: 24px;
                      border-radius: 4px;
                      &:hover {
                        color: red;
                      }
                    `}
                  >
                    {" "}
                    مشهد
                  </Typography>
                </div>
                <FmdGoodOutlinedIcon />
              </Link>
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
