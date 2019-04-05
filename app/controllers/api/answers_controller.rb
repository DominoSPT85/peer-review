class Api::AnswersController < ApplicationController
  before_action :set_post
  before_action :authenticate_user!
  
  def index
    render json: @post.Answer.all
  end

  def create
    answer = @post.Answer.new(answer_params)
    if answer.save
      render json: answer
    else
      render json: { errors: answer.errors }, status: :unprocessable_entity 
    end
  end

  def update
    answer = @post.Answer.find(params[:id])
    answer.update
    render json: answer
  end

  def destroy
    Answer.find(params[:id]).destroy
    render json: { message: 'Answer deleted' }
  end

  private

  def item_params
    params.require(:answer).permit(:body)
  end

  def set_post
    @post = Post.find(params[:post_id])
  end

 
end
