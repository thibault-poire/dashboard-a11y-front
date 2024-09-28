import { API } from './api.type';
import { Report } from './report';
import { Url } from './url.type';

export type Collection = {
  name: string;
  urls: Url[];
} & API;

export type CollectionOverview = Pick<Collection, '_id' | 'name'> & {
  urls?: (Pick<Url, 'updated_at'> & {
    reports?: Pick<Report, 'incomplete' | 'violations'>[];
  })[];
};

export type CollectionBody = {
  name: string;
  urls?: { url: string }[];
};
