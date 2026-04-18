package com.carrental.service;

import com.carrental.model.Booking;
import com.carrental.model.BookingStatus;
import com.carrental.model.Car;
import com.carrental.repository.BookingRepository;
import com.carrental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private CarRepository carRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public List<Booking> getBookingsByEmail(String email) {
        return bookingRepository.findByCustomerEmail(email);
    }

    public Booking createBooking(Booking booking) {
        Car car = carRepository.findById(booking.getCar().getId())
                .orElseThrow(() -> new RuntimeException("Car not found"));
        
        if (!car.isAvailable()) {
            throw new RuntimeException("Car is not available for booking");
        }

        long days = ChronoUnit.DAYS.between(booking.getStartDate(), booking.getEndDate());
        if (days <= 0) days = 1;
        
        booking.setTotalPrice(days * car.getPricePerDay());
        if (booking.isDriverRequested()) {
            booking.setDriverCharges(days * 1000.0); // 1000 per day for driver
            booking.setTotalPrice(booking.getTotalPrice() + booking.getDriverCharges());
        }
        
        booking.setCar(car);
        
        // Mark car as unavailable
        car.setAvailable(false);
        carRepository.save(car);

        return bookingRepository.save(booking);
    }

    public Booking cancelBooking(Long id) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        
        booking.setStatus(BookingStatus.CANCELLED);
        
        Car car = booking.getCar();
        car.setAvailable(true);
        carRepository.save(car);
        
        return bookingRepository.save(booking);
    }
}
