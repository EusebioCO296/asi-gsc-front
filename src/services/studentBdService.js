import axios from 'axios';

const backendUrl = 'http://localhost:8080'; // Replace with your backend URL

export const getStudents = async () => {
  const response = await axios.get(`${backendUrl}api/v1/students`);
  return response.data;
};