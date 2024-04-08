import React from 'react';
import '../../../styles/checkout/checkout.scss';
import { MdOutlineChevronRight } from "react-icons/md";

const Page = ({ params }: {
    params: {
        id: string;
    }
}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-page__container'>
                <div className='checkout-sidebar'>
                    <h1 className='logo'>LANIE</h1>
                    <div className='breadscum'>
                        <div>Giỏ hàng</div>
                        <span>
                            <MdOutlineChevronRight />
                        </span>
                        <div>Thông tin vận chuyển</div>
                        <span>
                            <MdOutlineChevronRight />
                        </span>
                        <div>Phương thức thanh toán</div>
                    </div>
                    <div className='title'>Thông tin thanh toán</div>

                    <div className='form-order'>
                        <div>
                            <label htmlFor="name">Họ và tên</label>
                            <input type="text" placeholder='Họ và tên' id='name' />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name">Họ và tên</label>
                                <input type="text" placeholder='Họ và tên' id='name' />
                            </div>
                            <div>
                                <label htmlFor="name">Họ và tên</label>
                                <input type="text" placeholder='Họ và tên' id='name' />
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className='checkout-sumary'>a</div>
            </div>
        </div>
    )
}

export default Page