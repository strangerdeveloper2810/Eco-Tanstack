import { type FC, type JSX } from "react";
import { User, Mail, Phone, Calendar, CreditCard } from "lucide-react";

const ProfilePage: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Thông tin cá nhân
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Trang cá nhân
            </h2>
            <p className="text-gray-600 mb-6">
              Chức năng quản lý thông tin cá nhân sẽ được phát triển trong phiên
              bản tiếp theo.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                Chỉnh sửa thông tin
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Lịch sử đặt vé
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProfilePage };
