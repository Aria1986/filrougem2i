package com.example.filrouge.entities;

import jakarta.persistence.*;
import lombok.Data;

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
}
