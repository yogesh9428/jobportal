package com.JobPortal.controller;

import com.JobPortal.Model.Job;
import com.JobPortal.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/jobs")
public class JobController {

    @Autowired
    private JobService jobService;

    // Get all jobs
    @GetMapping
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    // Create a new job
    @PostMapping
    public Job createJob(@RequestBody Job job) {
        return jobService.saveJob(job);
    }
}
