import { HelloService } from './services/hello';

export async function hello(params: any) {

  const helloService: HelloService = new HelloService(params);
  await helloService.request();

  return helloService.getResponse();
}
