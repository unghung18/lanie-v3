const Page = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Phần 1: Ảnh bên trái, văn bản bên phải */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative">
            <img
              src="/about-1.jpg" // Thay thế bằng ảnh thực tế của bạn
              alt="Ảnh về Lanie"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Chào mừng đến với Lanie
            </h1>
            <p className="text-lg text-gray-700">
              Lanie là một cửa hàng trực tuyến chuyên cung cấp những mẫu quần áo
              thời trang, hiện đại và phong cách. Chúng tôi luôn cam kết mang
              đến cho khách hàng những sản phẩm chất lượng, từ những bộ sưu tập
              mới nhất đến các item cơ bản dễ phối đồ, phù hợp với nhiều xu
              hướng và phong cách khác nhau.
            </p>
          </div>
        </div>

        {/* Phần 2: Văn bản bên trái, ảnh bên phải */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Chất lượng là ưu tiên hàng đầu
            </h2>
            <p className="text-lg text-gray-700">
              Mỗi sản phẩm của Lanie đều được chọn lọc kỹ lưỡng từ các chất liệu
              cao cấp, bền bỉ và thoải mái khi mặc. Chúng tôi luôn cố gắng mang
              đến cho khách hàng những sản phẩm không chỉ đẹp mà còn thật sự
              chất lượng.
            </p>
          </div>
          <div className="relative">
            <img
              src="/about-2.jpg" // Thay thế bằng ảnh thực tế của bạn
              alt="Chất lượng sản phẩm"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Phần 3: Ảnh bên trái, văn bản bên phải */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="relative">
            <img
              src="/about-3.webp" // Thay thế bằng ảnh thực tế của bạn
              alt="Ảnh sứ mệnh Lanie"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sứ mệnh của chúng tôi
            </h2>
            <p className="text-lg text-gray-700">
              Sứ mệnh của Lanie là giúp bạn tự tin thể hiện phong cách cá nhân
              qua những bộ trang phục mà bạn yêu thích. Chúng tôi luôn lắng nghe
              và thấu hiểu nhu cầu của khách hàng để không ngừng cải tiến và
              mang đến trải nghiệm mua sắm tuyệt vời nhất.
            </p>
          </div>
        </div>

        {/* Phần 4: Văn bản bên trái, ảnh bên phải */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Đặt hàng và Giao hàng
            </h2>
            <p className="text-lg text-gray-700">
              Chúng tôi cung cấp dịch vụ giao hàng nhanh chóng, đảm bảo sự hài
              lòng của khách hàng với mỗi đơn hàng. Bạn có thể dễ dàng lựa chọn
              các sản phẩm yêu thích và đặt hàng trực tuyến, chúng tôi sẽ giao
              hàng tận nơi cho bạn.
            </p>
          </div>
          <div className="relative">
            <img
              src="/about-4.webp" // Thay thế bằng ảnh thực tế của bạn
              alt="Giao hàng"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Phần 5: Ảnh bên trái, văn bản bên phải */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="/about-5.jpg" // Thay thế bằng ảnh thực tế của bạn
              alt="Liên hệ với Lanie"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Liên hệ với chúng tôi
            </h2>
            <p className="text-lg text-gray-700">
              Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ, đừng ngần ngại liên
              hệ với chúng tôi qua email hoặc điện thoại. Chúng tôi luôn sẵn
              sàng giúp đỡ!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
