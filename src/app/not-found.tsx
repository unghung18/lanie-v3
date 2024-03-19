import Link from 'next/link';
import '../styles/Not-Found.scss';
import Navbar from '@/components/Navbar';
import { FaArrowLeftLong } from "react-icons/fa6";

export default function NotFound() {
    return (
        <>
            <Navbar />
            <div className='page-not-found'>
                <div className='page__container container'>
                    <div className='info'>
                        <img src="/not-found.webp" alt="not found image" />
                    </div>
                    <div className='content'>
                        <div className='status-code'>404</div>
                        <div className='error'>Something Is Missing.</div>
                        <div className='description'>The page you are looking for cannot be found. Take a break before trying again </div>
                        <Link href="/" className='button-back'><FaArrowLeftLong /><span>Back to Homepage</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}