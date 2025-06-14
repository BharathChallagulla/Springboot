"use client";
import React, { useState } from "react";
import axios from "axios";
import { Typography, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

import { FormState, SkillSet } from "@/types";
import CreateJobForm from "../components/CreateJobForm";

const initial = {
  postId: "",
  postProfile: "",
  reqExperience: undefined,
  postTechStack: [],
  postDesc: "",
};

const CreateJobs = () => {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initial);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/jobPost", form)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Paper sx={{ padding: "1%" }} elevation={0}>
      <Typography sx={{ margin: "3% auto" }} align="center" variant="h5">
        Create New Post
      </Typography>
      <CreateJobForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
      />
    </Paper>
  );
};

export default CreateJobs;
