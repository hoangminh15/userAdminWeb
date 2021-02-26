package com.example.useradminweb.DAO;

import com.example.useradminweb.model.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserAccountRepo extends JpaRepository<UserAccount, Integer> {
    Optional<UserAccount> findByUsername(String username);
}
