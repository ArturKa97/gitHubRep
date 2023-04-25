package com.example.Backend.repositories;

import com.example.Backend.entities.PersonalInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PersonalInfoRepository extends JpaRepository<PersonalInfo,Long> {

    @Query(value = "SELECT p FROM PersonalInfo p WHERE p.id = :id")
    PersonalInfo getPersonalInfoById(@Param("id") Long id);

}
