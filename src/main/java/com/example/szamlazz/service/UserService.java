package com.example.szamlazz.service;

import com.example.szamlazz.model.User;
import com.example.szamlazz.model.UserVo;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UserService {
    public Page<User> findUsers(Pageable pageable);

    public List<User> getUsers();

    public Long saveUser(UserVo request);

    public void deleteUser(Long userId);

    public UserVo getUser(Long userId);
}
