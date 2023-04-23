package com.example.Backend.repositories;

import com.example.Backend.entities.PersonalInfo;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonalInfoRepository extends JpaRepository<PersonalInfo,Long> {
}
