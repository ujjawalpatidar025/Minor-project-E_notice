import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import AccordianBox from "./AccordianBox";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function TabBar() {
  const { noticeMessages } = useSelector((state) => state.messages);
//   const data = [
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "23-feb-2023",
//       type: "Academic",
//     },
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "24-feb-2023",
//       type: "Genreral",
//     },
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "25-feb-2023",
//       type: "Social",
//     },
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "26-feb-2023",
//       type: "Community",
//     },
//     {
//       title: "Codechef",
//       message:
//         "helo everyone lorem adlkjfhjksf ,fnwfsdf sdflnksnfsk fsdlfknwf.fn sdfwjs f sdkljwf . fklinewr sdflkk",
//       date: "27-feb-2023",
//       type: "Spam",
//     },
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "25-feb-2023",
//       type: "General",
//     },
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "26-feb-2023",
//       type: "Community",
//     },
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "27-feb-2023",
//       type: "Academic",
//     },
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "25-feb-2023",
//       type: "Spam",
//     },
//     {
//       title: "Codechef",
//       message:
//         "helo everyone lor adkjfhsf sgfkjksldfkjbsd fjosdf, dfiosdnfmds fsdonf,snf hsfklshdfklsdkfnlskf slkfnsd,mfnsldf foisnflm skjlgf sdlfksdlf skjflsa dklsif adf udsonl",
//       date: "26-feb-2023",
//       type: "Community",
//     },
//     {
//       title: "Codechef",
//       message: "helo everyone",
//       date: "27-feb-2023",
//       type: "Spam",
//     },
//   ];

  //   const val=['1','2','3','4','5'];
  const [value, setValue] = useState("General");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100vw" }}>
        <Tabs
          value={value}
          style={{
            width: "100vw",
            backgroundColor: "#d0cece",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            display: "flex",
            justifyContent: "space-around",
          }}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          aria-label="secondary tabs example"
        >
          <Tab value="General" label="General" sx={{ width: "20vw" }} />
          <Tab value="Academic" label="Academic" sx={{ width: "20vw" }} />
          <Tab value="Social" label="Social" sx={{ width: "20vw" }} />
          <Tab value="Community" label="Community" sx={{ width: "20vw" }} />
          <Tab value="Spam" label="Spam" sx={{ width: "20vw" }} />
        </Tabs>
        <Box style={{ height: "28rem", width: "100vw", overflow: "auto" }}>
          {Object.values(noticeMessages)
            .filter((message) => message.category === value)
            .map((filteredMessage) => (
              <AccordianBox {...filteredMessage} />
            ))}
        </Box>
      </Box>
    </>
  );
}
