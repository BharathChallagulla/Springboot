import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import { FormState, SkillSet } from "@/types";

interface CreateJobFormProps {
  edit?: boolean; // Optional prop to indicate if it's an edit form
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
const CreateJobForm = (props: CreateJobFormProps) => {
  const router = useRouter();

  const { postId, postProfile, reqExperience, postDesc } = props.form;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      // If the checkbox is checked, add the skill to the postTechStack array
      props.setForm({
        ...props.form,
        postTechStack: [...props.form.postTechStack, e.target.value],
      });
    } else {
      // If the checkbox is unchecked, remove the skill from the postTechStack array
      props.setForm({
        ...props.form,
        postTechStack: props.form.postTechStack.filter(
          (skill) => skill !== e.target.value
        ),
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    console.log(props.form);
    props.handleSubmit(e);
    router.push("/"); // Redirect to home after submission
  };
  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <TextField
          type="number"
          inputProps={{ min: 0 }}
          sx={{ width: "50%", margin: "2% auto" }}
          onChange={(e) =>
            props.setForm({ ...props.form, postId: e.target.value })
          }
          label="Enter your Post ID"
          variant="outlined"
          value={postId}
          disabled={props.edit} // Disable if editing
          required
        />
        <TextField
          type="string"
          sx={{ width: "50%", margin: "2% auto" }}
          required
          onChange={(e) =>
            props.setForm({ ...props.form, postProfile: e.target.value })
          }
          label="Job-Profile"
          variant="outlined"
          value={postProfile}
        />
        <TextField
          type="number"
          inputProps={{ min: 0 }}
          sx={{ width: "50%", margin: "2% auto" }}
          required
          onChange={(e) => {
            props.setForm((prevForm) => ({
              ...prevForm,
              reqExperience: Number(e.target.value),
            }));
          }}
          label="Years of Experience"
          variant="outlined"
          value={props.form.reqExperience || ""} // Handle undefined case
        />
        <TextField
          type="string"
          sx={{ width: "50%", margin: "2% auto" }}
          required
          multiline
          rows={4}
          onChange={(e) =>
            props.setForm({ ...props.form, postDesc: e.target.value })
          }
          label="Job-desc"
          variant="outlined"
          value={postDesc}
        />
        <Box sx={{ margin: "1% auto" }}>
          <FormLabel>Please mention required skills</FormLabel>
          {SkillSet.map(({ name }, index) => {
            return (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    onChange={handleChange}
                    name={name}
                    value={name}
                    color="primary" // Optional: change color
                    size="medium" // Optional: change size
                    checked={props.form.postTechStack.includes(name)} // Check if the skill is already selected
                  />
                }
                label={name}
                sx={{ display: "block", margin: "1% 0" }}
              />
            );
          })}
        </Box>
        <Button
          sx={{ width: "50%", margin: "2% auto" }}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default CreateJobForm;
