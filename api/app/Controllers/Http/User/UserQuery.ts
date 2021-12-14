import User from '../../../Models/User'

export default class UserQuery{

  async createUser(data){
    return User.create(data);
  }

  async getUsers(){
    return User.all();
  }

  async deleteUser(ctx){
    let id = ctx.request.all().user_id;
    return User.query().where('id', id).delete();
  }

}
