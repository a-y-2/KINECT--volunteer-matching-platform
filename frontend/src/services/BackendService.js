import axios from 'axios';

class BackendService {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    async login(email, password) {
        try {
            console.log(email);
            console.log(password);
            const response = await axios.post(`${this.baseUrl}/user/login`, { email, password });
            console.log(response.data);
            return response.data;
        } catch (error) {
            throw new Error('Login failed');
        }
    }

    // Add other API calls here
}

export default BackendService;
