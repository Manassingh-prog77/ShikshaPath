import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const ProgressSection = () => {
  const [marksData, setMarksData] = useState([]);
  const [assignmentData, setAssignmentData] = useState([]);
  const [practiceQuizData, setPracticeQuizData] = useState([]);
  const [latestAssignment, setLatestAssignment] = useState(null);
  const [latestPracticeQuiz, setLatestPracticeQuiz] = useState(null);

  // Fetch marks from API
  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/marks/fetchmarks', {
          method: 'GET',
          headers: {
            'auth-token': localStorage.getItem("authToken"),
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setMarksData(data.questions);

          const assignments = data.questions.filter(item => item.title === 'Assignment');
          const practiceQuizzes = data.questions.filter(item => item.title === 'Practice Quiz');

          setAssignmentData(assignments);
          setPracticeQuizData(practiceQuizzes);

          if (assignments.length > 0) {
            const latestAssignment = assignments.reduce((latest, current) =>
              new Date(current.date) > new Date(latest.date) ? current : latest
            );
            setLatestAssignment(latestAssignment);
          }

          if (practiceQuizzes.length > 0) {
            const latestPracticeQuiz = practiceQuizzes.reduce((latest, current) =>
              new Date(current.date) > new Date(latest.date) ? current : latest
            );
            setLatestPracticeQuiz(latestPracticeQuiz);
          }
        } else {
          console.error('Failed to fetch marks data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching marks:', error);
      }
    };

    fetchMarks();
  }, []);

  // Attendance data for pie chart
  const attendanceData = (() => {
    const totalDays = Math.ceil((new Date() - new Date(assignmentData[0]?.date || new Date())) / (1000 * 60 * 60 * 24));
    const presentDays = assignmentData.length;
    const absentDays = totalDays - presentDays;

    return {
      labels: ['Present', 'Absent'],
      datasets: [
        {
          data: [presentDays, absentDays],
          backgroundColor: ['#34D399', '#F87171'],
          hoverBackgroundColor: ['#10B981', '#EF4444'],
        },
      ],
    };
  })();

  const assignmentGraphData = {
    labels: assignmentData.map(item => new Date(item.date).toLocaleDateString()),
    datasets: [{
      label: 'Marks',
      data: assignmentData.map(item => item.marks),
      borderColor: '#3490dc',
      backgroundColor: 'rgba(52, 144, 220, 0.2)',
      fill: true,
    }],
  };

  const practiceQuizGraphData = {
    labels: practiceQuizData.map(item => new Date(item.date).toLocaleDateString()),
    datasets: [{
      label: 'Marks',
      data: practiceQuizData.map(item => item.marks),
      borderColor: '#ffed4a',
      backgroundColor: 'rgba(255, 237, 74, 0.2)',
      fill: true,
    }],
  };

  return (
    <div className="p-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Your Progress</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {latestAssignment && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-center mb-4">Latest Assignment Marks</h3>
            <p className="text-center text-lg">
              <span className="font-bold">Marks:</span> {latestAssignment.marks}
            </p>
            <p className="text-center text-sm">
              <span className="font-bold">Date:</span> {new Date(latestAssignment.date).toLocaleDateString()}
            </p>
          </div>
        )}

        {latestPracticeQuiz && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-center mb-4">Latest Practice Quiz Marks</h3>
            <p className="text-center text-lg">
              <span className="font-bold">Marks:</span> {latestPracticeQuiz.marks}
            </p>
            <p className="text-center text-sm">
              <span className="font-bold">Date:</span> {new Date(latestPracticeQuiz.date).toLocaleDateString()}
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">Assignment Progress</h3>
          <Line data={assignmentGraphData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">Practice Test Progress</h3>
          <Line data={practiceQuizGraphData} />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-center mb-4">Assignment Attendance</h3>
          <Pie data={attendanceData} />
          <p className="text-center text-sm mt-2 text-gray-500">*Attendance is calculated based on assignment submission days.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-center mb-6">Detailed Analysis</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-indigo-50 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-4 text-indigo-600">Assignment Details</h4>
            <ul className="list-disc list-inside">
              {assignmentData.map((item) => (
                <li key={item._id} className="mb-2">
                  <span className="font-semibold">Date:</span> {new Date(item.date).toLocaleDateString()} | 
                  <span className="font-semibold"> Marks:</span> {item.marks}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-pink-50 p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-4 text-pink-600">Practice Quiz Details</h4>
            <ul className="list-disc list-inside">
              {practiceQuizData.map((item) => (
                <li key={item._id} className="mb-2">
                  <span className="font-semibold">Date:</span> {new Date(item.date).toLocaleDateString()} | 
                  <span className="font-semibold"> Marks:</span> {item.marks}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
