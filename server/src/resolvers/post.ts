import { Post } from "../entities/Post";
import { MyContext } from "../types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";
import { getRepository } from "typeorm";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  async posts(@Ctx() ctx: MyContext): Promise<Post[]> {
    const posts = await getRepository(Post)
      .createQueryBuilder("posts")
      .getMany();
    return posts;
  }
  @Query(() => Post, { nullable: true })
  async post(
    @Arg("id", () => Int) id: number,
    @Ctx() ctx: MyContext
  ): Promise<Post | undefined> {
    // const post = await getRepository(Post)
    //   .createQueryBuilder("posts")
    //   .where("posts.id = :id", { id })
    //   .getOne();
    const post = await Post.findOne(id);
    return post;
  }
  @Mutation(() => Post)
  async createPost(
    @Arg("title", () => String) title: string,
    @Arg("text", () => String) text: string,
    @Ctx() ctx: MyContext
  ): Promise<Post> {
    const post = await Post.create({ title, text }).save();
    return post;
  }
  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("id", () => Int) id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Arg("text", () => String, { nullable: true }) text: string,
    @Ctx() ctx: MyContext
  ): Promise<Post | undefined> {
    const post = await Post.findOne(id);
    if (post) {
      text && (post.text = text);
      title && (post.title = title);
      post.save();
    }
    return post;
  }
  @Mutation(() => Boolean)
  async deletePost(
    @Arg("id", () => Int) id: number,
    @Ctx() ctx: MyContext
  ): Promise<boolean> {
    try {
      const post = await Post.findOne(id);
      post && post.remove();
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
