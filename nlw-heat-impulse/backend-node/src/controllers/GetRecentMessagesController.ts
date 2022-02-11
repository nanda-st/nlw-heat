import { Request, Response } from "express";
import { GetRecentMessagesService } from "../services/GetRecentMessagesService";

class GetRecentMessagesController {
    async handle(req: Request, res: Response) {
        const getRecentMessagesService = new GetRecentMessagesService();

        const result = await getRecentMessagesService.execute();

        return res.json(result);
    }
}

export { GetRecentMessagesController }