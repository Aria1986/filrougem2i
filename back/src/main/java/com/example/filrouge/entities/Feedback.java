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

    @Column(nullable = false)
    private int note;

    @Column(nullable = false, length=500)
    private String text;

    @ManyToOne
    @JoinColumn(name="user_id",referencedColumnName = "id", nullable=false)
    private User user;

    @ManyToOne
    private Module module;

}
