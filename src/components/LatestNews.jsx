// src/pages/LatestNews.js
const LatestNews = () => {
    const newsItems = [
      {
        id: 1,
        title: "New Registration Requirements",
        date: "May 15, 2023",
        content: "Starting June 1st, all shops must renew their registration with the updated documentation requirements."
      },
      {
        id: 2,
        title: "Mobile Verification App Launched",
        date: "April 28, 2023",
        content: "You can now verify shop registration status using our new mobile application available on iOS and Android."
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h1>
          
          <div className="space-y-8">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default LatestNews;