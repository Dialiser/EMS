import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
});

export const fetchEmployees = () => api.get('/employees');
export const addEmployee = (employee) => api.post('/employees', employee);
export const fetchDepartments = () => api.get('/departments');
export const addDepartment = (department) => api.post('/departments', department);

export default api;
