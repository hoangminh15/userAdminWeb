package com.example.useradminweb.service;

import com.example.useradminweb.DAO.UserRepo;
import com.example.useradminweb.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceForPaging {
    @Autowired
    UserRepo userRepo;

    public List<User> getAllUser(Integer pageNo, Integer pageSize, String sortBy) {
        Page<User> page = userRepo.findAll(PageRequest.of(pageNo, pageSize, Sort.by(sortBy)));
        if (page.hasContent()){
            return page.getContent();
        } else {
            return new ArrayList<>();
        }
    }
}
