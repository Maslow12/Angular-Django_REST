# Generated by Django 4.0 on 2022-07-05 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ModelShoppingCar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.CharField(max_length=10)),
                ('name', models.CharField(max_length=30)),
                ('is_avaliable', models.BooleanField()),
            ],
        ),
    ]
