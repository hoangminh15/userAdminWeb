package com.example.useradminweb.model;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table
public class UserAccount {
    @Id
    @NotNull
    private int id;
    @Column
    @NotNull
    private String username;
    @Column
    @NotNull
    private String password;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
