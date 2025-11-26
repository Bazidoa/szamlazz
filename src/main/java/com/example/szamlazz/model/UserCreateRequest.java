package com.example.szamlazz.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserCreateRequest {

  @NotNull
  @Size(min = 2, max = 64, message = "FIELD_VALIDATION_ERROR")
  String firstname;

  @NotNull
  @Size(min = 2, max = 64, message = "FIELD_VALIDATION_ERROR")
  String lastname;

  @Size(max = 128, message = "FIELD_VALIDATION_ERROR")
  String address;

  @Size(max = 128, message = "FIELD_VALIDATION_ERROR")
  String telephone;

  Boolean active;

  JobEnum job;
}
