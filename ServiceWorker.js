import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';

registerRoute(
  ({request}) => request.destination === 'img',
  new CacheFirst()
);