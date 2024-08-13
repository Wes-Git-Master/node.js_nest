import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the User',
    required: true,
  })
  public readonly name: string;

  @ApiProperty({
    example: 'www.email.com',
    description: 'Email of the User',
    required: true,
  })
  public readonly email: string;

  @ApiProperty({
    // example: 'www.email.com',
    description: 'Password of the User',
    required: true,
  })
  public readonly password: string;

  @ApiProperty({
    example: '18',
    description: 'Age of the User',
    required: false,
  })
  public readonly age?: number;

  @ApiProperty({
    example: '+3 x xxx xxx xx xx',
    description: 'Phone of the User',
    required: false,
  })
  public readonly phone?: string;
}
