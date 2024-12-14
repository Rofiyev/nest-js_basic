import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { BlogDto } from "./dto/blog.dto";
import { BlogService } from "./blog.service";

@Controller("blog")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @HttpCode(200)
  @Get()
  async getAll(): Promise<BlogDto[]> {
    return this.blogService.getAllBlogs();
  }

  @HttpCode(201)
  @Post()
  async create(@Body() dto: Omit<BlogDto, "id">) {
    return this.blogService.createBlog(dto);
  }

  @HttpCode(200)
  @Get(":id")
  async getById(@Param("id") id: string) {
    return this.blogService.getById(+id);
  }

  @HttpCode(201)
  @Patch(":id")
  async updateById(@Param("id") id: string, @Body() dto: BlogDto) {
    return this.blogService.updateById(+id, dto);
  }

  @HttpCode(200)
  @Delete(":id")
  async deleteById(@Param("id") id: string) {
    return this.blogService.deleteById(+id);
  }
}
