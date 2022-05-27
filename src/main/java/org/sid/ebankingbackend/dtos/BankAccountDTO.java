package org.sid.ebankingbackend.dtos;

import lombok.Data;
import org.sid.ebankingbackend.entities.AccountOperation;
import org.sid.ebankingbackend.entities.Customer;
import org.sid.ebankingbackend.enums.AccountStatus;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
public class BankAccountDTO {
    private String id;
    private double balance;
    private Date createdAt;
    private AccountStatus status;
    private String type;

}
