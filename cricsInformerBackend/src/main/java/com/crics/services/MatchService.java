package com.crics.services;

import java.util.List;
import com.crics.entities.Match;

public interface MatchService 
{
   // get all matches
   List<Match> getAllMatches();

  // get live matches
  List<Match> getLiveMatchs();
    
  // get cwc points table
  List<List<String>> getPointTable();
} 