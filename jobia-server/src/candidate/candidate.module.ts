import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';
import { candidate } from './entity/candidate.entity';

@Module({
  controllers: [CandidateController],     // takes request and responses back, no business logics
  providers: [CandidateService],          // all logical part is handled here, service
  exports: [CandidateService],
  imports: [TypeOrmModule.forFeature([candidate])],
})
export class CandidateModule {}
 






// Example
// npm i @nestjs/typeorm
// npm i @nestjs/platform-express
// npm i @types/express
// npm i @nestjs/sequelize
// npm install --save @nestjs/typeorm typeorm mysql2

// $ nest g module cats
// nest g controller cats
// nest g service cats