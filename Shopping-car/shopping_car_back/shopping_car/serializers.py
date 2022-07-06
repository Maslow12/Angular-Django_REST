from rest_framework import serializers
from .models import ModelShoppingCar

class SerializerShoppingCar(serializers.ModelSerializer):
    class Meta:
        fields = ('price', 'name', 'is_avaliable')
        model = ModelShoppingCar