package com.JobPortal.repository;


import com.JobPortal.Model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    // Custom query to find a user by username
    User findByUsername(String username);
}

