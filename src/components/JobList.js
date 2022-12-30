import JobCard from "../components/JobCard";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";

function JobList({ jobList, islogined, setIslogined }) {
  let params = useParams();
  let pages;

  params.id ? (pages = params.id) : (pages = 1);

  return (
    <Typography sx={{ justifyContent: "center" }} component="div">
      <Container sx={{ p: 3 }} maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            direction: "row",
            justifyContent: "center",
            mt: 5,
            // paddingLeft: { xs: 5, sm: 20, md: 30, lg: 50 },
            // paddingRight: { xs: 5, sm: 20, md: 30, lg: 50 },
          }}
        >
          {jobList.slice(pages * 5 - 5, pages * 5).map((job) => (
            <Box
              key={job.id}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  maxWidth: 300,
                },
              }}
            >
              <JobCard
                job={job}
                islogined={islogined}
                setIslogined={setIslogined}
              />
            </Box>
          ))}
        </Grid>
      </Container>
    </Typography>
  );
}

export default JobList;
