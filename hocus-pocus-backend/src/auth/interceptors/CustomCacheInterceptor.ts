/* eslint-disable prettier/prettier */
// import { ExecutionContext } from '@nestjs/common';
// import { CacheModule, CacheInterceptor } from '@nestjs/cache-manager';

// export class MyCacheInterceptor extends CacheInterceptor {
//   protected isRequestCacheable(context: ExecutionContext): boolean {
//     const http = context.switchToHttp();
//     const request = http.getRequest();

//     const ignoreCaching: boolean = this.reflector.get(
//       'ignoreCaching',
//       context.getHandler(),
//     );

//     return !ignoreCaching || request.method === 'GET';
//   }
// }
