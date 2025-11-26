package com.example.szamlazz.mapper;

import com.example.szamlazz.model.UserCreateRequest;
import com.example.szamlazz.model.UserVo;
import com.example.szamlazz.model.Usr;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

  public abstract Usr toUser(UserVo UserVo);

  public abstract UserVo toUserVo(Usr user);

  public abstract UserVo toUserVo(UserCreateRequest userCreateRequest);

}
