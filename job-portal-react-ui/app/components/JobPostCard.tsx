import { JobPost } from "@/types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Card, Typography, Grid } from "@mui/material";

interface JobPostCardProps {
  job: JobPost;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

const JobPostCard = (props: JobPostCardProps) => {
  const p = props.job;

  return (
    <Grid key={p.postId} size={{ xs: 12, sm: 6, md: 4 }} spacing={2}>
      <Card
        sx={{
          padding: "3%",
          overflow: "hidden",
          width: "84%",
          backgroundColor: "#ADD8E6",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: "2rem",
            fontWeight: "600",
            fontFamily: "sans-serif",
          }}
        >
          {p.postProfile}
        </Typography>
        <Typography
          sx={{
            color: "#585858",
            marginTop: "2%",
            fontFamily: "cursive",
          }}
          variant="body1"
        >
          Description: {p.postDesc}
        </Typography>
        <br />
        <br />
        <Typography variant="h6" sx={{ fontFamily: "unset", fontSize: "400" }}>
          Experience: {p.reqExperience} years
        </Typography>
        <Typography
          sx={{ fontFamily: "serif", fontSize: "400" }}
          gutterBottom
          variant="body1"
        >
          Skills :{" "}
        </Typography>
        {p.postTechStack.map((s, i) => {
          return (
            <Typography variant="body1" gutterBottom key={i}>
              {s}
            </Typography>
          );
        })}
        <DeleteIcon
          onClick={() => props.handleDelete(p.postId)}
          className="cursor-pointer"
        />
        <EditIcon
          onClick={() => props.handleEdit(p.postId)}
          className="cursor-pointer"
        />
      </Card>
    </Grid>
  );
};

export default JobPostCard;
