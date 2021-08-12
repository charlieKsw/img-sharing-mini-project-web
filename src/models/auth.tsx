import { BasicResult } from './general';

export interface LoginResult extends BasicResult {
	redirect?: string;
}
