package com.example.useradminweb.Controller;

import com.example.useradminweb.DAO.UserAccountRepo;
import com.example.useradminweb.model.UserAccount;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class UserAccountController {

    @Autowired
    UserAccountRepo userAccountRepo;

    @GetMapping("/{id}")
    public UserAccount getById(@PathVariable int id){ return userAccountRepo.findById(id).orElse(null); }

    //Create
    @PostMapping("/")
    public UserAccount save(@RequestBody UserAccount userAccount) { return userAccountRepo.save(userAccount);}

    //Update
    @PutMapping("/")
    public UserAccount update(@RequestBody UserAccount userAccount){
        userAccountRepo.save(userAccount);
        return userAccount;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        userAccountRepo.deleteById(id);
        return "User removed with id: " + id;
    }
}
