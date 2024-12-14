import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BlogModule } from "./blog/blog.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [BlogModule, MongooseModule.forRoot("mongodb://localhost:27017/")],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
