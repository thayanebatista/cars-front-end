import { apiService } from '../axios.service';

const getCars = {
  get: () => apiService.get('cars.json'),
};

export default getCars;
