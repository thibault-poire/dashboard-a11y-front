import { API } from './api.type';
import { Report } from './report';

export type Url = {
  url: string;
  reports: Report[];
} & API;
