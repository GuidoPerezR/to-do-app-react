from .models import Task
from rest_framework import viewsets
from .serializers import ProjectSerializer

#Vista del modelo Task
class TaskView(viewsets.ModelViewSet):
    queryset = Task.objects.all() #Obtener todos los datos registrados en el modelo
    serializer_class = ProjectSerializer #Importe del serializador