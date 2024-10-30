import React from 'react';

const Profile = () => {
  // Default placeholder data for the user
  const userData = {
    profilePic: "https://i.pinimg.com/564x/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.jpg", // Placeholder image URL
    name: "Aarav Sharma",
    age: 12,
    class: "7th",
    school: "Sunshine Public School",
    board: "CBSE",
    schoolType: "Private",
    additionalInfo: {
      favoriteSubject: "Mathematics",
      goals: "To become a scientist",
    },
    progress: {
      math: 80,
      science: 70,
      english: 90,
    },
    achievements: [
      { title: "Topper in Mathematics", date: "March 2023", icon: "🏅" },
      { title: "Science Fair Winner", date: "May 2023", icon: "🥇" },
    ],
    recentActivities: [
      { activity: "Completed Math Chapter 5", date: "Oct 15, 2024" },
      { activity: "Participated in Quiz Competition", date: "Oct 10, 2024" },
    ],
  };

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center py-8">
      {/* Main Profile Card */}
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden mb-8">
        {/* Profile Picture Section */}
        <div className="bg-gradient-to-r from-blue-400 to-green-300 p-6 flex justify-center">
          <img
            className="rounded-full w-32 h-32 object-cover border-4 border-white"
            src={userData.profilePic}
            alt="User profile"
          />
        </div>
        {/* User Info Section */}
        <div className="px-6 py-4 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{userData.name}</h2>
          <p className="text-gray-600">Age: <span className="font-medium">{userData.age}</span></p>
          <p className="text-gray-600">Class: <span className="font-medium">{userData.class}</span></p>
          <p className="text-gray-600">School: <span className="font-medium">{userData.school}</span></p>
          <p className="text-gray-600">Board: <span className="font-medium">{userData.board}</span></p>
          <p className="text-gray-600">School Type: <span className="font-medium">{userData.schoolType}</span></p>
        </div>
        {/* Additional Info Section */}
        <div className="bg-gray-100 px-6 py-4 text-center">
          <p className="text-gray-600">
            Favorite Subject: <span className="font-medium">{userData.additionalInfo.favoriteSubject}</span>
          </p>
          <p className="text-gray-600">
            Goals: <span className="font-medium">{userData.additionalInfo.goals}</span>
          </p>
        </div>
        {/* Playful Button */}
        <div className="p-4 flex justify-center">
          <button className="bg-green-400 text-white px-4 py-2 rounded-full hover:bg-green-500 transition">
            Update Profile
          </button>
        </div>
      </div>

      {/* Progress Section */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden mb-8 p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Learning Progress</h3>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Mathematics</p>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${userData.progress.math}%` }}
              ></div>
            </div>
            <p className="text-right text-gray-500">{userData.progress.math}%</p>
          </div>
          <div>
            <p className="text-gray-600">Science</p>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${userData.progress.science}%` }}
              ></div>
            </div>
            <p className="text-right text-gray-500">{userData.progress.science}%</p>
          </div>
          <div>
            <p className="text-gray-600">English</p>
            <div className="w-full bg-gray-200 h-4 rounded-full">
              <div
                className="bg-yellow-500 h-4 rounded-full"
                style={{ width: `${userData.progress.english}%` }}
              ></div>
            </div>
            <p className="text-right text-gray-500">{userData.progress.english}%</p>
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden mb-8 p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Achievements</h3>
        <div className="space-y-4">
          {userData.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-3xl">{achievement.icon}</span>
              <div>
                <p className="font-medium text-gray-700">{achievement.title}</p>
                <p className="text-gray-500 text-sm">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden mb-8 p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Recent Activities</h3>
        <div className="space-y-4">
          {userData.recentActivities.map((activity, index) => (
            <div key={index} className="flex justify-between items-center">
              <p className="text-gray-600">{activity.activity}</p>
              <p className="text-gray-400 text-sm">{activity.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Section */}
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden mb-8 p-6">
        <h3 className="text-xl font-bold text-blue-700 mb-4">Profile Settings</h3>
        <div className="space-y-4">
          <p className="text-gray-600">Notification Preferences: <span className="font-medium">Enabled</span></p>
          <p className="text-gray-600">Study Time Goal: <span className="font-medium">2 hours/day</span></p>
        </div>
        <div className="p-4 flex justify-center">
          <button className="bg-red-400 text-white px-4 py-2 rounded-full hover:bg-red-500 transition">
            Edit Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
