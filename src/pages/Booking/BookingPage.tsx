import { type FC, type JSX } from "react";
import { Calendar, Clock, Users, CreditCard } from "lucide-react";

const BookingPage: FC = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Đặt vé phim</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Trang đặt vé
            </h2>
            <p className="text-gray-600 mb-6">
              Chức năng đặt vé sẽ được phát triển trong phiên bản tiếp theo.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                Chọn phim
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                Chọn suất chiếu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BookingPage };
