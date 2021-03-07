import {User} from '../../entities/User';
import {UsersRepository} from '../UsersRepository';

export class PostgresUsersRepository implements UsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  async save(user: User) {
    this.users.push(user);
  }
}
