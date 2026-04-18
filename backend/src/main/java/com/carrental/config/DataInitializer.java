package com.carrental.config;

import com.carrental.model.Car;
import com.carrental.repository.CarRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(CarRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.save(new Car(null, "Tesla", "Model 3", 120.0, "https://images.unsplash.com/photo-1560958089-b8a1929cea89", true, "Premium electric sedan with autopilot."));
                repository.save(new Car(null, "BMW", "M4", 150.0, "https://images.unsplash.com/photo-1555215695-3004980ad54e", true, "High-performance sports coupe."));
                repository.save(new Car(null, "Audi", "Q7", 100.0, "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d", true, "Luxury family SUV with 7 seats."));
                repository.save(new Car(null, "Mercedes", "C-Class", 110.0, "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8", true, "Elegant executive sedan."));
                repository.save(new Car(null, "Porsche", "911 Carrera", 250.0, "https://images.unsplash.com/photo-1503376780353-7e6692767b70", true, "Iconic sports car experience."));
            }
        };
    }
}
