from django import forms
from .models import ModelShoppingCar
class FormShoppingCar(forms.ModelForm):
    class Meta:
        model = ModelShoppingCar
        fields = ('__all__')