package com.anicodes.BCA.stack.Controller;

import com.anicodes.BCA.stack.Service.Studentservice;
import com.anicodes.BCA.stack.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
public class StudentController {
    @Autowired
    private Studentservice studentservice;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentservice.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentservice.getALLStudents();
    }
}

