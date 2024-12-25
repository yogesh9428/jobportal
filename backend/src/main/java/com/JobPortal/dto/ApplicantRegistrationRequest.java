package com.JobPortal.dto;

public class ApplicantRegistrationRequest {
    private String name;
    private String email;
    private String phoneNumber;
    private String qualification;
    private String jobApplied;

    // Getters and Setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getJobApplied() {
        return jobApplied;
    }

    public void setJobApplied(String jobApplied) {
        this.jobApplied = jobApplied;
    }
}
