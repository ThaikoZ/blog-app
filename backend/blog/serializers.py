from datetime import datetime
from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
  class Meta:
    model = Post
    fields = ['id', 'title', 'author', 'likes', 'summary', 'content', 'published', 'created_at', 'updated_at']

  def create(self, validated_data):
    post = Post(**validated_data)
    post.created_at = datetime.now()
    post.save()
    return post
