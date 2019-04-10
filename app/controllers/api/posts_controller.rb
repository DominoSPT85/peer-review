class Api::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: Post.all
  end

  def show
    @post = Post.find(params[:id])
    render json: @post

  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render json: @post
    else
      render json: { errors: @post.errors }, status: :unprocessable_entity 
    end
  end

  def update
    @post = current_user.posts.find(params[:id])
    @post.update
    render json: @post
  end

  def destroy
    current_user.posts.find(params[:id]).destroy
    render json: { message: 'Post deleted' }
  end

  private

  def post_params
    params.require(:post).permit(:title, :body)
  end

end
