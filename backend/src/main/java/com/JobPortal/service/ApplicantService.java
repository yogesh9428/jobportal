package com.JobPortal.service;

import com.JobPortal.Model.Applicant;
import com.JobPortal.repository.ApplicantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicantService {

    @Autowired
    private ApplicantRepository applicantRepository;

    // Mock data for testing
    private static final String MOCK_EMAIL = "applicant@example.com";
    private static final String MOCK_PASSWORD = "applicant123";

    // Save a new applicant
    public Applicant saveApplicant(Applicant applicant) {
        return applicantRepository.save(applicant);
    }

    // Get all applicants
    public List<Applicant> getAllApplicants() {
        return applicantRepository.findAll();
    }

    // Get applicant by ID
    public Optional<Applicant> getApplicantById(Long id) {
        return applicantRepository.findById(id);
    }

    // Delete applicant by ID
    public void deleteApplicant(Long id) {
        applicantRepository.deleteById(id);
    }

    // Login functionality using email and password
    public Applicant login(String email, String password) {
        // Check for mock data first
        if (MOCK_EMAIL.equals(email) && MOCK_PASSWORD.equals(password)) {
            return new Applicant("Mock Applicant", email, "1234567890", password);
        }

        // If not mock data, check the database
        Applicant applicant = applicantRepository.findByEmail(email);
        if (applicant != null && applicant.getPassword().equals(password)) {
            return applicant;
        }
        return null;
    }
}
