package com.example.szamlazz.model;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
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

  @Pattern(regexp = "(\\+36|06)\\s?([1-9]{1}[0-9])\\s?\\d{3}\\s?\\d{4}", message = "FIELD_VALIDATION_ERROR")
  String telephone;

  @NotNull
  Boolean active;

  @NotNull
  JobEnum job;
}
