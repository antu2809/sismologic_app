module Api
  class FeaturesController < ApplicationController
    def index
      features = Feature.all
      render json: features, each_serializer: FeatureSerializer
    end

    def create_comment
      feature = Feature.find(params[:feature_id])
      comment = feature.comments.build(body: params[:body])
      if comment.save
        render json: comment, status: :created
      else
        render json: { errors: comment.errors.full_messages }, status: :unprocessable_entity
      end
    end
  end
end
