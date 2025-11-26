package com.example.szamlazz.mapper;

import com.example.szamlazz.model.User;
import com.example.szamlazz.model.UserCreateRequest;
import com.example.szamlazz.model.UserVo;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

  public abstract User toUser(UserVo UserVo);

  public abstract UserVo toUserVo(User user);

  public abstract UserVo toUserVo(UserCreateRequest userCreateRequest);

}
