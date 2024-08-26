package com.example.filrouge.entities;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="feedbacks")
@Data
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id;

}
