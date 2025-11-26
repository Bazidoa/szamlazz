package com.example.szamlazz.model;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum JobEnum {
  KERTESZ("KERTESZ"),
  HENTES("HETNES"),
  PEK("PEK");

  private final String type;
}
