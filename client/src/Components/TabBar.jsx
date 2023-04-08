import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import AccordianBox from "./AccordianBox";
import { Paper, Typography } from "@mui/material";
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
      <Box sx={{ width: "100%" }}>
        <Paper elevation={4}sx={{backgroundColor:'#F5F5F5'}}>

        
        <Tabs
          value={value}
          style={{
            position:'relative',
            width: "100%",
            color:'green',
            display: "flex",
            justifyContent: "space-around",
          }}
          onChange={handleChange}
          textColor="rgb(33 109 48)"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            style: {
              backgroundColor: "rgb(33 109 48)",
            }}}
        >
          <Tab value="General" label="General" sx={{ flex: "1"}} />
          <Tab value="Academic" label="Academic" sx={{ flex: "1"}}/>
          <Tab value="Social" label="Social" sx={{ flex: "1" }} />
          <Tab value="Community" label="Community" sx={{ flex: "1"}} />
          <Tab value="Spam" label="Spam" sx={{ flex: "1"}} />
        </Tabs>
        </Paper>
        <Box style={{  width: "100%",height:'29.4rem', overflowY:'auto'}}>
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
