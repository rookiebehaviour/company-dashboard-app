import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently asked questions" />
      <br />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How many years have you been coding?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>A little over 2 years now.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What are your favorite things to build?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Websites for the creativity, but I love dashboards and have an
            interest in building end user and developer tools.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another great question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>And another great answer.</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
