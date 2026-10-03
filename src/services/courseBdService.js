import axios from 'axios';

const backendUrl = 'http://localhost:8080'; // Replace with your backend URL

export const getCourses = async () => {
  const response = await axios.get(`${backendUrl}api/v1/courses`);
  return response.data;
};