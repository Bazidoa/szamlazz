package com.example.szamlazz.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "t_users")
@Data
public class Usr {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String firstname;
    String lastname;
    String address;
    String telephone;
    Boolean active;
    @Enumerated(EnumType.STRING)
    JobEnum job;
}
