package com.JobPortal.service;

import com.JobPortal.Model.Job;
import com.JobPortal.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepository jobRepository;

    // Fetch all jobs
    public List<Job> getAllJobs() {
        return jobRepository.findAll();
    }

    // Save a new job
    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }
}
