package com.JobPortal.repository;

import com.JobPortal.Model.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
    Applicant findByEmail(String email); // For login or finding applicants by email
}
