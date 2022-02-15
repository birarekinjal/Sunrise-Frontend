import { get } from '../../apis/client';
// const axios = require('axios');

class UserService {
  public async getUsers(): Promise<any> {
    const response = await get('/users');    
    return response;
  }
}


export { UserService };
