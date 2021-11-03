import { navigateTo } from '../core/router';

export default async () => {
  console.log('middleware');
  navigateTo('/');
  throw Error('인증 실패');
};
