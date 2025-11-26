package com.example.szamlazz.service;

import com.example.szamlazz.mapper.UserMapper;
import com.example.szamlazz.model.User;
import com.example.szamlazz.model.UserVo;
import com.example.szamlazz.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
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
    public Long saveUser(UserVo userVo) {
        return userRepository.save(userMapper.toUser(userVo)).getId();
    }

  @Override
  public void deleteUser(Long userId) {
      userRepository.deleteById(userId);
  }

  @Override
  public UserVo getUser(Long userId) {
    Optional<UserVo> userVo = userRepository.findById(userId).map(userMapper::toUserVo);
    return userVo.orElseThrow(EntityNotFoundException::new);
  }
}
