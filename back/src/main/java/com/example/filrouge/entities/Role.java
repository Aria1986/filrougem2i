package com.example.filrouge.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Table(name="roles")
@Entity
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;

    @Column(unique = true,nullable = false)
    @Enumerated(EnumType.STRING)
    private RoleEnum name;

    @Column
    private String description;
}
