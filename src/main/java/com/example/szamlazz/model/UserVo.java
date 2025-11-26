package com.example.szamlazz.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserVo {
    Long id;
    String firstname;
    String lastname;
    String address;
    String telephone;
    Boolean active;
    String job;
}
