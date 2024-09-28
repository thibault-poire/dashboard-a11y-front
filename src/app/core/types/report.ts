import { API } from './api.type';

export type Report = {
  inapplicable: AxeReport[];
  incomplete: (AxeReport & { impact: AxeImpact })[];
  passes: AxeReport[];
  violations: (AxeReport & { impact: AxeImpact })[];
} & API;

type AxeReport = {
  id: string;
  description: string;
  nodes: [];
  tags: string[];
};

type AxeImpact = 'critical' | 'minor' | 'moderate' | 'serious';
