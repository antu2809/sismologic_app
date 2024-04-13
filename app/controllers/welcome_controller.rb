class WelcomeController < ApplicationController
  def index
    @features = Feature.all
    @comment = Comment.new
    @feature = Feature.first 
  end

  def create_comment
    feature = Feature.find(params[:feature_id])
    comment = feature.comments.build(comment_params)

    if comment.save
      redirect_to root_path, notice: 'Comentario creado correctamente.'
    else
      @features = Feature.all
      render :index, alert: 'Error al crear el comentario.'
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end