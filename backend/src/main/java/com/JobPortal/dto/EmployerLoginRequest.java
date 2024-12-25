package com.JobPortal.dto;

public class EmployerLoginRequest {
    private String employeeId;
    private String password;

    // Getters and setters
    public String getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(String employeeId) { // Fixed here
        this.employeeId = employeeId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
