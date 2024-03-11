"use client"
import { useEffect, useState } from 'react';

export const useCountDownTimer = (initialTime) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(initialTime) - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)) < 10 ? "0" + Math.floor(difference / (1000 * 60 * 60 * 24)) : Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24) < 10 ? "0" + Math.floor((difference / (1000 * 60 * 60)) % 24) : Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60) < 10 ? "0" + Math.floor((difference / 1000 / 60) % 60) : Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60) < 10 ? "0" + Math.floor((difference / 1000) % 60) : Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return timeLeft;
};