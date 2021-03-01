package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Student;
import com.example.demo.repository.StudentRepository;

@Service
public class StudentServices {
	private final StudentRepository studentRepository;
	
	@Autowired
	public StudentServices(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}
	
	public Student createStudent(Student student) {
		return studentRepository.save(student);
	}
	
	public List<Student> getStudents(){
		return studentRepository.findAll();
	}

}
