package com.example.szamlazz.mapper;

import com.example.szamlazz.model.JobEnum;
import com.example.szamlazz.model.User;
import com.example.szamlazz.model.UserCreateRequest;
import com.example.szamlazz.model.UserVo;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-11-26T15:47:39+0100",
    comments = "version: 1.6.3, compiler: javac, environment: Java 17.0.6 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl extends UserMapper {

    @Override
    public User toUser(UserVo UserVo) {
        if ( UserVo == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.id( UserVo.getId() );
        user.firstname( UserVo.getFirstname() );
        user.lastname( UserVo.getLastname() );
        user.address( UserVo.getAddress() );
        user.telephone( UserVo.getTelephone() );
        user.active( UserVo.getActive() );
        if ( UserVo.getJob() != null ) {
            user.job( Enum.valueOf( JobEnum.class, UserVo.getJob() ) );
        }

        return user.build();
    }

    @Override
    public UserVo toUserVo(User user) {
        if ( user == null ) {
            return null;
        }

        UserVo.UserVoBuilder userVo = UserVo.builder();

        userVo.id( user.getId() );
        userVo.firstname( user.getFirstname() );
        userVo.lastname( user.getLastname() );
        userVo.address( user.getAddress() );
        userVo.telephone( user.getTelephone() );
        userVo.active( user.getActive() );
        if ( user.getJob() != null ) {
            userVo.job( user.getJob().name() );
        }

        return userVo.build();
    }

    @Override
    public UserVo toUserVo(UserCreateRequest userCreateRequest) {
        if ( userCreateRequest == null ) {
            return null;
        }

        UserVo.UserVoBuilder userVo = UserVo.builder();

        userVo.firstname( userCreateRequest.getFirstname() );
        userVo.lastname( userCreateRequest.getLastname() );
        userVo.address( userCreateRequest.getAddress() );
        userVo.telephone( userCreateRequest.getTelephone() );
        userVo.active( userCreateRequest.getActive() );
        if ( userCreateRequest.getJob() != null ) {
            userVo.job( userCreateRequest.getJob().name() );
        }

        return userVo.build();
    }
}
