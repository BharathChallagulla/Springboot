package com.bharath.SpringBootRest.repo;

import com.bharath.SpringBootRest.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Repository
public interface JobRepo extends JpaRepository<JobPost, Integer> {

    List<JobPost> findByPostProfileContainingIgnoreCaseOrPostDescContainingIgnoreCase(String postProfile, String postDesc);
}

//List<JobPost> jobs = new ArrayList<>();
//
//    public JobRepo() {
//        // Java Developer Job Post
//        jobs.add(new JobPost(1, "Java Developer", "Must have good experience in core Java and advanced Java", 2,
//                List.of("Core Java", "J2EE", "Spring Boot", "Hibernate")));
//
//        // Frontend Developer Job Post
//        jobs.add(new JobPost(2, "Frontend Developer", "Experience in building responsive web applications using React",
//                3, List.of("HTML", "CSS", "JavaScript", "React")));
//
//        // Data Scientist Job Post
//        jobs.add(new JobPost(3, "Data Scientist", "Strong background in machine learning and data analysis", 4,
//                List.of("Python", "Machine Learning", "Data Analysis")));
//
//        // Network Engineer Job Post
//        jobs.add(new JobPost(4, "Network Engineer",
//                "Design and implement computer networks for efficient data communication", 5,
//                List.of("Networking", "Cisco", "Routing", "Switching")));
//
//        // Mobile App Developer Job Post
//        jobs.add(new JobPost(5, "Mobile App Developer", "Experience in mobile app development for iOS and Android", 3,
//                List.of("iOS Development", "Android Development", "Mobile App")));
//
//    }
//
//    // method to return all JobPosts
//    public List<JobPost> getAllJobs() {
//        return jobs;
//    }
//
//
//    public JobPost getJobPostById(int postId) {
//        return (JobPost) jobs.stream()
//                .filter(j -> j.getPostId() == postId)
//                .findFirst()
//                .orElse(null);
//    }
//
//    public boolean deleteJobPostById(int postId) {
//        return jobs.removeIf(j -> j.getPostId() == postId);
//    }
//
//
//    public boolean createJobPost(JobPost job) {
//        return jobs.add(job);
//    }
//
//    public boolean updateJobPost(JobPost job) {
//        for(JobPost j: jobs){
//            if(j.getPostId() == job.getPostId()){
//                j.setPostProfile(job.getPostProfile());
//                j.setPostDesc(job.getPostDesc());
//                j.setReqExperience(job.getReqExperience());
//                j.setPostTechStack(job.getPostTechStack());
//                return true;
//            }
//        }
//        return false;
//
//    }