package com.example.useradminweb.DAO;

import com.example.useradminweb.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User, Integer> {
}
