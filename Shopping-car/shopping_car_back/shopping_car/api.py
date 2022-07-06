from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers
from .models import ModelShoppingCar
from .serializers import SerializerShoppingCar
from .forms import FormShoppingCar


class ApiShoppingCar(APIView):
    def get(self,request):
        FieldShoppingCar = ModelShoppingCar.objects.all()
        ShoppingCarSerialized = SerializerShoppingCar(FieldShoppingCar, many=True)
        return Response(ShoppingCarSerialized.data)
    
    def put(self,request, *args, **kwargs):
        form = FormShoppingCar(request.data)
        if form.is_valid():
            form.save()
            return Response({'redirect':True}, status=status.HTTP_200_OK)
        else:
            return Response({'redirect':False}, status=status.HTTP_400_BAD_REQUEST)