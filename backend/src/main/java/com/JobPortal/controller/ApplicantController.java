package com.JobPortal.controller;

import com.JobPortal.Model.Applicant;
import com.JobPortal.dto.ApplicantLoginRequest;
import com.JobPortal.dto.ApplicantRegistrationRequest;
import com.JobPortal.service.ApplicantService;
import com.JobPortal.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/applicants")
public class ApplicantController {

	@Autowired
	private ApplicantService applicantService;

	@Autowired
	private EmailService emailService;

	// Create a new applicant and send an email
	@PostMapping
	public ResponseEntity<String> createApplicant(@Valid @RequestBody ApplicantRegistrationRequest applicantRequest) {
		// Send email with applicant data
		String emailBody = String.format(
			    "Dear %s,\n\n" +
			    "Welcome to our company! We are thrilled to have you show interest in becoming a part of our team. " +
			    "We value dedication, skills, and a passion for excellence, and we believe you possess these qualities. " +
			    "Below are the details you have provided as part of your application:\n\n" +
			    "Name: %s\n" +
			    "Email: %s\n" +
			    "Phone: %s\n" +
			    "Qualification: %s\n" +
			    "Job Applied For: %s\n\n" +
			    "Your application is important to us, and we are committed to reviewing it thoroughly. " +
			    "Our team will get in touch with you soon to discuss the next steps. Thank you for trusting us " +
			    "and taking the first step towards what we hope will be a fulfilling journey together.\n\n" +
			    "Best regards,\n" +
			    "The Hiring Team",
			    applicantRequest.getName(),          // 1st %s (Name in greeting)
			    applicantRequest.getName(),          // 2nd %s (Name in details section)
			    applicantRequest.getEmail(),         // 3rd %s
			    applicantRequest.getPhoneNumber(),   // 4th %s
			    applicantRequest.getQualification(), // 5th %s
			    applicantRequest.getJobApplied()     // 6th %s
			);



		// Call email service to send the email
		boolean emailSent = emailService.sendEmail(applicantRequest.getEmail(), // recipient's email
				"New Job Application", // subject
				emailBody // body
		);

		if (emailSent) {
			return ResponseEntity.ok("Applicant registered and email sent successfully.");
		} else {
			return ResponseEntity.status(500).body("Failed to send email.");
		}
	}

	// Get all applicants
	@GetMapping
	public ResponseEntity<List<Applicant>> getAllApplicants() {
		List<Applicant> applicants = applicantService.getAllApplicants();
		return ResponseEntity.ok(applicants);
	}

	// Get an applicant by ID
	@GetMapping("/{id}")
	public ResponseEntity<Applicant> getApplicantById(@PathVariable Long id) {
		return applicantService.getApplicantById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
	}

	// Delete an applicant by ID
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteApplicant(@PathVariable Long id) {
		applicantService.deleteApplicant(id);
		return ResponseEntity.noContent().build();
	}

	// Applicant login
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody ApplicantLoginRequest applicant) {
		Applicant loggedInApplicant = applicantService.login(applicant.getEmail(), applicant.getPassword());
		if (loggedInApplicant != null) {
			return ResponseEntity.ok("Login successful!");
		}
		return ResponseEntity.status(401).body("Invalid email or password.");
	}
}
