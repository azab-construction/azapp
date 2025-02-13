export type * from './blocks';
export type * from './content';
export type * from './meta';
export type * from './system';
export type * from './help';
export type * from './os';
export type * from './schema';
import { request } from '@directus/sdk';

async function setup() {
  const maxRetries = 3;
  let attempt = 0;
  let success = false;

  while (attempt < maxRetries && !success) {
    try {
      await request(/* your request parameters */);
      success = true;
    } catch (error) {
      attempt++;
      console.error(`Attempt ${attempt} failed:`, error);
      if (attempt >= maxRetries) {
        console.error('Max retries reached. Failing the setup.');
        throw error;
      }
      // Optional: Add a delay before retrying
      await new Promise(res => setTimeout(res, 1000));
    }
  }
}
