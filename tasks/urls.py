from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

#Ayuda a crear las urls de GET, POST, PUT, DELETE
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path("api/tasks/", include(router.urls)),
    path("docs/", include_docs_urls(title="Tasks API"))
]
