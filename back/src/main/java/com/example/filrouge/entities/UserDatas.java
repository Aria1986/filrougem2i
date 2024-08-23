package com.example.filrouge.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name="UserDatas")
@Entity

public class UserDatas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer Id;

    @Column(nullable=false, length=100)
    private String Lastname;

    @Column(nullable=false, length=100)
    private String Fistname;


    @Column(nullable=false, length=200)
    private String Address;

    @Column(nullable=false)
    private int Phone;

    @Column(nullable=false)
    private java.sql.Date BirthDate;

    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable = false)
    private User user;

}
