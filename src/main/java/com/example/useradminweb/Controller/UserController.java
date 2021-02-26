package com.example.useradminweb.Controller;


import com.example.useradminweb.DAO.UserRepo;
import com.example.useradminweb.model.User;
import com.example.useradminweb.service.UserService;
import com.example.useradminweb.service.UserServiceForPaging;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.util.List;

@RestController
@RequestMapping("/")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private UserServiceForPaging userServiceForPaging;

    //Fetch user info
    @GetMapping("/user")
    public List<User> get() {
        return userService.get();
    }

    @GetMapping("/user/{id}")
    public User getById(@PathVariable int id){
        return userService.get(id);
    }

    @GetMapping("/user/name/{name}")
    public List<User> getByName(@PathVariable String name) { return userRepo.findAllByName(name);}

    @GetMapping("/user/dob/{dob}")
    public List<User> getByDob(@PathVariable Date dob) { return userRepo.findAllByDob(dob); }

    @GetMapping("/user/gender/{gender}")
    public List<User> getByGender(@PathVariable String gender) { return userRepo.findAllByGender(gender);}

    //Old code
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

    //Test paging
    @GetMapping("/user/page")
    List<User> getPageByPage(@RequestParam(defaultValue = "0") Integer pageNo,
                                @RequestParam(defaultValue = "4") Integer pageSize,
                                @RequestParam(defaultValue = "id") String sortBy) {
        List<User> list = userServiceForPaging.getAllUser(pageNo, pageSize, sortBy);
        return list;
    }

    @GetMapping("/user/page")
    Integer getNumberOfUsers(@RequestParam(defaultValue = "0") Integer pageNo,
                             @RequestParam(defaultValue = "4") Integer pageSize){
        Page<User> page = userRepo.findAll(PageRequest.of(pageNo, pageSize));
        return page.getNumberOfElements();
    }
}
