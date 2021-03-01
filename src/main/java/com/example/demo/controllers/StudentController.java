package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Student;
import com.example.demo.services.StudentServices;

@RestController
@RequestMapping("/api/v1/student")
public class StudentController {
	private final StudentServices studentService;
	
	@Autowired
	public StudentController(StudentServices studentService) {
		this.studentService =studentService;
	}
	
	@PostMapping
	public Student createStudent(@RequestBody Student student) {
		return studentService.createStudent(student);
	}
	
	@GetMapping
	public List<Student> getStudents() {
		return studentService.getStudents();
	}

}
