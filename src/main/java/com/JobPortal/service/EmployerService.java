package com.JobPortal.service;

import com.JobPortal.Model.Employer;
import com.JobPortal.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployerService {

    @Autowired
    private EmployerRepository employerRepository;
    
    private static final String MOCK_EMPLOYEEID = "emp123";
    private static final String MOCK_PASSWORD = "password@123";

    // Save a new employer
    public Employer saveEmployer(Employer employer) {
        return employerRepository.save(employer);
    }

    // Get all employers
    public List<Employer> getAllEmployers() {
        return employerRepository.findAll();
    }

    // Get employer by ID
    public Optional<Employer> getEmployerById(Long id) {
        return employerRepository.findById(id);
    }

    // Delete employer by ID
    public void deleteEmployer(Long id) {
        employerRepository.deleteById(id);
    }

    // Login functionality using employeeId and password
    public Employer login(String employeeId, String password) {
        String email = null;

        if (MOCK_EMPLOYEEID.equals(employeeId) && MOCK_PASSWORD.equals(password)) {
            Employer employer = new Employer();
            employer.setEmail("employer@test.com");
            employer.setPassword(MOCK_PASSWORD);
            employer.setCompanyName("Test Company");
            employer.setContactNumber(password);
            email = employer.getEmail();
          
        	return employer;
        }
        
        Employer employer = employerRepository.findByEmail(email);
        if (employer != null && employer.getPassword().equals(password)) {
            return employer;
        }
        return null; 
    }
}
