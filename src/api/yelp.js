import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 3og9CPfKw8su_1mtTuIPU8xMNSAhLKAcIpth2BxYEbG-60AzoRwEZ8x0lwqAR5KbHdMN2DRlrNyS221BhPNz_Xg28ABPydQ_-YVRDF7Qv5lSYYZfqC3PkGLWiIPDXnYx'
    }    
});

