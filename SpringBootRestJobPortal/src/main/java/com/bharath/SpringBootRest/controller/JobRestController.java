package com.bharath.SpringBootRest.controller;

import com.bharath.SpringBootRest.model.JobPost;
import com.bharath.SpringBootRest.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class JobRestController {
    @Autowired
    private JobService service;

    @GetMapping("jobPosts")
    public List<JobPost> getAllJobs(){
        return service.getAllJobs();
    }

    @GetMapping("jobPost/{postId}")
    public JobPost getJobPostById(@PathVariable("postId") int postId){
        return service.getJobPostById(postId);
    }

    @PostMapping("jobPost")
    public JobPost createJobPost(@RequestBody JobPost job){
        return service.createJobPost(job);
    }

    @DeleteMapping("jobPost/{postId}")
    public String deleteJobPostById(@PathVariable("postId") int postId){
         service.deleteJobPostById(postId);
         return "Deleted";
    }

    @PutMapping("jobPost")
    public JobPost updateJobPost(@RequestBody JobPost job){
        return service.updateJobPost(job);
    }

    @GetMapping("jobPost/keyword/{keyword}")
    public List<JobPost> search(@PathVariable("keyword") String keyword){
        return service.search(keyword);
    }

    @GetMapping("load")
    public String loadData(){
        service.loadData();
        return "success";
    }
}
