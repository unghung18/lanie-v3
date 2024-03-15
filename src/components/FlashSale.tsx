"use client"
import { useState, useEffect } from 'react';
import { useCountDownTimer } from '../hooks/CountDownTimer';
import "../styles/FlashSale.scss";

const date = new Date('2024-03-20T12:00:00');

const FlashSale = () => {

    const { days, hours, minutes, seconds } = useCountDownTimer(date);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        setTimeLeft({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        })
    }, [days, hours, minutes, seconds]);


    return (
        <div className='flash-sale container'>
            <div className='flash-sale__container'>
                <div className="flash-sale__container--content">
                    <div className='flash-sale__container--content-heading'>Flash Sale!</div>
                    <div className='flash-sale__container--content-description'>Get 20% off if you spend 120$ or more!</div>
                    <div className='flash-sale__container--content-timer'>
                        <div className='flash-sale__container--content-timer-item'>
                            <div>{timeLeft.days == 0 ? "00" : timeLeft.days}</div>
                            <div>DAYS</div>
                        </div>
                        <span>:</span>
                        <div className='flash-sale__container--content-timer-item'>
                            <div>{timeLeft.hours == 0 ? "00" : timeLeft.hours}</div>
                            <div>HOUR</div>
                        </div>
                        <span>:</span>
                        <div className='flash-sale__container--content-timer-item'>
                            <div>{timeLeft.minutes == 0 ? "00" : timeLeft.minutes}</div>
                            <div>MINUTES</div>
                        </div>
                        <span>:</span>
                        <div className='flash-sale__container--content-timer-item'>
                            <div>{timeLeft.seconds == 0 ? "00" : timeLeft.seconds}</div>
                            <div>SECONDS</div>
                        </div>
                    </div>
                    <div className='flash-sale__container--content-button button'>
                        GET IT NOW
                    </div>
                </div>
                <div className='flash-sale__container--image'>
                    <img src="/bg1-1.webp" alt="flash sale image" />
                </div>
            </div>
        </div>
    )
}

export default FlashSale