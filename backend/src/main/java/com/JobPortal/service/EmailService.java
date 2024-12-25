package com.JobPortal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	private JavaMailSender javaMailSender;

	public boolean sendEmail(String to, String subject, String body) {
		try {

			SimpleMailMessage message = new SimpleMailMessage();
			message.setTo(to);
			message.setSubject(subject);
			message.setText(body);
			message.setFrom("yogeshjadav656@gmail.com"); // Use your email address here

			javaMailSender.send(message);
			return true;
		} catch (Exception e) {
			System.err.println("Error sending email: " + e.getMessage());
			return false;
		}
	}
}