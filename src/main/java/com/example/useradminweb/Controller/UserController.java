package com.example.useradminweb.Controller;


import com.example.useradminweb.model.User;
import com.example.useradminweb.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<User> get() {
        return userService.get();
    }

    @GetMapping("/user/{id}")
    public User get(@PathVariable int id){
        return userService.get(id);
    }

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
