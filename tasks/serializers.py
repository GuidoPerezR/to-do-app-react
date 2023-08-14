from rest_framework import serializers
from .models import Task

#Se crea una clase que incluye el modelo y los atributos que se pueden serializar
class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        read_only_fields = ('created_at', 'updated_at',)