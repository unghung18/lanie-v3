import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-7xl w-full bg-white rounded-lg shadow-lg flex p-8">
        {/* Phần ảnh bên trái */}
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src={"/about-5.jpg"}
            alt="Contact Image"
            className="rounded-lg"
            width={400}
            height={400}
            objectFit="cover"
          />
        </div>

        {/* Phần thông tin liên hệ bên phải */}
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Chúng tôi rất vui khi được nghe ý kiến của bạn. Hãy để lại thông tin
            bên dưới và chúng tôi sẽ trả lời bạn sớm nhất có thể.
          </p>

          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Thông điệp
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Nhập thông điệp của bạn"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Gửi Thông Tin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
