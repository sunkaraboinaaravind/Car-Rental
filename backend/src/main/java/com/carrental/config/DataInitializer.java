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
                repository.save(new Car(null, "Tesla", "Model 3", 8500.0, "https://images.unsplash.com/photo-1560958089-b8a1929cea89", true, "Premium electric sedan with autopilot. Perfect for eco-friendly city drives.", "Gachibowli, Hyderabad"));
                repository.save(new Car(null, "BMW", "M4 Competition", 15000.0, "https://images.unsplash.com/photo-1555215695-3004980ad54e", true, "High-performance sports coupe with 510hp. Pure driving pleasure.", "Banjara Hills, Hyderabad"));
                repository.save(new Car(null, "Audi", "Q7 Quattro", 12000.0, "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d", true, "Luxury family SUV with 7 seats and advanced safety features.", "Jubilee Hills, Hyderabad"));
                repository.save(new Car(null, "Mercedes", "C-Class AMG", 11000.0, "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8", true, "Elegant executive sedan with premium leather interiors.", "Hitech City, Hyderabad"));
                repository.save(new Car(null, "Porsche", "911 Carrera", 25000.0, "https://images.unsplash.com/photo-1503376780353-7e6692767b70", true, "The gold standard of sports cars. Unmatched performance and style.", "Begumpet, Hyderabad"));
                repository.save(new Car(null, "Range Rover", "Sport", 18000.0, "https://images.unsplash.com/photo-1506015391300-4802dc74de2e", true, "Ultimate luxury SUV for both city roads and off-road adventures.", "Secunderabad, Hyderabad"));
            }
        };
    }
}
