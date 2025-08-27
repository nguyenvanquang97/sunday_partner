function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Giới thiệu</h1>
      
      <div className="prose prose-lg max-w-none">
        <div className="bg-white p-8 rounded-lg shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Về dự án này</h2>
          <p className="text-gray-600 mb-4">
            Đây là một ứng dụng demo được xây dựng để minh họa cách sử dụng React Router 
            cùng với các công nghệ hiện đại như:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>React 18 với TypeScript</li>
            <li>Vite cho build tool nhanh chóng</li>
            <li>React Router DOM cho routing</li>
            <li>Tailwind CSS cho styling</li>
            <li>shadcn/ui cho component library</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">Tính năng chính</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Routing linh hoạt</h4>
              <p className="text-blue-700 text-sm">
                Điều hướng giữa các trang một cách mượt mà với React Router
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">UI hiện đại</h4>
              <p className="text-green-700 text-sm">
                Giao diện đẹp mắt với Tailwind CSS và shadcn/ui components
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2">TypeScript</h4>
              <p className="text-purple-700 text-sm">
                Type safety và developer experience tốt hơn
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h4 className="font-medium text-orange-900 mb-2">Responsive</h4>
              <p className="text-orange-700 text-sm">
                Tương thích với mọi kích thước màn hình
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;