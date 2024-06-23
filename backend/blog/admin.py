from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.Post)
class PostAdmin(admin.ModelAdmin):
  list_display = ['id', 'title', 'likes', 'created_at']
  search_fields = ['title']