package org.sid.ebankingbackend.repositories;

import org.sid.ebankingbackend.entities.BankAccount;
import org.sid.ebankingbackend.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BankAccountRepository extends JpaRepository<BankAccount,String> {
    @Query("select a from BankAccount a where a.customer.id = :id")
    List<BankAccount> searchAccounts(@Param("id") Long id);

}

