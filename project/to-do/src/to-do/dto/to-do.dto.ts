import { ApiProperty } from '@nestjs/swagger';

import { MaxLength, MinLength } from 'class-validator';

export class ToDoDto {
  @ApiProperty({
    nullable: false,
    required: true,
  })
  @MinLength(1)
  @MaxLength(20)
  name: string;

  @ApiProperty({
    nullable: false,
    required: true,
  })
  @MinLength(1)
  @MaxLength(100)
  description: string;
}
