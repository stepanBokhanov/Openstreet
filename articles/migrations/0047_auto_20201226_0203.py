# Generated by Django 3.1.4 on 2020-12-26 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0046_portfolio_is_executed'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='portfolio',
            name='is_executed',
        ),
        migrations.AddField(
            model_name='portfolio',
            name='execute_code',
            field=models.IntegerField(default=0),
        ),
    ]
