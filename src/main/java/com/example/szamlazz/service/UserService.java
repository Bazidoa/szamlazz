package com.example.szamlazz.service;

import com.example.szamlazz.model.UserVo;
import com.example.szamlazz.model.Usr;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface UserService {
    public Page<Usr> findUsers(Pageable pageable);

    public List<Usr> getUsers();

    public Long saveUser(UserVo request);

    public void deleteUser(Long userId);

    public UserVo getUser(Long userId);
}
