package com.example.useradminweb.DAO;

import com.example.useradminweb.model.User;
import org.springframework.data.repository.CrudRepository;

import java.sql.Date;
import java.util.List;

public interface UserRepo extends CrudRepository<User, Integer> {
    List<User> findAllByName(String name);
    List<User> findAllByDob(Date dob);
    List<User> findAllByGender(String gender);
}
