import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Blog, BlogDocument } from "./blog.schema";
import { Model } from "mongoose";
import { BlogDto } from "./dto/blog.dto";

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async getAllBlogs(): Promise<BlogDocument[]> {
    return this.blogModel.find();
  }

  async createBlog(data: BlogDto) {
    return this.blogModel.create(data);
  }

  async getById(id: string) {
    return this.blogModel.findById(id);
  }

  async updateById(id: string, data: BlogDocument) {
    return this.blogModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id: string) {
    return this.blogModel.findByIdAndDelete(id);
  }
}
