package com.example.JobApp.controller;


import com.example.JobApp.model.JobPost;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class JobController {

    @GetMapping(value = {"/", "home"})
    public String home(){
        return "home";
    }

    @GetMapping("addjob")
    public String addJob(){
        return "addjob";
    }

    @PostMapping("handleForm")
    public String handleAddJob(JobPost jobPost){
        return "success";
    }

    @GetMapping("viewalljobs")
    public String viewAllJobs(){
        return "veiwalljobs";
    }
}
