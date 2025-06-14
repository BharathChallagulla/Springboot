"use client";
import { useEffect, useState } from "react";
import { Typography, Paper } from "@mui/material";
import axios from "axios";
import { FormState } from "@/types";
import { useSearchParams } from "next/navigation";
import CreateJobForm from "../components/CreateJobForm";

const initial = {
  postId: "",
  postProfile: "",
  reqExperience: undefined,
  postTechStack: [],
  postDesc: "",
};

const Edit = () => {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormState>(initial);
  const currId = searchParams.get("id");

  useEffect(() => {
    const fetchInitialPosts = async (id: number) => {
      const response = await axios.get(`http://localhost:8080/jobPost/${id}`);
      console.log(response.data);
      setForm(response.data);
    };
    fetchInitialPosts(Number(currId));
  }, [currId]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put("http://localhost:8080/jobPost", form)
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
        Edit New Post
      </Typography>
      <CreateJobForm
        edit={true}
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
      />
    </Paper>
  );
};

export default Edit;
