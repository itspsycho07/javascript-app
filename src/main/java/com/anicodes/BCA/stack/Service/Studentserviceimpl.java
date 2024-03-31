package com.anicodes.BCA.stack.Service;

import com.anicodes.BCA.stack.Repository.StudentRepository;
import com.anicodes.BCA.stack.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Studentserviceimpl implements Studentservice {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {

        return studentRepository.save(student);
    }

    @Override
    public List<Student> getALLStudents() {
        return studentRepository.findAll();
    }
}
