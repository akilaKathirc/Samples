import { InjectionToken } from "@angular/core";
import { Reporter } from "../interface/reporter";

export const REPORTER = new InjectionToken<Reporter>('reporter');