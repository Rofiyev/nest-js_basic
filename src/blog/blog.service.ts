import { Injectable } from "@nestjs/common";
import { BlogDto } from "./dto/blog.dto";

@Injectable()
export class BlogService {
  blogs: BlogDto[];

  constructor() {
    this.blogs = [
      {
        id: 1,
        title: "Next JS",
        excerpt: "Next JS courses",
        description: "Next JS full course from 0 to hero",
      },
      {
        id: 2,
        title: "Nest JS",
        excerpt: "Nest JS courses",
        description: "Nest JS full course from 0 to hero",
      },
    ];
  }

  async getAllBlogs() {
    return this.blogs;
  }

  async createBlog(data: Omit<BlogDto, "id">) {
    this.blogs.push({ id: this.blogs.length + 1, ...data });
    return this.blogs;
  }

  async getById(id: number) {
    const data: BlogDto = this.blogs.find((item) => item.id === id);
    return data;
  }

  async updateById(id: number, data: BlogDto) {
    let currentData: BlogDto = this.blogs.find((item) => item.id === id);
    currentData = data;
    return currentData;
  }

  async deleteById(id: number) {
    return this.blogs.filter((item) => item.id !== id);
  }
}
