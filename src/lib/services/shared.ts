import type { ServiceMethodStep, ServiceMetric } from "./types";
import {
  defaultImpactMetrics as sectorMetrics,
  defaultMethodologySteps as sectorSteps,
} from "@/lib/sectors/shared";

export const defaultMethodologySteps: ServiceMethodStep[] = sectorSteps;
export const defaultImpactMetrics: ServiceMetric[] = sectorMetrics;
