from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=255)
    summary = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    content = models.TextField()
    likes = models.IntegerField(default=0, blank=True)
    published = models.BooleanField(default=1, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

