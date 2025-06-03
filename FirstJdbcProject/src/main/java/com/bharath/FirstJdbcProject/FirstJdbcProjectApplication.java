package com.bharath.FirstJdbcProject;

import com.bharath.FirstJdbcProject.service.StudentService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.bharath.FirstJdbcProject.model.Student;

import java.util.List;

@SpringBootApplication
public class FirstJdbcProjectApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(FirstJdbcProjectApplication.class, args);

		Student s = context.getBean(Student.class);

		s.setRollNo(104);
		s.setName("Bharath");
		s.setMarks(90);

		StudentService service = context.getBean(StudentService.class);
		service.addStudent(s);

		List<Student> students=service.getStudents();
		System.out.println(students);
	}

}
