package com.JobPortal.repository;

import com.JobPortal.Model.Employer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployerRepository extends JpaRepository<Employer, Long> {
    Employer findByEmail(String email); // For login or finding employers by email
}
