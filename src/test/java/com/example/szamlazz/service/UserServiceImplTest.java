package com.example.szamlazz.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.verifyNoInteractions;
import static org.mockito.MockitoAnnotations.openMocks;

import com.example.szamlazz.mapper.UserMapper;
import com.example.szamlazz.model.UserVo;
import com.example.szamlazz.model.Usr;
import com.example.szamlazz.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import java.util.Optional;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import static org.mockito.Mockito.verify;


import static org.mockito.BDDMockito.given;

class UserServiceImplTest {

  @Mock
  UserRepository repository;

  @Mock
  UserMapper mapper;

  @InjectMocks
  UserServiceImpl service;

  @BeforeEach
  void setUp() {
    openMocks(this);
  }

  @Test
  void findUsers_should_call_repository(){
    //given
    Page<Usr> users = Page.empty();
    Pageable pageable = PageRequest.of(0,5);
    given(repository.findAll(pageable)).willReturn(users);

    //when
    var result = service.findUsers(pageable);

    //then
    assertThat(result).isNotNull();
    verify(repository).findAll(pageable);
  }

  @Test
  void getUser_should_return_userVo_when_found() {
    // given
    Long userId = 1L;
    Usr user = Usr.builder().build();
    UserVo userVo = UserVo.builder().build();
    given(repository.findById(userId)).willReturn(Optional.of(user));
    given(mapper.toUserVo(user)).willReturn(userVo);

    // when
    UserVo result = service.getUser(userId);

    // then
    assertThat(result).isEqualTo(userVo);
    verify(repository).findById(userId);
    verify(mapper).toUserVo(user);
  }

  @Test
  void getUser_should_throw_when_not_found() {
    // given
    Long userId = 1L;
    given(repository.findById(userId)).willReturn(Optional.empty());

    // when + then
    assertThrows(EntityNotFoundException.class, () -> service.getUser(userId));

    verify(repository).findById(userId);
    verifyNoInteractions(mapper);
  }
}