import { Button } from '@/components/ui/button';

const products = [
  {
    id: 1,
    name: 'React Router',
    description: 'Thư viện routing mạnh mẽ cho React applications',
    price: 'Miễn phí',
    category: 'Library'
  },
  {
    id: 2,
    name: 'Tailwind CSS',
    description: 'Utility-first CSS framework cho thiết kế nhanh chóng',
    price: 'Miễn phí',
    category: 'CSS Framework'
  },
  {
    id: 3,
    name: 'shadcn/ui',
    description: 'Component library đẹp và có thể tùy chỉnh',
    price: 'Miễn phí',
    category: 'UI Library'
  },
  {
    id: 4,
    name: 'Vite',
    description: 'Build tool nhanh chóng cho modern web development',
    price: 'Miễn phí',
    category: 'Build Tool'
  }
];

function Products() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Sản phẩm</h1>
        <p className="text-gray-600">
          Khám phá các công nghệ và thư viện được sử dụng trong dự án này.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="mb-4">
              <span className="inline-block px-2 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {product.name}
            </h3>
            
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">
                {product.price}
              </span>
              <Button size="sm">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Tại sao chọn những công nghệ này?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Hiệu suất cao</h3>
            <p className="text-blue-700">
              Tất cả các công nghệ này đều được tối ưu hóa cho hiệu suất và trải nghiệm người dùng tốt nhất.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Cộng đồng mạnh</h3>
            <p className="text-blue-700">
              Được hỗ trợ bởi cộng đồng developer lớn và tài liệu phong phú.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Dễ sử dụng</h3>
            <p className="text-blue-700">
              API đơn giản, dễ học và dễ triển khai trong các dự án thực tế.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-800 mb-2">Miễn phí</h3>
            <p className="text-blue-700">
              Tất cả đều là open source và hoàn toàn miễn phí sử dụng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;