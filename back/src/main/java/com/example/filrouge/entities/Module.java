package com.example.filrouge.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name="modules")
@Data
public class Module {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;

    @Column(nullable = false, length=100)
    private String name;

    @Column(nullable = false, length=100)
    private String room;


    @ManyToOne
    @JoinColumn(name="session_id",referencedColumnName = "id", nullable=false)
    private Session session;

    @ManyToOne

    private Building building;

    @ManyToOne
    private Session sessions;

    @ManyToMany
    private Set<User> users;
}
