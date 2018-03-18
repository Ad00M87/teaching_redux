class Api::PostsController < ApplicationController

  def index
    @posts = current_user.posts.all
    render json: @posts
  end

  def show
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render json: @post
    else
      message = "No update performed"
      render json: message
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      message = "It didn't work"
      render json: message
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.delete
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end

end
