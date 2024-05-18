import axios from 'axios';
class BackendService {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    // user and npo login
    async login(email, password) {
        try {
            console.log('Email:', email);
            console.log('Password:', password);
            const response = await axios.post(`${this.baseUrl}/user/login`, { email, password });
            console.log('Login Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Login Error:', error);
            throw new Error('Login failed');
        }
    }

    async fetchScrapedOpportunities(page = 1, pageSize = 10) {
        try {
            const response = await axios.get(`${this.baseUrl}/opportunities/all?page=${page}&pageSize=${pageSize}`);
            console.log('Scraped Opportunities Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Fetch Scraped Opportunities Error:', error);
            throw new Error('Failed to fetch scraped opportunities');
        }
    }

    async fetchUserProfile(userId) {
        try {
            const response = await axios.get(`${this.baseUrl}/user-profile/${userId}`);
            console.log('User Profile Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Fetch User Profile Error:', error);
            throw new Error('Failed to fetch user profile');
        }
    }

    async fetchUserProfileIdByUserId(userId) {
        try {
            const response = await axios.get(`${this.baseUrl}/user-profile/profileId/${userId}`);
            console.log('User Profile ID Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Fetch User Profile ID Error:', error);
            throw new Error('Failed to fetch user profile ID');
        }
    }

    async fetchProfileDetailIdById(id){
        try {
            const response = await axios.get(`${this.baseUrl}/user-profile/${id}`);
            // console.log('Profile Details:', response.data);
            return response.data;
        } catch (error) {
            console.error('Fetch Profile ID Error:', error);
            throw new Error('Failed to fetch profile ID');
        }
    };

    async updateProfileDetailIdById(profileData){
        try {
            const response = await axios.put(`${this.baseUrl}/user-profile`, profileData);
            return response.data;
        } catch (error) {
            console.error('Fetch Profile ID Error:', error);
            throw new Error('Failed to fetch profile ID');
        }
    };

    // user registration
    async registerVolunteer(volunteerData) {
        try {
            const response = await axios.post(`${this.baseUrl}/user/register`, volunteerData);
            console.log('Volunteer Registration Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('Volunteer Registration Error:', error);
            throw new Error('Registration failed');
        }
    }

    // npo registration
    async registerNpo(npoData) {
        try {
            const response = await axios.post(`${this.baseUrl}/npo/register`, npoData);
            console.log('NPO Registration Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('NPO Registration Error:', error);
            throw new Error('Registration failed');
        }
    }

    async getAllNpo() {
        try {
            const response = await axios.get(`${this.baseUrl}/npo/opportunity`);
            console.log('NPO all organisation Response:', response.data);
            return response.data;
        } catch (error) {
            console.error('NPO get all opportunities Error:', error);
            throw new Error('Fetch failed');
        }
    }
}

export default BackendService;
