import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { BlogService } from "./blog.service";
import { BlogDocument } from "./blog.schema";
import { BlogDto } from "./dto/blog.dto";

@Controller("blog")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @HttpCode(200)
  @Get()
  async getAll(): Promise<BlogDocument[]> {
    return this.blogService.getAllBlogs();
  }

  @HttpCode(201)
  @Post()
  @UsePipes(new ValidationPipe({}))
  async create(@Body() data: BlogDto) {
    return this.blogService.createBlog(data);
  }

  @HttpCode(200)
  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.blogService.getById(id);
  }

  @HttpCode(201)
  @Patch(":id")
  async updateById(@Param("id") id: string, @Body() data: BlogDocument) {
    return this.blogService.updateById(id, data);
  }

  @HttpCode(200)
  @Delete(":id")
  async deleteById(@Param("id") id: string) {
    return this.blogService.deleteById(id);
  }
}
