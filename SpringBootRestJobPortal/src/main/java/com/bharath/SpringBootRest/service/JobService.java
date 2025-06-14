package com.bharath.SpringBootRest.service;

import com.bharath.SpringBootRest.model.JobPost;
import com.bharath.SpringBootRest.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepo repo;

    public List<JobPost> getAllJobs(){
        return repo.getAllJobs();
    }

    public JobPost getJobPostById(int postId) {
        return repo.getJobPostById(postId);
    }

    public boolean createJobPost(JobPost job) {
        return repo.createJobPost(job);
    }

    public boolean updateJobPost(JobPost job) {
        return repo.updateJobPost(job);
    }

    public boolean deleteJobPostById(int postId) {
        return repo.deleteJobPostById(postId);
    }
}
