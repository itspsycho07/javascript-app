package com.anicodes.BCA.stack.Service;

import com.anicodes.BCA.stack.model.Student;

import java.util.List;

public interface Studentservice {
    public Student saveStudent(Student student);
    public List<Student>getALLStudents();

}
