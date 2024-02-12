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

import close from "@mui/icons-material/Close";
import LettersRow from "./LettersRow";

interface Props {
  display: string;
  handleTutorialCard: () => void;
}

export default function HowToPlay({ display, handleTutorialCard }: Props) {
  return (
    <Card
      sx={{
        display: { display },
        minWidth: 275,
        maxWidth: 500,
        position: "absolute",
      }}
    >
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" fontWeight={"bold"} sx={{}}>
          How To Play
        </Typography>
        <Button
          onClick={handleTutorialCard}
          sx={{ justifySelf: "flex-end", width: "40px" }}
        >
          <Icon component={close} />
        </Button>
      </CardActions>
      <CardContent>
        <Typography variant="h6" component="div">
          Guess the Wordle in 6 tries.
        </Typography>
        <Typography>
          <ul>
            <li>Each guess must be a valid 5-letter word.</li>
            <li>
              The color of the tiles will change to show how close your guess
              was to the word.
            </li>
          </ul>
        </Typography>
        <Typography fontWeight={"bold"}>Examples</Typography>
        <Box>
          <LettersRow
            first={"W"}
            second={"E"}
            third={"A"}
            fourth={"R"}
            fifth={"Y"}
            firstValue={0}
          />
          <Typography>
            <span style={{ fontWeight: "bold" }}>W</span> is in the word and in
            the correct spot.
          </Typography>
        </Box>
        <Box>
          <LettersRow
            first={"P"}
            second={"I"}
            third={"L"}
            fourth={"L"}
            fifth={"S"}
            secondValue={1}
          />
          <Typography>
            <span style={{ fontWeight: "bold" }}>I</span> is in the word but in
            the wrong spot.
          </Typography>
        </Box>
        <Box>
          <LettersRow
            first={"V"}
            second={"A"}
            third={"G"}
            fourth={"U"}
            fifth={"E"}
            fourthValue={2}
          />
          <Typography>
            <span style={{ fontWeight: "bold" }}>U</span> is not in the word in
            any spot.
          </Typography>
        </Box>
        <Divider />
        <Typography marginTop={"20px"}>
          A new puzzle is released daily at midnight.
        </Typography>
      </CardContent>
    </Card>
  );
}
