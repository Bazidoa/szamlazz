package com.example.szamlazz.service;

import com.example.szamlazz.model.User;
import com.example.szamlazz.repository.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {

  private final  UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Page<User> findUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public Long createUser() {
        return userRepository.save(User.builder().firstname("Balazs").lastname("Gyongyosi").build()).getId();
    }
}
