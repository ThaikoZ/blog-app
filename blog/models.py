from django.db import models
from django.contrib.auth.models import User 

class Category(models.Model):
    title = models.CharField(max_length=255, unique=True)

class Post(models.Model):
    title = models.CharField(max_length=255)
    summary = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    likes = models.IntegerField(default=0, blank=True)
    published = models.BooleanField(default=1, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.CharField(max_length=255)
    published_at = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)

class PostCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
