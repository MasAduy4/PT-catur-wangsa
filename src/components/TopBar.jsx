export default function TopBar() {
    return (
      <div className="hidden md:flex justify-between items-center bg-cyan-50 text-sm py-2 px-6">
        <a href="#contact" className="text-green-700 hover:underline">📧 Hubungi Kami</a>
        <div className="flex items-center gap-3 text-gray-700">
          <span className="mr-1">Follow Kami:</span>
          <a href="#" className="hover:text-green-600">IG</a>
          <a href="#" className="hover:text-green-600">TikTok</a>
          <a href="#" className="hover:text-green-600">FB</a>
          <a href="#" className="hover:text-green-600">YT</a>
        </div>
      </div>
    );
  }
  