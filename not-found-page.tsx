import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-[200px] font-bold text-transparent bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text leading-none">
            404
          </div>
          <div className="absolute inset-0 text-[200px] font-bold text-purple-100 leading-none animate-pulse">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for seems to have wandered off.
          </p>
          <p className="text-gray-500">
            Don't worry, even the best explorers sometimes take a wrong turn.
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8">
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-3"
          >
            <Link href="/reviews">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go to Reviews
            </Link>
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-purple-100">
          <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
          <p className="text-gray-600 text-sm">
            If you believe this is an error, please contact our support team or
            try searching for what you need.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-12 h-12 bg-purple-300 rounded-full opacity-20 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
}
