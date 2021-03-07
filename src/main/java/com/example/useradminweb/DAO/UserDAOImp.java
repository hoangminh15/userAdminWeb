package com.example.useradminweb.DAO;

import com.example.useradminweb.model.User;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class UserDAOImp implements UserDAO {

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<User> get() {
        List<User> userList = userRepo.findAll();
        return userList;
    }

    @Override
    public User get(int id) {
        User user = userRepo.findById(id).orElse(null);
        return user;
    }

    @Override
    public void save(User user) {
        userRepo.save(user);
    }

    @Override
    public void delete(int id) {
        userRepo.deleteById(id);
    }

}
