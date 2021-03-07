import {User} from '../../entities/User';
import {EmailProvider} from '../../providers/EmailProvider';
import {UsersRepository} from '../../repositories/UsersRepository';
import {CreateUserRequestDTO} from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private emailProvider: EmailProvider,
  ) {}

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(
      data.email,
    );

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const newUser = new User(data);

    await this.usersRepository.save(newUser);

    await this.emailProvider.sendEmail({
      to: {
        email: data.name,
        name: data.email,
      },
      from: {
        email: 'Team',
        name: 'team@company.com',
      },
      subject: 'Welcome!',
      body: 'You now can start using our platform!',
    });
  }
}
