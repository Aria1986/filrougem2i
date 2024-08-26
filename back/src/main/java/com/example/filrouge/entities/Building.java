package com.example.filrouge.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Table(name="buldings")
@Data
public class Building {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;

    @Column(nullable = false, length=100)
    private String name;

    @Column(nullable = false, length=100)
    private String address;

    @OneToMany(mappedBy = "buildings")
    private Set<Module> modules;
}
