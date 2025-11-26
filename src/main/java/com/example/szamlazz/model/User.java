package com.example.szamlazz.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.DriverPropertyInfo;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String firstname;
    String lastname;
    String address;
    String telephone;
    Boolean active;
    String job;
}
