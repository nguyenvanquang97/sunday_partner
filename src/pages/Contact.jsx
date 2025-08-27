import { Button } from '@/components/ui/button';

function Contact() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Liên hệ</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-sm border">
        <p className="text-gray-600 mb-8">
          Chúng tôi rất vui được nghe từ bạn! Hãy liên hệ với chúng tôi qua các thông tin dưới đây.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-20">Email:</span>
                <span className="text-blue-600">contact@example.com</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-20">Phone:</span>
                <span className="text-gray-600">+84 123 456 789</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium text-gray-700 w-20">Địa chỉ:</span>
                <span className="text-gray-600">123 Đường ABC, Quận 1, TP.HCM</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Giờ làm việc</h3>
            <div className="space-y-2 text-gray-600">
              <div>Thứ 2 - Thứ 6: 9:00 - 18:00</div>
              <div>Thứ 7: 9:00 - 12:00</div>
              <div>Chủ nhật: Nghỉ</div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Gửi tin nhắn</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Họ và tên
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập họ và tên của bạn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tin nhắn
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nhập tin nhắn của bạn"
              />
            </div>
            <Button type="submit" className="w-full">
              Gửi tin nhắn
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;