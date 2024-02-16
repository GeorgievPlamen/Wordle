import {
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
  const dispatch = useAppDispatch();
  const series = [
    {
      data: [
        stats.first || 0,
        stats.second || 0,
        stats.third || 0,
        stats.fourth || 0,
        stats.fifth || 0,
        stats.sixth || 0,
      ],
      color: "#787c7e",
    },
  ];

  return (
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
          Statistics
        </Typography>
        <Button
          onClick={() => dispatch(toggleStatsDisplay())}
          sx={{ justifySelf: "flex-end", width: "40px" }}
        >
          <Icon component={close} />
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="h6" component="div">
          Guess the Wordle in 6 tries.
        </Typography>
        <Box>
          <ul>
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
        </Box>
        <Divider />
        <BarChart
          width={300}
          height={300}
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
        <Typography marginTop={"20px"}>
          A new puzzle is released daily at midnight.
        </Typography>
      </CardContent>
    </Card>
  );
}
