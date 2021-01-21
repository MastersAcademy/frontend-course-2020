import { TravelingGuard } from "./guards/traveling.guard";
import { CustomPreloadingStrategy } from "./preloadStrategy/custom-preload-strategy";
import { TrackForURLService } from "./track/track-for-url.service";


export const services = [
  TravelingGuard,
  CustomPreloadingStrategy,
  TrackForURLService,
];
