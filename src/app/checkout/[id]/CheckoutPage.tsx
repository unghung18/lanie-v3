"use client";

import { useAppSelector } from "@/redux/hooks";
import { formatCurrency } from "@/utils/FormatCurrency";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";

const Page = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const [divisons, setDivisions] = useState<any>([]);
  const [districts, setDistricts] = useState<any>([]);
  const [wards, setWards] = useState<any>([]);

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [selectedCity, setSelectedCity] = useState<string | undefined>(
    undefined
  );
  const [selectedDistrict, setSelectedDistrict] = useState<string | undefined>(
    undefined
  );
  const [selectedWard, setSelectedWard] = useState<string | undefined>(
    undefined
  );

  const [deliveryMethod, setDeliveryMethod] = useState("1");
  const [paymentMethod, setPaymentMethod] = useState("1");
  const [totalPayment, setTotalPayment] = useState<number>(0);

  const { id } = params;

  const { totalAmount } = useAppSelector((state) => state.cart);
  const router = useRouter();

  const getAllDivisions = async () => {
    try {
      const res = await axios.get(
        "https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json"
      );
      setDivisions(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeDelivaryMethod = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDeliveryMethod(event.target.value);
  };
  const onChangePaymentMethod = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  const handleChangeProvince = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value !== "default") {
      const result = divisons.filter(
        (item: any) => item.Id == event.target.value
      );
      setDistricts(result[0].Districts);
      setSelectedCity(result[0].Name);
    } else {
      setDistricts([]);
    }
  };
  const handleChangeDistrict = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (event.target.value !== "default") {
      const result = districts.filter(
        (item: any) => item.Id == event.target.value
      );
      setWards(result[0]?.Wards);
      setSelectedDistrict(result[0]?.Name);
    } else {
      setWards([]);
    }
  };

  const handleChangeWard = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWard(event.target.value);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handleOrder = () => {
    if (
      info.name == "" ||
      info.email == "" ||
      info.phone == "" ||
      info.address == ""
    ) {
      toast.error("Vui lòng nhập đầy đủ thông tin", {
        theme: "colored",
      });
    } else {
      router.push("/checkout/success");
    }
  };

  useEffect(() => {
    getAllDivisions();
  }, []);

  useEffect(() => {
    setTotalPayment(totalAmount);
  }, [totalAmount]);

  return (
    <>
      <div className="px-5 md:px-10 lg:px-40 max-w-[1280px] mx-auto grid md:grid-cols-10 gap-5 py-10 bg-gradient-to-r from-[#faf8f1] to-[#f6f3ef] grid-cols-1 min-h-[100vh]">
        <div className=" space-y-3 col-span-7 bg-white py-4 px-5">
          <h2 className="font-bold text-[30px] my-3">Thông tin thanh toán</h2>
          <input
            onChange={handleChangeInput}
            name="name"
            type="text"
            placeholder="Họ và tên"
            className="w-full placeholder:font-extralight placeholder:text-gray-500 outline-none border-[1px] p-2 rounded-md border-gray-400 text-[#333333] shadow-sm focus:border-[#338dbc] focus:border-[1px]"
          />
          <div className="grid grid-cols-10">
            <input
              onChange={handleChangeInput}
              name="email"
              type="email"
              placeholder="Email"
              className="col-span-7 placeholder:font-extralight placeholder:text-gray-500 outline-none border-[1px] p-2 rounded-md border-gray-400 mr-3 text-[#333333] shadow-sm focus:border-[#338dbc] focus:border-[1px]"
            />
            <input
              onChange={handleChangeInput}
              name="phone"
              type="text"
              placeholder="Điện thoại"
              className="col-span-3 placeholder:font-extralight placeholder:text-gray-500 outline-none border-[1px] p-2 rounded-md border-gray-400 text-[#333333] shadow-sm focus:border-[#338dbc] focus:border-[1px]"
            />
          </div>
          <input
            onChange={handleChangeInput}
            name="address"
            type="text"
            placeholder="Địa chỉ số nhà, đường, ngõ,..."
            className="w-full placeholder:font-extralight placeholder:text-gray-500 outline-none border-[1px] p-2 rounded-md border-gray-400 text-[#333333] shadow-sm focus:border-[#338dbc] focus:border-[1px]"
          />
          <div className="grid grid-cols-3 gap-5">
            <div className="p-2 border rounded-md border-gray-400 flex items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="city" className="text-gray-500 font-thin">
                  Tỉnh
                </label>
                <select
                  id="city"
                  className="outline-none"
                  onChange={handleChangeProvince}
                >
                  <option value="default">Chọn tỉnh thành</option>
                  {divisons &&
                    divisons.map((e: any) => (
                      <option value={e.Id} key={e.Id}>
                        {e.Name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="p-2 border rounded-md border-gray-400 flex items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="district" className="text-gray-500 font-thin">
                  Quận/Huyện
                </label>
                <select
                  id="district"
                  className="outline-none"
                  onChange={handleChangeDistrict}
                >
                  <option value="">Chọn quận huyện</option>
                  {districts &&
                    districts.map((e: any) => (
                      <option value={e.Id} key={e.Id}>
                        {e.Name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="p-2 border rounded-md border-gray-400 flex items-center">
              <div className="flex flex-col w-full">
                <label htmlFor="ward" className="text-gray-500 font-thin">
                  Phường/Xã
                </label>
                <select
                  id="ward"
                  className="outline-none"
                  onChange={handleChangeWard}
                >
                  <option value="default">Chọn phường xã</option>
                  {wards &&
                    wards.map((e: any) => (
                      <option value={e.Name} key={e.Id}>
                        {e.Name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5">
            <h3>Chọn phương thức giao hàng</h3>
            <div className="bg-[rgb(240,248,255)] p-5 border border-[#99CCFF] rounded-md">
              <div className="">
                <input
                  onChange={onChangeDelivaryMethod}
                  id="delivery1"
                  type="radio"
                  value="1"
                  name="delivery"
                  checked={deliveryMethod === "1"}
                />
                <label htmlFor="delivery1">
                  <strong className=" text-yellow-500 ml-3">FAST</strong> Giao
                  hàng tiết kiệm
                </label>
                <br />
                <input
                  onChange={onChangeDelivaryMethod}
                  id="delivery2"
                  type="radio"
                  value="2"
                  name="delivery"
                  checked={deliveryMethod === "2"}
                />
                <label htmlFor="delivery2">
                  <strong className=" text-yellow-500 ml-3">GO_JEK</strong> Giao
                  hàng nhanh chóng
                </label>
                <br />
              </div>
            </div>
            <h3>Chọn phương thức thanh toán</h3>
            <div className="bg-[#F0F8FF] p-5 border border-[#99CCFF] rounded-md">
              <input
                onChange={onChangePaymentMethod}
                id="payment1"
                type="radio"
                value="1"
                name="payment"
                checked={paymentMethod === "1"}
              />
              <label className="ml-3" htmlFor="payment1">
                Thanh toán tiền mặt khi nhận hàng
              </label>
              <br />
              {/* 
                                <input onChange={onChangePaymentMethod} id='payment2' type="radio" value="2" name="payment" checked={paymentMethod === "2"} />
                                <label className='ml-3' htmlFor="payment2">Thanh toán khi nhận thẻ tín dụng</label><br /> */}
            </div>
          </div>
        </div>
        <div className="col-span-3 max-h-[400px] flex flex-col gap-3">
          <div className="rounded-lg p-5 bg-white">
            <div className=" border-b-[#fffff] border-b-2 p-1 mb-4">
              Địa chỉ: {`${info.address}`}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <p>Tạm tính</p>
                <strong>{formatCurrency(totalPayment)} VND</strong>
              </div>
              <div className="flex justify-between items-center">
                <p>Giảm giá</p>
                <strong>0 VND</strong>
              </div>
              <div className="flex justify-between items-center">
                <p>Phí giao hàng</p>
                <strong>0 VND</strong>
              </div>
            </div>
            <div>
              <p>Tổng tiền</p>
              <div className="text-center text-red-500">
                <strong>{formatCurrency(totalPayment)} VND</strong>
              </div>
            </div>
          </div>
          {
            paymentMethod === "1" ? (
              <div
                className="flex-center py-3 px-2 bg-red-500 cursor-pointer rounded-md text-white"
                onClick={handleOrder}
              >
                Đặt hàng
              </div>
            ) : (
              <button>Checkout</button>
            )
            // <PaypalCheckoutBtn totalPayment={totalPayment} />
          }
        </div>
      </div>
    </>
  );
};

export default Page;
