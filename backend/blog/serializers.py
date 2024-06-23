from datetime import datetime
from rest_framework import serializers
from .models import Post, Tag, PostTag

class TagSerializer(serializers.ModelSerializer):
  class Meta:
    model = Tag
    fields = ['id','title']

class PostTagSerializer(serializers.ModelSerializer):
  tag = TagSerializer(source='tag.title')
  class Meta:
    model = PostTag
    fields = ['tag']
  
class PostSerializer(serializers.ModelSerializer):
  tags = serializers.SerializerMethodField(method_name='get_tags')
  
  class Meta:
    model = Post
    fields = ['id', 'title', 'author', 'likes', 'summary', 'content', 'published', 'created_at', 'updated_at', 'tags']

  def get_tags(self, obj):
    return [post_tag.tag.title for post_tag in obj.tags.all()]

  def create(self, validated_data):
    post = Post(**validated_data)
    post.created_at = datetime.now()
    post.save()
    return post
  


  
    