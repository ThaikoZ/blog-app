from django.urls import path
from . import views


urlpatterns = [
    path('posts/', views.post_list),
    path('posts/<int:id>', views.post_detail),
    path('tags/', views.tag_list),
    path('tags/<int:id>', views.tag_detail),
]