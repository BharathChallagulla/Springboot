"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid";

import { JobPost } from "@/types";
import JobPostCard from "./components/JobPostCard";

export default function Home() {
  const [post, setPost] = useState<JobPost[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchInitialPosts = async () => {
      const response = await axios.get(`http://localhost:8080/jobPosts`);
      setPost(response.data);
    };
    fetchInitialPosts();
  }, []);

  const handleEdit = (id: number) => {
    router.push(`/edit?id=${id}`); // This will navigate to the edit page with the postId as a query parameter
  };

  const handleDelete = (id: number) => {
    async function deletePost() {
      await axios.delete(`http://localhost:8080/jobPost/${id}`);
      console.log("Delete");
      // router.refresh();
      window.location.reload(); // Reload the page to reflect the changes
    }
    deletePost();
  };

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      {/* <Grid item xs={12}></Grid> */}
      {post &&
        post.map((p, index) => {
          return (
            <JobPostCard
              key={index}
              job={p}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
    </Grid>
  );
}
