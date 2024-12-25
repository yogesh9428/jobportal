package com.JobPortal.controller;

import com.JobPortal.Model.Employer;
import com.JobPortal.dto.EmployerLoginRequest;
import com.JobPortal.service.EmployerService;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employers")
public class EmployerController {

    @Autowired
    private EmployerService employerService;

    // Create a new employer
    @PostMapping
    public ResponseEntity<Employer> createEmployer(@Valid @RequestBody Employer employer) {
        Employer savedEmployer = employerService.saveEmployer(employer);
        return ResponseEntity.ok(savedEmployer);
    }

    // Get all employers
    @GetMapping
    public ResponseEntity<List<Employer>> getAllEmployers() {
        List<Employer> employers = employerService.getAllEmployers();
        return ResponseEntity.ok(employers);
    }

    // Get an employer by ID
    @GetMapping("/{id}")
    public ResponseEntity<Employer> getEmployerById(@PathVariable Long id) {
        return employerService.getEmployerById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Delete an employer by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployer(@PathVariable Long id) {
        employerService.deleteEmployer(id);
        return ResponseEntity.noContent().build();
    }

    // Employer login using employeeId and password
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody EmployerLoginRequest employer) {
    	Employer loggedInEmployer = employerService.login(employer.getEmployeeId(), employer.getPassword());
        if (loggedInEmployer != null) {
            return ResponseEntity.ok("Login successful!");
        }
        return ResponseEntity.status(401).body("Invalid employee ID or password.");
    }
}
