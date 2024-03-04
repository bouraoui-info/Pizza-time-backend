import { Test,TestingModule  } from "@nestjs/testing";
import { UsersController } from '../users/users.controlleur';

describe('UsersControiller', () => {
let controller: UsersController;
beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        controllers: [UsersController],
    }).compile();
    controller = module.get<UsersController>(UsersController);
  });
it("should return user object",()=>{
    expect(controller).toBeDefined();
}); 
}); 