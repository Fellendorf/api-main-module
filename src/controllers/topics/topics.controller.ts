import { Controller, Get } from '@nestjs/common';

@Controller('topics')
export class TopicsController {
  @Get()
  getTopics() {
    return ['Angular', 'CSS', 'HTML'];
  }
}
