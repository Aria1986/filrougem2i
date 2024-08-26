package com.example.filrouge.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Timestamp;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name="sessions")
@Data
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;

    @Column(nullable = false, length=100)
    private String name;

    @Column(nullable = false)
    private Date starting_date;

    @Column(nullable = false)
    private Date ending_date;

    @OneToMany(mappedBy = "sessions")
    private Set<Module> modules;

}
