import axios from 'axios';

class BackendService {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseUrl}/login`, { email, password });
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    }

    // Add other API calls here
}

export default BackendService;
