package com.example.szamlazz.controller;

import com.example.szamlazz.model.User;
import com.example.szamlazz.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class UserController {

   private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users")
    public Page<User> findUsers(Pageable pageable) {
        return userService.findUsers(pageable);
    }

    @GetMapping("/users-all")
    public List<User> findUsers() {
        return userService.getUsers();
    }

    @GetMapping("create-user")
    public Long createUser(){
        return userService.createUser();
    }
}
