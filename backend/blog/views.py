from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Post
from .serializers import PostSerializer


@api_view(['GET', 'POST'])
def post_list(request):
  if request.method == 'GET':
    queryset = Post.objects.all()
    posts = PostSerializer(queryset, many=True)
    return Response(posts.data)
  elif request.method == 'POST':
    serializer = PostSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'DELETE', 'PUT'])
def post_detail(request, id):
  post = get_object_or_404(Post, pk=id)
  if request.method == 'GET':
    serializer = PostSerializer(post)
    return Response(serializer.data)
  elif request.method == 'DELETE':
    post.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
  elif request.method == 'PUT':
    serializer = PostSerializer(post, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data, status=status.HTTP_200_OK)