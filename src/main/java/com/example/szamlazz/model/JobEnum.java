package com.example.szamlazz.model;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum JobEnum {
  KERTESZ("KERTESZ"),
  HENTES("HENTES"),
  PEK("PEK");

  private final String type;

  public String getType() {
    return type;
  }
}
