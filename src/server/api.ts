import { config } from 'dotenv';
import { createPostgresConnection } from 'remult/postgres';
import { remultExpress } from 'remult/remult-express';
import { Group } from '../app/core/group/group';
import { Mobile } from '../app/core/mobile/mobile';
import { Sms } from '../app/core/sms/sms';
import { SmsController } from '../app/core/sms/smsController';
import { SignInController } from '../app/users/SignInController';
import { UpdatePasswordController } from '../app/users/UpdatePasswordController';
import { User } from '../app/users/user';
import { NotificationService } from './send-sms';


        config()
export const api = remultExpress({
    entities: [User, Group, Mobile, Sms],
    controllers: [SignInController, UpdatePasswordController, NotificationService, SmsController],
    getUser: request => request.session!['user'],
    dataProvider: async () => {
        // if (process.env['NODE_ENV'] === "production")
            return await createPostgresConnection({ configuration: "heroku" })
        // return undefined;
    }
}); 