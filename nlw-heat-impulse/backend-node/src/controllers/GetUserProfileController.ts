import { Request, Response } from 'express';
import { GetUserProfileService } from '../services/GetUserProfileService';

class GetUserProfileController {
  async handle(req: Request, res: Response) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { user_id } = req;

    const getUserProfileService = new GetUserProfileService();

    const result = await getUserProfileService.execute(user_id);

    return res.json(result);
  }
}

export { GetUserProfileController };
