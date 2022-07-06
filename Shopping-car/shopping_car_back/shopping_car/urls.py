from .api import ApiShoppingCar
from django.urls import path

urlpatterns = [
    path("shopping_car/", ApiShoppingCar.as_view(), name='Shopping-API')
]
