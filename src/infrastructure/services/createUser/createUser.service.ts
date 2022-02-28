import { post } from '../../apis/client';

class CreateUserService {
  public async getUsers(): Promise<any> {
    const response = await post('/user');    
    return response;
  }
}


export { CreateUserService };