package com.JobPortal.service;


import com.JobPortal.Model.*;

public interface UserService {

    // Save a new user
    User saveUser(User user);

    // Find user by username
    User getUserByUsername(String username);
}

