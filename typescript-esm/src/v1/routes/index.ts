import { Group } from 'express-custom';

const userGroup = new Group({
  name: 'User Endpoints',
  path: '/user',
});

export default userGroup;
