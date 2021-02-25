package com.example.useradminweb.Controller;


import com.example.useradminweb.DAO.UserRepo;
import com.example.useradminweb.model.User;
import com.example.useradminweb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepo userRepo;

    //Fetch user info
    @GetMapping("/")
    public List<User> get() {
        return userService.get();
    }

    @GetMapping("/{id}")
    public User getById(@PathVariable int id){
        return userService.get(id);
    }

    @GetMapping("/name/{name}")
    public List<User> getByName(@PathVariable String name) { return userRepo.findAllByName(name);}

    @GetMapping("/dob/{dob}")
    public List<User> getByDob(@PathVariable Date dob) { return userRepo.findAllByDob(dob); }

    @GetMapping("/gender/{gender}")
    public List<User> getByGender(@PathVariable String gender) { return userRepo.findAllByGender(gender);}

    //Admin
    @PostMapping("/user")
    public User save(@RequestBody User user){
        userService.save(user);
        return user;
    }

    @DeleteMapping("/user/{id}")
    public String delete(@PathVariable int id){
        userService.delete(id);
        return "User removed with id " + id;
    }

    @PutMapping("/user")
    public User update(@RequestBody User user){
        userService.save(user);
        return user;
    }
}
