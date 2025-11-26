package com.example.szamlazz.controller;

import com.example.szamlazz.mapper.UserMapper;
import com.example.szamlazz.model.UserCreateRequest;
import com.example.szamlazz.model.UserVo;
import com.example.szamlazz.model.Usr;
import com.example.szamlazz.service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/user")
public class UserController {

   private final UserService userService;
   private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @GetMapping("/search")
    public Page<Usr> findUsers(Pageable pageable) {
        return userService.findUsers(pageable);
    }

    @GetMapping("/{userId}")
    public UserVo getUser(@PathVariable("userId") Long userId) {
        return userService.getUser(userId);
    }

    @PostMapping("/create")
    public ResponseEntity<Long> createUser(@RequestBody @Validated final UserCreateRequest request){
        return ResponseEntity.ok(userService.saveUser(userMapper.toUserVo(request)));
    }

  @PutMapping(value = "/update/{userId}")
  public ResponseEntity<Long> updateUser(@RequestBody @Validated final UserCreateRequest request,
      @PathVariable("userId") final Long userId){
      UserVo userVo = userMapper.toUserVo(request);
      userVo.setId(userId);
    return ResponseEntity.ok(userService.saveUser(userVo));
  }

  @DeleteMapping("/delete/{userId}")
  public ResponseEntity<Void> deleteUser(@PathVariable("userId") final Long userId){
      userService.deleteUser(userId);
      return ResponseEntity.ok().build();
  }
}
