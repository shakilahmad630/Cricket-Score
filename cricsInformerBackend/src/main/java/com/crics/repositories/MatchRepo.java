package com.crics.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.crics.entities.Match;

public interface MatchRepo extends JpaRepository<Match,Integer>
{
   // fetch data of matches through teamheading

   Optional<Match> findByTeamHeading(String teamHeading);
    
} 
    

