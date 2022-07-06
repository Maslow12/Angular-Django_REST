from django.db import models

class ModelShoppingCar(models.Model):
    price = models.IntegerField()
    name = models.CharField(max_length=30)
    is_avaliable = models.BooleanField()
    class Meta:
        verbose_name = "Shopping Car"
        def __str__(self):
            return self.name+self.price
        
