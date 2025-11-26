package com.example.szamlazz.repository;

import com.example.szamlazz.model.Usr;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Usr, Long> {
}
