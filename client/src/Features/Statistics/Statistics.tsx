import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Icon,
  Typography,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

import close from "@mui/icons-material/Close";
import { useAppDispatch, useAppSelector } from "../../App/Store/configureStore";
import { toggleStatsDisplay } from "./statisticsSlice";

export default function Statistics() {
  const stats = useAppSelector((state) => state.stats);
  const open = stats.display === "block" ? true : false;
  const languageBg = useAppSelector((state) => state.game.bulgarian);
  const dispatch = useAppDispatch();
  const totalEn =
    stats.first! +
    stats.second! +
    stats.third! +
    stats.fourth! +
    stats.fifth! +
    stats.sixth! +
    stats.failedEn!;

  const totalBg =
    stats.firstBg! +
    stats.secondBg! +
    stats.thirdBg! +
    stats.fourthBg! +
    stats.fifthBg! +
    stats.sixthBg! +
    stats.failedBg!;

  const first = languageBg ? stats.firstBg : stats.first;
  const second = languageBg ? stats.secondBg : stats.second;
  const third = languageBg ? stats.thirdBg : stats.third;
  const fourth = languageBg ? stats.fourthBg : stats.fourth;
  const fifth = languageBg ? stats.fifthBg : stats.fifth;
  const sixth = languageBg ? stats.sixthBg : stats.sixth;

  const winRatioEn: number = ((totalEn - stats.failedEn!) / totalEn) * 100;
  const winRatioBg: number = ((totalBg - stats.failedBg!) / totalBg) * 100;
  const series = [
    {
      data: [
        first || 0,
        second || 0,
        third || 0,
        fourth || 0,
        fifth || 0,
        sixth || 0,
      ],
      color: "#787c7e",
    },
  ];

  return (
    <Backdrop open={open} sx={{ zIndex: "999" }}>
      <Card
        sx={{
          display: stats.display,
          minWidth: 275,
          maxWidth: 360,
          position: "absolute",
          zIndex: "999",
          left: "50%",
          marginLeft: { xs: "-180px" },
          top: "10vh",
        }}
      >
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4" fontWeight={"bold"} sx={{}}>
            {languageBg ? "Статистика" : "Statistics"}
          </Typography>
          <Button
            onClick={() => dispatch(toggleStatsDisplay())}
            sx={{ justifySelf: "flex-end", width: "40px" }}
          >
            <Icon color="action" component={close} />
          </Button>
        </CardActions>
        <CardContent>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box>
              <Typography variant="h4" textAlign={"center"}>
                {(languageBg ? totalBg : totalEn) || 0}
              </Typography>
              <Typography textAlign={"center"}>
                {languageBg ? "Играни" : "Played"}
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" textAlign={"center"}>
                {((languageBg ? winRatioBg : winRatioEn) || 0).toFixed(1)}
              </Typography>
              <Typography textAlign={"center"}>
                {languageBg ? "Познати" : "Win"} %
              </Typography>
            </Box>
          </Box>
          <Typography variant="h6" fontWeight={"bold"} marginTop={"10px"}>
            {languageBg ? "Разпределение на опити" : "Guess Distribution"}
          </Typography>
          <BarChart
            width={280}
            height={230}
            layout="horizontal"
            yAxis={[
              {
                scaleType: "band",
                data: ["1", "2", "3", "4", "5", "6"],
              },
            ]}
            series={series.slice(0)}
            bottomAxis={null}
          />
          <Divider />
          <Typography marginTop={"20px"} textAlign={"center"}>
            {languageBg
              ? "Колко пъти можеш да познаеш?"
              : "How many wins can you get?"}
          </Typography>
        </CardContent>
      </Card>
    </Backdrop>
  );
}
