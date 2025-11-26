package com.example.szamlazz.service;

import com.example.szamlazz.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    public Page<User> findUsers(Pageable pageable);
    public List<User> getUsers();
    public Long createUser();
}
